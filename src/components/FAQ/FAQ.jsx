import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FAQItem from "./FAQItem";

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "How can I join CSEC ASTU?",
      answer:
        "You can join CSEC ASTU by joining our Telegram channel and participating in our recruitment events held at the beginning of each semester. Keep an eye on our social media pages for announcements and updates regarding the recruitment process.",
    },
    {
      question: "What activities does CSEC ASTU organize?",
      answer:
        "CSEC ASTU organizes a variety of activities including workshops, hackathons, coding competitions, tech talks, and various training sessions across our different divisions throughout the academic year. These activities are designed to enhance your technical skills and provide networking opportunities.",
    },
    {
      question: "Do I need prior programming experience to join?",
      answer:
        "Yes, some of our divisions require prior programming knowledge, while others are open to beginners. We offer training sessions and resources to help you build your skills and get started on your learning journey. Don't worry if you're new to programming; we welcome members of all skill levels.",
    },
    {
      question: "Can I be part of multiple divisions?",
      answer:
        "Yes, you can participate in multiple divisions based on your interests and availability. We encourage members to explore different areas of technology and get involved in various projects and events. This allows you to gain a broader skill set and experience.",
    },
    {
      question: "How can I contribute to CSEC ASTU?",
      answer:
        "You can contribute to CSEC ASTU in many ways, such as participating in projects, helping organize events, mentoring other members, or sharing your knowledge through tutorials and presentations. Your active involvement helps strengthen our community and fosters a collaborative learning environment.",
    },
    {
      question: "What benefits do I get from joining CSEC ASTU?",
      answer:
        "By joining CSEC ASTU, you gain access to a network of like-minded individuals, opportunities to work on real-world projects, and a platform to enhance your technical and soft skills. Additionally, you can attend exclusive events, receive mentorship, and potentially collaborate with industry professionals.",
    },
    {
      question: "How can I stay updated with CSEC ASTU's activities?",
      answer:
        "To stay updated with CSEC ASTU's activities, follow us on our social media channels, join our Telegram group, and regularly check our website. We frequently post updates about upcoming events, workshops, and other opportunities for members.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-dark-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300">
            Find answers to common questions about CSEC ASTU
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
