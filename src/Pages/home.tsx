import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Hello, I'm <span style={{ color: "#1976d2" }}>Furan</span>
      </Typography>

      <Typography variant="h5" sx={{ mb: 4, maxWidth: "600px" }}>
        A passionate Full-Stack Developer crafting responsive websites and scalable back-end solutions.
      </Typography>

            <Box
  sx={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "300px",
    height: "auto",
    zIndex: -1,
    opacity: 0.7,
  }}
>
  <img src="src/assets/Data extraction-amico.svg" alt="Character" style={{ width: "100%" }} />
</Box>

      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/projects"
        sx={{ mt: 2 }}
      >
        View My Work
      </Button>
    </Box>
    
  );
};

export default Home;
