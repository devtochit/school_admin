import LineChart from '../Utils/Line';
import chart from '../styles/Chart.module.css';

const Analytics = ({ activeVehicle, shipment, stats }) => {
  return (
    <div className=" bg-white dark:bg-night-blue h-auto mt-6 rounded-md py-6">
      <div className="lg:flex  items-center justify-between p-5 md:px-10 md:py-5">
        <div className="flex items-center mb-6 lg:mb-0 ">
          <div className="mr-10 md:mr-32">
            <p className="font-bold uppercase text-xs md:text-sm mb-1">
              shipment
            </p>
            <h2 className="font-bold text-black dark:text-white text-base md:text-2xl">
              {shipment.toLocaleString('en-US')}
            </h2>
          </div>

          <div>
            <p className="font-bold uppercase text-xs md:text-sm mb-1">
              active vehicles
            </p>
            <h2 className="font-bold text-black dark:text-white text-base md:text-2xl">
              {activeVehicle.toLocaleString('en-US')}
            </h2>
          </div>
        </div>

        <div className=" flex items-center  text-base capitalize h-fit">
          <p className="flex items-center justify-center before:content-[''] before:block before:bg-green-200 before:h-2 before:w-8 before:mr-4 mr-4 md:mr-10">
            shipments
          </p>

          <p className="flex items-center justify-center before:content-[''] before:block before:bg-purple-500 before:h-2 before:w-8 before:mr-4 ">
            vehicles
          </p>
        </div>
      </div>

      <LineChart stats={stats} />
    </div>
  );
};

export default Analytics;
