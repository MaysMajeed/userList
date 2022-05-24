import "./User.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

function User(props) {
  return (
    <div className="singleUser">
      <div className="user">
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>{props.phone}</div>
        <div>{props.email}</div>
      </div>
    </div>
  );
}

export default User;
