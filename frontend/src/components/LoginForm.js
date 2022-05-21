import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "@mui/material";

const LoginForm = () => {
  const { handlePassword, handleEmail, handleAuthAction } = React.useContext(AuthContext);
  return (
    <div>
      <div className="heading-container">
        <h3>Login Form</h3>
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter the Email"
          variant="outlined"
          onChange={(e) => handleEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter the Password"
          variant="outlined"
          onChange={(e) => handlePassword(e.target.value)}
        />
      </Box>

      <Button variant="contained" onClick={() => handleAuthAction(1)}>
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
