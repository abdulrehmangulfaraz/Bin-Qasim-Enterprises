import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Octokit } from '@octokit/rest';

// Updated Project interface to accept multiple images
interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  value: string;
  duration: string;
  images: string[]; // Changed from string to string[]
  description: string;
}

const Admin = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    category: 'Residential',
    location: '',
    value: '',
    duration: '',
    description: '',
  });
  // State now holds an array of files
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Convert FileList to array and store it
      setImageFiles(Array.from(e.target.files));
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (imageFiles.length === 0) {
        setStatusMessage('Please select at least one image for the project.');
        return;
    }

    setIsSubmitting(true);
    setStatusMessage('Starting submission...');

    const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_TOKEN });
    const owner = import.meta.env.VITE_GITHUB_OWNER;
    const repo = import.meta.env.VITE_GITHUB_REPO;
    const branch = 'main'; 

    try {
        // --- Get basic repo info ---
        setStatusMessage('Getting latest commit from GitHub...');
        const { data: { object: { sha: latestCommitSha } } } = await octokit.rest.git.getRef({ owner, repo, ref: `heads/${branch}` });
        const { data: { sha: baseTreeSha } } = await octokit.rest.git.getCommit({ owner, repo, commit_sha: latestCommitSha });

        // --- Get current projects data ---
        setStatusMessage('Fetching current project list...');
        const { data: currentProjectsFile } = await octokit.rest.repos.getContent({ owner, repo, path: 'public/projects.json', ref: branch });
        const projectsContent = atob((currentProjectsFile as any).content);
        const projects: Project[] = JSON.parse(projectsContent);
        const newProjectId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;

        // --- Handle multiple image uploads ---
        setStatusMessage(`Uploading ${imageFiles.length} images...`);
        const imageUploadPromises = imageFiles.map(async (file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            const base64Image = await new Promise<string>((resolve, reject) => {
                reader.onload = () => resolve((reader.result as string).split(',')[1]);
                reader.onerror = error => reject(error);
            });
            const imageBlob = await octokit.rest.git.createBlob({ owner, repo, content: base64Image, encoding: 'base64' });
            return {
                sha: imageBlob.data.sha,
                path: `public/uploads/projects/${newProjectId}-${file.name}`,
            };
        });

        const uploadedImages = await Promise.all(imageUploadPromises);
        const newImagePaths = uploadedImages.map(img => `/${img.path.replace('public/', '')}`);

        // --- Update projects.json ---
        setStatusMessage('Updating project list...');
        const newProject: Project = {
            id: newProjectId,
            ...formData,
            images: newImagePaths,
        };
        
        // **MODIFIED LINE: Add the new project to the beginning of the array**
        const updatedProjects = [newProject, ...projects];
        
        const updatedProjectsContent = JSON.stringify(updatedProjects, null, 2);
        const jsonBlob = await octokit.rest.git.createBlob({ owner, repo, content: updatedProjectsContent, encoding: 'utf-8' });

        // --- Create a new git tree ---
        setStatusMessage('Preparing new commit...');
        const newTreeEntries = uploadedImages.map(img => ({
            path: img.path,
            mode: '100644' as const,
            type: 'blob' as const,
            sha: img.sha,
        }));
        newTreeEntries.push({
            path: 'public/projects.json',
            mode: '100644',
            type: 'blob',
            sha: jsonBlob.data.sha,
        });

        const newTree = await octokit.rest.git.createTree({
            owner,
            repo,
            base_tree: baseTreeSha,
            tree: newTreeEntries,
        });

        // --- Create and push the commit ---
        setStatusMessage('Creating new commit...');
        const newCommit = await octokit.rest.git.createCommit({ owner, repo, message: `feat: add new project '${formData.title}'`, tree: newTree.data.sha, parents: [latestCommitSha] });
        await octokit.rest.git.updateRef({ owner, repo, ref: `heads/${branch}`, sha: newCommit.data.sha });

        setStatusMessage('Project added successfully! Your site is now redeploying.');
        // Reset form
        setFormData({ title: '', category: 'Residential', location: '', value: '', duration: '', description: '' });
        setImageFiles([]);
        (document.getElementById('image') as HTMLInputElement).value = '';

    } catch (error) {
        console.error('Error submitting project:', error);
        setStatusMessage(`An error occurred: ${(error as Error).message}. Check the console for details.`);
    } finally {
        setIsSubmitting(false);
    }
};

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Logout
            </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add New Project</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" required />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select id="category" name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" required>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" required />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="value" className="block text-sm font-medium text-gray-700 mb-2">Project Value</label>
                    <input type="text" id="value" name="value" value={formData.value} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" required />
                </div>
                <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">Project Duration</label>
                    <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" required />
                </div>
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">Images</label>
              <input type="file" id="image" name="image" onChange={handleFileChange} accept="image/*" className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" required multiple />
            </div>
            {imageFiles.length > 0 && (
                <div className="p-4 border border-gray-200 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 mb-2">Selected files:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                        {imageFiles.map(file => <li key={file.name}>{file.name}</li>)}
                    </ul>
                </div>
            )}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" required></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 disabled:bg-gray-400">
              {isSubmitting ? 'Submitting...' : 'Add Project'}
            </button>
            {statusMessage && <p className="text-center text-gray-600 mt-4">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;