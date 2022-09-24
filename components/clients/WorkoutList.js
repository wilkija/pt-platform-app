const WorkoutList = ({ data, setSelect }) => {
    const handleSelect = (e) => {
        setSelect(e.target.value);
        console.log(e.target.value);
    }

    return (
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            {/* <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </input>
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div> */}
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Workout Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                    </tr>
                </thead>
                <tbody onChange={handleSelect}>
                    {data.slice(0, 10).map((workout) => (
                        <tr key={workout._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input name="workout" type="radio" value={workout._id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    </input>
                                    <label className="sr-only">radio</label>
                                </div>
                            </td>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                { workout.title }
                            </td>
                            <td className="px-6 py-4">
                                { workout.type }
                            </td>
                        </tr>
                    ))}
                    
                    
                </tbody>
            </table>
        </div>

    )
}

export default WorkoutList;