import React, { Component } from "react";

class UserForm extends Component {
  render() {
    return (
      <div id="userFormArea" className="row">
        <div className="col-md-12">
          <form id="userForm">
            <div className="form-group">
              <label>Enter Username:</label>
              <input className="form-control" id="username" />
              <br />
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
