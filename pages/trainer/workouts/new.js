import { ensureAuth } from '../../../utils/ensureAuth';
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from 'react';
import TextEditor from '../../../components/workouts/TextEditor';

export async function getServerSideProps(context) {
    
    return ensureAuth(context, (session) => {
      return {
        props: { session }
      }
    })
}

const NewWorkout = () => {
    const [textEditorData, setVal] = useState('');
    console.log(textEditorData)

    const workoutTypes = [
        { value: "endurance", type: "endurance" },
        { value: "strength", type: "strength" },
        { value: "flexibility", type: "flexibility" },
        { value: "balance", type: "balance" },
    ];
  
    const router = useRouter();
    // Handle the submit event on form submit.
    const handlePost = async (e) => {
        // Stop the form from submitting and refreshing the page.
        e.preventDefault();
  
        try {
            // Get data from the form.
            const data = {
                title: e.target.workout_title.value,
                type: e.target.workout_type_select.value,
                exercises: e.target.workout_exercises.value,
                body: textEditorData,
            };
            console.log(data)
    
            const JSONdata = JSON.stringify(data);
    
            // Send the form data to our API and get a response.
            const response = await fetch('/api/workouts/', {
                // Body of the request is the JSON data we created above.
                body: JSONdata,
        
                // Tell the server we're sending JSON.
                headers: {
                'Content-Type': 'application/json',
                },
                // The method is POST because we are sending data to create a new workout.
                method: 'POST',
            })
    
            // Get the response data from server as JSON.
            // If server returns the name submitted, that means the form works.
            const result = await response.json();
            console.log(result);
    
            if (result.success) {
              if (result.success) {
                router.push('/trainer/workouts')
                alert(`${result.data.title} workout has been created!`)
            }
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    
    return ( 
        <>
            <div>
                <form id="post_form" onSubmit={handlePost}>
                
                <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="workout_title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required="">
                        </input>
                    <label htmlFor="workout_title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Workout Title</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                        <label htmlFor="workout_type_select" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type of Workout (Optional)</label>
                        <select id="workout_type_select" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                            <option key="default" value="default">Choose an workout type</option>
                                    {
                                        workoutTypes.map(option => (
                                            <option key={option.value} value={option.value}>{option.type}</option>
                                        ))
                                    }
                        </select>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <textarea type="text" name="workout_exercises" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required="">
                        </textarea>
                    <label htmlFor="workout_exercises" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Link Exercises (Optional)</label>
                </div>
                
                <div className="mb-6">
                    <TextEditor name="workout_body" setVal={setVal} />
                </div>
                
                </form>

                <div className="flex">
                    <button type="submit" form="post_form" className="mr-2 btn bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit Workout</button>
                </div>
                
            </div>
        </>
     );
}
 
export default NewWorkout;