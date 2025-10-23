import React, { useState } from "react";
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

  const [record, setRecord] = useState([]);
  const handleRecord = () => {
    const current = `
            ${hours.toString().padStart(2, "0")}:
            ${minutes.toString().padStart(2, "0")}:
            ${seconds.toString().padStart(2, "0")}:
            ${Math.floor(milliseconds / 10)
              .toString()
              .padStart(2, "0")}
             `;
    setRecord((prev) => [...prev, current]); // keep all records
    console.log("Recorded:", current);
  };

  return (
    <div >
      <div
        className="h-screen w-full relative overflow-auto flex flex-col items-center "
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
          className=" w-[80%] md:w-[35%] md:h-72 h-52 bg-gradient-to-br from-cyan-400 via-pink-600 to-emerald-800 rounded-t-[280px] absolute m-auto md:my-20 my-44 shadow-lg shadow-cyan-500/50  "
          style={{
            boxShadow: `
              0-15px 25px rgba(0,198,255,0.2),
              0 -10px 15px rgba(255,0,128,0.2),
              0 -5px 10px rgba(155,0,255,0.2)
              `,
          }}
        >
          <div className=" flex justify-center items-end md:py-10 py-8 absolute inset-3 bg-[#090013]/90  rounded-t-full bottom-0 ">
            <h1
              className=" md:text-6xl text-3xl text-white font-bold slashed-zero  font-mono scale-y-150 md:tracking-wider  "
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
        <div className="flex justify-evenly gap-3 md:gap-8 h-full items-end mt-20 md:-mt-64">
          <button
            onClick={start}
            className=" md:px-6 md:py-2 px-3 py-1 md:rounded-xl rounded-lg bg-gradient-to-tr from-cyan-400/50 via-pink-600/30 to-emerald-800/55 brightness-150 text-white  hover:scale-105"
          >
            Start
          </button>
          <button
            onClick={pause}
            className=" md:px-6 md:py-2 px-3 py-1 md:rounded-xl rounded-lg bg-gradient-to-tr from-cyan-400/50 via-pink-600/30 to-emerald-800/55 brightness-150 text-white  hover:scale-105"
          >
            Pause
          </button>
          <button
            onClick={() => {
              reset(new Date(), false);
              setRecord([])
            }}
            className=" md:px-6 md:py-2 px-3 py-1 md:rounded-xl rounded-lg bg-gradient-to-tr from-cyan-400/50 via-pink-600/30 to-emerald-800/55 brightness-150 text-white    hover:scale-105 "
          >
            Restart
          </button>
          <button
            onClick={handleRecord}
            className=" md:px-6 md:py-2 px-3 py-1 md:rounded-xl rounded-lg bg-gradient-to-tr from-cyan-400/50 via-pink-600/30 to-emerald-800/55 brightness-150 text-white    hover:scale-105 "
          >
            record
          </button>
        </div>
        <div className="mt-7 rounded w-[80%] md:w-[35%] md:max-h-64 mb-6 overflow-y-auto flex flex-col gap-2 md:h-64 h-full bg-gradient-to-br from-cyan-400 via-pink-600 to-emerald-800 relative" >
          <div className=" md:py-10 py-8 m-3 rounded bg-[#090013]/90 h-screen ">
          {record.map((r, i) => (
            
            <h1 key={i} className="text-white relative  text-2xl font-mono text-center scale-y-125 font-bold"style={{
                textShadow: `
              0 0 2px #00c6ff`,
              }}>
              <span className="border-none text-shadow-none text-lg ">🚩</span>{r}
            </h1>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
export default App;
