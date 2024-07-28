import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faImage,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ChatBox.module.css";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { type: "text", content: newMessage }]);
      setNewMessage("");
    }
  };

  const handleSendFile = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMessages([
          ...messages,
          { type, content: reader.result, name: file.name },
        ]);
      };
      reader.readAsDataURL(file);
      setFileInputKey(Date.now());
    }
  };

  const handleRecordAudio = async () => {
    if (isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    } else {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/mpeg",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setMessages([
          ...messages,
          { type: "audio", content: audioUrl, name: "Recorded Audio" },
        ]);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatBox}>
      <div className={styles.chatHeader}>Discussion</div>
      <div className={styles.chatBody}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.chatMessage}>
            {msg.type === "text" && <span>{msg.content}</span>}
            {msg.type === "image" && (
              <div>
                <span>{msg.name}</span>
                <img
                  src={msg.content}
                  alt="Sent"
                  className={styles.chatImage}
                />
              </div>
            )}
            {msg.type === "audio" && (
              <div>
                <span>{msg.name}</span>
                <audio controls>
                  <source src={msg.content} type="audio/mpeg" />
                </audio>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.chatFooter}>
        <label className={styles.fileInputLabel}>
          <FontAwesomeIcon icon={faImage} />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleSendFile(e, "image")}
            className={styles.fileInput}
            key={fileInputKey}
          />
        </label>
        <button onClick={handleRecordAudio} className={styles.audioButton}>
          <FontAwesomeIcon
            icon={faMicrophone}
            color={isRecording ? "red" : "black"}
          />
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.chatInput}
          placeholder="Taper votre message..."
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
