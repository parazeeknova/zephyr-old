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
}

const SharedFiles: React.FC<SharedFilesProps> = ({ files, initialDisplayCount = 3 }) => {
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
    <div className="mb-4 rounded-xl border border-border bg-card p-2 shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <h4 className="font-semibold text-foreground">Shared Files</h4>
        {files.length > initialDisplayCount && (
          <button onClick={toggleExpand} className="flex items-center text-sm text-primary">
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
                  ? 'bg-accent text-accent-foreground'
                  : 'hover:bg-accent hover:text-accent-foreground'
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
                className={`flex h-8 w-8 items-center justify-center rounded bg-${file.color}-100`}
              >
                <span className={`text-${file.color}-600 text-xs`}>{file.type}</span>
              </div>
              <span className="text-foreground">{file.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SharedFiles;
