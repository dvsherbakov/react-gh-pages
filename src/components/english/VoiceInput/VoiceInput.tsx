import { useState } from "react";
import useSpeechToText from "../../../hooks/useSpeechToText";
import styles from "./voice.module.scss";

export const VoiceInput = () => {
  const [textInput, setTextInput] = useState("");
  const { isListening, transcript, startListening, stopListening } =
    useSpeechToText({ continuous: true });

  const startStopListening = () => {
    if (isListening) {
      stopVoiceInput();
    } else {
      setTextInput("");
      startListening();
    }
  };

  const stopVoiceInput = () => {
    setTextInput(
      (prevVal) =>
        prevVal +
        (transcript.length ? (prevVal.length ? " " : "") + transcript : ""),
    );
    stopListening();
  };
  return (
    <div className={styles.wrapper}>
      <div>Voice Input</div>
      <button
        onClick={() => {
          startStopListening();
        }}
      >
        {isListening ? "Stop" : "Speak"}
      </button>
      <textarea
        disabled={isListening}
        value={
          isListening
            ? textInput +
              (transcript.length
                ? (textInput.length ? " " : "") + transcript
                : "")
            : textInput
        }
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
    </div>
  );
};
