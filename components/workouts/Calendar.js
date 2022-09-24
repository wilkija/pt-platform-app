import { Menu, Transition } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';
import { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import FlexIcon from '../icons/stretch.svg';
import DBIcon from '../icons/dumbbell.svg';
import BalanceIcon from '../icons/balance.svg';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendar({ setFormDay, entries }) {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  const handleSelectedDay = () => {
      setFormDay(selectedDay);
      // console.log(selectedDay);
  }

  useEffect(() => {
    handleSelectedDay()
  })

  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayMeetings = entries.filter((entry) =>
    isSameDay(parseISO(entry.date), selectedDay)
  )

  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900 dark:text-white">
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDay(day) 
                    }}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white dark:text-black',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-blue-600',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900 dark:text-white',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400 dark:text-white',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-blue-600',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900 dark:bg-gray-400',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200 dark:hover:bg-gray-600',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {entries.some((entry) =>
                      isSameDay(parseISO(entry.date), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900 dark:text-white text-xl">
              Workouts for{' '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, 'MMM dd, yyy')}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((entry) => (
                  <Routine entry={entry} key={entry._id} />
                ))
              ) : (
                <p>Rest day.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}

function Routine({ entry }) {
  // let startDateTime = parseISO(entries.date)
  // let endDateTime = parseISO(entries.date)
  const typeIcon = (param) => {
    switch (param) {
      case 'endurance':
        return <FontAwesomeIcon icon={faRunning} className="w-7 h-7" />;
      case 'strength':
        return <DBIcon className="w-7 h-7" />;
      case 'flexibility':
        return <FlexIcon className="w-7 h-7" />;
      case 'balance':
        return <BalanceIcon className="w-7 h-7" />;
      default:
        return <FontAwesomeIcon icon={faRunning} className="w-7 h-7" />;
    }
  }

    const handleDelete = async (e) => {
      // Stop the form from submitting and refreshing the page.
      e.preventDefault();

      try {
          // Get data from the form.

          // Send the form data to our API and get a response.
          const response = await fetch(`/api/calendar/` + entry._id, {
              // The method is DELETE because want to remove the user.
              method: 'DELETE',
          })

          // Get the response data from server as JSON.
          // If server returns the name submitted, that means the form works.
          const result = await response.json();
          console.log(result);

          if (result.success) {
              window.location.reload();
              alert(`Scheduled Workout has been deleted!`)
          }
      } catch (error) {
          console.log(error);
      }
      
  }

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl hover:bg-gray-100 dark:hover:bg-gray-400">
      <div className='flex-auto items-center align-middle'>
        <div className='flex items-center align-middle justify-start'>
          {typeIcon(entry.workout.type)}
          <h3 className="text-gray-900 dark:text-white font-bold text-xl ml-4">{entry.workout.title}</h3>
        </div>
        <div className="text-gray-900 dark:text-white mt-4" dangerouslySetInnerHTML={{ __html: entry.workout.body}}></div>
      </div>

      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link href={'/trainer/workouts/' + entry.workout._id}><a
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Edit
                  </a></Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <form onSubmit={handleDelete}><button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Delete
                  </button></form>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]
