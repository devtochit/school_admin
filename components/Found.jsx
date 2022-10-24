/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';

import { GoSearch } from 'react-icons/go';
import { DataContext } from '../Utils/DataContext';

const Tracking = () => {
  const { currentItem } = useContext(DataContext);
  return (
    <div className="lg:flex justify-between items-center">
      {/* body left */}
      <div className=" lg:w-1/3">
        <div className=" border-b-2 bordr-gray-200 py-4">
          <div className="flex justify-between items-start ">
            <div className="flex items-center ">
              <img
                className="h-12 w-12 object-cover rounded-full"
                src={currentItem.img}
                alt={currentItem.driver}
              />
              <div className="ml-2">
                <p className="font-semibold">{currentItem.driver}</p>
                <p className="text-sm">Transporter</p>
              </div>
            </div>

            <button className="rounded-2xl mt-3 lg:mt-0 px-8 py-1 ml-2 outline-0 border-2  border-black/80 dark:border-white  hover:bg-black hover:text-white capitalize">
              view
            </button>
          </div>
        </div>

        <div className=" border-b-2 bordr-gray-200 py-4">
          <p className="font-semibold mb-1">{currentItem.current}</p>
          <p>Current location</p>
        </div>

        <div className=" border-b-2 bordr-gray-200 py-4">
          <p className="font-semibold mb-1">36mins</p>
          <p>Time spent so far</p>
        </div>
      </div>

      {/* body right */}
      <div className="lg:flex-1 h-72 lg:ml-16 mt-4 lg:mt-0  bg-gray-200">
        <div className="mapouter relative text-right h-full w-full">
          <div className="gmap_canvas overflow-hidden bg-none h-full w-full">
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src={`https://maps.google.com/maps?q=${currentItem.current}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
            <a className="block" href="https://123movies-to.org"></a>
            <a href="https://www.embedgooglemap.net">
              embed google map wordpress
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
