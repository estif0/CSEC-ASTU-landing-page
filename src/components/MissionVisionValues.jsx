import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Eye, Heart } from "lucide-react";

// eslint-disable-next-line react/prop-types
const ValueCard = ({ icon: Icon, title, description, delay }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: delay + 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-dark-200 p-6 rounded-lg transform transition-all duration-300 border border-slate-700 hover:shadow-lg hover:shadow-primary-500/20"
    >
      <motion.div
        variants={iconVariants}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/10 mb-4 mx-auto"
      >
        <Icon className="w-6 h-6 text-primary-400" />
      </motion.div>
      <h3 className="text-xl text-center font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-300 text-center">{description}</p>
    </motion.div>
  );
};

const MissionVisionValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To empower students with technical knowledge and practical skills through hands-on learning experiences and collaborative projects.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the leading student-led technology community that shapes innovative minds and creates impactful solutions for tomorrow.",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "Innovation, collaboration, continuous learning, and ethical technology practices form the cornerstone of our community.",
    },
  ];

  return (
    <section className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              },
            }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Our Foundation
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
