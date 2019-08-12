import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

import "../HoverButton.css";
import { getUsers, deleteUser } from "../services/userService";
import { apiUrl } from "../config.json";

const imgPath = apiUrl + "/img/";

class Users extends Component {
  state = {
    users: [],
    loader: 1
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users: users.data, loader: 0 });
  }

  handleDelete = async user => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter(u => u.id !== user.id);
    this.setState({ users });

    try {
      await deleteUser(user.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("x");
      toast.error("This user has already been deleted.");

      this.setState({ users: originalUsers });
    }
  };

  render() {
    const { users } = this.state;
    if (this.state.loader == 1)
      return (
        <div
          className="row justify-content-center"
          style={{ backgroundColor: "black" }}
        >
          <img src="giphy.gif" />
        </div>
      );
    else
      return (
        <div
          className="row justify-content-center"
          style={{ backgroundColor: "black" }}
        >
          <div className="col-md-8">
            <Link
              to="/users/new"
              className="btn btn-primary"
              style={{ marginTop: 20 }}
            >
              New User
            </Link>
            <div className="row  ">
              {users.map(user => (
                <div className="col-md-4 hovereffect" key={user.id}>
                  <img
                    alt={user.name}
                    title={user.name}
                    src={imgPath + user.photo}
                    style={{ width: 200, height: 200 }}
                    className="img-responsive img-thumbnail my-4"
                  />
                  <div className="overlay">
                    <h2>
                      <Link
                        to={`/users/${user.id}`}
                        className="btn btn-warning btn-sm"
                        style={{ marginBottom: 10 }}
                      >
                        Edit
                      </Link>
                    </h2>
                    <h2>
                      <button
                        onClick={() => this.handleDelete(user)}
                        style={{ marginBottom: 10 }}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
}

export default Users;
