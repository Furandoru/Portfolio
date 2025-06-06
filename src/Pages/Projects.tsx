import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Pagination,
} from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Admin Dashboard",
    description:
      "A responsive real estate admin dashboard built with React, TypeScript, MUI, and Framer Motion.",
    image: "src/assets/Data extraction-amico.svg",
    link: "https://github.com/NaingAungLwin272/real-estate-web/tree/features/furan/frontend-admin/frontend-admin",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing full-stack development work and animations.",
    image: "src/assets/Screenshot 2025-06-06 184643.png",
    link: "https://github.com/Furandoru/Portfolio",
  },
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce website with user authentication, product management, and payment integration.",
    image: "src/assets/Data extraction-amico.svg",
    link: ""
  },
  {
    title: "Blog Platform",
    description:
      "A blog platform with user authentication, post creation, and commenting features.",
    image: "src/assets/Data extraction-amico.svg",
    link: ""
  },
  {
    title: "Social Media App",
    description:
      "A social media application with user profiles, posts, and real-time chat functionality.",
    image: "src/assets/Data extraction-amico.svg",
    link: ""
  },
  {
    title: "Task Management Tool",
    description:
      "A task management tool with user authentication, task creation, and progress tracking.",
    image: "src/assets/Data extraction-amico.svg",
    link: ""
  },
  {
    title: "Weather App",
    description:
      "A weather application that fetches real-time weather data using a public API.",
    image: "src/assets/Data extraction-amico.svg",
    link: ""
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application built with WebSocket for instant messaging.",
    image: "src/assets/Data extraction-amico.svg",
    link: ""
  },
];

const Projects = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => setPage(value);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.6 }}
      sx={{ minHeight: "100vh", px: 4, py: 8 }}
    >
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={4} mt={2}>
        {paginatedProjects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            {project.link ? (
              <Box
                component="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    width: "700px",
                    boxShadow: 3,
                    borderRadius: 2,
                    transition: "box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 320,
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ) : (
              <Card
                sx={{
                  height: "100%",
                  width: "700px",
                  boxShadow: 3,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 320,
                  backgroundColor: "#f5f5f5",
                  opacity: 0.7,
                  cursor: "not-allowed",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Link not available
                  </Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        ))}
      </Grid>

      <Box mt={6} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(projects.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default Projects;
