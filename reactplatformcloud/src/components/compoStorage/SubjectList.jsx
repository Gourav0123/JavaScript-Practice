import "./SubjectList.css";

const subjects = [
  {
    id: 1,
    name: "English",
    files: 24,
    icon: "bi bi-book",
    color: "primary",
  },
  {
    id: 2,
    name: "Mathematics",
    files: 35,
    icon: "bi bi-calculator",
    color: "success",
  },
  {
    id: 3,
    name: "Reasoning",
    files: 18,
    icon: "bi bi-puzzle",
    color: "warning",
  },
  {
    id: 4,
    name: "General Studies",
    files: 26,
    icon: "bi bi-globe-central-south-asia",
    color: "danger",
  },
  {
    id: 5,
    name: "Current Affairs",
    files: 12,
    icon: "bi bi-newspaper",
    color: "info",
  },
  {
    id: 6,
    name: "Previous Papers",
    files: 15,
    icon: "bi bi-file-earmark-text",
    color: "secondary",
  },
  {
    id: 7,
    name: "Mock Tests",
    files: 20,
    icon: "bi bi-clipboard-check",
    color: "dark",
  },
  {
    id: 8,
    name: "Notes",
    files: 32,
    icon: "bi bi-journal-text",
    color: "primary",
  },
];

function SubjectList() {
  return (
    <div className="subject-card">

      <div className="subject-header">
        <h5>Subjects</h5>
        <button className="btn btn-primary btn-sm">
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>

      <div className="subject-list">

        {subjects.map((subject) => (

          <div className="subject-item" key={subject.id}>

            <div className="subject-left">

              <div className={`subject-icon bg-${subject.color}`}>
                <i className={`${subject.icon} text-white`}></i>
              </div>

              <div>
                <h6>{subject.name}</h6>
                <small>{subject.files} Files</small>
              </div>

            </div>

            <i className="bi bi-chevron-right"></i>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SubjectList;