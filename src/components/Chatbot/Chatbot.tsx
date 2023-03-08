import { useState, FC, ReactElement } from "react";

import Input from "../Input/Input";

import ChatBox from "../../assets/icons/chatBox.png";
import Close from "../../assets/icons/close.png";

import {
  Wrapper,
  BackgroundWrapper,
  BackgroundFill,
  BackgroundGlow,
  ImageBox,
  CloseIcon,
  MainContainer,
  MessageContainer,
  MessageBox,
  InputContainer,
} from "./styles";

type Message = {
  messageType: "user" | "ai";
  value: string;
};

const Chatbot: FC = (): ReactElement => {
  const [chatbotToggle, setChatbotToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleChatbotToggle = () => {
    setChatbotToggle(!chatbotToggle);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleMessageSubmit = async (message: string) => {
    setMessages((prevState) => [
      ...prevState,
      {
        messageType: "user",
        value: message,
      },
    ]);
    setInputValue("");
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const url = "https://api.openai.com/v1/completions";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        max_tokens: 360,
        prompt: message,
      }),
    };

    const response = await fetch(url, options);
    await response.json().then((data) => {
      setMessages((prevState) => [
        ...prevState,
        { messageType: "ai", value: data.choices[0].text },
      ]);
    });
  };

  return (
    <Wrapper
      animate={{
        width: chatbotToggle ? "400px" : "80px",
        height: chatbotToggle ? "640px" : "80px",
        borderRadius: chatbotToggle ? "8px" : "50%",
        cursor: chatbotToggle ? "initial" : "pointer",
      }}
    >
      <BackgroundWrapper>
        <BackgroundFill
          animate={{
            borderRadius: chatbotToggle ? "8px" : "50%",
          }}
        />
        <BackgroundGlow
          animate={{
            borderRadius: chatbotToggle ? "8px" : "50%",
          }}
        />
      </BackgroundWrapper>

      {chatbotToggle ? (
        <CloseIcon src={Close} alt="Close" onClick={handleChatbotToggle} />
      ) : (
        <ImageBox onClick={handleChatbotToggle}>
          <img src={ChatBox} alt="ChatBox" />
        </ImageBox>
      )}

      <MainContainer>
        <MessageContainer>
          {chatbotToggle &&
            messages.map(({ value, messageType }, index) => (
              <MessageBox messageType={messageType} key={index}>
                <p>{value}</p>
              </MessageBox>
            ))}
        </MessageContainer>

        <InputContainer>
          <Input
            value={inputValue}
            name="message"
            type="string"
            category={"message"}
            placeholder="Type your question"
            onChange={handleInputChange}
            onKeyPress={(e) =>
              e.key === "Enter" && handleMessageSubmit(inputValue)
            }
          />
        </InputContainer>
      </MainContainer>
    </Wrapper>
  );
};

export default Chatbot;
