import DEVIcon from "../icons/DEVIcon";
import Logo from "../icons/Logo";
import TwitterIcon from "../icons/TwitterIcon";
import { YouTubeIcon } from "../icons/Youtubeicon";
import { Button } from "./Button";
import SidebarItem from "./SidebarItem";

export default function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 border-gray-100 shadow-2xl pl-6 flex flex-col">
          <div className="flex text-2xl font-bold text-gray-800 items-center pt-8">
           <div className="pr-2 text-purple-600">
            <Logo />
            </div>
            Brainly
          </div>
        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItem text="YouTube" icon={<YouTubeIcon/>}/>
            <SidebarItem text="DEV Community" icon={<DEVIcon/>}/>
            </div> 
            <div className="mt-auto pr-6 px-4 pb-6">
             <Button fullWidth={true} variant="primary" text="logout"></Button> 
            </div>
    </div>
}