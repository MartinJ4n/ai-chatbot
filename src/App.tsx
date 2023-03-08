import { Editor } from "./components/Editor";
import ChatBot from "./components/Chatbot/Chatbot";
import "./styles.css";

import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div className="app">
      <ChatBot />

      <h1>Databutton Playground</h1>
      <div className="editor">
        <Editor />
      </div>
    </motion.div>
  );
}
