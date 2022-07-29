import Image from 'next/image';
import LayoutNew from '../../../components/layoutNew';

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + id);
    const data = await res.json();

    return {
        props: { exercise: data }
    }

}

const ExerciseDetails = ({ exercise }) => {
    const exerciseTypes = [
        { value: 1, type: 'upper' },
        { value: 2, type: 'core' },
        { value: 3, type: 'lower' },
    ]

    const muscleGroups = [
        { value: 1, type: 'Deltoid' },
        { value: 2, type: 'Trapezius' },
        { value: 3, type: 'Biceps' },
        { value: 4, type: 'Triceps' },
        { value: 5, type: 'Abdominals' },
        { value: 6, type: 'Obliques' },
        { value: 7, type: 'Calves' },
        { value: 8, type: 'Forearms' },
        { value: 9, type: 'Hamstrings' },
        { value: 10, type: 'Quadriceps' },
        { value: 11, type: 'Gluteus' },
        { value: 12, type: 'Latissimus dorsi' },

    ]

    return ( 
        <div>
            <form>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="exercise_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={exercise.title} required="">
                    </input>
                <label htmlFor="exercise_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Exercise Name</label>
            </div>
            <div className='content-center mb-6'>
                <Image 
                src={exercise.url}
                alt=""
                width={800}
                height={400}
                />
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" name="exercise_link" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={exercise.url} required="">
                    </input>
                <label htmlFor="exercise_link" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Link to Video</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <textarea type="text" name="exercise_instructions" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={exercise.url} required="">
                    </textarea>
                <label htmlFor="exercise_instructions" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructions</label>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="underline_select" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type of Exercise (Optional)</label>
                    <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                        <option selected={exercise.albumId}>Choose an exercise type</option>
                                {
                                    exerciseTypes.map(option => (
                                        <option value={option.value}>{option.type}</option>
                                    ))
                                }
                    </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <label htmlFor="underline_select" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Primary Muscle Group (Optional)</label>
                    <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                        <option selected={exercise.albumId}>Choose a muscle group</option>
                            {
                                muscleGroups.map(option => (
                                    <option value={option.value}>{option.type}</option>
                                ))
                            }
                    </select>
                </div>
            </div>
            <div className="flex">
                <button type="submit" className="mr-2 btn bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit Changes</button>
                <button type="submit" className="mr-2 btn bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Delete Exercise</button>
            </div>
            </form>

        </div>
     );
}
 
export default ExerciseDetails;

ExerciseDetails.getLayout = function getLayout(page) {
    return (
      <LayoutNew>
        {page}
      </LayoutNew>
    )
  }