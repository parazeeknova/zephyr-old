'use client';

import { motion } from 'framer-motion';
import { Plus, Edit, BookOpen, Upload, Settings } from 'lucide-react';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MyPostsProps {
  data: {
    blogs: Array<{
      title: string;
      date: string;
      likes: number;
      comments: number;
      image: string;
    }>;
    researchPapers: Array<{
      title: string;
      date: string;
      citations: number;
    }>;
  };
  isDarkMode: boolean;
}

const MyPosts: React.FC<MyPostsProps> = ({ data, isDarkMode }) => (
  <Card className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}>
    <CardContent className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2
          className={`text-lg font-semibold uppercase ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}
        >
          My Posts
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" /> Create Blog Post
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BookOpen className="mr-2 h-4 w-4" /> Create Research Paper
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Upload className="mr-2 h-4 w-4" /> Upload Existing Post
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" /> Manage Categories
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Tabs defaultValue="blogs" className="mb-4">
        <TabsList className={isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}>
          <TabsTrigger
            value="blogs"
            className={`${
              isDarkMode
                ? 'data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-300'
                : 'data-[state=active]:bg-white data-[state=active]:text-gray-900 text-gray-600'
            } hover:text-gray-900 dark:hover:text-white transition-colors`}
          >
            Blogs
          </TabsTrigger>
          <TabsTrigger
            value="research"
            className={`${
              isDarkMode
                ? 'data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-300'
                : 'data-[state=active]:bg-white data-[state=active]:text-gray-900 text-gray-600'
            } hover:text-gray-900 dark:hover:text-white transition-colors`}
          >
            Research Papers
          </TabsTrigger>
        </TabsList>
        <TabsContent value="blogs">
          <div className="grid grid-cols-4 gap-2">
            {data.blogs.map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md"
              >
                <div className="h-[25rem] w-full relative  flex items-center justify-center">
                  <DirectionAwareHover imageUrl={post.image} className="w-full h-full object-cover">
                    <h3 className="font-semibold text-white">{post.title}</h3>
                    <p className="text-sm text-gray-300">{post.date}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-white">{post.likes} likes</span>
                      <span className="text-sm text-white">{post.comments} comments</span>
                    </div>
                  </DirectionAwareHover>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="research">
          <div className="space-y-4">
            {data.researchPapers.map((paper, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <div>
                  <h3 className="font-semibold">{paper.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                    {paper.date}
                  </p>
                </div>
                <Badge variant="secondary">{paper.citations} citations</Badge>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
);

export default MyPosts;
