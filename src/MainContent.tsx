import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoreHorizontal } from "lucide-react";

const recentPosts = [
  { name: "You", image: "/placeholder.svg?height=100&width=100&text=Interior" },
  { name: "fabianto", image: "/placeholder.svg?height=100&width=100&text=Tower" },
  { name: "adhravi", image: "/placeholder.svg?height=100&width=100&text=Ferris+Wheel" },
  { name: "Fatah", image: "/placeholder.svg?height=100&width=100&text=Person" },
  { name: "Daisy", image: "/placeholder.svg?height=100&width=100&text=Flowers" },
];

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-6 overflow-y-auto pb-24">
      <Card className="mb-6">
        <CardContent className="p-4">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Avatar className="w-16 h-16 mb-2">
                    <AvatarImage src={post.image} alt={`${post.name}'s post`} />
                    <AvatarFallback>{post.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{post.name}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40&text=AE" alt="Alvin Elian's avatar" />
              <AvatarFallback>AE</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="flex items-center">
                Alvin Elian
                <span className="ml-1 text-blue-500">✓</span>
              </CardTitle>
              <p className="text-sm text-gray-500">3 minutes ago</p>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This is my latest product kit for website landing page, dashboard, and mobile exploration about coffee shop called Kopiku. ☕ Hope you guys enjoy and press "L" if you like it! Any feedback or comment would be really appreciated. See you on the next shot! 🚀</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {[...Array(4)].map((_, index) => (
              <img 
                key={index} 
                src={`/placeholder.svg?height=200&width=300&text=Kopiku+Design+${index + 1}`} 
                alt={`Product ${index + 1}`} 
                className="w-full h-40 object-cover rounded-lg" 
              />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="text-red-500">
                ❤️ 70
              </Button>
              <Button variant="outline" size="sm">
                💬 34
              </Button>
              <Button variant="outline" size="sm">
                🔁 16
              </Button>
            </div>
            <Button variant="outline" size="sm">Save</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default MainContent;
