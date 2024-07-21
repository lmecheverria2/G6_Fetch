import { useEffect, useState } from 'react';
import { getWallpapers } from '../lib/getWallpapers';
import Image from 'next/image';

export default function Home() {
  const [wallpapers, setWallpapers] = useState<{ id: string, path: string, uploader: { username: string} }[]>([]);

  useEffect(() => {
    const fetchWallpapers = async () => {
      console.log('Fetching wallpapers...');
      const wallpaperData = await getWallpapers();
      console.log('Fetched wallpapers:', wallpaperData);
      setWallpapers(wallpaperData);
    };

    fetchWallpapers();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4">
      <main className="text-center">
        <h1 className="text-teal-300 text-4xl font-bold mb-8">Wallpapers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wallpapers.map(wallpaper => (
            <div key={wallpaper.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="relative h-0 pb-56 overflow-hidden rounded-md">
                <Image
                  src={wallpaper.path}
                  alt={wallpaper.uploader.username}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-yellow-300 mt-4">ID: {wallpaper.id}</h3>
              <h3 className="text-yellow-300">Autor: {wallpaper.uploader.username}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
