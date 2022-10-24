import React from 'react';
import style from '../styles/Home.module.css';

const Card = ({ small, heading, joined, bg, icon }) => {
  return (
    <div
      className={`${style.card} animate-slideIn xl:animate-slideLeft pl-8 bg-white dark:bg-night-blue rounded-md text-gray-400 flex items-center relative shadow-sm`}
    >
      <div className="z-20">
        <p className="uppercase">{small ?? 'registered customers'}</p>
        <h2 className="font-bold text-3xl my-3 text-gray-700 dark:text-white uppercase">
          {heading ?? '380.2k'}
        </h2>
        <p className="capitalize">{joined ?? '3467 joined today'}</p>
      </div>

      <div className="flex text-3xl text-white items-center justify-center z-10  absolute bottom-5 right-5">
        {icon}
      </div>

      <div
        className={`${style.semi} ${bg}  h-20 w-20 absolute bottom-0 right-0`}
      ></div>
    </div>
  );
};

export default Card;
