import SubjectList from "../../components/compoStorage/SubjectList";

function Storage() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">

        <div className="col">
          <SubjectList />
        </div>

        <div className="col-lg-8">
          {/* FileTable will come here */}
        </div>

      </div>
    </div>
  );
}

export default Storage;