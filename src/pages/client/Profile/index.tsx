import React, { memo } from 'react';
import { useUserProfileActions, useUserProfileSelectors } from './store';
import Profile from '@/features/Profile';

const ProfilePage = memo((): React.ReactElement => {
  const { getInfo } = useUserProfileActions();
  const profile = useUserProfileSelectors();
  React.useEffect(() => {
    getInfo();
  }, [getInfo]);

  console.log(profile);
  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Không tìm thấy thông tin người dùng
      </div>
    );
  }

  return (
    <>
      <Profile profile={profile} />
    </>
  );
});

export default ProfilePage;
