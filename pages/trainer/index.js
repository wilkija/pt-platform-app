import { useSession } from "next-auth/react";
import MetaData from "../../components/MetaData";
import { ensureAuth } from "../../utils/ensureAuth";
import UpdateFeed from "../../components/dashboard/UpdateFeed";
import LeftPanel from "../../components/dashboard/LeftPanel";

export default function Trainer() {
  const { data: session, loading } = useSession();
  
  const greeting = () => {
    let today = new Date()
    let curHr = today.getHours()

    if (curHr < 12) {
      return 'Good morning,'
    } else if (curHr < 18) {
      return 'Good afternoon,'
    } else {
      return 'Good evening,'
    }
  }
  

  if (session) {
    return (
      <>
      <MetaData title={"Home | PT Platform"}/>
      <main className="w-[100%] mx-auto flex items-center justify-center my-20">
        <div className="container flex items-stretch justify-between">
          <aside className="mr-8">
            <LeftPanel />
          </aside>
          <div>
            <h1 className="mb-5 text-2xl font-bold"> {`${greeting()} ${session.user.name}!`}</h1>
            <UpdateFeed />
          </div>
        </div>

      </main>
      </>
    );
  } else if (loading) {
    return (
      <>
        <p>One moment please. Content is loading...</p>
      </>
    );
  }
  
}

export async function getServerSideProps(context) {
    return ensureAuth(context, (session) => {
      return {
        props: { session }
      }
    })
}
