import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  return (
    <section id="introduction" className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            About{" "}
            <span className="text-primary-400 relative inline-block">
              CSEC ASTU
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto space-y-6 text-gray-300"
          >
            <motion.p variants={itemVariants} className="leading-relaxed">
              The Computer Science and Engineering Club (CSEC) at ASTU is a
              thriving community for students passionate about technology,
              innovation, and collaboration.
            </motion.p>
            <motion.p variants={itemVariants} className="leading-relaxed">
              At CSEC, we provide opportunities to learn, create, and grow in
              the ever-evolving world of computer science and engineering.
              Whether you’re an experienced programmer or just starting out, our
              club is the perfect space to develop your skills, tackle exciting
              projects, and connect with like-minded peers.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
