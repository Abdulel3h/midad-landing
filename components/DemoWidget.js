"use client";
import { useState, useRef, useEffect } from "react";
import { Mic, Send } from "lucide-react";

export default function DemoWidget() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.lang = "ar-SA";

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    setHistory((prev) => [
      ...prev,
      { who: "user", text: input },
      {
        who: "ai",
        text:
          "مرحبًا 👋، أنا المساعد الذكي من مداد. أستطيع مساعدتك في الخدمات المالية، مثل فتح حساب أو معرفة أقرب فرع بنكي متاح لك.",
      },
    ]);

    setInput("");
  };

  const handleMicClick = () => {
    if (!recognitionRef.current) {
      alert("ميزة التعرف على الصوت غير مدعومة في هذا المتصفح.");
      return;
    }

    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-4 border border-gray-200 transition-transform duration-300 hover:shadow-xl card-hover fade-in">
      {/* 🔹 شعار مداد */}
      <div className="flex flex-col items-center mb-3">
        <img
          src="/logo.png"
          alt="شعار مداد"
          className="w-16 h-16 object-contain mb-1"
        />
        <h3 className="text-midadBlue font-semibold text-lg text-center">
          تجربة المساعد الذكي — مداد 🤖
        </h3>
      </div>

      {/* 🔹 منطقة المحادثة */}
      <div
        ref={listRef}
        className="space-y-2 mb-3 max-h-64 overflow-auto scroll-smooth p-2 bg-gray-50 rounded-lg"
      >
        {history.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${
              m.who === "user"
                ? "bg-midadLight text-right self-end text-gray-800"
                : "bg-gray-100 text-right"
            }`}
          >
            <div className="text-sm leading-relaxed">{m.text}</div>
          </div>
        ))}
      </div>

      {/* 🔹 الإدخال */}
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <button
          onClick={handleMicClick}
          className={`p-2 rounded-full transition ${
            listening
              ? "bg-red-500 text-white animate-pulse"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          <Mic size={20} />
        </button>

        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-midadBlue"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="تحدث أو اكتب هنا..."
        />

        <button
          onClick={handleSend}
          className="bg-midadBlue hover:bg-midadBlue/90 text-white px-3 py-2 rounded-full transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}