import React from 'react';
import useGlobalLoadingStore from './store';

const LoadingGlobal: React.FC = () => {
  const { isLoading } = useGlobalLoadingStore();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-lg">Đang tải...</p>
      </div>
    </div>
  );
};

export default LoadingGlobal;
