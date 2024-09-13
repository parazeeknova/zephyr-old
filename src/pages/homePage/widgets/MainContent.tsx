import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface MainContentProps {
  isDarkMode: boolean;
}

const playlists = [
  {
    title: 'Thinking Components',
    creator: 'Lena Logic',
    image: '/placeholder.png?height=200&width=200&text=Thinking+Components',
  },
  {
    title: 'Functional Fury',
    creator: 'Beth Binary',
    image: '/placeholder.png?height=200&width=200&text=Functional+Fury',
  },
  {
    title: 'React Rendezvous',
    creator: 'Ethan Byte',
    image: '/placeholder.png?height=200&width=200&text=React+Rendezvous',
  },
  {
    title: 'Stateful Symphony',
    creator: 'Beth Binary',
    image: '/placeholder.png?height=200&width=200&text=Stateful+Symphony',
  },
  {
    title: 'Async Awakenings',
    creator: 'Nina Netcode',
    image: '/placeholder.png?height=200&width=200&text=Async+Awakenings',
  },
  {
    title: 'The Art of Reusability',
    creator: 'Lena Logic',
    image: '/placeholder.png?height=200&width=200&text=The+Art+of+Reusability',
  },
];

export const MainContent: React.FC<MainContentProps> = ({ isDarkMode }) => (
  <main
    className={`flex-1 p-6 overflow-y-auto pb-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
  >
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2 text-left text-gray-500 uppercase">
        Made for You
      </h2>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
        Your personal Blogs. Updated daily.
      </p>
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {playlists.map((playlist, index) => (
            <Card
              key={index}
              className={`w-[200px] flex-shrink-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <CardContent className="p-0">
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{playlist.title}</h3>
                  <p
                    className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
                  >
                    {playlist.creator}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>

    <Separator className="my-8" />

    <h2 className="text-2xl font-bold mb-2 text-left text-gray-500 uppercase">
      Latest Posts
    </h2>

    <Card className={isDarkMode ? 'bg-gray-800' : 'bg-white'}>
      <CardContent className="p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Alvin Elian's avatar"
            />
            <AvatarFallback>AE</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Alvin Elian</h3>
            <p
              className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              3 minutes ago
            </p>
          </div>
        </div>
        <p className="mb-4">
          This is my latest product kit for website landing page, dashboard, and
          mobile exploration about coffee shop called Kopiku. ☕ Hope you guys
          enjoy and press &quot;L&quot; if you like it! Any feedback or ... see
          more
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={`/zy.png?height=200&width=300`}
              alt={`Product ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              👍 70
            </Button>
            <Button variant="outline" size="sm">
              💬 34
            </Button>
            <Button variant="outline" size="sm">
              🔁 16
            </Button>
          </div>
          <Button variant="outline" size="sm">
            Save
          </Button>
        </div>
      </CardContent>
    </Card>

    <Separator className="my-8" />

    <Card className={isDarkMode ? 'bg-gray-800' : 'bg-white'}>
      <CardContent className="p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Sarah Johnson's avatar"
            />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Sarah Johnson</h3>
            <p
              className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            >
              1 hour ago
            </p>
          </div>
        </div>
        <p className="mb-4">
          Just finished a new illustration for my upcoming children&apos;s book.
          It&apos;s been a labor of love, and I&apos;m excited to share a sneak
          peek with you all! 🎨📚 #ChildrensBook #Illustration
        </p>
        <img
          src="/zephyr.png?height=400&width=600&text=Children's+Book+Illustration"
          alt="Children's book illustration"
          className="w-full h-80 object-cover rounded-lg mb-4"
        />
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              👍 125
            </Button>
            <Button variant="outline" size="sm">
              💬 42
            </Button>
            <Button variant="outline" size="sm">
              🔁 28
            </Button>
          </div>
          <Button variant="outline" size="sm">
            Save
          </Button>
        </div>
      </CardContent>
    </Card>

    <div
      className={`text-center py-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
    >
      <p>You&apos;ve reached the end of your feed.</p>
      <p>Check back later for more updates!</p>
    </div>
  </main>
);

export default MainContent;
