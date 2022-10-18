import ClientTable from '../../../components/clientTable';
import { ensureAuth } from '../../../utils/ensureAuth';
import AddClientModal from '../../../components/clientAddModal';
import { useSession } from "next-auth/react";
import MetaData from '../../../components/MetaData';

export default function Clients({ clientList }) {
  const { data: session, loading } = useSession();

  if (session) {
    return (
    <>
        <MetaData title={"Clients | PT Platform"}/>
        <div className="flex items-stretch justify-between">
          <h1 className="mb-5 ml-10 text-2xl font-bold">Clients</h1> 
          <AddClientModal />
        </div>
        
        <ClientTable data={clientList}></ClientTable>
    </>
    )
  } else if (loading) {
    return (
      <>
        <p>One moment please. Content is loading...</p>
      </>
    );
  }

}

export async function getServerSideProps(context) {
  const host = process.env.NEXTAUTH_URL;
  const res = await fetch(`${host}/api/clients`)
                      .then((res) => res.json());
  const clientList = await res.data;  

  return ensureAuth(context, (session) => {
    
      return {
        props: { clientList, session }
      }
    })
}