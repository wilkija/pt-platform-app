import { signIn } from "next-auth/react";
import Accordion from "/components/home/accordion";

const FrontPage = () => {
    return ( 
        <>
        <header>
            <nav className="container flex items-center py-4 mt-4 sm:mt-12">
                <div className="py-1 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 448 512" fill="currentcolor"><path d="M272 0C289.7 0 304 14.33 304 32C304 49.67 289.7 64 272 64H256V98.45C293.5 104.2 327.7 120 355.7 143L377.4 121.4C389.9 108.9 410.1 108.9 422.6 121.4C435.1 133.9 435.1 154.1 422.6 166.6L398.5 190.8C419.7 223.3 432 262.2 432 304C432 418.9 338.9 512 224 512C109.1 512 16 418.9 16 304C16 200 92.32 113.8 192 98.45V64H176C158.3 64 144 49.67 144 32C144 14.33 158.3 0 176 0L272 0zM248 192C248 178.7 237.3 168 224 168C210.7 168 200 178.7 200 192V320C200 333.3 210.7 344 224 344C237.3 344 248 333.3 248 320V192z"/></svg>
                <h2 className="text-xl font-bold">PT PLATFORM</h2>
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 uppercase text-xs">
                <li className="cursor-pointer">Features</li>
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Contact</li>
                <button type="button" className="btn uppercase bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm px-5 py-2.5 text-center" 
                onClick={() => signIn(null, { callbackUrl: 'http://localhost:3000/trainer' })}>Login</button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end">
                <i className="text-2xl fas fa-bars"></i>
                </div>
            </nav>
            </header>
            {/* Hero */}
            <section className="relative">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                {/* Content */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                <h2 className=" text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                    A Dynamic Personal Training Manager
                </h2>
                <p className="text-gray-500 text-lg text-center lg:text-left mb-6">
                    A clean, simple platform that allows coaches to organize their programming to maximize client results. The up-and-coming personal training software to fit your needs. Try it for free.
                </p>
                <div className="flex justify-center flex-wrap gap-6">
                    <button type="button" className="btn bg-gray-800 text-white hover:bg-white hover:text-black">
                    Sign Up
                    </button>
                    <button type="button" className="btn bg-gray-200 text-black hover:bg-gray-800 hover:text-white">
                    Start Free Trail
                    </button>
                </div>
                </div>
                {/* Image */}
                <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full grayscale" src="https://source.unsplash.com/R0y_bEUjiOM" alt="woman kneeling beside man coaching athletics" />
                </div>
            </div>
            {/* Rounded Rectangle */}
            <div
                className="
                hidden
                md:block
                overflow-hidden
                bg-gray-800
                rounded-l-full
                absolute
                h-80
                w-2/4
                top-32
                right-0
                lg:
                -bottom-28
                lg:-right-36
                "
            ></div>
            </section>

            {/* Features */}
            <section className="py-20 mt-20 lg:mt-60">
            {/* Heading */}
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center ">Features</h1>
                <p className="text-center text-gray-500 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            {/* Feature #1 */}
            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                {/* Image */}
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img
                    className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                    src="https://source.unsplash.com/93Tb_IkmTxA"
                    alt=""
                    />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl ">Write workouts on the go</h1>
                    <p className="text-gray-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button type="button" className="btn bg-gray-800 text-white hover:bg-white hover:text-black">More Info</button>
                </div>
                </div>
                {/* Rounded Rectangle */}
                <div
                className="
                    hidden
                    lg:block
                    overflow-hidden
                    bg-gray-800
                    rounded-r-full
                    absolute
                    h-80
                    w-2/4
                    -bottom-24
                    -left-36
                "
                ></div>
            </div>
            {/* Feature #2 */}
            <div className="relative mt-20 lg:mt-52">
                <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                {/* Image */}
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img
                    className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                    src="https://source.unsplash.com/Lx_GDv7VA9M"
                    alt=""
                    />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl ">Stay connect with your clients</h1>
                    <p className="text-gray-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button type="button" className="btn bg-gray-800 text-white hover:bg-white hover:text-black">More Info</button>
                </div>
                </div>
                {/* Rounded Rectangle */}
                <div
                className="
                    hidden
                    lg:block
                    overflow-hidden
                    bg-gray-800
                    rounded-l-full
                    absolute
                    h-80
                    w-2/4
                    -bottom-24
                    -right-36
                "
                ></div>
            </div>
            {/* Feature #3 */}
            <div className="relative mt-20 lg:mt-52">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                {/* Image */}
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img
                    className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                    src="https://source.unsplash.com/UxkcSzRWM2s"
                    alt=""
                    />
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h1 className="text-3xl ">Track data and share results</h1>
                    <p className="text-gray-500 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button type="button" className="btn bg-gray-800 text-white hover:bg-white hover:text-black">More Info</button>
                </div>
                </div>
                {/* Rounded Rectangle */}
                <div
                className="
                    hidden
                    lg:block
                    overflow-hidden
                    bg-gray-800
                    rounded-r-full
                    absolute
                    h-80
                    w-2/4
                    -bottom-24
                    -left-36
                "
                ></div>
            </div>
            </section>

            {/* Download */}
            <section className="py-20 mt-20">
            {/* Heading */}
            <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center ">Leave paperwork behind, start today</h1>
                <p className="text-center text-gray-500 mt-4">
                Cras fermentum odio eu feugiat pretium nibh ipsum. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. 
                </p>
            </div>
            {/* Cards */}
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                {/* Card 1 */}
                <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                <div className="p-6 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                    <h3 className="mt-5 mb-2 text-lg">Client Management</h3>
                    <p className="mb-2 text-gray-500 font-light">Sed risus pretium quam.</p>
                </div>
                <hr className="border-b border-bookmark-white" />
                <div className="flex p-6">
                    <button type="button" className="flex-1 btn bg-gray-800 text-white hover:bg-white hover:text-black">
                    Get started
                    </button>
                </div>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col rounded-md shadow-md lg:my-8">
                <div className="p-6 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                    <h3 className="mt-5 mb-2  text-lg">Time Efficient</h3>
                    <p className="mb-2 text-gray-500 font-light">Feugiat nibh sed pulvinar.</p>
                </div>
                <hr className="border-b border-white" />
                <div className="flex p-6">
                    <button type="button" className="flex-1 btn bg-gray-800 text-white hover:bg-white hover:text-black">
                    Get started
                    </button>
                </div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col rounded-md shadow-md lg:mt-16">
                <div className="p-6 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                    <h3 className="mt-5 mb-2  text-lg">Account Generation</h3>
                    <p className="mb-2 text-gray-500 font-light">Blandit libero volutpat sed,</p>
                </div>
                <hr className="border-b border-white" />
                <div className="flex p-6">
                    <button type="button" className="flex-1 btn bg-gray-800 text-white hover:bg-white hover:text-black">
                    Get started
                    </button>
                </div>
                </div>
            </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
            <div className="container">
                {/* Heading */}
                <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center ">Frequently Asked Questions</h1>
                <p className="text-center text-gray-500 mt-4">
                    Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                </p>
                </div>
                {/* FAQ Items */}
                <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                
                <Accordion />

                <button type="button" className="mt-12 flex self-center btn bg-gray-800 text-white hover:bg-white hover:text-black">
                    More Info
                </button>
                </div>
                </div>
            </section>

            {/* Contact Us */}
            <section className="bg-gray-800 text-white py-20">
            <div className="container">
                <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                <p className="font-light uppercase text-center mb-8">5,000+ ALREADY JOINED</p>
                <h1 className="text-3xl text-center">Stay up-to-date with the latest news</h1>
                <div className="flex flex-col sm:flex-row gap-6 mt-8">
                    <input
                    type="text"
                    placeholder="Enter your email address"
                    className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
                    />
                    <button type="button" className="btn bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm px-5 py-2.5 text-center">
                    Contact Us
                    </button>
                </div>
                </div>
            </div>
            </section>
        </>
     );
}
 
export default FrontPage;