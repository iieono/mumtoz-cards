import React from 'react';
import { Button } from '@/components/ui/button';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Page404: React.FC = () => {
    const theme = useSelector((state: RootState) => state.settings.theme)
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleReturn = () => {
    window.location.href = '/';
  };

  return (
    <div className={`flex flex-col items-center bg-background justify-center h-screen ${theme ? 'dark' : ''}`}>
      <div className="text-9xl text-red-500 mb-6">404</div>
      <h1 className="text-3xl font-bold text-foreground mb-2">Page Not Found</h1>
      <p className="text-lg text-foreground mb-4">
        Oops! Looks like you've encountered a page that doesn't exist.
      </p>
      <div className="flex">
        <Button onClick={handleRefresh} className="mr-4 text-foreground">
          Refresh
        </Button>
        <Button variant="outline" className='border-2 border-green-600 text-foreground' onClick={handleReturn}>Return to Main</Button>
      </div>
    </div>
  );
};

export default Page404;
