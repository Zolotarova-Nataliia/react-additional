import { Fragment } from "react";
import PropTypes from "prop-types";
// import icon from "../../assets/favicon.ico";
import icon from "../../assets/photo_2021-12-21_13-45-57.jpg";
const Profile = (props) => {
  const { img, name, number, id } = props.data;
  console.log(img);
  return (
    <Fragment>
      <div>
        <img
          src={img ? img : icon}
          alt="супер пупер картинка"
          width="50"
          height="60"
        />
        <span>Name: {name}</span>
        <span>Phone number: {number}</span>
        <span>id {id}</span>
      </div>
    </Fragment>
  );
};

export default Profile;

Profile.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
