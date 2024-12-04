import PropTypes from "prop-types";

const FooterSection = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

FooterSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FooterSection;
