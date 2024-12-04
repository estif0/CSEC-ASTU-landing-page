import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Kiya Kebe",
      role: "Software Developer",
      content:
        "CSEC ASTU helped me develop my programming skills and land my dream job. The community is incredibly supportive and knowledgeable.",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
    {
      name: "Firomsa Bekele",
      role: "Data Scientist",
      content:
        "The workshops and hands-on projects at CSEC ASTU gave me practical experience in data science that I couldn't get anywhere else.",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    },
    {
      name: "Natnael Getachew",
      role: "Cybersecurity Analyst",
      content:
        "The cybersecurity division at CSEC ASTU provided me with invaluable knowledge and practical experience in the field.",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    },
    {
      name: "Meron Tadesse",
      role: "Machine Learning Engineer",
      content:
        "I learned the fundamentals of machine learning and deep learning at CSEC ASTU, which helped me secure a job in the field.",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    },
    {
      name: "Biruk Tadesse",
      role: "Full Stack Developer",
      content:
        "The web development division at CSEC ASTU equipped me with the skills to build full-stack applications and work on real-world projects.",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
    {
      name: "Betelhem Tadesse",
      role: "UI/UX Designer",
      content:
        "The design workshops and projects at CSEC ASTU helped me develop my design skills and create user-friendly interfaces.",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Members Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from our community members about their experiences with CSEC
            ASTU.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard {...testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-primary-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
