import PropTypes from "prop-types";
import Profile from "../Profile/Profile";
import { StyledList } from "./FriendsListStyled";
const FriendsList = ({ data }) => {
  return (
    <StyledList>
      {data.map((el) => (
        <Profile key={el.id} data={el} />
      ))}
    </StyledList>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
