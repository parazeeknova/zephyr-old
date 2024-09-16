'use client';

import { motion } from 'framer-motion';
import { Plus, Edit, BookOpen, Upload, Settings } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MyPosts: React.FC = () => (
  <Card>
    <CardContent className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold uppercase text-gray-500">My Posts</h2>
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
        <TabsList>
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="research">Research Papers</TabsTrigger>
        </TabsList>
        <TabsContent value="blogs">
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: 'The Future of UX Design',
                date: '2 days ago',
                likes: 24,
                comments: 8,
                image: '/Banner.png?height=200&width=300',
              },
              {
                title: 'Designing for Accessibility',
                date: '1 week ago',
                likes: 56,
                comments: 12,
                image: '/placeholderI.png?height=200&width=300',
              },
              {
                title: 'Mobile-First Design Principles',
                date: '2 weeks ago',
                likes: 42,
                comments: 15,
                image: '/zy.png?height=200&width=300',
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md"
              >
                <Image src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="font-semibold text-white">{post.title}</h3>
                  <p className="text-sm text-gray-300">{post.date}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-white">{post.likes} likes</span>
                    <span className="text-sm text-white">{post.comments} comments</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="research">
          <div className="space-y-4">
            {[
              {
                title: 'Impact of AI on UX Design Processes',
                date: '1 month ago',
                citations: 15,
              },
              {
                title: 'User Behavior in AR Interfaces',
                date: '3 months ago',
                citations: 22,
              },
            ].map((paper, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-semibold">{paper.title}</h3>
                  <p className="text-sm text-gray-500">{paper.date}</p>
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
