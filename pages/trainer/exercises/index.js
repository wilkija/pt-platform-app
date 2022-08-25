import Head from 'next/head';
import ExerciseTable from '../../../components/exerciseTable';
import LayoutNew from '../../../components/layoutNew';
import { ensureAuth } from '../../../utils/ensureAuth';

// export const getServerSideProps = async () => {

//     const res = await fetch('https://jsonplaceholder.typicode.com/photos');
//     const data = await res.json();

//     return {
//         props: { data }
//     }
// }

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
        <ExerciseTable data={exerciseList}></ExerciseTable>
    </div>
    )
  }

Exercises.getLayout = function getLayout(page) {
    return (
      <LayoutNew>
        {page}
      </LayoutNew>
    )
  }