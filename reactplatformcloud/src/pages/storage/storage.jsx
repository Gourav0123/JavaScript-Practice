import SubjectList from "../../components/compoStorage/SubjectList";
import FileTable from "../../components/tables/FileTable";
function Storage() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">

        <div className="col-lg-4 mb-4">
          <SubjectList />
        </div>

        <div className="col-lg-8">
          <FileTable />
        </div>

      </div>
    </div>
  );
}

export default Storage;