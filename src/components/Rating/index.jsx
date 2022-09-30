import PropTypes from "prop-types";

const Rating = ({ rating, scale }) => {
  return (
    <i
      className={`fas fa-star${scale <= rating ? " colored" : ""}`}
      key={`star-${scale}`}
    ></i>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired,
};
export default Rating;
