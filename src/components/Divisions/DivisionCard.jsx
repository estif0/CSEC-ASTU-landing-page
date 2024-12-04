import { motion } from "framer-motion";
import PropTypes from "prop-types";

const DivisionCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex-shrink-0 w-80 bg-dark-200 rounded-lg p-6 mr-6 hover:bg-dark-300 transition-colors duration-300"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/10 mb-6">
        <Icon className="w-8 h-8 text-primary-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};
DivisionCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

export default DivisionCard;
