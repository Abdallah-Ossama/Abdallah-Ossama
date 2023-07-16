import "./Choices.css";

const Choices = ({action}) => {
  return (
    <div id="choices">
      <ul>
        <li><button id="0" onClick={action}>I want to know about abdallah</button></li>
        <li><button id="1" onClick={action}>How can I contact with Abdallah?</button></li>
        <li><button id="2" onClick={action}>I have a problem. Can you help me!</button></li>
        <li><button id="3" onClick={action}>What are Abdullah's qualifications?</button></li>
      </ul>
    </div>
  )
}

export default Choices