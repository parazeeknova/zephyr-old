'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X } from 'lucide-react';
import React, { useState } from 'react';

interface UploadFile {
  name: string;
  size: number;
}

interface UploadButtonProps {
  isDarkMode: boolean;
}

const UploadButton: React.FC<UploadButtonProps> = ({ isDarkMode }) => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);

  const toggleUpload = () => {
    setIsUploadOpen(!isUploadOpen);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles: UploadFile[] = Array.from(files).map((file) => ({
        name: file.name,
        size: file.size,
      }));
      setUploadFiles(newFiles);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <>
      <motion.div
        className="absolute bottom-4 right-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.button
          onClick={toggleUpload}
          className="rounded-full bg-orange-500 p-4 text-white shadow-md transition-colors hover:bg-orange-600"
        >
          <Upload className="h-8 w-8" />
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {isUploadOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-24 right-8 w-80 rounded-xl border p-6 shadow-lg ${
              isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
            }`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h5
                className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Upload Files
              </h5>
              <motion.button
                onClick={toggleUpload}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className={`h-6 w-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </motion.button>
            </div>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className={`mb-4 w-full rounded border p-2 ${
                isDarkMode
                  ? 'border-gray-600 bg-gray-700 text-white'
                  : 'border-gray-300 bg-white text-gray-900'
              }`}
            />
            <div className="max-h-40 overflow-y-auto">
              {uploadFiles.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-2 rounded p-2 text-sm ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <span className="font-medium">{file.name}</span>
                  <span className={`ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {formatFileSize(file.size)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UploadButton;
