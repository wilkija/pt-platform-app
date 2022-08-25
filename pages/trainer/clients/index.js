import Head from 'next/head';
import ClientTable from '../../../components/clientTable';
import LayoutNew from '../../../components/layoutNew';
import { ensureAuth } from '../../../utils/ensureAuth';

export default function Clients({ clientList }) {
    return (
    <div>
        <Head>
            <title>Clients | PT Platform</title>
        </Head>
        <ClientTable data={clientList}></ClientTable>
    </div>
    )
  }

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/clients')
                      .then((res) => res.json());
  const clientList = await res.data;  
  
  return ensureAuth(context, (session) => {
      return {
        props: { clientList, session }
      }
    })
}

Clients.getLayout = function getLayout(page) {
    return (
      <LayoutNew>
        {page}
      </LayoutNew>
    )
  }