import { Quote } from "lucide-react";
import PropTypes from "prop-types";

const TestimonialCard = ({ name, role, content, imageUrl }) => {
  return (
    <div className="bg-dark-200 p-8 rounded-lg relative">
      <Quote className="absolute top-4 left-4 w-8 h-8 text-primary-400/20" />
      <div className="text-gray-300 mb-6 mt-8 relative z-10">{content}</div>
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-sm text-gray-400">{role}</div>
        </div>
      </div>
    </div>
  );
};
TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default TestimonialCard;
