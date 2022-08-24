import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function ServerList() {
  const { data } = useQuery(["servers"], async () => {
    const { data } = await supabase.from("Servers").select("*");
    return data;
  });




  const mutation = useMutation(
    async (server: string) => {
      const { data, error } = await supabase
        .from("Servers")
        .insert([{ name: "test", channel_id: 1, owner_id: 1 }]);
      return data;
    }
  );

  // function onClick() {
  //   mutation.mutate();
  //   console.log()
  // }

  return (
    <div className="flex flex-row items-center gap-4 p-4 h-1/6 overflow-y-auto bg-mineshaft">
      <div className="flex flex-row gap-4 rounded-full">
        {data?.map((data) => (
          <Link
            key={data.id}
            to={`/${data.id}`}
            className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r from-flamingo to-whisper"
          >{data.name}</Link>
        ))}


        <div className="flex flex-row gap-4 bg-whisper rounded-full">
          <button className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r bg-flamingo hover:bg-whisper">New</button>
        </div>
      </div>
    </div>
  );
}