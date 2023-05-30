import Header from "./Header";

const AddUser = () => {
  return (
    <>
      <Header></Header>
      <h3>Add User</h3>
      <div>
        <div className="row mb-3">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="col-form-label-sm"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            CompanyName
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="col-form-label"
            />
          </div>
        </div>
        <div className="row">
          <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label">
            UserType
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="col-form-label-lg"
            />
          </div>
        </div>
        <button className="btn btn-primary">Save</button>
      </div>
    </>
  );
};

export default AddUser;
