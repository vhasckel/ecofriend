import { TextField, Box } from "@mui/material";

const LoginFormFields = ({
  email,
  onEmailChange,
  password,
  onPasswordChange,
}) => (
  <Box sx={{ mt: 1 }}>
    <TextField
      margin="normal"
      fullWidth
      id="email"
      name="email"
      label="Email"
      type="email"
      value={email}
      onChange={onEmailChange}
    />
    <TextField
      margin="normal"
      fullWidth
      id="password"
      name="password"
      label="Senha"
      type="password"
      value={password}
      onChange={onPasswordChange}
    />
  </Box>
);

export default LoginFormFields;
