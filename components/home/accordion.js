import { useState } from "react";


const data = [
    {
        question: "Question 1",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        question: "Question 2",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        question: "Question 3",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
];

const Accordion = () => {
    const [clicked, setClicked] = useState(null);
    
    const toggle = (i) => {
        if (clicked === i) {
            return setClicked(null);
        }
        setClicked(i);
    }

    return ( 
        <div id="accordion-flush" data-accordion="collapse">
            {data.map((item, i) => (
                <div key={item} >
                <h2 onClick={() => toggle(i)}>
                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                    <span>{item.question}</span>
                    <svg data-accordion-icon="" className={
                        clicked === i ? "w-6 h-6 rotate-180 shrink-0" : "w-6 h-6 shrink-0"
                    } 
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path></svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-1" className={
                    clicked === i ? '' : 'hidden'
                } 
                aria-labelledby="accordion-flush-heading-1">
                    <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">{item.answer}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
     );
}
 
export default Accordion;