import { useState, useEffect } from "react";
import { useSession, getSession } from "next-auth/react";
import LayoutNew from '../../components/layoutNew';
import MetaData from "../../components/metaData";
import { ensureAuth } from "../../utils/ensureAuth";

export default function Trainer() {
  // const { data: session, loading } = useSession();
  // const [content, setContent] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/api/secret");
  //     const json = await res.json();

  //     if (json.content) {
  //       setContent(json.content);
  //     }
  //   };
  //   fetchData();
  // }, [session]);

  // if (typeof window !== "undefined" && loading) return null;

  // if (!session) {
  //   return (
  //       <main>
  //         <div>
  //           <h1>You aren't signed in, please sign in first</h1>
  //         </div>
  //       </main>
  //   );
  // }
  return (
      <>
      <MetaData title={"Home | PT Platform"}/>
      <main className="w-[90%] md:w-[85%] xl:w-[75%] mx-auto flex items-center justify-center my-20">
        <div>
          <h1> Protected Page</h1>
          {/* <p>{content}</p> */}
        </div>
      </main>
      </>
  );
}

export async function getServerSideProps(context) {
    return ensureAuth(context, (session) => {
      return {
        props: { session }
      }
    })
}


Trainer.getLayout = function getLayout(page) {
  return (
    <LayoutNew>
      {page}
    </LayoutNew>
  )
}