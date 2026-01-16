'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Flower2, ArrowUp } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface Message {
    text: string;
    sender: 'user' | 'bot';
    timestamp: number;
}

// Smart Response Logic
const findResponse = (input: string, lang: 'DE' | 'VI'): string => {
    const lowerInput = input.toLowerCase();

    // 1. Reservation Logic
    if (lowerInput.match(/(tisch|reserv|buch|platz|book|table|đặt|bàn|chỗ)/)) {
        return lang === 'DE' 
            ? "Gerne! Sie können einen Tisch direkt über das Formular unten reservieren oder uns anrufen (+49 231 123 45 67). Für wie viele Personen planen Sie?"
            : "Rất sẵn lòng! Bạn có thể đặt bàn qua biểu mẫu bên dưới hoặc gọi cho chúng tôi (+49 231 123 45 67). Bạn đi bao nhiêu người?";
    }

    // 2. Opening Hours
    if (lowerInput.match(/(offen|uhr|wann|zeit|open|hour|time|giờ|mở)/)) {
        return lang === 'DE'
            ? "Wir sind täglich für Sie da! Mo-Do bis 22:00 Uhr, Fr-Sa bis 23:00 Uhr und Sonntags bis 22:00 Uhr."
            : "Chúng tôi mở cửa hàng ngày! Thứ 2 - Thứ 5 đến 22:00, Thứ 6 - Thứ 7 đến 23:00 và Chủ nhật đến 22:00.";
    }

    // 3. Menu / Food
    if (lowerInput.match(/(karte|menü|essen|food|dish|speise|thực đơn|món|ăn)/)) {
        return lang === 'DE'
            ? "Unsere Küche verbindet Vietnams Streetfood-Kultur mit hochwertigem Sushi. Mein persönlicher Favorit ist die Phở Bò Heritage."
            : "Ẩm thực của chúng tôi kết hợp văn hóa đường phố Việt Nam với Sushi cao cấp. Món yêu thích của cá nhân tôi là Phở Bò Heritage.";
    }

    // 4. Vegan / Vegetarian
    if (lowerInput.match(/(vegan|veggie|pflanz|chay|thực vật)/)) {
        return lang === 'DE'
            ? "Wir lieben Plant-Based! Über 40% unserer Karte ist vegan. Die 'Buddha Bowl' ist ein Traum."
            : "Chúng tôi yêu thích món chay! Hơn 40% thực đơn là thuần chay. 'Buddha Bowl' là một lựa chọn tuyệt vời.";
    }

    // 5. Location / Address
    if (lowerInput.match(/(wo|ort|adress|find|location|where|đâu|địa chỉ)/)) {
        return lang === 'DE'
            ? "Sie finden das Saigon Soul in der Kleppingstraße 22, mitten in Dortmund."
            : "Bạn có thể tìm thấy Saigon Soul tại Kleppingstraße 22, ngay trung tâm Dortmund.";
    }

    // Default Fallbacks
    const fallbacks = lang === 'DE' 
        ? [
            "Das klingt interessant. Erzählen Sie mir mehr.",
            "Ich bin mir nicht ganz sicher, aber ich helfe gerne beim Reservieren.",
            "Möchten Sie vielleicht einen Blick in unsere Karte werfen?",
            "Ich lerne noch, aber ich gebe mein Bestes! Wie kann ich Ihnen helfen?"
        ]
        : [
            "Nghe thú vị đấy. Kể thêm cho tôi nghe đi.",
            "Tôi không chắc lắm, nhưng tôi rất vui lòng giúp bạn đặt bàn.",
            "Bạn có muốn xem qua thực đơn của chúng tôi không?",
            "Tôi vẫn đang học hỏi, nhưng tôi sẽ cố gắng hết sức! Tôi có thể giúp gì cho bạn?"
        ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
};

export const ChatWidget: React.FC = () => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Initial Welcome Message
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{ 
                text: language === 'DE' 
                    ? "Willkommen im Saigon Soul. Ich bin Ihr digitaler Concierge. Wie kann ich Ihnen heute helfen?" 
                    : "Chào mừng đến với Saigon Soul. Tôi là trợ lý ảo của bạn. Tôi có thể giúp gì cho bạn hôm nay?", 
                sender: 'bot',
                timestamp: Date.now()
            }]);
        }
    }, [language, messages.length]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            setTimeout(() => inputRef.current?.focus(), 100); 
        }
    }, [isOpen, messages, isTyping]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;
        
        const userMsg: Message = { text: text, sender: 'user', timestamp: Date.now() };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Calculate a natural reading/typing delay based on response length
        const responseText = findResponse(text, language);
        const delay = Math.min(Math.max(responseText.length * 25, 1000), 3000);

        setTimeout(() => {
            const botMsg: Message = { text: responseText, sender: 'bot', timestamp: Date.now() };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, delay);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSend(inputValue);
    };

    const quickActions = language === 'DE' 
        ? ['Öffnungszeiten?', 'Speisekarte?', 'Vegane Optionen?']
        : ['Giờ mở cửa?', 'Thực đơn?', 'Món chay?'];

    return (
        <>
            {/* Trigger Button */}
            <button 
                id="chat-trigger" 
                onClick={() => setIsOpen(!isOpen)} 
                className={`fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[95] w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-float border border-wood/10 flex items-center justify-center group hover:scale-110 active:scale-90 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
                aria-label="Open Chat"
            >
                <div className="absolute inset-0 rounded-full bg-wood/5 animate-ping opacity-75"></div>
                <div className="relative">
                    <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-wood fill-wood/10 group-hover:rotate-12 transition-transform" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber rounded-full border-2 border-white"></div>
                </div>
            </button>

            {/* Chat Window */}
            <div 
                id="chat-window" 
                className={`${isOpen ? 'flex chat-enter' : 'hidden chat-exit'} fixed bottom-24 right-4 md:bottom-28 md:right-8 w-[calc(100%-2rem)] md:w-[380px] h-[500px] bg-white rounded-[2rem] shadow-2xl z-[100] border border-wood/10 flex-col overflow-hidden origin-bottom-right transition-all`}
            >
                {/* Header */}
                <div className="h-16 bg-wood-dark flex items-center justify-between px-6 shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                        <div>
                            <h3 className="text-cream font-serif text-lg leading-none tracking-wide">Concierge</h3>
                            <span className="text-[10px] text-cream/60 uppercase tracking-widest font-medium">Online</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="relative z-10 text-cream/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages Area */}
                <div id="chat-messages" className="flex-1 bg-texture overflow-y-auto p-4 space-y-6 scroll-smooth">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-3 max-w-[85%] reveal-up is-visible ${msg.sender === 'user' ? 'ml-auto justify-end' : ''}`}>
                            {msg.sender === 'bot' && (
                                <div className="w-8 h-8 rounded-full bg-wood/10 flex items-center justify-center shrink-0 border border-wood/5 mt-auto">
                                    <Flower2 className="w-4 h-4 text-wood" />
                                </div>
                            )}
                            <div className="flex flex-col gap-1">
                                <div 
                                    className={`${
                                        msg.sender === 'user' 
                                            ? 'bg-wood text-white rounded-2xl rounded-tr-sm' 
                                            : 'bg-white text-wood-dark/80 border border-stone rounded-2xl rounded-tl-sm'
                                    } p-3.5 shadow-sm text-sm leading-relaxed`}
                                >
                                    {msg.text}
                                </div>
                                <span className={`text-[9px] text-wood-dark/30 uppercase tracking-wider ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                    {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                </span>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-3 max-w-[85%] reveal-up is-visible">
                             <div className="w-8 h-8 rounded-full bg-wood/10 flex items-center justify-center shrink-0 border border-wood/5 mt-auto">
                                <Flower2 className="w-4 h-4 text-wood" />
                            </div>
                            <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-stone flex gap-1 items-center h-[46px]">
                                <div className="w-1.5 h-1.5 bg-wood/40 rounded-full typing-dot"></div>
                                <div className="w-1.5 h-1.5 bg-wood/40 rounded-full typing-dot"></div>
                                <div className="w-1.5 h-1.5 bg-wood/40 rounded-full typing-dot"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions (Chips) */}
                {!isTyping && messages[messages.length - 1]?.sender === 'bot' && (
                     <div className="px-4 pb-3 bg-texture shrink-0 overflow-x-auto hide-scrollbar flex gap-2">
                        {quickActions.map(txt => (
                            <button 
                                key={txt} 
                                onClick={() => handleSend(txt)} 
                                className="whitespace-nowrap px-4 py-2 bg-white border border-wood/10 rounded-full text-xs font-semibold text-wood hover:bg-wood hover:text-cream transition-colors shadow-sm active:scale-95"
                            >
                                {txt}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-stone shrink-0">
                    <form onSubmit={handleFormSubmit} className="relative flex items-center gap-2">
                        <input 
                            ref={inputRef}
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={language === 'DE' ? "Nachricht schreiben..." : "Nhập tin nhắn..."}
                            className="w-full h-12 bg-stone/30 rounded-xl pl-4 pr-12 text-sm text-wood-dark focus:outline-none focus:ring-1 focus:ring-wood/20 transition-all placeholder:text-wood-dark/40"
                        />
                        <button 
                            type="submit" 
                            disabled={!inputValue.trim()}
                            className="absolute right-2 w-8 h-8 bg-wood rounded-lg flex items-center justify-center text-white shadow-md hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};