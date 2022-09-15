import Head from 'next/head';
import ExerciseTable from '../../../components/exerciseTable';
import { ensureAuth } from '../../../utils/ensureAuth';
import Link from 'next/link';
import PlusSignIcon from "../../../components/icons/plus.svg";


export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/exercises')
                      .then((res) => res.json());
  const exerciseList = await res.data;

  return ensureAuth(context, (session) => {
    return {
      props: { exerciseList, session }
    }
  })
}

export default function Exercises({ exerciseList }) {
    return (
    <div>
        <Head>
            <title>Exercises | PT Platform</title>
        </Head>
        <div className="flex items-stretch justify-between">
          <h1 className="mb-5 ml-10 text-2xl font-bold">Exercises</h1> 
          <Link href='/trainer/exercises/new'><button className="flex btn bg-blue-700 hover:bg-white hover:text-black rounded-lg text-white font-medium mr-4 px-6 py-3 text-lg text-center" 
                        type="button"
                        >
                        <PlusSignIcon className="my-auto mr-2"/>Add Exercise
                        </button></Link>
        </div>
        <ExerciseTable data={exerciseList}></ExerciseTable>
    </div>
    )
  }
