import Head from 'next/head';
import ClientTable from '../../../components/clientTable';
import { ensureAuth } from '../../../utils/ensureAuth';
import AddClientModal from '../../../components/clientAddModal';

export default function Clients({ clientList }) {
    return (
    <div>
        <Head>
            <title>Clients | PT Platform</title>
        </Head>
        <div className="flex items-stretch justify-between">
          <h1 className="mb-5 ml-10 text-2xl font-bold">Clients</h1> 
          <AddClientModal />
        </div>
        
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