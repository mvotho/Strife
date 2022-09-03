import { defaultAbiCoder } from "ethers/lib/utils";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

interface Props {
  text: string;
  user: string;
  time: string
}

export default function Message({ text, user, time }: Props) {

  

      let isoDate = time;
      var d = new Date(isoDate);
      d.toLocaleDateString('en-GB')

      
      return (
        <div className="flex gap-4 hover:bg-whisper/50 p-2">
          <div className="w-12 h-12 bg-elm rounded-full flex-shrink-0 cursor-pointer"></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="text-whisper font-semibold cursor-pointer hover:underline hover:underline-offset-2">
                {user}
              </div>
              <div className="text-whisper/60 text-xs">{d.toTimeString().slice(0,9)} {d.toLocaleDateString()}</div>
            </div>
            <div className="text-whisper">{text}</div>
          </div>
        </div>
      );
    }
