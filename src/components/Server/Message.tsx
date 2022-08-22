
interface Props {
  text: String;
}

export default function Message({ text }: Props) {
  return (
      <div className="flex gap-4 hover:bg-whisper/50 p-2">
        <div className="w-12 h-12 bg-elm rounded-full flex-shrink-0 cursor-pointer"></div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <div className="text-whisper font-semibold cursor-pointer hover:underline hover:underline-offset-2">
              Test
            </div>
            <div className="text-whisper/60 text-xs">Today at 10:45 AM</div>
          </div>
          <div className="text-whisper">{text}</div>
        </div>
      </div>
  );
}
