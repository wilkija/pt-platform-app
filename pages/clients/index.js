import Head from 'next/head';
import ClientTable from '../../components/clientTable';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return {
        props: { data, }
    }
}

export default function Clients({ data }) {
    return (
    <div>
        <Head>
            <title>Clients | PT Platform</title>
        </Head>
        <ClientTable data={data}></ClientTable>
    </div>
    )
  }
  