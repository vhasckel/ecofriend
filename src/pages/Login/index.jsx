import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  Paper,
  Box,
  styled,
} from "@mui/material";
import LoginFormFields from "../../components/LoginFormFields/LoginFormFields";
import { useAuth } from "../../contexts/AuthContext";

const ContainerStyled = styled(Container)(({ theme }) => ({
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 400,
  width: "100%",
  margin: theme.spacing(2),
  backgroundColor: theme.palette.customColors.lightGreen,
}));

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const userData = { name: "user name", email };
    const token = "fake-token";
    login(userData, token);
  };

  return (
    <ContainerStyled component="main" maxWidth="xs">
      <PaperStyled elevation={3}>
        <Typography variant="h5" align="center">
          Entrar
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <LoginFormFields
            email={email}
            onEmailChange={(e) => setEmail(e.target.value)}
            password={password}
            onPasswordChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </PaperStyled>
    </ContainerStyled>
  );
};

export default LoginPage;
