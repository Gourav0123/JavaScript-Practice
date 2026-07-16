function Dashboard() {
  return (
    <div className="container-fluid">

      <div className="mb-4">
        <h2>Welcome Back 👋</h2>
        <p className="text-secondary">
          Manage your cloud infrastructure from one place.
        </p>
      </div>

      {/* Cards */}

      <div className="row">

        <div className="col-lg-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Running VMs</h6>
              <h2>12</h2>
            </div>
          </div>
        </div>

        <div className="col-lg-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>CPU Usage</h6>
              <h2>68%</h2>
            </div>
          </div>
        </div>

        <div className="col-lg-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Storage</h6>
              <h2>2.4 TB</h2>
            </div>
          </div>
        </div>

        <div className="col-lg-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h6>Active Users</h6>
              <h2>43</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Resources */}

      <div className="card shadow-sm mt-4">

        <div className="card-header">
          Recent Resources
        </div>

        <div className="card-body">

          <table className="table">

            <thead>

              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Type</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>VM-Production-01</td>
                <td>
                  <span className="badge bg-success">
                    Running
                  </span>
                </td>
                <td>Virtual Machine</td>
              </tr>

              <tr>
                <td>Database Server</td>
                <td>
                  <span className="badge bg-success">
                    Running
                  </span>
                </td>
                <td>PostgreSQL</td>
              </tr>

              <tr>
                <td>Object Storage</td>
                <td>
                  <span className="badge bg-primary">
                    Healthy
                  </span>
                </td>
                <td>Storage</td>
              </tr>

              <tr>
                <td>Kubernetes Cluster</td>
                <td>
                  <span className="badge bg-warning">
                    Active
                  </span>
                </td>
                <td>Container</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
export default Dashboard;