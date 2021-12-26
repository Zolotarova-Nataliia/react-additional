import PropTypes from "prop-types";
import "./Container.css";
import css from "./Container.module.css";
const Container = ({ children, title }) => {
  return (
    <div className="container">
      <h3 className={css.title} style={{ color: "green" }}>
        {title}
      </h3>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
