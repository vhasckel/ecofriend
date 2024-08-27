import React from "react";
import {
  Button,
  Container,
  Typography,
  Paper,
  Box,
  styled,
} from "@mui/material";
import LoginFormFields from "../../components/LoginFormFields/LoginFormFields";

const LoginPage = () => {
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

  return (
    <ContainerStyled component="main" maxWidth="xs">
      <PaperStyled elevation={3}>
        <Typography variant="h5" align="center">
          Entrar
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <LoginFormFields />
          <Button
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
