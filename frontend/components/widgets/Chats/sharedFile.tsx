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
      className={`mb-4 rounded-xl border p-2 shadow-md ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}
    >
      <div className="mb-2 flex items-center justify-between">
        <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Shared Files
        </h4>
        {files.length > initialDisplayCount && (
          <button onClick={toggleExpand} className="flex items-center text-sm text-orange-500">
            {isExpanded ? (
              <>
                See Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                See All <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
      <ul className="space-y-2">
        {files.slice(0, displayCount).map((file, index) => (
          <li key={index}>
            <button
              className={`flex w-full cursor-pointer items-center space-x-2 rounded-lg p-2 transition-colors duration-200 ${
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
                className={`h-8 w-8 bg-${file.color}-100 flex items-center justify-center rounded`}
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
