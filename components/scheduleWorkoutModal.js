import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import PlusSignIcon from "./icons/plus.svg";
import WorkoutList from './clients/WorkoutList';


const ScheduleWorkoutModal = ({ client, workouts, formDay }) => {
    let [isOpen, setIsOpen] = useState(false)
    const [workoutSelect, setSelect] = useState(null);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
        
    const handlePost = async (e) => {
        // Stop the form from submitting and refreshing the page.
        e.preventDefault();

        try {
            // Get data from the form.
            const data = {
                date: formDay,
                workout: workoutSelect,
                clientId: client._id,
            };
            console.log(data)
    
            const JSONdata = JSON.stringify(data);
    
            // Send the form data to our API and get a response.
            const response = await fetch(`/api/calendar`, {
                // Body of the request is the JSON data we created above.
                body: JSONdata,
        
                // Tell the server we're sending JSON.
                headers: {
                'Content-Type': 'application/json',
                },
                // The method is PUT because we are sending data to be updated.
                method: 'POST',
            })
    
            // Get the response data from server as JSON.
            // If server returns the name submitted, that means the form works.
            const result = await response.json();
            console.log(result);
    
            if (result.success) {
                alert(`Workout has been added!`);
                window.location.reload();
                closeModal();
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <>
            {/* Modal toggle */}
            <button className="flex btn bg-blue-700 hover:bg-white hover:text-black rounded-lg text-white font-medium mr-4 px-6 py-3 text-lg text-center" 
            type="button" 
            data-modal-toggle="authentication-modal"
            onClick={openModal}
            >
            <PlusSignIcon className="my-auto mr-2"/> Schedule Workout
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                        >
                        </Dialog.Title>
                        {/*  Modal content  */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <button onClick={closeModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>  
                                </button>
                                <div className="py-6 px-6 lg:px-8">
                                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Schedule Workout</h3>
                                    <form className="space-y-6" onSubmit={handlePost}>
                                        <WorkoutList setSelect={setSelect} data={workouts}/>
                                        <button type="submit" className="w-full btn bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm px-5 py-2.5 text-center">Schedule Selected Workout</button>
                                    </form>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ScheduleWorkoutModal;