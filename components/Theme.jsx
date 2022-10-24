import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

//import react icons
import { MdWbSunny } from 'react-icons/md';
import { BsMoonStarsFill } from 'react-icons/bs';

const Theme = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    themeChanger();
  }, []);

  //checking system theme

  const themeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'light') {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  const lightTheme = () => {
    setTheme('light');
  };

  const darkTheme = () => {
    setTheme('dark');
  };

  return (
    <div className="bg-white dark:bg-night-blue flex flex-col items-center w-fit px-2 py-4 shadow-md rounded-lg fixed top-2/3 right-0 text-lg z-30">
      <button
        className="p-2 rounded-lg text-yellow-400 dark:bg-white/[0.2]"
        onClick={darkTheme}
      >
        <BsMoonStarsFill />
      </button>

      <button
        onClick={lightTheme}
        className="p-2 rounded-lg text-orange-400
          bg-gray-200 dark:bg-transparent
         mt-3"
      >
        <MdWbSunny />
      </button>
    </div>
  );
};

export default Theme;
