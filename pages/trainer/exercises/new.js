import { ensureAuth } from '../../../utils/ensureAuth';
import { useRouter } from "next/router";
import { useState } from 'react';

export async function getServerSideProps(context) {
    
    return ensureAuth(context, (session) => {
      return {
        props: { session }
      }
    })
}


const NewExercise = () => {
  const [selectedOptionType, setSelectedOptionType] = useState("default");
  const [selectedOptionMuscle, setSelectedOptionMuscle] = useState("default");
  const onChange = e => {
      setSelectedOption(e.target.value);
  }

  const exerciseTypes = [
      { value: 'upper', type: 'upper' },
      { value: 'core', type: 'core' },
      { value: 'lower', type: 'lower' },
  ]

  const muscleGroups = [
      { value: 'Deltoid', type: 'Deltoid' },
      { value: 'Trapezius', type: 'Trapezius' },
      { value: 'Biceps', type: 'Biceps' },
      { value: 'Triceps', type: 'Triceps' },
      { value: 'Abdominals', type: 'Abdominals' },
      { value: 'Obliques', type: 'Obliques' },
      { value: 'Calves', type: 'Calves' },
      { value: 'Forearms', type: 'Forearms' },
      { value: 'Hamstrings', type: 'Hamstrings' },
      { value: 'Quadriceps', type: 'Quadriceps' },
      { value: 'Gluteus', type: 'Gluteus' },
      { value: 'Latissimus dorsi', type: 'Latissimus dorsi' },

  ]


  const router = useRouter();
  // Handle the submit event on form submit.
  const handlePost = async (e) => {
      // Stop the form from submitting and refreshing the page.
      e.preventDefault();

      try {
          // Get data from the form.
          const data = {
              name: e.target.exercise_name.value,
              video: e.target.exercise_link.value,
              instructions: e.target.exercise_instructions.value,
              type: e.target.exercise_type_select.value,
              muscle: e.target.muscle_select.value,
          };
          console.log(data)
  
          const JSONdata = JSON.stringify(data);
  
          // Send the form data to our API and get a response.
          const response = await fetch('/api/exercises/', {
              // Body of the request is the JSON data we created above.
              body: JSONdata,
      
              // Tell the server we're sending JSON.
              headers: {
              'Content-Type': 'application/json',
              },
              // The method is POST because we are sending data to create a new exercise.
              method: 'POST',
          })
  
          // Get the response data from server as JSON.
          // If server returns the name submitted, that means the form works.
          const result = await response.json();
          console.log(result);
  
          if (result.success) {
            if (result.success) {
              router.push('/trainer/exercises')
              alert(`${result.data.name} exercise has been created!`)
          }
          }
      } catch (error) {
          console.log(error);
      }
      
  }

  return ( 
      <div>
          <form id="post_form" onSubmit={handlePost}>
          <div className="relative z-0 w-full mb-6 group">
              <input type="text" name="exercise_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required="">
                  </input>
              <label htmlFor="exercise_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Exercise Name</label>
          </div>
          {/* <div className='content-center mb-6'>
              <iframe 
              id="ytplayer"
              width={800}
              height={400}
              type="text/html"
              src=""
              frameBorder="0"
              ></iframe>
          </div> */}
          <div className="relative z-0 w-full mb-6 group">
              <input type="text" name="exercise_link" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required="">
                  </input>
              <label htmlFor="exercise_link" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Link to Video</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <textarea type="text" name="exercise_instructions" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" required="">
                  </textarea>
              <label htmlFor="exercise_instructions" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructions</label>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 w-full mb-6 group">
                  <label htmlFor="exercise_type_select" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type of Exercise (Optional)</label>
                  <select onChange={setSelectedOptionType} id="exercise_type_select" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                      <option key="default" value="default">Choose an exercise type</option>
                              {
                                  exerciseTypes.map(option => (
                                      <option key={option.value} value={option.value}>{option.type}</option>
                                  ))
                              }
                  </select>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                  <label htmlFor="muscle_select" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Primary Muscle Group (Optional)</label>
                  <select onChange={setSelectedOptionMuscle} id="muscle_select" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                      <option key="default" value="default">Choose a muscle group</option>
                          {
                              muscleGroups.map(option => (
                                  <option key={option.value} value={option.value}>{option.type}</option>
                              ))
                          }
                  </select>
              </div>
          </div>
          </form>

          <div className="flex">
              <button type="submit" form="post_form" className="mr-2 btn bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit Exercise</button>
          </div>

      </div>
   );
}
 
export default NewExercise;
