'use client';

import {
  Search,
  X,
  Filter,
  User,
  Building,
  MoreHorizontal,
  Plus,
  FileText,
  Share2,
  Clock,
  Upload,
  MessageSquare,
  Calendar,
} from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchOverlayProps {
  onClose: () => void;
  isOpen: boolean;
  data: {
    recentSearches: string[];
    recentPeople: Array<{ name: string; email: string; role: string; lastActive: string }>;
    recentFiles: Array<{ name: string; type: string; size: string; lastModified: string }>;
    quickActions: Array<{ icon: React.ElementType; label: string }>;
    filterOptions: string[];
  };
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ onClose, isOpen, data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);
  const [recentSearches, setRecentSearches] = useState(data.recentSearches);

  useEffect(() => {
    if (isOpen && overlayRef.current) {
      overlayRef.current.focus();
    }
  }, [isOpen]);

  const removeRecentSearch = (search: string) => {
    setRecentSearches(recentSearches.filter((item) => item !== search));
  };

  return (
    <div
      ref={overlayRef}
      className={`fixed bottom-0 left-0 right-0 z-50 flex justify-center transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
      tabIndex={-1}
    >
      <div
        className={`max-h-[80vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl bg-white p-6 text-gray-900 shadow-lg`}
      >
        <div className="mb-6">
          <h3 className={`mb-3 text-lg font-semibold text-gray-600`}>Recent Searches</h3>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <div
                key={index}
                className={`flex items-center rounded-full px-4 py-2 text-sm font-semibold ${'bg-gray-200 text-gray-800'}`}
              >
                <Clock className="mr-2 h-4 w-4" />
                {search}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeRecentSearch(search)}
                  className={`ml-2 h-5 w-5 rounded-full p-0 hover:bg-gray-300`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center">
          <Search className={`h-6 w-6 text-gray-500`} />
          <Input
            type="text"
            placeholder="Search for actions, people, instruments"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`ml-3 flex-grow border-none bg-transparent text-lg text-gray-900 placeholder-gray-500 focus:ring-0`}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className={`text-gray-500 hover:bg-gray-200`}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="mb-6 flex justify-center space-x-3 overflow-x-auto">
          {data.filterOptions.map((label, index) => (
            <Button
              key={label}
              variant="secondary"
              size="sm"
              className={`flex items-center whitespace-nowrap rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-300`}
            >
              {[Filter, User, Building, FileText, Calendar][index] &&
                React.createElement([Filter, User, Building, FileText, Calendar][index], {
                  className: 'h-4 w-4 mr-2',
                })}
              {label}
            </Button>
          ))}
          <Button
            variant="secondary"
            size="sm"
            className={`flex items-center whitespace-nowrap rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-300`}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-6 text-center">
          <h3 className={`mb-3 text-lg font-semibold text-gray-600`}>Quick actions</h3>
          <div className="flex justify-center space-x-3">
            {data.quickActions.map(({ icon: Icon, label }) => (
              <Button
                key={label}
                variant="secondary"
                size="sm"
                className={`rounded-full bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className={`mb-3 text-lg font-semibold text-gray-600`}>Recent people</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data.recentPeople.map(({ name, email, role, lastActive }) => (
              <div
                key={email}
                className={`flex items-center justify-between rounded-lg bg-gray-100 p-3 text-gray-800 hover:bg-gray-200`}
              >
                <div className="flex items-center">
                  <Avatar className="mr-3 h-10 w-10">
                    <AvatarImage
                      src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`}
                      alt={name}
                    />
                    <AvatarFallback>
                      {name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">{name}</span>
                    <span className="text-xs opacity-70">{email}</span>
                    <span className="text-xs">{role}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <Button variant="ghost" size="sm" className="mb-1 rounded-full p-1">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <span className="text-xs opacity-70">Active {lastActive}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className={`mb-3 text-lg font-semibold text-gray-600`}>Recent files</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data.recentFiles.map(({ name, type, size, lastModified }) => (
              <div
                key={name}
                className={`flex items-center justify-between rounded-lg bg-gray-100 p-3 text-gray-800 hover:bg-gray-200`}
              >
                <div className="flex items-center">
                  <FileText className="mr-3 h-8 w-8" />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">{name}</span>
                    <span className="text-xs opacity-70">
                      {type} • {size}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <Button variant="ghost" size="sm" className="mb-1 rounded-full p-1">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <span className="text-xs opacity-70">Modified {lastModified}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <Button
            variant="secondary"
            size="lg"
            className={`rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300`}
          >
            <Upload className="mr-2 h-5 w-5" />
            Upload
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className={`rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300`}
          >
            <Plus className="mr-2 h-5 w-5" />
            Create
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className={`rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300`}
          >
            <User className="mr-2 h-5 w-5" />
            Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
