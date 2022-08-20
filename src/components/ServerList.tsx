import { useQuery } from "@tanstack/react-query";
import { supabase } from "../supabaseClient";

export default function ServerList() {
  const { data } = useQuery(["servers"], async () => {
    const { data } = await supabase.from("Servers").select("*");
    return data;
  });

  return (
    <div className="flex flex-row items-center gap-4 p-4 h-1/6 overflow-y-auto bg-gray-900">
      <div className="flex flex-row gap-4 bg-gray-800 rounded-full">
        {data?.map((data) => (
          <div
            key={data.id}
            className="w-12 h-12 rounded-[24px] transition-all hover:rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >{data.name}</div>
        ))}
      </div>
    </div>
  );
}