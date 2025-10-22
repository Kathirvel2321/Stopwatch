import React from "react";
import { useStopwatch } from "react-timer-hook";

function App() {
  const {
    totalSeconds,
    milliseconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false, interval: 20 });

  return (
    <div>
    <div
      className="h-screen w-full relative overflow-hidden flex flex-col items-center "
      style={{
        backgroundColor: "#090013",
        backgroundImage: `
      radial-gradient(circle at 20% 30%, rgba(0,198,255,0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 20%, rgba(255,0,128,0.15) 0%, transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(155,0,255,0.15) 0%, transparent 40%),
      radial-gradient(circle at 70% 60%, rgba(255,255,0,0.1) 0%, transparent 40%)
    `,

        backgroundBlendMode: "screen",
      }}
    >
      <div
        className=" w-[80%] md:h-72 h-52 bg-gradient-to-br from-cyan-400 via-pink-600 to-emerald-800 rounded-t-[280px] relative m-auto md:my-20 my-44 shadow-lg shadow-cyan-500/50  "
        style={{
          boxShadow: `
    0 -15px 25px rgba(0,198,255,0.2),
    0 -10px 15px rgba(255,0,128,0.2),
    0 -5px 10px rgba(155,0,255,0.2)
  `,
        }}
      >
        <div className=" flex justify-center items-end py-10 absolute inset-3 bg-[#090013]/90  rounded-t-full bottom-0 ">
          <h1
            className=" md:text-6xl text-3xl text-white font-bold slashed-zero  font-mono scale-y-125 md:tracking-wider  "
            style={{
              textShadow: `
              0 0 5px #00c6ff`,
            }}
          >
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}:
            <span>
              {Math.floor(milliseconds / 10)
                .toString()
                .padStart(2, "0")}
            </span>
          </h1>
        </div>
      </div>
      <div className="flex justify-evenly md:w-[20%] gap-5 ">
        <button
          onClick={start}
          className=" px-6 py-2 rounded-xl bg-gradient-to-tr from-cyan-400/50 via-pink-600/30 to-emerald-800/55 brightness-150 text-white    hover:scale-105"
        >
          Start
        </button>
        <button
          onClick={pause}
          className=" px-6 py-2 rounded-xl bg-gradient-to-tr from-cyan-400/50 via-pink-600/30 to-emerald-800/55 brightness-150 text-white  hover:scale-105"
        >
          Pause
        </button>
        <button
          onClick={() => reset(new Date(), false)}
          className=" px-6 py-2 rounded-xl bg-gradient-to-tr from-cyan-400/50 via-pink-600/30 to-emerald-800/55 brightness-150 text-white    hover:scale-105 "
        >
          Restart
        </button>
      </div>
    </div>

    </div>
  );
}
export default App;
