import Link from 'next/link';
import SlidersIcon from './icons/sliders.svg';
import SearchIcon from './icons/search.svg';

const ClientTable = ({ data }) => {

        return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4 flex">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="flex relative mt-1 justify-between items-center w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <input type="text" id="table-search" className="mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search clients">
                        </input>
                        <button className="flex mr-2 btn bg-gray-500 hover:bg-white hover:text-black rounded-lg text-white font-medium text-sm px-5 py-2.5 text-center" 
                        type="button" 
                        >
                        <SearchIcon className="mr-2 w-5 h-5" />
                        Search
                        </button>
                        <button className="flex btn bg-gray-500 hover:bg-white hover:text-black rounded-lg text-white font-medium text-sm px-5 py-2.5 text-center" 
                        type="button" 
                        >
                        <SlidersIcon className="mr-2 w-5 h-5" />
                        Filter
                        </button>
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    </input>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Manage Workouts
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        </input>
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    { `${user.first_name} ${user.last_name}` }
                                </th>
                                <td className="px-6 py-4">
                                    <Link href={'/trainer/clients/calendar/' + user._id}><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg></a>
                                    </Link>
                                </td>
                                <td className="px-6 py-4">
                                    { user.email }
                                </td>
                                <td className="px-6 py-4">
                                    { user.phone }
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={'/trainer/clients/' + user._id}><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">edit</a></Link>
                                </td>
                            </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
            </div>
        )
}

export default ClientTable;