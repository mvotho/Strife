import { useQuery } from "@tanstack/react-query";
//import clsx from "clsx";
// import { atom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//import { Link, NavLink, useParams } from "react-router-dom";
//import { lastSeenChannelAtom } from "../../atoms";
import { supabase } from "../../supabaseClient";
import { PlusIcon } from '@heroicons/react/24/solid'
import ChannelModal from "./ChannelModal";

export type Channel = {
  id: string;
  name: string;
  created_at: Date;
  server_id: string;
};

export function ChannelList() {
  let { server } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  
  console.log(server)
  //const setLastSeenChannelAtom = useSetAtom(lastSeenChannelAtom);

  const { data } = useQuery([`${server}:channels`], async () => {
    const { data } = await supabase
      .from("Channels")
      .select("*")
      .eq("server_id", server!);
    return data;
  });

  return (
    <>
    <div className="flex flex-col gap-1 w-full h-full bg-mineshaft text-whisper/50">
      <div className="flex flex-row items-center justify-center bg-mineshaft space-x-4"><div>Channels</div><button onClick={()=>{setIsOpen(true)}}><PlusIcon className="h-6 w-6"></PlusIcon></button></div>
      {data?.map((channel) => (
        <Link 
        key={channel.id}
        to={`/${server}/${channel.id}`}>- {channel.name}</Link>
      ))}
    </div>
    <ChannelModal isOpen={isOpen} setIsOpen={setIsOpen}></ChannelModal>
    </>
  );
}