import "./Chat.css";
import Message from "../Message/Message";
import sendIcon from "../../assets/images/icons/send-icon.png";
import Choices from "../Choices/Choices";
import ChatIcon from "../../assets/images/icons/chatIcon.png";
import ChatExit from "../../assets/images/icons/chatIcon(x).png"
import { useState } from "react";
import { ChatData } from "../../assets/data/ChatData";

const Chat = () => {
    const [isChatVisible, setChatVisible] = useState(false);
    const [chatMessage, setChatMessage] = useState(<></>);

    const handleChoice = (event) =>{
        const count = event.target.id;
        setChatMessage(<Message text={ChatData[count]}/>)
    }

    const toggleChatVisibility = () => {
      setChatVisible(!isChatVisible);
    };


  return (
    <>
      {isChatVisible && (
        <div id="chat-container">
            <div id="chat-header">
                <div id="header-container">
                    <div id="header-left">
                        <svg id="bot" width="44" height="37" viewBox="0 0 44 37" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="44" height="37" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_39_78" transform="matrix(0.0208333 0 0 0.0247748 0 -0.0945946)"/>
                            </pattern>
                            <image id="image0_39_78" width="48" height="48" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwABefQAAXn0AUJwyM4AAAAHdElNRQflCxYNMjE8id7bAAACpElEQVRYw+3XzWtUZxQG8N/VMdJoasbEUps6OiLkoxUKQlyUceGyVKF0Ft0IblxJbbvKqgrd9R+QQBZSV0IXDZRC2kWhyUIaFFFTv4gmRjRW1M7UkJAwybjRaTIzN/feySIUfHb3ue95nvOe977nzPAG640g/tIsgS6BW5YmYkdtSJROp0GDOpOEpCIy3rxsjyUZGewynv0vrmxeOXxHwSrivb6w33KptP247p8Vttf96GKYSRAizyE/2BOzDlOOGS6brPMq7Aya9cWWJ6NPc/1ihBm06YktDz3a6r8IMwgSfl8bwk4znsyihRpuwWI852hccsLnBsxVmDkD8k64FB2cilwx7aRR/K7dZ6+4IV+bxV8G7VzrDsaNMcGs4Qr3h9kJGDO+9hLt1EGWlA8q3IdSWeiIyj9Oifb53ncKjshXuLxrftbqtH1R4WE3OWNE5tVj2VPz3tG0bMmCJzZrr8RPyZmq1yyid0BgRw3X5P0YkZK26wYQZlD0IJHOA8UEBmWK+hViyxf1hxmEz4ON8k7FqvRDZ11QSjAPYC/K22yLlX+R+FP6/4Y6JcqyxQFdNibQWXTbZTO1haoyyEKPMz6xNWGqM37zrRvVp1GVZZo253y6oi3EQ5Nu3X4xV1hB196Dw3KJxV8j53A1VWtw0KaGDTY5GG3Q3LB83eh1aHZ/r0nvcbTBDaWG5UtuRhtcMd2wwbQr0Qb3DTVsMOR+NVV10QrSS+7IebcB+THfeFLdLGr6TZpnbvvY9oTyd31lVM2UqjEoSDPpog67Y/0kgHm/+tJIvakQPtFaHHXcR7aveleWPHfVeT95kXCiZWGLvXr16vSeFi0VqyUvzHjkjlF/umcmfKJF/o3NKgfBW1q9rb1S0EVP/asQzCnfi1nFN1g/vATt352QTamInwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMS0yMlQxMzo1MDo0OCswMDowMByabe8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTEtMjJUMTM6NTA6NDgrMDA6MDBtx9VTAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADUxMo+NU4EAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTEyHHwD3AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjM3NTg5MDQ4PiWewAAAABN0RVh0VGh1bWI6OlNpemUAMTAwNDNCQpg9TeUAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy4vdXBsb2Fkcy81Ni9EUThhMExpLzMyNDkvYm90X2ZpbGxlZF9pY29uXzIwMDg4NC5wbmev23gWAAAAAElFTkSuQmCC"/>
                            </defs>
                        </svg>
                        <p>Support Bot</p>
                    </div>
                    <svg id="exit" width="133" height="133" viewBox="0 0 133 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="58.1875" width="133" height="16.625" rx="8.3125" fill="black"/>
                        <rect x="58.1875" width="16.625" height="133" rx="8.3125" fill="black"/>
                    </svg>
                </div>
            </div>

            <main>
                <div id="container">
                    <Message text="Hi, How can I help you?"/>
                    <Choices action={handleChoice}/>
                    {chatMessage}
                </div>
            </main>
            <footer id="footer">
                <div id="footer-container">
                    <input type="text" />
                    <img id="send-icon" src={sendIcon} alt="send-icon" />
                </div>
            </footer>
        </div>
        )}
        <img src={isChatVisible ? ChatExit : ChatIcon} onClick={toggleChatVisibility} id="chat-icon" alt="chat-icon"/>
    </>
  )
}

export default Chat