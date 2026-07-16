import { useState } from "react";
// import "./src/pages/storage/S"
// import "./Dashboard.css";

function Dashboard() {
  const [minutes, setMinutes] = useState(25);
  const [customTime, setCustomTime] = useState(25);

  const changeTimer = (time) => {
    setMinutes(time);
    setCustomTime(time);
  };

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Pomodoro Timer</h1>
        <p className="text-muted">
          Stay focused. Work smarter.
        </p>
      </div>

      <div className="row justify-content-center g-3 mb-5">

        <div className="col-md-3">
          <button
            className="btn btn-primary w-100 py-3"
            onClick={() => changeTimer(25)}
          >
            Focus Period
            <br />
            <strong>25 min</strong>
          </button>
        </div>

        <div className="col-md-3">
          <button
            className="btn btn-success w-100 py-3"
            onClick={() => changeTimer(5)}
          >
            Break
            <br />
            <strong>5 min</strong>
          </button>
        </div>

        <div className="col-md-3">
          <button
            className="btn btn-warning w-100 py-3"
            onClick={() => changeTimer(15)}
          >
            Long Break
            <br />
            <strong>15 min</strong>
          </button>
        </div>

      </div>

      <div className="timer-card text-center mx-auto">

        <h1 className="display-1 fw-bold">
          {minutes}:00
        </h1>

        <div className="mt-4">

          <button className="btn btn-primary me-2">
            Start
          </button>

          <button className="btn btn-secondary me-2">
            Pause
          </button>

          <button className="btn btn-danger">
            Reset
          </button>

        </div>

      </div>

      <div className="row justify-content-center mt-5">

        <div className="col-md-4">

          <div className="card shadow-sm">

            <div className="card-body">

              <h5>Custom Time</h5>

              <input
                type="number"
                className="form-control my-3"
                value={customTime}
                onChange={(e) => setCustomTime(e.target.value)}
              />

              <button
                className="btn btn-dark w-100"
                onClick={() => setMinutes(customTime)}
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