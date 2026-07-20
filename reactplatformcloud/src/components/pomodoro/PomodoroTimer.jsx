import { useState, useEffect, useRef } from "react";

function PomodoroTimer() {
  // 25 minutes = 1500 seconds
  const [timeLeft, setTimeLeft] = useState(1500);

  // Timer running or not
  const [isRunning, setIsRunning] = useState(false);

  // Store interval ID
  const intervalRef = useRef(null);

  // Ask notification permission once
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  // Notification function
  const showNotification = (title, message) => {
    if (Notification.permission === "granted") {
      new Notification(title, {
        body: message,
      });
    }
  };

  // Start Timer
  const startTimer = () => {
    if (isRunning) return;

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          setIsRunning(false);

          showNotification(
            "🎉 Focus Session Complete!",
            "Take a 5-minute break ☕"
          );

          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);
  };

  // Pause Timer
  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // Reset Timer
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(1500);
  };

  // Convert seconds to MM:SS
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{minutes}:{seconds}</h1>

      <button onClick={startTimer}>Start</button>

      <button onClick={pauseTimer} style={{ marginLeft: "10px" }}>
        Pause
      </button>

      <button onClick={resetTimer} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default PomodoroTimer;