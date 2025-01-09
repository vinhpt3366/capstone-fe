import BrandSlider from '@/features/BrandSlider';
import CoFounders from '@/features/CoFounders';
import CountdownTimer from '@/features/CountdownTimer';
import EventList from '@/features/EventList';
import React, { memo } from 'react';

const Event = memo((): React.ReactElement => {
  return (
    <>
      <CountdownTimer />
      <EventList />
      <CoFounders />
      <BrandSlider />
    </>
  );
});

export default Event;
