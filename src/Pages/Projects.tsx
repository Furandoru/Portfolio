import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Admin Dashboard",
    description: "A responsive real estate admin dashboard built with React, TypeScript, MUI, and Framer Motion.",
    image: "src/assets/Data extraction-amico.svg", // Replace with your actual image
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing full-stack development work and animations.",
    image: "src/assets/Data extraction-amico.svg", // Replace with your actual image
  },
];

const Projects = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.6 }}
      sx={{ minHeight: "100vh", px: 4, py: 8 }}
    >

      <Grid container spacing={4} mt={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
