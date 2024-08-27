import { TextField, Box } from "@mui/material";

const LoginFormFields = () => (
  <Box component="form" sx={{ mt: 1 }}>
    <TextField
      margin="normal"
      fullWidth
      id="email"
      name="email"
      label="Email"
      type="email"
    />
    <TextField
      margin="normal"
      fullWidth
      id="password"
      name="password"
      label="Senha"
      type="password"
    />
  </Box>
);

export default LoginFormFields;
