import ArrowUpIcon from "../icons/arrow_up.svg";
import ArrowDownIcon from "../icons/arrow_down.svg";

const stats = [
    {
      title: "Total Revenue",
      percentage: "+32.40%",
      value: "$1,355.00",
      status: "up",
    },
    {
      title: "Total Clients",
      percentage: "-12.40%",
      value: "62",
      status: "down",
    },
    {
      title: "Total Workouts Completed",
      percentage: "+2.40%",
      value: "289",
      status: "up",
    },
  ];

const StatsCard = () => {
    return ( 
        <>
            <h3 className="mt-4">This Week's Stats</h3>
            <div  className="flex flex-col gap-y-4 mt-4">
            {
                stats.map((data, index) => (
                    
                        <div
                        key={index}
                        className="flex flex-col p-4 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 rounded-lg border border-gray-300"
                        >
                            <div className="flex items-center pb-2">
                                <div className="flex p-2 bg-gray-200 dark:bg-gray-800 rounded-lg">
                                    {
                                        data.status === "up" ? 
                                        <ArrowUpIcon className="fill-current text-lg dark:text-green-400 text-green-700" /> :
                                        <ArrowDownIcon className="fill-current text-lg dark:text-red-400 text-red-700" />
                                    }   
                                <div className="ml-2 ">
                                  <p className={`text-sm ${data.status === "up" ? 'dark:text-green-400 text-green-700' : 'dark:text-red-400 text-red-700'}`}>{data.percentage}</p>
                                </div>
                                </div>
   
                            </div>
                            <div className="text-3xl font-semibold text-black dark:text-white">{ data.value }</div>
                            <div className="text-sm tracking-wide text-gray-500 dark:text-gray-300">{ data.title }</div>
                        </div>
                )) 
            }
            </div>
        </>
     );
}
 
export default StatsCard;