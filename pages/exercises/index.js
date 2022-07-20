import Head from 'next/head';
import ExerciseTable from '../../components/exerciseTable';

export const getServerSideProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();

    return {
        props: { data }
    }
}

export default function Exercises({ data }) {
    return (
    <div>
        <Head>
            <title>Exercises | PT Platform</title>
        </Head>
        <ExerciseTable data={data}></ExerciseTable>
    </div>
    )
  }