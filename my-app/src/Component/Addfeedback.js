import React from "react";

const Addfeedback = () => {
  return (
    <div className="container pt-5">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header">
            <h1 className="text-center text-success">Add Feedback</h1>
          </div>
          <div className="card-body">
            <form action="">
           

              <label>Choose a Employee:</label>

              <select className="form-control mb-4" name="Employees">
                <option value="1">Harshalsingh</option>
                <option value="2">Suraj Jadhav</option>
                <option value="3">kushal Tudo </option>
              </select>

              <textarea
                className="form-control mb-4"
                name=""
                id=""
                cols="30"
                rows="3"
              ></textarea>

              <button className="form-control  btn  btn-lg  btn-primary mb-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addfeedback;
