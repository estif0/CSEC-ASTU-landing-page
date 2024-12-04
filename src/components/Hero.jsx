import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const particleVariants = {
    animate: {
      scale: [1, 2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300"
    >
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                x: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear",
              }}
              variants={particleVariants}
              whileInView="animate"
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Welcome to{" "}
          <span className="text-primary-400 inline-block hover:scale-110 transition-transform">
            CSEC ASTU
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 h-20"
        >
          <TypeAnimation
            sequence={[
              "Inspiring Innovation, One Line of Code at a Time",
              2000,
              "Shaping Tomorrow's Tech Leaders Today",
              2000,
              "Empowering a Collaborative Tech Community",
              2000,
              "Building the Future with Technology",
              2000,
              "Coding the Path to Success",
              2000,
              "Innovate, Create, and Inspire",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#introduction"
            className="inline-block bg-primary-500 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary-500/50"
          >
            Discover More
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
