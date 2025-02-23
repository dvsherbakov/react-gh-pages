import { useEffect, useRef, useState } from "react";

const useSpeechToText = (options: Partial<SpeechRecognition>) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);
  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.error("Web speech api is not supported");
      return;
    }

    recognitionRef.current = new (window as any).webkitSpeechRecognition();
    const recognition = recognitionRef.current as unknown as SpeechRecognition;
    if (!recognition) {
      return;
    }
    recognition.interimResults = options.interimResults || true;
    recognition.lang = options.lang || "en-US";
    recognition.continuous = options.continuous || false;

    if ("webkitSpeechGrammarList" in window) {
      const grammar =
        "#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ! | ; | : ;";
      const speechRecognitionList = new window.webkitSpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
    }
    recognition.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      setIsListening(false);
      setTranscript("");
    };

    return () => {
      recognition.stop();
    };
  }, [options.continuous, options.interimResults, options.lang]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      (recognitionRef.current as SpeechRecognition).start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      (recognitionRef.current as SpeechRecognition).stop();
      setIsListening(false);
    }
  };

  return {
    isListening,
    transcript,
    startListening,
    stopListening,
  };
};
export default useSpeechToText;
