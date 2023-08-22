import React, { useState, useEffect } from "react";

import { Grid, Card, Typography } from "@mui/material";
import { Form } from "reactstrap";
import { useNavigate } from "react-router-dom";


import AetmaadDemo from "../assests/png/logo.png";

import "../styles/main.css";
import Input from "./pagesComponents/Input";
import AETButtons from "./pagesComponents/Button";




const SignUp = () => {
  const navigate = useNavigate();
  //   var uuid = new DeviceUUID().get();
  //   const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [tokenFound, setTokenFound] = useState(false);

  const showLoader = () => {
    setLoading(true);
  };

  const hideLoader = () => {
    setLoading(false);
  };
  useEffect(() => {
    localStorage.clear();
  }, []);

  const login = async (e) => {
    navigate("/home");
    // e.preventDefault();
    // const re =
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (username.length === 0 || password.length < 8) {
    //   setShowToast(true);
    //   setType("Error");
    //   setTitle("Validation Error");
    //   setMessage(
    //     "Username & password is required. Password minimum length is 8 characters."
    //   );
    // } else {
    //   if (re.test(username)) {
    //     showLoader();
    //     const formData = new FormData();
    //     formData.append("email", username);
    //     formData.append("password", password);
    //     formData.append("uuId", uuid);
    //     const response = await Api("post", `auth/login`, formData);
    //     if (response.status === 200) {
    //       localStorage.setItem("aetmaad-auth-token", response.data.token);
    //       let user = activeUser(response.data.token);
    //       if (user?.branch_id != null && user?.dep_id != null) {
    //         const data = new FormData();
    //         data.append("userId", user._id);
    //         data.append("uuid", uuid);
    //         data.append("branchId", user.branch_id?.id);
    //         const res = await Api("post", `auth/mark-attendance`, data);
    //         if (res.status === 200) {
    //         } else {
    //           setErrorTitle("Error");
    //           setErrorMessage(res.data.msg);
    //           setShowErrorToast(true);
    //         }
    //       }
    //       //  const firebaseToken = await getToken(setTokenFound);
    //       //  if (firebaseToken) {
    //       //   console.log(firebaseToken);
    //       //   const formData = new FormData();
    //       //   formData.append("token", firebaseToken);
    //       //   const tokenResp = await Api("post", `auth/update-token`, formData);
    //       //  }
    //       hideLoader();
    //       if (localStorage.getItem("aetmaad-auth-token") && user)
    //         setRedirect(true);
    //     } else {
    //       hideLoader();
    //       setShowToast(true);
    //       setType("Error");
    //       setMessage(response.data.msg);
    //     }
    //   } else {
    //     hideLoader();
    //     setShowToast(true);
    //     setType("Error");
    //     setTitle("Email Validation");
    //     setMessage("Enter a valid email");
    //   }
    // }
  };
  //   const handleForgotPassword = () => history.push("/forgot-password");

  //   if (redirect) return <Redirect to={"/dashboard"} />;

  return (
    <>
     
      <div className="login_mainContainer">
        <div className="login_container">
          <Card className="login_card">
            <div className="signUp_user">
                Sign Up
            </div>
          <Grid >
      <Grid item xs={12} md={12} className="login-right-height">
        <Grid container className="login_rightGrid">
          <Grid item xs={1} md={1}></Grid>
          <Grid item xs={10} md={10} >
          
            <Form onSubmit={login}>
              <Grid container spacing={3}> {/* Added container and spacing */}
                <Grid item xs={12} md={12}> {/* Adjusted to xs={12} for full width on small screens */}
                  <Input
                    label="Email"
                    required
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br />
                  <Input
                    label="Phone"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br />
                  <Input
                    label="CNIC"
                    required
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br />
                  <Input
                    label="Password"
                    required
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br />
                  <Input
                    label="Confirm Password"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                 
                  <div className="signUp_user">
                  Business Profile
            </div>
                  <Input
                    label="Company Name"
                    required
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br />
                  <Input
                    label="Store Name"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br />
                  <Input
                    label="City"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  
                  <br />
                 
                  <div className="login_buttonContainer">
                          <AETButtons title="Submit" type="submit" className={"button_size"} />
                        </div>
                        <br/>
                  
                        <div>
                        <p onClick={()=> navigate("/signIn")}>
                       Already have an account?
                    </p>
                    </div>
                  
                 
                </Grid>
              
              </Grid>
            </Form>
          </Grid>
          <Grid item xs={1} md={1}></Grid>
        </Grid>
      </Grid>
    </Grid>
          </Card>
        </div>
      </div>{" "}
    </>
  );
};

export default SignUp;