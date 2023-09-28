import "./Card.css";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className={props.isNew ? "Card new" : "Card"}>
      <img src={props.img} alt={props.name} className="Card-UserImg" />
      <div className="Card-TxtBox">
        <div className="Card-TxtBox-Container">
          <div className="Card-TxtBox-Container-Info">
            <strong className="Card-TxtBox-Container-UserName">
              {props.name}
            </strong>
            <span className="Card-TxtBox-Container-Action">{props.action}</span>
            <span className="Card-TxtBox-Container-Post">{props.post}</span>
            <span className="Card-TxtBox-Container-Group">{props.group}</span>
            {props.isNew && (
              <span className="Card-TxtBox-Container-RedCircle"></span>
            )}
          </div>
          {props.photo && (
            <img
              src={props.photo}
              alt=""
              className="Card-TxtBox-Container-Photo"
            />
          )}
        </div>
        <p className="Card-Time">{props.time} ago</p>
        {props.msg && (
          <div className="Card-Msg-Container">
            <p className="Card-Msg-Container-Para">{props.msg}</p>
          </div>
        )}
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  photo: PropTypes.string,
  post: PropTypes.string,
  action: PropTypes.string,
  event: PropTypes.string,
  group: PropTypes.string,
  isNew: PropTypes.bool,
  msg: PropTypes.string,
};

export default Card;
