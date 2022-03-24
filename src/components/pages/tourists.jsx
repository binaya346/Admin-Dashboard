import React, { useEffect, useState } from "react";
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
  });

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

  useEffect(() => {
    getAllTourists();
  }, []);

  const handlePostData = (key, value) => {
    setPostTourist({ ...postTourist, [key]: value });
  };

  const handleSubmit = async () => {
    const postData = { ...postTourist };
    delete postData.confirmPassword;
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
    console.group(tempData, "tempData");
    setTourists(tempData);
  };

  const read = (
    <div className="list-wrap">
      <h3 className="list-title">All Tourists</h3>
      <ul className="list">
        {tourists.map((item) => (
          <li key={item.id} className="list-item">
            <span>{item.id}.</span> <span>{item.firstName}</span>{" "}
            <span>{item.email}</span>
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
