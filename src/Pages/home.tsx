import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a Front-End Developer learning React and building cool stuff!</p>
    </motion.div>
  );
};

export default Home;
