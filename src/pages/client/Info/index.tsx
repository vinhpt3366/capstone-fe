import Alternating from '@/features/Alternating';
import HeroBanner from '@/features/HeroBanner';
import React, { memo } from 'react';

const Info = memo((): React.ReactElement => {
  return (
    <>
      <HeroBanner />
      <Alternating />
    </>
  );
});

export default Info;
