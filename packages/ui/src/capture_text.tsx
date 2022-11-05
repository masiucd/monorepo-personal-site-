import {tw} from "lib"

const CaptureText = ({text, styles = ""}: any) => (
  <span
    className={tw(
      "h-8 rounded-md px-2 flex items-center before:content-[''] before:absolute before:pointer-events-none before:w-3 before:h-3 before:bg-blue-400 before:z-0 before:-translate-x-1 before:-translate-y-1 hover:before:w-[2rem]  hover:before:bg-blue-400/60 before:transition-all",
      styles
    )}
  >
    <span className="relative ">{text}</span>
  </span>
)

export {CaptureText}
