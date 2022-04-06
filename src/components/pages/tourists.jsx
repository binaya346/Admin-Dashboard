import React, { useEffect, useState } from "react";
import Select from "react-select";
import { API_HOST } from "../../consts";
import CrudWrapper from "../crudWrapper";
import MainLayout from "../mainLayout";
import "./tourists.scss";

const Tourists = () => {
  const [tourists, setTourists] = useState([
    {
      id: "1",
      firstName: "Binaya",
      lastName: "Rijal",
      email: "rijalbinaya2@gmail.com",
      gender: "Male",
    },
  ]);

  const [postTourist, setPostTourist] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    isTourist: true,
    country: "",
  });

  const [countries, setCountries] = useState([]);

  const getAllTourists = async () => {
    try {
      const response = await fetch(`${API_HOST}auth/tourists`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setTourists(data.data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  const getAllCountries = async () => {
    try {
      const response = await fetch(`${API_HOST}geo/countries`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      let countries = [...data.data];
      // let countries = [];
      console.log(countries);
      for (let i = 0; i < data.data.length; i++) {
        countries[i].label = data.data[i].name;
        countries[i].value = data.data[i].name;
        countries[i].id = data.data[i].id;
      }
      setCountries(countries);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    getAllTourists();
    getAllCountries();
  }, []);

  const handlePostData = (key, value) => {
    setPostTourist({ ...postTourist, [key]: value });
  };

  const handleSubmit = async () => {
    const postData = { ...postTourist };
    delete postData.confirmPassword;
    console.log(postData, "postData");
    try {
      const response = await fetch(`${API_HOST}auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const data = await response.json();
      if (data) {
        handleAppendData(data);
      }
      setPostTourist({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
        isTourist: true,
        country: "",
      });
    } catch (err) {
      console.log(err, "error");
    }
  };

  const handleAppendData = (data) => {
    const { id, firstName, lastName, email, gender } = data;
    let tempData = [...tourists];
    const obj = {
      id,
      firstName,
      lastName,
      email,
      gender,
    };
    tempData.push(obj);
    setTourists(tempData);
  };

  const handleCountryChange = (e) => {
    setPostTourist({ ...postTourist, country: e.id });
  };
  const read = (
    <div className="list-wrap">
      <h3 className="list-title">All Tourists</h3>
      <ul className="list">
        <li className="list-item">
          <div className="sn heading">Sn</div>
          <div className="heading">Full Name</div>
          <div className="heading">Gender</div>
          <div className="heading">Email</div>
          <div className="heading">Country</div>
        </li>
        {tourists.map((item, index) => (
          <li key={item.id} className="list-item">
            <div className="sn">{index + 1}.</div>
            <div>
              {item.firstName} {item.lastName}
            </div>
            <div>{item.gender}</div>
            <div>{item.email}</div>
            <div>{item.user_country?.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  const write = (
    <div className="list-wrap">
      <h3 className="list-title">Create Tourists</h3>
      <form>
        <div className="input-label-wrapper">
          <label>First Name</label>
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            value={postTourist.firstName}
            onChange={(e) => handlePostData(e.target.name, e.target.value)}
          />
        </div>
        <div className="input-label-wrapper">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="lastName"
            name="lastName"
            value={postTourist.lastName}
            onChange={(e) => handlePostData(e.target.name, e.target.value)}
          />
        </div>
        <div className="input-label-wrapper">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            value={postTourist.email}
            onChange={(e) => handlePostData(e.target.name, e.target.value)}
          />
        </div>
        <div className="input-label-wrapper">
          <label>Phone</label>
          <input
            type="number"
            placeholder="phone"
            name="phone"
            value={postTourist.phone}
            onChange={(e) => handlePostData(e.target.name, e.target.value)}
          />
        </div>
        <div className="input-label-wrapper">
          <label>Country</label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isSearchable={true}
            name="country"
            options={countries}
            onChange={handleCountryChange}
          />
        </div>

        <div className="input-label-wrapper">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={postTourist.password}
            onChange={(e) => handlePostData(e.target.name, e.target.value)}
          />
        </div>
        <div className="input-label-wrapper">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="confirmPassword"
            name="confirmPassword"
            value={postTourist.confirmPassword}
            onChange={(e) => handlePostData(e.target.name, e.target.value)}
          />
        </div>
        <div className="input-label-wrapper">
          <label>Gender</label>
          <select
            name="gender"
            onChange={(e) => handlePostData(e.target.name, e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="input-label-wrapper">
          <label>Address</label>
          <input
            type="text"
            placeholder="address"
            name="address"
            value={postTourist.address}
            onChange={(e) => handlePostData(e.target.name, e.target.value)}
          />
        </div>
      </form>
      <div className="input-label-wrapper">
        <button className="input-submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );

  return (
    <MainLayout>
      <CrudWrapper read={read} create={write} />
    </MainLayout>
  );
};

export default Tourists;
