"use client";

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
    return <SessionProvider>
     <RealHome/>
    </SessionProvider>
 
}

function RealHome(){
  const session = useSession();

  return (
    <div>
      {session.status === "authenticated"  && <button onClick={()=>signOut()}>Logout</button>}
      {session.status === "unauthenticated"  && <button onClick={()=>signIn()}>Sign in</button>}
          
         {JSON.stringify(session)} 
          </div>
  );

}