import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

interface Props {
  text: String;
  id: String;
  time: String
}

export default function Message({ text, id, time }: Props) {

  const [username, setUsername] = useState<any>();

  const getMessages = async () => {

    let { data, error, status } = await supabase
      .from("Users")
      .select("*")
      .eq("id", id)
      
      if(data){
        setUsername(data[0].username);
      }
  }

  
      useEffect(() => {
        setUsername([]);
        getMessages();
      }, [id])

      
      return (
        <div className="flex gap-4 hover:bg-whisper/50 p-2">
          <div className="w-12 h-12 bg-elm rounded-full flex-shrink-0 cursor-pointer"></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="text-whisper font-semibold cursor-pointer hover:underline hover:underline-offset-2">
                {username}
              </div>
              <div className="text-whisper/60 text-xs">{time}</div>
            </div>
            <div className="text-whisper">{text}</div>
          </div>
        </div>
      );
    }
