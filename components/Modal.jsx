/* eslint-disable @next/next/no-img-element */
import { useContext, useState, uesEffect, useEffect } from 'react';

import Tracking from './Tracking';
import Found from './Found';

import { FaRegWindowClose } from 'react-icons/fa';
import { ImTruck } from 'react-icons/im';

import { DataContext } from '../Utils/DataContext';

const Modal = () => {
  const { handleClose, currentItem, isFound } = useContext(DataContext);

  return (
    <div className="bg-overlay-black dark:bg-overlay-dark h-full w-full px-4 lg:px-6 xl:px-0 overflow-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-50 lg:flex justify-center items-center">
      <div className=" bg-white dark:bg-night-blue h-auto mx-auto lg:mx-0 my-10 lg:my-0  w-full xl:w-2/3 py-8 rounded-md px-6 lg:px-8  relative">
        {/* modal header */}
        <div className="text-center mb-6 text-black dark:text-white">
          <FaRegWindowClose
            onClick={handleClose}
            className="text-2xl rounded-md cursor-pointer absolute top-8 right-8"
          />
          <h1 className="text-3xl font-semibold  mb-2 mt-10 lg:mt-0">
            {isFound ? 'Location Found' : 'Tracking Vehicle'}
          </h1>
          <p>
            {isFound
              ? 'Vehicle has successfully been located'
              : 'Please hold on. Locating vehicle on IPI network'}
          </p>
        </div>

        {/* modal body */}
        <>{isFound ? <Found /> : <Tracking />}</>

        {/* modal foooter */}
        <div className="mt-8 overflow-x-auto whitespace-nowrap text-black dark:text-white">
          <ul className="flex items-center justify-between">
            <li className="capitalize">
              <div className="flex  items-start ">
                <ImTruck className="text-3xl" />
                <div className="ml-3">
                  <h3 className="font-bold uppercase">{currentItem.reg}</h3>
                  <p className="text-gray-400 text-sm">{currentItem.vehicle}</p>
                </div>
              </div>
            </li>
            <li className="capitalize mx-8 lg:mx-0">
              <p className="font-bold"> {currentItem.start}</p>
              <p className="text-gray-400 text-sm">start location</p>
            </li>
            <li className="capitalize">
              <p className="font-bold">{currentItem.end}</p>
              <p className="text-gray-400 text-sm">destination</p>
            </li>
            <li className="capitalize ml-8 lg:ml-0">
              <p className="font-bold">{currentItem.deliveryStatus}</p>
              <p className="text-gray-400 text-sm">status</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
