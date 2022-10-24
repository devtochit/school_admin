import { useContext } from 'react';

import Image from 'next/image';

import styles from '../styles/styles.module.css';
import { ImTruck } from 'react-icons/im';
import { MdMoreVert } from 'react-icons/md';

import { DataContext } from '../Utils/DataContext';

const TableRow = ({ item }) => {
  const color = item.colorStats;

  const { handleOpen } = useContext(DataContext);

  return (
    <tr
      className={`${styles.table__row} animate-fadeIn bg-white dark:bg-night-blue text-black dark:text-white`}
    >
      <td>
        <div className="flex  items-start ">
          <ImTruck className="text-3xl text-black dark:text-white" />
          <div className="ml-3">
            <h3 className="font-bold uppercase">{item.reg}</h3>
            <p className="text-gray-400 text-sm">{item.vehicle}</p>
          </div>
        </div>
      </td>

      <td className="capitalize">
        <p className="font-semibold">{item.start}</p>
        <p className="text-gray-400 text-sm">start location</p>
      </td>

      <td className="capitalize">
        <p className="font-semibold ">{item.end}</p>
        <p className="text-gray-400 text-sm">destination</p>
      </td>

      <td className="capitalize ">
        <p className="font-semibold">{item.deliveryStatus}</p>
        <p className="text-gray-400 text-sm">status</p>
      </td>

      <td>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gray-200 relative">
            <Image
              className="rounded-full"
              src={item.img}
              alt={item.driver}
              layout="fill"
              objectFit="cover"
              priority="true"
            />
          </div>
          <div className="ml-3 capitalize">
            <p className="font-semibold mb-1">{item.driver}</p>
            <p className="text-gray-400 text-sm">transporter</p>
          </div>
        </div>
      </td>

      <td>
        <div className="flex items-start ">
          <div className="flex-1">
            <div className="flex items-center border-2 border-gray-300 rounded-full p-2">
              <div className={`${color} h-3 w-3 rounded-full`}></div>

              <div className="ml-2 capitalize font-semibold">
                {item.deliveryStatus}
              </div>
            </div>

            {item.deliveryStatus === 'in transit' ? (
              <a
                onClick={() => handleOpen(item)}
                className="text-gray-400 text-sm block mt-2 text underline capitalize cursor-pointer"
              >
                track shipment
              </a>
            ) : (
              <a className="text-gray-400 text-sm block mt-2 text underline capitalize cursor-pointer">
                view details
              </a>
            )}
          </div>

          <MdMoreVert className="ml-3 text-3xl cursor-pointer" />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
