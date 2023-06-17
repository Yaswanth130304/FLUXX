import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../Singup/styles.module.css";
import confirm from '../confirm'

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Address: "",
    Phno: "",
    Vehiclename: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setData((prevData) => ({
      ...prevData,
      [target.name]: target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const response = await axios.post(url, data);
      navigate("/login");
      toast.success("Order placed successfully!");
      console.log(response.data.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    const showPosition = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("Latitude: " + latitude);
      console.log("Longitude: " + longitude);
      location(latitude, longitude);
    };

    const showError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.");
          break;
      }
    };

    const location = (lat, long) => {
      const apiUrl = "https://us1.locationiq.com/v1/reverse";
      const accessToken = "pk.4c6f0cc310028e9674d28b2ed179b900";
      const latitude = lat;
      const longitude = long;
      const format = "json";

      const url = `${apiUrl}?key=${accessToken}&lat=${latitude}&lon=${longitude}&format=${format}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let address = data.display_name;
          setData((prevData) => ({
            ...prevData,
            Address: address
          }));
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getLocation();
  }, []);

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Book Battery</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Address"
              name="Address"
              onChange={handleChange}
              value={data.Address}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="Phno"
              onChange={handleChange}
              value={data.Phno}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Vehicle Model"
              name="Vehiclename"
              onChange={handleChange}
              value={data.Vehiclename}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}<Link to='/Confirm'>
            <button type="submit" className={styles.green_btn}>
              Submit
            </button></Link>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Signup;
