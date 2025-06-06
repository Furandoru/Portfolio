import { Box, Typography, IconButton, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      sx={{
        minHeight: "100vh",
        px: 4,
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(to bottom, #f0f2f5, #ffffff)",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Let's Connect
      </Typography>

      <Typography variant="h6" sx={{ mb: 3 }}>
        Feel free to reach out to me on any of these platforms:
      </Typography>

      <Stack direction="row" spacing={4}>
        <IconButton
          component="a"
          href="https://github.com/Furandoru"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#333" }}
        >
          <GitHub fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/win-aung-92b153365/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#0077b5" }}
        >
          <LinkedIn fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://mail.google.com/mail/?view=cm&to=wamewame112@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#d44638" }}
        >
          <Email fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Contact;
