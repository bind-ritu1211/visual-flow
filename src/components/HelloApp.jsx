import logo from "../assets/images/logo.svg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function HelloApp() {
  return (
    <div className="HelloApp">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Todo app</p>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}

export default HelloApp;
