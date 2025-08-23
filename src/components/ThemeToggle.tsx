import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
    >
      <AnimatePresence>
        <motion.div
          key={theme}
          initial={{ x: theme === 'light' ? 0 : 24, rotate: 90, scale: 0 }}
          animate={{ x: theme === 'light' ? 0 : 24, rotate: 0, scale: 1 }}
          exit={{ x: theme === 'light' ? 0 : 24, rotate: -90, scale: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
        >
          {theme === 'light' ? (
            <Sun size={14} className="text-yellow-500" />
          ) : (
            <Moon size={14} className="text-blue-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;