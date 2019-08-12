import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getUser, saveUser } from "../services/userService";
import { apiUrl } from "../config.json";
const imgPath = apiUrl +"/img/";

class UserForm extends Form {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      data: {
        id: "",
        name: "",
        email: "",
        photo:""
      },
      _method: "",
      errors: {}
    };
  }

  schema = {
    id: [Joi.string(), Joi.number(), ""],
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .required()
      .label("Email"),
    photo:Joi.any() 
  };

  async populateUser() {
    try {
      const userId = this.props.match.params.id;
      this.setState({_method:'POST'});
      if (userId === "new") return;
      this.setState({_method:'PATCH'});
      const { data: user } = await getUser(userId);
      this.setState({ data: this.mapToViewModel(user.data) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  componentDidMount() {
    this.populateUser();
  }

  mapToViewModel(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      photo: imgPath +  user.photo
    };
  }

  doSubmit = async () => {
    //handling uncontrolled component File
    
    let formData = new FormData();
    formData.append("name", this.state.data.name);
    formData.append("email", this.state.data.email);
    formData.append("_method",this.state._method);
    
    if (this.fileInput.current.files[0] !== "undefined") {
      formData.append("photo", this.fileInput.current.files[0]);
    }
    

    await saveUser(formData,this.state.data.id);

    this.props.history.push("/users");
  };

  render() {
    return (
      <div>
        <h1>User Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}

          <div className="form-group">
            <label htmlFor="file">Photo</label>
            <input
              className="form-control-file"
              id="file"
              name="file"
              type="file"
              onChange={this.handleFileChange}
              ref={this.fileInput}
            />
          </div>

          <div className="form-group">
            <img
                  id="photo"
                  alt={this.state.data.photo}
                  title={this.state.data.photo}
                  src={this.state.data.photo}
                  style={{width:200,height:200}}
                  className="img-responsive img-thumbnail my-4"
                />
          </div>

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default UserForm;
