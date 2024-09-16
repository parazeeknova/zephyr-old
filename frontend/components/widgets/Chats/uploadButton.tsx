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
          className="bg-orange-500 text-white rounded-full p-4 shadow-md hover:bg-orange-600 transition-colors"
        >
          <Upload className="w-8 h-8" />
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {isUploadOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-24 right-8 border rounded-xl shadow-lg p-6 w-80 ${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h5
                className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Upload Files
              </h5>
              <motion.button
                onClick={toggleUpload}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </motion.button>
            </div>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className={`mb-4 w-full p-2 border rounded ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            />
            <div className="max-h-40 overflow-y-auto">
              {uploadFiles.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm mb-2 p-2 rounded ${
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
