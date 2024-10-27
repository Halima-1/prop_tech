import { useState } from "react";
import "./productDetails.scss";

const ListingForm = () => {
  const [formDataa, setFormDataa] = useState({
    name: "",
    email: "",
    id: "",
    text: "",
  });
  const [errData, setErrData] = useState({});
  // const userForm = {};
  const handleChange = (e) => {
    const value = e.target.value;
    setFormDataa({ ...formDataa, [e.target.name]: value });
  };

  const newErr = {};
  const handleValidation = () => {
    if (formDataa.name == "") {
      newErr.name = "please input your fullname";
    } else if (formDataa.email == "") {
      newErr.email = "valid email is required";
    } else if (formDataa.id == "") {
      newErr.id = "enter the apartment ID";
    }
    setErrData(newErr);
  };
  const handleSubmit = () => {
    handleValidation();
    if (errData) {
      console.log("submitted");

      const users = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : [];
      const user = users.filter((item) => item.email == formDataa.email);
      console.log(user);
      if (user.length !== 0) {
        const legituser =
          user[0].email == formDataa.email && user[0].fname == formDataa.name
            ? true
            : (newErr.notify = "invalid credential");
      } else {
        newErr.notify = "invalid credential, user does not exist";
      }
      return;
    }
    // else {
    //   newErr.notify = "input necessary details to proceed";
    //   console.log("invalid");
    // }
    // setErrData(newErr);
  };

  return (
    <>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        {errData.notify && <p style={{ color: "red" }}>{errData.notify}</p>}

        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={formDataa.name}
          placeholder="Enter your fullname"
        />
        {errData.name && <p style={{ color: "red" }}>{errData.name}</p>}

        <input
          type="text"
          onChange={handleChange}
          name="email"
          value={formDataa.email}
          placeholder="Enter email address"
        />
        {errData.email && <p style={{ color: "red" }}>{errData.email}</p>}

        <input
          type="text"
          onChange={handleChange}
          name="id"
          value={formDataa.id}
          placeholder="Enter apartment ID"
        />
        {errData.id && <p style={{ color: "red" }}>{errData.id}</p>}

        <textarea
          name="text"
          onChange={handleChange}
          id=""
          value={formDataa.text}
          placeholder="Enter your message here"
        ></textarea>
        <input type="submit" value={"submit"} />
      </form>
    </>
  );
};

export default ListingForm;
