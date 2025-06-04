import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.6 }}
      sx={{
        minHeight: "100vh",
        px: 4,
        py: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "900px",
        mx: "auto",
      }}
    >
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>

      <Divider sx={{ mb: 4, width: "100px", borderBottomWidth: 3, borderColor: "primary.main" }} />

      <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
        Hey! I'm a <strong>Full-Stack Developer</strong> who enjoys turning ideas into reality with clean, scalable code.
        I specialize in building dynamic front-end experiences with React, and robust back-end systems using Node.js and MongoDB.
        <br /><br />
        My journey started with a love for creating things — from simple static websites to full-stack applications.
        I’m currently focused on building responsive web apps and continually learning modern frameworks.
        <br /><br />
        When I’m not coding, I’m probably gaming, exploring tech news, or learning Japanese 🇯🇵.
      </Typography>
    </Box>
  );
};

export default About;
