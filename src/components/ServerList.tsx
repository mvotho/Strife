import { HomeIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function ServerList() {

  const nav = useNavigate();
  const user = localStorage.getItem("userid");

  const { data } = useQuery(["members"], async () => {
    const { data } = await supabase.from("Members")
      .select("*, Servers(name, id)")
      .eq("user_id", user)
    return data;
  });

  console.log(data);
  // const mutation = useMutation(
  //   async (server: string) => {
  //     const { data, error } = await supabase
  //       .from("Servers")
  //       .insert([{ name: "test", channel_id: 1, owner_id: 1 }]);
  //     return data;
  //   }
  // );

  // function onClick() {
  //   mutation.mutate();
  //   console.log()
  // }

  return (
    <div className="flex flex-row items-center gap-4 p-4 h-1/6 overflow-y-auto bg-mineshaft">
      <div className="flex flex-row gap-4 rounded-full">
        <div className="flex flex-row gap-4 bg-whisper rounded-full">
          <button className=" flex w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r bg-flamingo hover:bg-whisper items-center justify-center" onClick={() => { nav("/app") }}><HomeIcon className="h-6 w-6"/></button>
        </div>


        {data?.map((data) => (
          <button
            key={data.server_id}
            onClick={() => { nav(`/${data.server_id}`) }} className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r from-flamingo to-whisper "
          >{data.Servers.name}</button>
        ))}


        <div className="flex flex-row gap-4 bg-whisper rounded-full">
          <button className="flex w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r bg-flamingo hover:bg-whisper items-center justify-center" onClick={()=>{}}><PlusIcon className="h-6 w-6" /></button>
        </div>
      </div>
    </div>
  );
}