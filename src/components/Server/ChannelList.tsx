import { useQuery } from "@tanstack/react-query";
//import clsx from "clsx";
// import { atom, useSetAtom } from "jotai";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//import { Link, NavLink, useParams } from "react-router-dom";
//import { lastSeenChannelAtom } from "../../atoms";
import { supabase } from "../../supabaseClient";

export type Channel = {
  id: string;
  name: string;
  created_at: Date;
  server_id: string;
};

export function ChannelList() {
  let { server } = useParams();
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
    <div className="flex flex-col gap-1 w-full h-full bg-mineshaft text-whisper/50">
      <div className="flex flex-row items-center justify-center bg-mineshaft">Channels</div>
      
      {data?.map((channel) => (
        <Link 
        key={channel.id}
        to={`/${server}/${channel.id}`}>- {channel.name}</Link>
      ))}
      
    </div>
    
  );
}