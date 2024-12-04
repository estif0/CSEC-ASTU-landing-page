import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Terminal, Database, Shield, Users } from "lucide-react";
import DivisionCard from "./DivisionCard";

const Divisions = () => {
  const scrollRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const divisions = [
    {
      icon: Terminal,
      title: "Competitive Programming",
      description:
        "Enhance problem-solving skills through algorithmic challenges and programming competitions.",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Build real-world applications using modern technologies and best practices.",
    },
    {
      icon: Database,
      title: "Data Science",
      description:
        "Explore data analysis, machine learning, and artificial intelligence.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Learn about security principles, ethical hacking, and system protection.",
    },
    {
      icon: Users,
      title: "Community Outreach",
      description:
        "Organize tutorials, workshops, seminars, and events to share knowledge with the community.",
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="divisions" className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Divisions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our specialized divisions where you can develop your skills
            and contribute to exciting projects.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-dark-300/50 p-2 rounded-full hover:bg-dark-300 transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-dark-300/50 p-2 rounded-full hover:bg-dark-300 transition-colors"
          >
            →
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto flex space-x-6 pb-4 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {divisions.map((division, index) => (
              <DivisionCard
                key={division.title}
                icon={division.icon}
                title={division.title}
                description={division.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divisions;
