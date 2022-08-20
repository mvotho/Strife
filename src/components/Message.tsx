
interface Props {
  text: String;
}

export default function Message({ text }: Props) {
  return (
      <div className="flex gap-4 hover:bg-gray-800/30 p-2">
        <div className="w-12 h-12 bg-indigo-600 rounded-full flex-shrink-0 cursor-pointer"></div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <div className="text-red-500 font-semibold cursor-pointer hover:underline hover:underline-offset-2">
              Test
            </div>
            <div className="text-black text-xs">Today at 10:45 AM</div>
          </div>
          <div className="text-black">{text}</div>
        </div>
      </div>
  );
}
