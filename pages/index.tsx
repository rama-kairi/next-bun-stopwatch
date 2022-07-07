import React from 'react';

export default function Home({}) {
  const [time, setTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [intervalStore, setintervalStore] = React.useState(null);

  React.useEffect(() => {
    if (isRunning) {
      setintervalStore(
        setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000)
      );
    } else {
      clearInterval(intervalStore);
      setTime(0);
    }

    return () => clearInterval(intervalStore);
  }, [isRunning]);

  return (
    <div className="">
      <h1>Stopwatch Bun</h1>
      <h2>{time}</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setIsRunning(false)}>Reset</button>
    </div>
  );
}
