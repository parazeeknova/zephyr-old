import React from 'react';

import useFollowerInfo from '@/BE/hooks/userFollowerInfo';
import { useFollowUserMutation, useUnfollowUserMutation } from '@/BE/users/userMutations';
import { Button } from '@/components/ui/button';

interface FollowButtonProps {
  userId: string;
  initialState: {
    followers: number;
    isFollowedByUser: boolean;
  };
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId, initialState }) => {
  const { data } = useFollowerInfo(userId, initialState);
  const followMutation = useFollowUserMutation();
  const unfollowMutation = useUnfollowUserMutation();

  const handleFollowToggle = () => {
    if (data.isFollowedByUser) {
      unfollowMutation.mutate(userId);
    } else {
      followMutation.mutate(userId);
    }
  };

  return (
    <Button
      onClick={handleFollowToggle}
      disabled={followMutation.isPending || unfollowMutation.isPending}
    >
      {data.isFollowedByUser ? 'Unfollow' : 'Follow'}
    </Button>
  );
};

export default FollowButton;
