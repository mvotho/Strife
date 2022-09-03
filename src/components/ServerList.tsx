import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function ServerList() {

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
          <Link className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r bg-flamingo hover:bg-whisper" to={"/app"}>Home</Link>
        </div>
        
        
        {data?.map((data) => (
          <Link
            key={data.server_id}
            to={`/${data.server_id}`}
            className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r from-flamingo to-whisper"
          >{data.Servers.name}</Link>
        ))}


        <div className="flex flex-row gap-4 bg-whisper rounded-full">
          <button className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r bg-flamingo hover:bg-whisper">New</button>
        </div>
      </div>
    </div>
  );
}