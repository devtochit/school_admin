import { useContext, useEffect } from 'react';

//import icons
import { GoHome, GoPerson, GoCreditCard } from 'react-icons/go';
import { ImTruck, ImStatsBars } from 'react-icons/im';
import { MdPeople, MdSupport } from 'react-icons/md';
import { RiBarChart2Fill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';
import { FaReceipt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaShip } from 'react-icons/fa';

//import component
import ActiveLink from './ActiveLink';

//import utilities
import { DataContext } from '../Utils/DataContext';

const Sidebar = () => {
  const { handleSideClose, isShown } = useContext(DataContext);

  return (
    <aside
      className={`sidebar bg-white dark:bg-night-blue  w-72 h-full fixed top-0 left-0 pt-10 overflow-y-auto flex flex-col z-50 ${
        isShown
          ? 'animate-slideIn xl:animate-none'
          : 'animate-slideOut xl:animate-none -left-96 xl:left-0'
      }`}
    >
      <div className="sidebar__logo px-8 mb-12 flex justify-between items-center">
        <div className="uppercase font-bold text-2xl text-black dark:text-white">
          ipi.
        </div>

        {isShown ? (
          <IoClose
            onClick={handleSideClose}
            className="text-3xl cursor-pointer text-gray-500 dark:text-white xl:hidden"
          />
        ) : (
          ''
        )}
      </div>

      <div className="sidebar__main-content px-6 mb-16">
        <h6 className="uppercase text-sm text-gray-500 mb-5 ml-1">main menu</h6>

        <nav>
          <ul className="sidebar__ul text-dark-blue dark:text-gray-300">
            <li>
              <ActiveLink href="/">
                <span className="flex items-center">
                  <GoHome className="text-3xl mr-4" />
                  <span>Home</span>
                </span>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/vehicles">
                <span className="flex items-center">
                  <ImTruck className="text-3xl mr-4" />
                  <span>Vehicles</span>
                </span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/transporters">
                <span className="flex items-center">
                  <MdPeople className="text-3xl mr-4" />
                  <span>Transporters</span>
                </span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/customers">
                <span className="flex items-center">
                  <GoPerson className="text-3xl mr-4" />
                  <span>Customers</span>
                </span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/shippers">
                <span className="flex items-center">
                  <FaShip className="text-3xl mr-4" />
                  <span>Shippers</span>
                </span>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar__internal-tools px-6 mb-10">
        <h6 className="uppercase text-sm text-gray-500 mb-5 ml-1">
          Internal Tools
        </h6>

        <nav>
          <ul className="sidebar__ul text-dark-blue dark:text-gray-300">
            <li>
              <ActiveLink href="/tickets">
                <span className="flex items-center">
                  <MdSupport className="mr-4 text-3xl" />
                  <span>Support Tickets</span>
                </span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/invoices">
                <span className="flex items-center">
                  <FaReceipt className="text-3xl mr-4" />
                  <span>Invoices</span>
                </span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/analytics">
                <span className="flex items-center">
                  <RiBarChart2Fill className="text-3xl mr-4" />
                  <span>Analytics</span>
                </span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/payments">
                <span className="flex items-center">
                  <GoCreditCard className="text-2xl mr-4" />
                  <span>Payments</span>
                </span>
              </ActiveLink>
            </li>

            <li>
              <ActiveLink href="/settings">
                <span className="flex items-center">
                  <IoIosSettings className="text-3xl mr-4" />
                  <span>Settings</span>
                </span>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="sidebar__logout text-center bg-gray-200 dark:bg-trans-white justify-self-end p-5 cursor-pointer">
        <a href="#logOut">Log out</a>
      </div>
    </aside>
  );
};

export default Sidebar;
