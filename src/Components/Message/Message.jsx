import "./Message.css";

const Message = ({text}) => {
  return (
    <div id="Message-container">
      <div id="Message">
          <p>{text}</p>
      </div>
    </div>
  )
}

export default Message