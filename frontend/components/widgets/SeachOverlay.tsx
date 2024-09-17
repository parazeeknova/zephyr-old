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
  isDarkMode: boolean;
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

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isDarkMode, onClose, isOpen, data }) => {
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
      className={`fixed left-0 right-0 bottom-0 z-50 transition-transform duration-300 ease-in-out flex justify-center ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
      tabIndex={-1}
    >
      <div
        className={`${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        } rounded-t-2xl shadow-lg p-6 max-h-[80vh] overflow-y-auto w-full max-w-4xl`}
      >
        <div className="mb-6">
          <h3
            className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Recent Searches
          </h3>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <div
                key={index}
                className={`flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'
                }`}
              >
                <Clock className="h-4 w-4 mr-2" />
                {search}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeRecentSearch(search)}
                  className={`ml-2 p-0 h-5 w-5 rounded-full ${
                    isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-300'
                  }`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center mb-6">
          <Search className={`h-6 w-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`} />
          <Input
            type="text"
            placeholder="Search for actions, people, instruments"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`flex-grow ml-3 text-lg bg-transparent border-none focus:ring-0 ${
              isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'
            }`}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className={
              isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-200 text-gray-500'
            }
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center space-x-3 mb-6 overflow-x-auto">
          {data.filterOptions.map((label, index) => (
            <Button
              key={label}
              variant={isDarkMode ? 'outline' : 'secondary'}
              size="sm"
              className={`flex items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {[Filter, User, Building, FileText, Calendar][index] &&
                React.createElement([Filter, User, Building, FileText, Calendar][index], {
                  className: 'h-4 w-4 mr-2',
                })}
              {label}
            </Button>
          ))}
          <Button
            variant={isDarkMode ? 'outline' : 'secondary'}
            size="sm"
            className={`flex items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${
              isDarkMode
                ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-6 text-center">
          <h3
            className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Quick actions
          </h3>
          <div className="flex justify-center space-x-3">
            {data.quickActions.map(({ icon: Icon, label }) => (
              <Button
                key={label}
                variant={isDarkMode ? 'outline' : 'secondary'}
                size="sm"
                className={`rounded-full px-4 py-2 ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3
            className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Recent people
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.recentPeople.map(({ name, email, role, lastActive }) => (
              <div
                key={email}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
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
                  <Button variant="ghost" size="sm" className="rounded-full p-1 mb-1">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <span className="text-xs opacity-70">Active {lastActive}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3
            className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Recent files
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.recentFiles.map(({ name, type, size, lastModified }) => (
              <div
                key={name}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <FileText className="h-8 w-8 mr-3" />
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">{name}</span>
                    <span className="text-xs opacity-70">
                      {type} • {size}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <Button variant="ghost" size="sm" className="rounded-full p-1 mb-1">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <span className="text-xs opacity-70">Modified {lastModified}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <Button
            variant={isDarkMode ? 'outline' : 'secondary'}
            size="lg"
            className={`rounded-full ${
              isDarkMode
                ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <Upload className="h-5 w-5 mr-2" />
            Upload
          </Button>
          <Button
            variant={isDarkMode ? 'outline' : 'secondary'}
            size="lg"
            className={`rounded-full ${
              isDarkMode
                ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <Plus className="h-5 w-5 mr-2" />
            Create
          </Button>
          <Button
            variant={isDarkMode ? 'outline' : 'secondary'}
            size="lg"
            className={`rounded-full ${
              isDarkMode
                ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            <User className="h-5 w-5 mr-2" />
            Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;