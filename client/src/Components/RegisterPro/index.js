import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export default class RegisterPro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      servicePro_firstName: "",
      servicePro_lastname: "",
      servicePro_email: "",
      servicePro_userPassword: "",
      servicePro_companyName: "",
      servicePro_url: "",
      servicePro_category: "",
      servicePro_address: "",
      servicePro_city: "",
      servicePro_state: "",
      servicePro_zipCode: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleInputChange(event) {
    const formType = event.target.id;
    this.setState({
      [formType]: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const {
      servicePro_firstName,
      servicePro_lastName,
      servicePro_email,
      servicePro_userPassword,
      servicePro_companyName,
      servicePro_url,
      servicePro_category,
      servicePro_address,
      servicePro_city,
      servicePro_state,
      servicePro_zipCode,

    } = this.state;
    const formData = {
      "servicePro_firstName": servicePro_firstName,
      "servicePro_lastName": servicePro_lastName,
      "servicePro_email": servicePro_email,
      "servicePro_userPassword": servicePro_userPassword,
      "servicePro_companyName": servicePro_companyName,
      "servicePro_url": servicePro_url,
      "servicePro_category": servicePro_category,
      "servicePro_address": servicePro_address,
      "servicePro_city": servicePro_city,
      "servicePro_state": servicePro_state,
      "servicePro_zipCode": servicePro_zipCode,
    };


    console.log("****",formData);

    axios.post("/api/registerpros", formData).then((res) => {
      console.log("***********",res.data);
      if (res.data.success) {
        this.setState({
          success: true,
        });
      }
    });
  }

  renderSuccessMessage() {
    let result = null;
    if (this.state.success) {
      result = (
        <div className="success-message">
          Your application submission was a success!
        </div>
      );
    }

    return result;
  }

  disableForm() {
    let result = false;
    if (this.state.success) {
      result = true;
    }
    return result;
  }

  render() {
    return (
      <form className="loan-form" onSubmit={this.handleFormSubmit}>
        <fieldset
          className="form-fields container"
          disabled={this.disableForm()}
        >
          <ul className="form-container col-lg-6">
            <li className="form-list-item">
              <label htmlFor="servicePro_firstName">FIRST NAME</label>
              <input
                type="text"
                id="servicePro_firstName"
                name="servicePro_firstName"
                placeholder="First Name"
                onChange={this.handleInputChange}
              />
            </li>
            <li className="form-list-item">
              <label htmlFor="servicePro_lastName">LAST NAME</label>
              <input
                type="text"
                id="servicePro_lastName"
                name="servicePro_lastName"
                placeholder="Last Name"
                onChange={this.handleInputChange}
              />
            </li>
            <li className="form-list-item">
              <label htmlFor="servicePro_email">EMAIL</label>
              <input
                type="text"
                id="servicePro_email"
                name="lservicePro_email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </li>
            <li className="form-list-item">
              <label htmlFor="servicePro_userPassword">PASSWORD</label>
              <input
                type="text"
                id="servicePro_userPassword"
                name="servicePro_userPassword"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </li>
            <li className="form-list-item">
              <label htmlFor="servicePro_companyName">COMPANY NAME</label>
              <input
                type="text"
                id="servicePro_companyName"
                name="servicePro_companyName"
                placeholder="Company Name"
                onChange={this.handleInputChange}
              />
            </li>
            <li className="form-list-item">
              <label htmlFor="servicePro_url">WEBSITE</label>
              <input
                type="text"
                id="servicePro_url"
                name="servicePro_url"
                placeholder="Website"
                onChange={this.handleInputChange}
              />
            </li>
            <li className="form-list-item">
              <label htmlFor="servicePro_category">CATEGORY</label>
              <select
                    type="text"
                    id="servicePro_category"
                    name="ServicePro_category"
                    onChange={this.handleInputChange}
                  >
                    <option defaultValue="">Choose...</option>
                    <option value="AL">Apparel</option>
                    <option value="AK">Bar/Beer Cleaning</option>
                    <option value="AZ">Electrican</option>
                    <option value="AR">General Cleaning</option>
                    <option value="CA">HVAC</option>
                    <option value="CO">Food Distributor</option>
                    <option value="CT">Alcohol Distributor</option>
                    <option value="DE">Hood Cleaning</option>
                    <option value="DC">Plumber</option>
                    <option value="FL">Refrigeration</option>
                    <option value="GA">Outdoor Heating</option>
                    <option value="HI">Linens</option>
                    <option value="ID">Pest Control</option>
                    <option value="ID">Window Repair</option>
                    <option value="ID">Table Booth Repair</option>
                  </select>
                  </li>
              <li className="form-list-item">
              <label htmlFor="servicePro_address">ADDRESS</label>
              <input
                type="text"
                id="servicePro_address"
                name="servicePro_address"
                placeholder="Address"
                onChange={this.handleInputChange}
              />
              </li>
              <li className="form-list-item">
              <label htmlFor="servicePro_city">City</label>
              <input
                type="text"
                id="servicePro_city"
                name="servicePro_city"
                placeholder="City"
                onChange={this.handleInputChange}
              />
              </li>
                <li className="form-list-item">
                  <label htmlFor="servicePro_state">STATE</label>
                  <select
                    type="text"
                    id="servicePro_state"
                    name="ServicePro_state"
                    onChange={this.handleInputChange}
                  >
                    <option defaultValue="">Choose...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </li>
              <li className="form-list-item">
                  <label className="form-zip-label" htmlFor="servicePro_zipCode">
                    ZIP
                  </label>
                  <input
                    type="text"
                    id="servicePro_zipCode"
                    name="servicePro_zipCode"
                    placeholder="Zip"
                    onChange={this.handleInputChange}
                  />
                </li>
            <li className="form-list-item">
              <input
                className="form-submit-btn"
                type="submit"
                value="Submit"
              />
              {this.renderSuccessMessage()}
            </li>
          </ul>
        </fieldset>
      </form>

    )
  }
}


// render() {
//     return (
//         <div className="serviceProInfo">
//         <label> First Name:</label>
//         <input type="text"/>
//         <label> Last Name:</label>
//         <input type="text"/>
//         <label> Company Name:</label>
//         <input type="text"/>
//         <label>Category:</label>
//         <input type="text"/>
//         <label>Description of work:</label>
//         <input type="text"/>
//         <label>Address:</label>
//         <input type="text"/>
//         <label>City:</label>
//         <input type="text"/>
//         <label>State:</label>
//         <input type="text"/>
//         <label>Zip Code:</label>
//         <input type="text"/>
//         <label>Email:</label>
//         <input type="text"/>
//         <label>Username:</label>
//         <input type="text"/>
//         <label>Website:</label>
//         <input type="text"/>
//         <label>Profile Image:</label>
//         <input type="text"/>
//         <button>Add Service Pro</button>
//         </div>






