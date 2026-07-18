import { useState, useEffect, useRef } from "react";
// import "./Dashboard.css";

function Dashboard() {

  const timerRef = useRef(null);

  const timerTypes = {
    focus: 25,
    break: 5,
    longBreak: 15,
  };

  const [timerType, setTimerType] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(timerTypes.focus * 60);
  const [customTime, setCustomTime] = useState(timerTypes.focus);
  const [isRunning, setIsRunning] = useState(false);

  // Convert seconds to minutes and seconds

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Change Timer

  const changeTimer = (type) => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimerType(type);
    setCustomTime(timerTypes[type]);
    setTimeLeft(timerTypes[type] * 60);
  };

  // Start Timer

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
  };

  // Pause Timer

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  // Reset Timer

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimeLeft(timerTypes[timerType] * 60);
  };

  // Countdown

  useEffect(() => {
    if (!isRunning) return;
    timerRef.current = setInterval(() => {

      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsRunning(false);
          alert("🎉 Time Completed!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          Pomodoro Timer
        </h1>
        <p className="text-muted">
          Stay Focused. Work Smarter.
        </p>
      </div>
      <div className="row justify-content-center g-3 mb-5">
        <div className="col-md-3">
          <button
            className="btn btn-primary w-100 py-3"
            onClick={() => changeTimer("focus")}
          >
            Focus Period
            <br />
            <strong>25 min</strong>
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-success w-100 py-3"
            onClick={() => changeTimer("break")}
          >
            Break
            <br />
            <strong>5 min</strong>
          </button>
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-warning w-100 py-3"
            onClick={() => changeTimer("longBreak")}
          >
            Long Break
            <br />
            <strong>15 min</strong>
          </button>
        </div>
      </div>
      <div className="timer-card text-center mx-auto">
        <h1 className="display-1 fw-bold">
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </h1>
        <div className="mt-4">
          <button
            className="btn btn-primary me-2"
            onClick={startTimer}
          >
            Start
          </button>

          <button
            className="btn btn-secondary me-2"
            onClick={pauseTimer}
          >
            Pause
          </button>

          <button
            className="btn btn-danger"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>
                Custom Time
              </h5>

              <input
                type="number"
                className="form-control my-3"
                value={customTime}
                onChange={(e) => setCustomTime(Number(e.target.value))}
              />

              <button
                className="btn btn-dark w-100"
                onClick={() => {
                  clearInterval(timerRef.current);
                  setIsRunning(false);
                  setTimeLeft(customTime * 60);
                }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;