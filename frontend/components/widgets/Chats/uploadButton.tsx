'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X } from 'lucide-react';
import React, { useState } from 'react';

interface UploadFile {
  name: string;
  size: number;
}

const UploadButton: React.FC = () => {
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
          className="rounded-full bg-primary p-4 text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
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
            className="fixed bottom-24 right-8 w-80 rounded-xl border border-border bg-card p-6 shadow-lg"
          >
            <div className="mb-4 flex items-center justify-between">
              <h5 className="text-lg font-semibold text-foreground">Upload Files</h5>
              <motion.button
                onClick={toggleUpload}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6 text-muted-foreground" />
              </motion.button>
            </div>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="mb-4 w-full rounded border border-input bg-background p-2 text-foreground"
            />
            <div className="max-h-40 overflow-y-auto">
              {uploadFiles.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-2 rounded bg-muted p-2 text-sm text-foreground"
                >
                  <span className="font-medium">{file.name}</span>
                  <span className="ml-2 text-muted-foreground">{formatFileSize(file.size)}</span>
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
