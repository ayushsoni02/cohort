import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="text-lg w-screen h-screen flex items-center justify-center"  >
    <div>
    ToDo Application 
     <br />
    <Link className="text-md border m-2" href="/signup">Signup in Todo</Link>
         <br />
    <Link className="text-md border m-2" href="/signin">Signin in Todo</Link>

    </div>
   </div>
  );
}
