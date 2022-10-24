import { useContext } from 'react';

//import utilities
import { DataContext } from '../Utils/DataContext';

//import icons
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

import Image from 'next/image';

const TopNav = () => {
  const { handleSideOpen } = useContext(DataContext);

  return (
    <div className="vertical__nav flex items-center">
      <div className="xl:hidden cursor-pointer" onClick={handleSideOpen}>
        <IoMenu className="text-3xl text-gray-500" />
      </div>

      <div className=" ml-auto flex items-center">
        <div className="w-14 h-14 bg-gray-200 dark:bg-night-white rounded-full flex justify-center items-center relative">
          <IoIosNotificationsOutline className="text-3xl " />
          <div className="badge h-3 w-3 bg-orange-500 rounded-full absolute top-4 right-4 "></div>
        </div>

        <div className="line w-1 h-14 bg-gray-300 dark:bg-gray-700 mx-4"></div>

        <div className="h-14 w-14 rounded-full relative">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            alt="user pic"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
