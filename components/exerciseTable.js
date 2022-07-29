import Link from 'next/link';

const ExerciseTable = ({ data }) => {
    // console.log(data)
        return (
            
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-4 flex">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search exercises">
                        </input>
                    </div>
                    <div className="relative mt-1 ml-2">
                        <Link href='/trainer/exercises/new'><button className="btn bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm px-5 py-2.5 text-center" 
                        type="button"
                        >
                        + Add Exercise
                        </button></Link>
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
                                Exercise Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Muscles Worked
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(0, 10).map((exercise) => (
                            <tr key={exercise.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        </input>
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    { exercise.title }
                                </th>
                                <td className="px-6 py-4">
                                    { exercise.id }
                                </td>
                                <td className="px-6 py-4">
                                    { exercise.albumId }
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={'/trainer/exercises/' + exercise.id}><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">edit</a></Link>
                                </td>
                            </tr>
                        ))}
                        
                        
                    </tbody>
                </table>
            </div>

        )
}

export default ExerciseTable;