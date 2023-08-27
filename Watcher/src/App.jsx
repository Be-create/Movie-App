import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./Pages/HomePage";

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: "rgba(9, 8, 10, 1)", height: "100vh" }}>
        <Navbar />
        <HomePage />
      </Box>
    </>
  );
}

export default App;
