import { signOut, useSession } from "next-auth/react";
import FrontPage from '../components/frontPage';
import MetaData from '../components/MetaData';
import Link from "next/link";

export default function Home() {
  const { data: session, loading } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="btn bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm px-5 py-2.5 text-center"
        onClick={() => signOut()}>Sign Out</button>
        <div>You can now access our website</div>
        <Link href="/trainer"><button className="btn bg-blue-700 hover:bg-white hover:text-black rounded-lg block text-white font-medium text-sm px-5 py-2.5 text-center"
        >To Dashboard</button></Link>
      </>
    )
  } else {
    return (
      <>
        <MetaData title={"Best App for Personal Training | PT Platform"}/>
        <FrontPage />
      </>
    )
  }
}
