import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EventCard from "./EventCard";
import dsaLec from "../../assets/dsa-lec.jpg";
import a2svInterview from "../../assets/a2sv-interview.jpg";
import mebaSeminar from "../../assets/data-meba.jpg";
import ashewaTech from "../../assets/ashewa.jpg";

const Events = () => {
  const scrollRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "Stack Data Structure & Expression Notation",
      date: "December 1, 2024",
      time: "9:00 AM",
      description:
        "Learn about the stack data structure and expression notation in computer science.",
      imageUrl: dsaLec,
    },
    {
      title: "Ready to Ace the A2SV Interview?",
      date: "November 25, 2024",
      time: "7:00 PM",
      description:
        "Join us for a workshop on how to prepare for the A2SV interview and learn about the interview process.",
      imageUrl: a2svInterview,
    },
    {
      title: "Data Deep Dive: A Seminar with Meba",
      date: "November 16, 2024",
      time: "7:30 PM",
      description:
        "Join us for a deep dive into data science with Meba and learn about the latest trends in the field.",
      imageUrl: mebaSeminar,
    },
    {
      title: "Exclusive event with Ashewa Technologies",
      date: "November 14, 2024",
      time: "11:00 AM",
      description:
        "Join us for an exclusive event with Ashewa Technologies and learn about the latest trends in technology.",
      imageUrl: ashewaTech,
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
    <section id="events" className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join us in our upcoming events and be part of the tech community.
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
            {events.map((event, index) => (
              <EventCard key={event.title} {...event} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
