import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
    >
      <h1>About Me</h1>
      <p>This is the about page of my portfolio.</p>
    </motion.div>
  );
};

export default About;
