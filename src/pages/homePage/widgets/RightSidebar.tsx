import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ImageIcon, Video, Cast, MoreHorizontal } from 'lucide-react';

interface RightSidebarProps {
  isDarkMode: boolean;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ isDarkMode }) => (
  <aside
    className={`w-80 p-4 space-y-4 overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
  >
    <Card
      className={isDarkMode ? 'bg-gray-700 shadow-md' : 'bg-white shadow-md'}
    >
      <CardContent className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <div
              className={`w-20 h-20 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-2xl overflow-hidden`}
            >
              <img
                src="/placeholder.png?height=80&width=80"
                alt="Profile background"
                className="w-full h-full object-cover"
              />
            </div>
            <Avatar
              className={`absolute -bottom-2 -right-2 w-12 h-12 border-4 ${isDarkMode ? 'border-gray-700' : 'border-white'}`}
            >
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Kemito's avatar"
              />
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h2 className="font-bold text-lg flex items-center">
              <Link to="/profile">
                Parazeeeknova <span className="ml-1 text-blue-500">✓</span>
              </Link>
            </h2>
            <p
              className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              Programmer
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="font-bold">69K</p>
            <p
              className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              Followers
            </p>
          </div>
          <div>
            <p className="font-bold">6.9K</p>
            <p
              className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              Following
            </p>
          </div>
          <div>
            <p className="font-bold">69</p>
            <p
              className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              Aura
            </p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card
      className={isDarkMode ? 'bg-gray-700 shadow-md' : 'bg-white shadow-md'}
    >
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">What do you think, Parazeeknova?</h3>
        <Textarea
          placeholder="Share your thoughts..."
          className={`mb-2 ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-900'}`}
        />
        <div className="grid grid-cols-2 gap-2 mb-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center justify-center"
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            Image
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center justify-center"
          >
            <Video className="w-4 h-4 mr-2" />
            Video
          </Button>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full flex items-center justify-center"
        >
          <Cast className="w-4 h-4 mr-2" />
          Streaming
        </Button>
      </CardContent>
    </Card>

    <Card
      className={isDarkMode ? 'bg-gray-700 shadow-md' : 'bg-white shadow-md'}
    >
      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Latest Activity</h3>
          <MoreHorizontal
            className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-64">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="User avatar"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm">
                  <span className="font-medium">ariadnakro, kurniajati,</span>{' '}
                  and <span className="font-medium">78 others</span> liked your
                  post
                </p>
                <p
                  className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  Just now
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="UI Bucket avatar"
                />
                <AvatarFallback>UB</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm">
                  <span className="font-medium">uibucket</span> tagged you in
                  post
                </p>
                <p
                  className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  2m ago
                </p>
                <p className="text-sm mt-1">
                  @kemito this design is beautiful!
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="Jelly avatar"
                />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-medium">Jelly</span> started following
                  you
                </p>
                <p
                  className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  5m ago
                </p>
                <div className="flex justify-between items-center mt-2">
                  <Button variant="outline" size="sm">
                    Discard
                  </Button>
                  <Button size="sm">Follow Back</Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>

    <Card
      className={isDarkMode ? 'bg-gray-700 shadow-md' : 'bg-white shadow-md'}
    >
      <CardHeader>
        <CardTitle>Suggested Connections</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="Emma Watson"
                />
                <AvatarFallback>EW</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Emma Watson</p>
                <p
                  className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  UI Designer
                </p>
              </div>
            </div>
            <Button size="sm">Connect</Button>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="John Doe"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
                <p
                  className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  Frontend Developer
                </p>
              </div>
            </div>
            <Button size="sm">Connect</Button>
          </li>
        </ul>
      </CardContent>
    </Card>

    <Card
      className={isDarkMode ? 'bg-gray-700 shadow-md' : 'bg-white shadow-md'}
    >
      <CardHeader>
        <CardTitle>Your Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">UI Design</Badge>
          <Badge variant="secondary">UX Research</Badge>
          <Badge variant="secondary">Prototyping</Badge>
          <Badge variant="secondary">Wireframing</Badge>
          <Badge variant="secondary">User Testing</Badge>
        </div>
      </CardContent>
    </Card>
  </aside>
);

export default RightSidebar;
