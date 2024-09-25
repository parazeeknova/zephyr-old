'use client';

import { Video, Cast, PodcastIcon } from 'lucide-react';
import React, { useState } from 'react';

import { useSubmitPostMutation } from '@/BE/posts/editor/mutations';
import { useSession } from '@/BE/SessionProvider';
import LoadingButton from '@/C/widgets/authPage/LoadingButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const ThoughtShare: React.FC = () => {
  const { user } = useSession();
  const [input, setInput] = useState('');
  const mutation = useSubmitPostMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      mutation.mutate(input, {
        onSuccess: () => {
          setInput('');
        },
      });
    }
  };

  return (
    <Card className="bg-card shadow-md">
      <CardContent className="p-4">
        <h3 className="mb-2 font-semibold text-foreground">
          What do you think, {user.displayName}?
        </h3>
        <Textarea
          placeholder="Share your thoughts..."
          className="mb-2 bg-muted text-foreground placeholder-muted-foreground"
          value={input}
          onChange={handleInputChange}
        />
        <div className="mb-2 grid grid-cols-2 gap-2">
          <LoadingButton
            variant="outline"
            size="sm"
            className="flex items-center justify-center"
            onClick={handleSubmit}
            loading={mutation.isPending}
            disabled={!input.trim()}
          >
            <PodcastIcon className="mr-2 h-4 w-4" />
            Fleet
          </LoadingButton>
          <Button variant="outline" size="sm" className="flex items-center justify-center">
            <Video className="mr-2 h-4 w-4" />
            Blog
          </Button>
        </div>
        <Button variant="outline" size="sm" className="flex w-full items-center justify-center">
          <Cast className="mr-2 h-4 w-4" />
          Research
        </Button>
      </CardContent>
    </Card>
  );
};

export default ThoughtShare;
