import { Link } from "react-router-dom";

export const NotFound= () =>{
    
      return (
            <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
          <div className="max-w-xl px-5 text-center">
            <h2 className="mb-2 text-[42px] font-bold text-zinc-800">Strife</h2>
            <Link to={"/app"}/>
          </div>
        </div>
      )
    }

export default NotFound;