const updates = [
    {
        name: "Bonnie Radison",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        time: "just now",
        workout: "Core & Cardio Workout 3",
        commentBool: true,
        commentMsg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        name: "Bonnie Radison",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        time: "just now",
        workout: "Core & Cardio Workout 3",
        commentBool: false,
        commentMsg: "",
    },
    {
        name: "Thomas Lean",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        time: "2 hours ago",
        workout: "Weightlifting Meet Prep - Day 5",
        commentBool: true,
        commentMsg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        name: "Thomas Lean",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        time: "3 hours ago",
        workout: "Weightlifting Meet Prep - Day 5",
        commentBool: false,
        commentMsg: "",
    },
    {
        name: "Jese Leos",
        photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        time: "1 day ago",
        workout: "Pull Workout - Week 3, Day 2",
        commentBool: false,
        commentMsg: "",
    },
];

const UpdateFeed = () => {
    return (
        <>    
            <ol className="relative border-l border-gray-300 dark:border-gray-700">                  
                
                {
                    updates.map((data) => (

                        <li className="mb-10 ml-10">            
                            <span className="flex absolute -left-3 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <img className="rounded-full shadow-lg" src={data.photo} alt=""/>
                            </span>
                                {
                                    data.commentBool ?
                                    
                                        <div className="p-4 bg-white rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                                            <div className="justify-between items-center mb-3 sm:flex">
                                                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{data.time}</time>
                                                <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300"><a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">{data.name} </a>
                                                commented on: <span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">{data.workout}</span>
                                                </div>
                                            </div>
                                            <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">{data.commentMsg}</div>
                                        </div>

                                        :

                                        <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-300 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{data.time}</time>
                                            <div className="text-sm font-normal text-gray-500 dark:text-gray-300"><a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">{data.name}</a> completed assigned exercise: <span className="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">{data.workout}</span></div>
                                        </div>
                                }
                        </li>

                    ))
                }
                {/* <li className="mb-10 ml-10">
                    <span className="flex absolute -left-3 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img className="rounded-full shadow-lg" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Thomas Lean image"/>
                    </span>
                    <div className="p-4 bg-white rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                        <div className="justify-between items-center mb-3 sm:flex">
                            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean commented on  <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">Flowbite Pro</a></div>
                        </div>
                        <div className="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
                    </div>
                </li>
                <li className="mb-10 ml-10">
                    <span className="flex absolute -left-3 justify-center items-center w-10 h-10 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img className="rounded-full shadow-lg" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Jese Leos image"/>
                    </span>
                    <div className="justify-between items-center p-4 bg-white rounded-lg border border-gray-300 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                        <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
                        <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Jese Leos has changed <a href="#" className="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Pricing page</a> task status to  <span className="font-semibold text-gray-900 dark:text-white">Finished</span></div>
                    </div>
                </li> */}
            </ol>
        </> 
     );
}
 
export default UpdateFeed;