import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type MessageBoxProps = {
  messageType: "user" | "ai";
};

export const Wrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  bottom: 48px;
  right: 48px;
  cursor: pointer;
  z-index: 1;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  top: 0;
  bottom: 0;
`;

export const BackgroundFill = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: linear-gradient(162.47deg, #0059b3 24%, #1d0b4d 76%);
  border-radius: 8px;
  position: absolute;
  top: 0;
  bottom: 0;
`;

export const BackgroundGlow = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: linear-gradient(162.47deg, #0059b3 24%, #1d0b4d 76%);
  opacity: 0.6;
  filter: blur(24px);
  border-radius: 8px;
  position: absolute;
  top: 0;
  bottom: 0;
`;

export const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 60%;
    height: 60%;
  }
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  z-index: 1;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 48px 16px 0 16px;
  overflow-y: auto;
`;

export const MessageBox = styled.div<MessageBoxProps>`
  ${({ messageType }) => css`
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    background-color: ${messageType === "ai" ? "#3baff7" : "#242347"};
    border-radius: 8px;
    align-self: ${messageType === "ai" ? "flex-end" : "flex-start"};

    p {
      color: #ffffff;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.0081em;
      margin: 16px 8px;
      text-align: left;
    }
  `}
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
