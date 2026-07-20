import "./FileTable.css";

function FileTable() {
  const files = [
    {
      id: 1,
      name: "Percentage Notes.pdf",
      type: "PDF",
      size: "2.4 MB",
      uploadedBy: "Gourav",
      date: "20 Jul 2026",
    },
    {
      id: 2,
      name: "Algebra Formula.pdf",
      type: "PDF",
      size: "1.8 MB",
      uploadedBy: "Admin",
      date: "19 Jul 2026",
    },
    {
      id: 3,
      name: "Practice Questions.docx",
      type: "DOCX",
      size: "540 KB",
      uploadedBy: "Teacher",
      date: "18 Jul 2026",
    },
    {
      id: 4,
      name: "Important Tricks.xlsx",
      type: "Excel",
      size: "890 KB",
      uploadedBy: "Admin",
      date: "17 Jul 2026",
    },
  ];

  return (
    <div className="file-table-container">
      <div className="table-header d-flex justify-content-between align-items-center mb-3">
        <h4>Study Materials</h4>
        <button className="btn btn-primary">
          Upload File
        </button>
      </div>

      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Type</th>
            <th>Size</th>
            <th>Uploaded By</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {files.map((file) => (
            <tr key={file.id}>
              <td>{file.name}</td>
              <td>
                <span className="badge bg-primary">
                  {file.type}
                </span>
              </td>
              <td>{file.size}</td>
              <td>{file.uploadedBy}</td>
              <td>{file.date}</td>
              <td>
                <button className="btn btn-sm btn-success me-2">
                  View
                </button>

                <button className="btn btn-sm btn-warning me-2">
                  Edit
                </button>

                <button className="btn btn-sm btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default FileTable;