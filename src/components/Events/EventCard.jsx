import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import PropTypes from "prop-types";

const EventCard = ({ title, date, time, description, imageUrl, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex-shrink-0 w-96 bg-dark-200 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
    >
      <div
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imageUrl})`,
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-300 mb-3">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-primary-400" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-primary-400" />
            <span>{time}</span>
          </div>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};
EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

export default EventCard;
