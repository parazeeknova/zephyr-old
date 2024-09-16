'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

interface SharedFile {
  type: string;
  name: string;
  color: string;
}

interface SharedFilesProps {
  files: SharedFile[];
  initialDisplayCount?: number;
  isDarkMode: boolean;
}

const SharedFiles: React.FC<SharedFilesProps> = ({
  files,
  initialDisplayCount = 3,
  isDarkMode,
}) => {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const toggleExpand = () => {
    if (isExpanded) {
      setDisplayCount(initialDisplayCount);
    } else {
      setDisplayCount(files.length);
    }
    setIsExpanded(!isExpanded);
  };

  const handleFileClick = (fileName: string) => {
    setSelectedFile(fileName === selectedFile ? null : fileName);
  };

  return (
    <div
      className={`mb-4 p-2 border rounded-xl shadow-md ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Shared Files
        </h4>
        {files.length > initialDisplayCount && (
          <button onClick={toggleExpand} className="text-orange-500 text-sm flex items-center">
            {isExpanded ? (
              <>
                See Less <ChevronUp className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                See All <ChevronDown className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        )}
      </div>
      <ul className="space-y-2">
        {files.slice(0, displayCount).map((file, index) => (
          <li key={index}>
            <button
              className={`w-full flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                selectedFile === file.name
                  ? isDarkMode
                    ? 'bg-gray-700'
                    : 'bg-orange-100'
                  : isDarkMode
                    ? 'hover:bg-gray-700'
                    : 'hover:bg-gray-100'
              }`}
              onClick={() => handleFileClick(file.name)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleFileClick(file.name);
                }
              }}
            >
              <div
                className={`w-8 h-8 bg-${file.color}-100 rounded flex items-center justify-center`}
              >
                <span className={`text-${file.color}-600 text-xs`}>{file.type}</span>
              </div>
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>{file.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SharedFiles;
