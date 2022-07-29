import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';

export default function Footer() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) return null;
    
        const currentTheme = theme === 'system' ? systemTheme : theme;
    
        if (currentTheme === 'dark') {
          return (
            <SunIcon className='w-7 h-7' role="button" onClick={() => setTheme('light')} />
          )
        } else {
          return (
            <MoonIcon className='w-7 h-7' role="button" onClick={() => setTheme('dark')} />
          )
        }
      }    
    
    return (
        <footer className="p-4 bg-gray-200 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 bottom-0 relative w-full">
            <div className='items-center'>
                {renderThemeChanger()}
            </div>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">JW Creative Content</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    )
}