import Head from 'next/head';
import { ensureAuth } from '../../../utils/ensureAuth';
import Link from 'next/link';
import PlusSignIcon from "../../../components/icons/plus.svg";
import WorkoutTable from '../../../components/workouts/WorkoutTable';


export async function getServerSideProps(context) {
  const host = process.env.NEXTAUTH_URL;
  const res = await fetch(`${host}/api/workouts`)
                      .then((res) => res.json());
  const workoutList = await res.data;

  return ensureAuth(context, (session) => {
    return {
      props: { workoutList, session }
    }
  })
}

export default function Workouts({ workoutList }) {
    return (
    <div>
        <Head>
            <title>Workouts | PT Platform</title>
        </Head>
        <div className="flex items-stretch justify-between">
          <h1 className="mb-5 ml-10 text-2xl font-bold">Workouts</h1> 
          <Link href='/trainer/workouts/new'><button className="flex btn bg-blue-700 hover:bg-white hover:text-black rounded-lg text-white font-medium mr-4 px-6 py-3 text-lg text-center" 
                        type="button"
                        >
                        <PlusSignIcon className="my-auto mr-2"/>Add Workout
                        </button></Link>
        </div>
        <WorkoutTable data={workoutList}/>
    </div>
    )
  }