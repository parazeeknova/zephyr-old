'use client';

import { ChevronDown, ChevronUp, Upload, X } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';

interface SharedPhotosProps {
  photos: string[];
  initialDisplayCount?: number;
}

interface UploadFile {
  name: string;
  size: number;
}

const SharedPhotos: React.FC<SharedPhotosProps> = ({ photos, initialDisplayCount = 6 }) => {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const dragControls = useDragControls();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setDisplayCount(isExpanded ? initialDisplayCount : photos.length);
  };

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

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(selectedPhoto === photo ? null : photo);
  };

  return (
    <div className="bg-white border rounded-xl shadow-md p-2 relative">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">Shared Images</h4>
        {photos.length > initialDisplayCount && (
          <motion.button
            onClick={toggleExpand}
            className="text-orange-500 text-sm flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? (
              <>
                See Less <ChevronUp className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                See All <ChevronDown className="w-4 h-4 ml-1" />
              </>
            )}
          </motion.button>
        )}
      </div>
      <motion.div className="grid grid-cols-3 gap-2" layout>
        <AnimatePresence>
          {photos.slice(0, displayCount).map((photo, index) => (
            <motion.div
              key={photo}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gray-200 aspect-square rounded overflow-hidden cursor-pointer relative"
              onClick={() => handlePhotoClick(photo)}
              whileHover={{ scale: 1.5, zIndex: 10 }}
            >
              <img
                src={photo}
                alt={`Shared photo ${index + 1}`}
                className="w-full h-full object-cover rounded"
              />
              {selectedPhoto === photo && (
                <motion.div
                  className="absolute inset-0 border-4 border-orange-500 rounded pointer-events-none"
                  initial={false}
                  animate={{ borderColor: 'rgb(249 115 22)' }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
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
            drag
            dragControls={dragControls}
            dragMomentum={false}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-8 bg-white border rounded-xl shadow-lg p-6 w-80"
          >
            <div className="flex justify-between items-center mb-4">
              <h5 className="font-semibold text-lg">Upload Files</h5>
              <motion.button
                onClick={toggleUpload}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-gray-500" />
              </motion.button>
            </div>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="mb-4 w-full p-2 border rounded"
            />
            <div className="max-h-40 overflow-y-auto">
              {uploadFiles.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm mb-2 p-2 bg-gray-100 rounded"
                >
                  <span className="font-medium">{file.name}</span>
                  <span className="text-gray-500 ml-2">{formatFileSize(file.size)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SharedPhotos;
