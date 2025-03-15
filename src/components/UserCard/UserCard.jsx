import profileImg from "../../assets/profile.png";
import "./UserCard.css"

const UserCard = ({user}) => {
  return (
    <div className="userCard">
      <div className="imgDiv">
        <img src={profileImg} />
      </div>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>LName: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard