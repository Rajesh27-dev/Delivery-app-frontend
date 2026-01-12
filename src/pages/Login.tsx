import { Button, Container, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const idToken = await result.user.getIdToken();

      await axios.post("http://localhost:8080/auth/google", {
        idToken,
      });

      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={handleLogin}
        sx={{ mt: 4 }}
      >
        Login with Google
      </Button>
    </Container>
  );
}
