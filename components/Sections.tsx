import React, { useState, useEffect } from 'react';
import { Play, Quote, Star, MapPin, Clock, ChevronLeft, ChevronRight, X, Flame, Info, Phone, Instagram, Facebook, Heart, Plus, Minus, Mail, ArrowRight, ZoomIn } from 'lucide-react';
import { useLanguage } from './LanguageContext';

// --- DATA: MENU ---
interface Dish {
    id: string;
    name: string;
    price: string;
    description: string;
    longDescription: string;
    image: string;
    category: string;
    badges: ('vegan' | 'spicy' | 'vegetarian' | 'signature' | 'glutenfree')[];
    allergens: string;
    calories?: string;
}

const MENU_CATEGORIES = ["Highlights", "Vorspeisen", "Phở & Suppen", "Sushi", "Hauptspeisen", "Dessert"];

const MENU_ITEMS: Dish[] = [
    {
        id: "1",
        name: "Phở Bò Heritage",
        price: "18€",
        description: "24h gekochte Kraftbrühe, Black Angus Rinderfilet (medium rare).",
        longDescription: "Unsere Signature-Suppe. Die Knochenbrühe wird volle 24 Stunden mit Sternanis, Zimt, Kardamom und geröstetem Ingwer geköchelt. Serviert mit handgemachten Reisnudeln und zartem Black Angus Rinderfilet, das in der heißen Brühe perfekt medium-rare zieht.",
        category: "Phở & Suppen",
        badges: ["signature", "glutenfree"],
        image: "/f1.jpg",
        allergens: "Fischsauce, Koriander",
        calories: "450 kcal"
    },
    {
        id: "2",
        name: "Golden Dragon Roll",
        price: "21€",
        description: "Tempura Garnele, Avocado, flambierter Lachs on top.",
        longDescription: "Eine Explosion der Texturen. Knusprige Tempura-Garnele trifft auf cremige Avocado. Getoppt mit flambiertem schottischen Lachs, Trüffel-Mayo, hausgemachter Unagi-Sauce und frischer Kresse.",
        category: "Sushi",
        badges: ["signature"],
        image: "/f6.jpg",
        allergens: "Fisch, Soja, Gluten, Ei"
    },
    {
        id: "3",
        name: "Buddha Bowl",
        price: "16€",
        description: "Wildreis, marinierter Tofu, Edamame, Mango, Avocado.",
        longDescription: "Nurture your soul. Eine bunte Schale voller Energie: Nussiger Wildreis, 12h marinierter Tofu, frische Mango, Avocado, Edamame, Rotkohl und unser geheimes Erdnuss-Limetten-Dressing.",
        category: "Hauptspeisen",
        badges: ["vegan", "glutenfree"],
        image: "/f3.jpg",
        allergens: "Soja, Erdnuss, Sesam",
        calories: "380 kcal"
    },
    {
        id: "4",
        name: "Sommerrollen",
        price: "8€",
        description: "Reispapier, Garnelen, Schweinefleisch, Reisnudeln, Kräuter.",
        longDescription: "Der Klassiker aus Saigon. Hauchdünnes Reispapier, fest gewickelt mit frischen Garnelen, Schweinebauch, Reisnudeln, Minze, Koriander und Thai-Basilikum. Dazu unser legendärer Hoisin-Erdnuss-Dip.",
        category: "Vorspeisen",
        badges: ["glutenfree"],
        image: "/f4.jpg",
        allergens: "Erdnuss, Schalentiere"
    },
    {
        id: "5",
        name: "Crispy Tofu Bites",
        price: "9€",
        description: "Seidentofu im Tempuramantel mit Chili-Lime-Sauce.",
        longDescription: "Außen unglaublich knusprig, innen seidig weich. Unser Tofu wird in einem leichten Tempurateig ausgebacken und mit einer spritzig-scharfen Chili-Lime-Sauce serviert.",
        category: "Vorspeisen",
        badges: ["vegan", "spicy"],
        image: "/f5.jpg",
        allergens: "Soja, Gluten"
    },
    {
        id: "6",
        name: "Mango Sticky Rice",
        price: "10€",
        description: "Süßer Klebreis, Kokosmilch, frische Flugmango.",
        longDescription: "Der perfekte Abschluss. Warmer, süßer Klebreis, übergossen mit gesalzener Kokosmilch und serviert mit perfekt gereifter, süßer Flugmango und gerösteten Mungobohnen.",
        category: "Dessert",
        badges: ["vegan", "glutenfree"],
        image: "/f6.jpg",
        allergens: "Kokos"
    },
    {
        id: "7",
        name: "Bun Bo Nam Bo",
        price: "17€",
        description: "Reisnudelsalat, Rindfleisch, Zitronengras, Erdnüsse.",
        longDescription: "Ein süd-vietnamesischer Klassiker. Lauwarmer Reisnudelsalat mit zartem Rindfleisch, angebraten mit Zitronengras und Knoblauch. Getoppt mit vielen Kräutern, Röstzwiebeln und Erdnüssen.",
        category: "Hauptspeisen",
        badges: [],
        image: "/f7.jpg",
        allergens: "Erdnuss, Fischsauce"
    },
    {
        id: "8",
        name: "Saigon Garden Roll",
        price: "19€",
        description: "Spargel Tempura, Rote Bete Carpaccio, Trüffel.",
        longDescription: "Unsere rein pflanzliche Signature Roll. Knuspriger grüner Spargel im Tempuramantel, umhüllt von hauchdünnem Rote Bete Carpaccio und verfeinert mit veganer Trüffelcreme.",
        category: "Sushi",
        badges: ["vegan", "signature"],
        image: "/f8.jpg",
        allergens: "Soja, Gluten"
    }
];

// --- DATA: TESTIMONIALS ---
const TESTIMONIALS = [
    {
        id: 1,
        text: "Das Saigon Soul ist mehr als ein Restaurant. Es ist eine kleine Flucht aus dem Alltag. Das Sushi war Kunst, die Phở wie eine warme Umarmung.",
        author: "Sophie M.",
        source: "Google Reviews"
    },
    {
        id: 2,
        text: "Ich war schon oft in Vietnam, aber diese Aromen haben mich sofort zurück nach Hanoi katapultiert. Authentisch, modern und unglaublich herzlich.",
        author: "Markus T.",
        source: "TripAdvisor"
    },
    {
        id: 3,
        text: "Das Interieur ist atemberaubend. Perfektes Licht, toller Service und das vegane Menü ist das Beste, was ich in Dortmund gegessen habe.",
        author: "Julia K.",
        source: "OpenTable"
    }
];

// --- DATA: CHEFS ---
const CHEFS = [
    {
        name: "Nam Nguyen",
        role: "Küchenchef / Head Chef",
        image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=800&q=80",
        story: {
            DE: "Mit über 20 Jahren Erfahrung bringt Nam die Geheimnisse seiner Großmutter aus Huế direkt nach Dortmund. Er lebt für die perfekte Brühe.",
            VI: "Với hơn 20 năm kinh nghiệm, Nam mang những bí quyết của bà mình từ Huế trực tiếp đến Dortmund. Ông sống vì sự hoàn hảo của nước dùng."
        }
    },
    {
        name: "Linh Tran",
        role: "Sushi Master",
        image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=800&q=80",
        story: {
            DE: "Linh verbindet japanische Präzision mit vietnamesischer Frische. Ihre Kreationen sind essbare Kunstwerke.",
            VI: "Linh kết hợp sự chính xác của Nhật Bản với sự tươi mới của Việt Nam. Những sáng tạo của cô là những tác phẩm nghệ thuật ăn được."
        }
    },
    {
        name: "Minh Le",
        role: "Sous Chef",
        image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&w=800&q=80",
        story: {
            DE: "Der Experte für Wok und Feuer. Minh sorgt dafür, dass jedes Gericht mit dem perfekten 'Wok Hei' serviert wird.",
            VI: "Chuyên gia về chảo và lửa. Minh đảm bảo mỗi món ăn đều được phục vụ với 'Wok Hei' hoàn hảo."
        }
    }
];

// --- SECTIONS ---

export const HeroSection: React.FC = () => {
    const { t } = useLanguage();
    const [currentImage, setCurrentImage] = useState(0);

    const heroImages = [
        "/f5.jpg", 
        "/f7.jpg", 
        "/f4.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 6000); // Rotate every 6 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Slideshow with Ken Burns Effect */}
            {heroImages.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={img}
                        className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ease-out ${index === currentImage ? 'scale-110' : 'scale-100'}`}
                        alt="Saigon Soul Atmosphere"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/60 via-wood-dark/20 to-wood-dark/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
            ))}

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto reveal-up">
                <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-md animate-[fadeIn_1s_ease-out]">
                    <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/90">
                        {t('hero.est')}
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-[0.9] tracking-tight">
                    {t('hero.title1')} <br />
                    <span className="italic font-light text-amber-soft relative inline-block">
                        {t('hero.title2')}
                        {/* Elegant Underline */}
                        <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span>
                </h1>

                <p className="text-white/80 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed mb-12 drop-shadow-lg">
                    {t('hero.desc')}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <button
                        onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-4 bg-amber hover:bg-white text-wood-dark hover:text-wood-dark rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(217,142,52,0.5)]"
                    >
                        {t('nav.book')}
                    </button>
                    <button
                        onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-4 border border-white/30 hover:bg-white hover:text-wood-dark text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 backdrop-blur-sm"
                    >
                        {t('nav.menu')}
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50">
                <span className="text-[10px] uppercase tracking-widest animate-pulse">{t('hero.scroll')}</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
            </div>
        </header>
    );
};

export const VibeSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="py-12 md:py-24 px-4 md:px-6">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="reveal-up order-2 md:order-1">
                        <span className="text-amber text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">{t('vibe.label')}</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-wood-dark mb-6">{t('vibe.title')} <br /><span className="italic text-wood">Saigon Soul</span></h2>
                        <p className="text-wood-dark/70 font-light leading-relaxed mb-8 max-w-md">
                            {t('vibe.desc')}
                        </p>
                        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-wood cursor-pointer group">
                            <span className="w-12 h-[1px] bg-wood group-hover:w-20 transition-all duration-300"></span>
                            {t('vibe.film')}
                        </div>
                    </div>

                    <div className="relative aspect-[9/16] md:aspect-video rounded-[2rem] overflow-hidden shadow-2xl reveal-img group cursor-pointer order-1 md:order-2">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                        </div>

                        <div className="absolute bottom-8 right-8 flex gap-1 h-6 items-end">
                            <div className="w-1 bg-white/80 animate-[bounce_1s_infinite] h-3"></div>
                            <div className="w-1 bg-white/80 animate-[bounce_1.2s_infinite] h-6"></div>
                            <div className="w-1 bg-white/80 animate-[bounce_0.8s_infinite] h-4"></div>
                            <div className="w-1 bg-white/80 animate-[bounce_1.5s_infinite] h-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const AtmosphereSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="py-24 bg-wood-50 relative overflow-hidden" id="atmosphere">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8C4014 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-20 reveal-up">
                    <span className="text-wood text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">{t('atm.label')}</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-wood-dark">{t('atm.title')}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: t('atm.card1.title'), desc: t('atm.card1.desc'), img: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80", delay: "100ms", mt: "md:mt-12" },
                        { title: t('atm.card2.title'), desc: t('atm.card2.desc'), img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80", delay: "200ms", mt: "md:-mt-12", border: true },
                        { title: t('atm.card3.title'), desc: t('atm.card3.desc'), img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80", delay: "300ms", mt: "md:mt-12" }
                    ].map((item, idx) => (
                        <div key={idx} className={`group relative mt-0 ${item.mt} reveal-up`} style={{ transitionDelay: item.delay }}>
                            <div className={`aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-soft hover-lift ${item.border ? 'border border-amber/10' : ''}`}>
                                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <h3 className="text-2xl font-serif text-wood-dark mb-2">{item.title}</h3>
                            <p className="text-sm text-wood-dark/60 leading-relaxed max-w-xs">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const QuoteSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="relative h-[80vh] w-full flex items-center bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2400&q=80')" }}>
            <div className="absolute inset-0 bg-wood-dark/60 backdrop-blur-[2px]"></div>

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center reveal-up">
                <Quote className="w-8 h-8 text-amber mx-auto mb-8 opacity-80" />
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white/95 leading-tight mb-8">
                    "{t('quote.sub')}<br />
                    {t('quote.text')} <span className="text-amber italic">{t('quote.art')}</span>."
                </h2>
                <p className="text-white/70 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto mb-10">
                    {t('quote.desc')}
                </p>
                <button className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-wood-dark transition-all duration-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    {t('quote.btn')}
                </button>
            </div>
        </section>
    );
};

export const MenuSection: React.FC = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("Highlights");
    const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
    const [showModal, setShowModal] = useState(false);

    // Filter items logic
    const displayedItems = activeCategory === "Highlights"
        ? MENU_ITEMS.filter(item => item.badges.includes("signature") || item.badges.includes("signature"))
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    const handleDishClick = (dish: Dish) => {
        setSelectedDish(dish);
        setShowModal(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setShowModal(false);
        setTimeout(() => setSelectedDish(null), 300);
        document.body.style.overflow = '';
    };

    const handleReservationFromModal = () => {
        closeModal();
        setTimeout(() => {
            document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
        }, 400);
    };

    return (
        <section id="menu" className="py-24 bg-texture">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-amber text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">{t('menu.label')}</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-wood-dark">{t('menu.title')}</h2>
                    </div>
                    {/* Categories */}
                    <div className="w-full md:w-auto overflow-x-auto hide-scrollbar">
                        <div className="flex gap-2 pb-2">
                            {MENU_CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-wood-dark text-cream shadow-lg scale-105'
                                        : 'bg-white border border-wood-dark/10 text-wood-dark/60 hover:text-wood-dark hover:border-wood-dark hover:-translate-y-1'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 min-h-[400px]">
                    {displayedItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleDishClick(item)}
                            className="group bg-white p-2 rounded-[2.5rem] shadow-sm hover:shadow-soft transition-all duration-500 hover:-translate-y-1 border border-stone/50 cursor-pointer"
                        >
                            <div className="flex gap-6 items-center p-4">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shrink-0 relative">
                                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-serif font-medium text-wood-dark group-hover:text-wood transition-colors">{item.name}</h3>
                                        <span className="text-sm font-bold text-wood font-serif">{item.price}</span>
                                    </div>
                                    <p className="text-xs text-wood-dark/50 leading-relaxed mb-3 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        {item.badges.slice(0, 2).map((badge, i) => (
                                            <span key={i} className={`text-[9px] uppercase tracking-wider px-2 py-1 rounded font-semibold ${badge === 'vegan' ? 'bg-green-50 text-green-800' :
                                                badge === 'spicy' ? 'bg-red-50 text-red-800' :
                                                    badge === 'signature' ? 'bg-wood/10 text-wood' :
                                                        'bg-stone text-wood-dark/70'
                                                }`}>
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-xs font-bold uppercase tracking-widest text-wood border-b border-wood pb-1 hover:text-wood-dark hover:border-wood-dark transition-all">
                        {t('menu.btn.all')}
                    </button>
                </div>
            </div>

            {/* Premium Dish Modal */}
            {showModal && selectedDish && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-wood-dark/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]" onClick={closeModal}></div>
                    <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl relative z-10 animate-[slideUp_0.4s_ease-out] hide-scrollbar">

                        <button onClick={closeModal} className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-wood-dark transition-all">
                            <X className="w-5 h-5" />
                        </button>

                        <div className="relative h-64 md:h-80 w-full">
                            <img src={selectedDish.image} className="w-full h-full object-cover" alt={selectedDish.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 md:left-8 text-white">
                                <h3 className="text-3xl md:text-4xl font-serif mb-2">{selectedDish.name}</h3>
                                <div className="flex gap-3">
                                    {selectedDish.badges.map((badge, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-6 md:p-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex-1 pr-6">
                                    <p className="text-wood-dark/70 leading-relaxed text-sm md:text-base font-light">
                                        {selectedDish.longDescription}
                                    </p>
                                </div>
                                <span className="text-3xl font-serif text-wood">{selectedDish.price}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-stone/30 p-4 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Info className="w-4 h-4 text-wood" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-wood-dark">Allergene</span>
                                    </div>
                                    <p className="text-xs text-wood-dark/60">{selectedDish.allergens}</p>
                                </div>
                                {selectedDish.calories && (
                                    <div className="bg-stone/30 p-4 rounded-2xl">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Flame className="w-4 h-4 text-wood" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-wood-dark">Energie</span>
                                        </div>
                                        <p className="text-xs text-wood-dark/60">{selectedDish.calories}</p>
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-stone pt-6 mb-8">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-wood-dark block mb-4">Extras hinzufügen</span>
                                <div className="space-y-3">
                                    {['Extra Tofu (+2€)', 'Chili-Öl (+0.50€)', 'Extra Reis (+3€)'].map((extra, i) => (
                                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="w-5 h-5 rounded-full border border-wood/30 flex items-center justify-center group-hover:border-wood transition-colors">
                                                <div className="w-2.5 h-2.5 rounded-full bg-wood opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                            </div>
                                            <span className="text-sm text-wood-dark/80 group-hover:text-wood-dark transition-colors">{extra}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button onClick={handleReservationFromModal} className="w-full h-14 bg-wood hover:bg-wood-dark text-white rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-wood/30 flex items-center justify-center gap-2">
                                <Clock className="w-4 h-4" />
                                Tisch für dieses Gericht reservieren
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export const GallerySection: React.FC = () => {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [visibleCount, setVisibleCount] = useState(8);

    // Using images that closely resemble the user's request (Sushi, Pink Blossoms, Wood Interior, Cocktails)
    const galleryImages = [
        "/f1.jpg",
        "/f2.jpg",
        "/f3.jpg",
        "/f4.jpg",
        "/f5.jpg",
        "/f6.jpg",
        "/f7.jpg",
        "/f8.jpg",
        "/f1.jpg",
        "/f2.jpg",
        "/f3.jpg",
        "/f4.jpg",
    ];

    const showMore = () => setVisibleCount(prev => Math.min(prev + 4, galleryImages.length));
    const showLess = () => setVisibleCount(8);

    const openLightbox = (img: string) => {
        setSelectedImage(img);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = '';
    };

    return (
        <section id="gallery" className="py-24 bg-wood-dark text-cream relative overflow-hidden">
            {/* Background texture for depth */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-amber text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Visuals</span>
                        <h2 className="text-4xl md:text-5xl font-serif">{t('gallery.title')}</h2>
                    </div>
                    <p className="text-cream/50 text-sm md:text-right mt-4 md:mt-0 max-w-xs font-light">
                        {t('gallery.desc')}
                    </p>
                </div>

                {/* Masonry Layout */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryImages.slice(0, visibleCount).map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => openLightbox(img)}
                            className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-zoom-in shadow-lg hover:shadow-glow transition-all duration-500 hover:-translate-y-1 animate-[fadeIn_0.5s_ease-out]"
                            style={{ animationDelay: `${idx * 50}ms` }}
                        >
                            <img src={img} className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="w-8 h-8 text-white opacity-80" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div className="mt-12 text-center">
                    {visibleCount < galleryImages.length ? (
                        <button onClick={showMore} className="text-xs font-bold uppercase tracking-widest text-cream/70 border-b border-cream/30 pb-1 hover:text-white hover:border-white transition-all">
                            {t('gallery.more')}
                        </button>
                    ) : (
                        <button onClick={showLess} className="text-xs font-bold uppercase tracking-widest text-cream/70 border-b border-cream/30 pb-1 hover:text-white hover:border-white transition-all">
                            {t('gallery.less')}
                        </button>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]" onClick={closeLightbox}>
                    <button onClick={closeLightbox} className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                        <X className="w-6 h-6" />
                    </button>
                    <img
                        src={selectedImage}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-[scaleUp_0.3s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};

export const TeamSection: React.FC = () => {
    const { t, language } = useLanguage();
    return (
        <section id="team" className="py-24 bg-wood-50">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16 reveal-up">
                    <span className="text-amber text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">{t('team.label')}</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-wood-dark mb-4">{t('team.title')}</h2>
                    <p className="text-wood-dark/60 font-light max-w-lg mx-auto">{t('team.desc')}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {CHEFS.map((chef, i) => (
                        <div key={i} className="group bg-white rounded-[2.5rem] p-4 pb-8 text-center shadow-soft hover:-translate-y-2 transition-transform duration-500 reveal-up" style={{ transitionDelay: `${i * 150}ms` }}>
                            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-stone/50 shadow-inner relative">
                                <img src={chef.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={chef.name} />
                            </div>
                            <h3 className="text-2xl font-serif text-wood-dark mb-1">{chef.name}</h3>
                            <span className="text-xs font-bold uppercase tracking-widest text-amber mb-4 block">{chef.role}</span>
                            <p className="text-sm text-wood-dark/60 leading-relaxed px-6">
                                {chef.story[language]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const TestimonialSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const nextSlide = () => setCurrentIndex(prev => (prev + 1) % TESTIMONIALS.length);
    const prevSlide = () => setCurrentIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    // Auto-play
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, [isPaused]);

    // Touch Swipe Logic
    const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) nextSlide();
        if (distance < -50) prevSlide();
        setTouchEnd(0);
        setTouchStart(0);
    };

    return (
        <section className="py-24 bg-cream overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <Star className="w-6 h-6 text-amber mx-auto mb-6 fill-amber" />
                <h2 className="text-3xl font-serif text-wood-dark mb-12">Was Gäste fühlen</h2>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="relative h-[300px] md:h-[250px] w-full overflow-hidden">
                        {TESTIMONIALS.map((t, idx) => {
                            let position = 'translate-x-full opacity-0 pointer-events-none';
                            if (idx === currentIndex) position = 'translate-x-0 opacity-100 z-10';
                            if (idx === (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) position = '-translate-x-full opacity-0 pointer-events-none';

                            return (
                                <div key={t.id} className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center ${position}`}>
                                    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-soft border border-wood-dark/5 w-full mx-auto">
                                        <p className="text-lg md:text-2xl font-serif text-wood-dark italic leading-relaxed mb-8">
                                            "{t.text}"
                                        </p>
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="text-left">
                                                <p className="text-xs font-bold uppercase tracking-widest text-wood-dark">{t.author}</p>
                                                <p className="text-[10px] text-wood-dark/50 uppercase tracking-widest">Via {t.source}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-20 hidden md:flex">
                        <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-wood/20 flex items-center justify-center hover:bg-wood hover:text-white transition-all text-wood"><ChevronLeft className="w-5 h-5" /></button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-20 hidden md:flex">
                        <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-wood/20 flex items-center justify-center hover:bg-wood hover:text-white transition-all text-wood"><ChevronRight className="w-5 h-5" /></button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {TESTIMONIALS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-wood' : 'bg-wood/20 hover:bg-wood/40'}`}
                            ></button>
                        ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber rounded-full opacity-20 blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-wood rounded-full opacity-10 blur-xl"></div>
                </div>
            </div>
        </section>
    );
};

export const SocialSection: React.FC = () => {
    const { t } = useLanguage();
    const images = [
        "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1563507666205-d85c07920786?auto=format&fit=crop&w=600&q=80"
    ];

    return (
        <section className="py-24 bg-wood-dark overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <span className="text-amber text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Social</span>
                    <h2 className="text-4xl text-cream font-serif">{t('social.title')}</h2>
                </div>
                <a href="#" className="flex items-center gap-2 text-cream/60 hover:text-cream transition-colors text-sm font-bold uppercase tracking-widest">
                    <Instagram className="w-4 h-4" />
                    {t('social.handle')}
                </a>
            </div>

            <div className="flex overflow-x-auto snap-x gap-4 px-6 pb-8 hide-scrollbar">
                {images.map((img, i) => (
                    <div key={i} className="min-w-[280px] h-[350px] md:min-w-[320px] rounded-[2rem] overflow-hidden relative group cursor-pointer snap-center">
                        <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white">
                            <div className="flex flex-col items-center gap-1">
                                <Heart className="w-6 h-6 fill-white" />
                                <span className="text-xs font-bold">1.2k</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const FAQSection: React.FC = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

    const faqs = [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') }
    ];

    return (
        <section className="py-24 bg-wood-50">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-amber text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">Info</span>
                    <h2 className="text-4xl font-serif text-wood-dark">{t('faq.title')}</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone/50">
                            <button
                                onClick={() => toggle(i)}
                                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-serif text-wood-dark group-hover:text-wood transition-colors">{item.q}</span>
                                <div className={`w-8 h-8 rounded-full border border-wood/20 flex items-center justify-center text-wood transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-wood text-white border-wood' : ''}`}>
                                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>
                            <div className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-wood-dark/60 leading-relaxed text-sm md:text-base">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const LocationSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="py-12 md:py-24 px-4 md:px-6 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Info Side */}
                    <div className="order-2 lg:order-1 flex flex-col justify-center reveal-up">
                        <span className="text-amber text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">{t('loc.label')}</span>
                        <h2 className="text-4xl font-serif text-wood-dark mb-8">{t('loc.title')}</h2>

                        <div className="space-y-8 mb-10">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-wood/5 flex items-center justify-center text-wood shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-wood-dark mb-2">Saigon Soul</h4>
                                    <p className="text-wood-dark/60 leading-relaxed">Kleppingstraße 22<br />44135 Dortmund<br />Deutschland</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-wood/5 flex items-center justify-center text-wood shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-xl text-wood-dark mb-2">{t('loc.hours')}</h4>
                                    <div className="grid grid-cols-2 gap-x-8 text-sm text-wood-dark/60">
                                        <span>Mo - Do</span>
                                        <span className="text-right">11:30 - 22:00</span>
                                        <span>Fr - Sa</span>
                                        <span className="text-right">11:30 - 23:00</span>
                                        <span>So & Feiertags</span>
                                        <span className="text-right">12:00 - 22:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex-1 h-12 rounded-full bg-wood text-white font-bold uppercase tracking-widest text-xs hover:bg-wood-dark transition-colors shadow-lg shadow-wood/20">
                                {t('loc.route')}
                            </button>
                            <a href="tel:+492311234567" className="flex-1 h-12 rounded-full border border-wood/20 flex items-center justify-center text-wood font-bold uppercase tracking-widest text-xs hover:bg-wood/5 transition-colors">
                                {t('loc.call')}
                            </a>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="order-1 lg:order-2 h-[400px] lg:h-auto rounded-[2.5rem] overflow-hidden shadow-2xl relative reveal-img">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.905098335043!2d7.46529891577054!3d51.51493097963654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b919e0c5c63005%3A0x42760fc4a2a7460!2sKleppingstra%C3%9Fe%2022%2C%2044135%20Dortmund!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                        {/* Overlay to prevent scroll capture until clicked (optional ux) */}
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-[2.5rem]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const ReservationSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="reservation" className="py-24 px-4 md:px-6 bg-texture">
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">

                <div className="flex flex-col justify-center">
                    <div>
                        <span className="text-wood text-[10px] font-bold uppercase tracking-[0.25em] mb-4 block">{t('res.label')}</span>
                        <h2 className="text-4xl font-serif text-wood-dark mb-6">{t('res.title')}</h2>
                        <p className="text-wood-dark/60 font-light mb-8 max-w-md">
                            {t('res.desc')}
                        </p>

                        <div className="p-6 bg-white/50 border border-wood/10 rounded-3xl">
                            <div className="flex items-center gap-4 mb-4">
                                <Phone className="w-5 h-5 text-wood" />
                                <span className="font-serif text-lg text-wood-dark">+49 231 123 45 67</span>
                            </div>
                            <p className="text-xs text-wood-dark/50 uppercase tracking-widest">
                                Booking & Events
                            </p>
                        </div>
                    </div>
                </div>

                <form className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-wood/10 border border-white/50 relative overflow-hidden" onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank!'); }}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 rounded-bl-[100px] pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-wood-dark/50 font-bold ml-3">{t('res.date')}</label>
                            <input type="date" className="w-full bg-stone/30 border border-transparent hover:border-wood/20 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:bg-white focus:shadow-md transition-all text-wood-dark outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-wood-dark/50 font-bold ml-3">{t('res.time')}</label>
                            <select className="w-full bg-stone/30 border border-transparent hover:border-wood/20 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:bg-white focus:shadow-md transition-all text-wood-dark outline-none appearance-none">
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2 mb-6">
                        <label className="text-[10px] uppercase tracking-widest text-wood-dark/50 font-bold ml-3">{t('res.guests')}</label>
                        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                            <button type="button" className="w-12 h-12 rounded-full border border-wood/20 flex items-center justify-center text-sm font-medium hover:bg-wood hover:text-white transition-colors focus:bg-wood focus:text-white shrink-0">1</button>
                            <button type="button" className="w-12 h-12 rounded-full bg-wood text-white flex items-center justify-center text-sm font-medium shadow-lg shadow-wood/30 shrink-0">2</button>
                            <button type="button" className="w-12 h-12 rounded-full border border-wood/20 flex items-center justify-center text-sm font-medium hover:bg-wood hover:text-white transition-colors focus:bg-wood focus:text-white shrink-0">3</button>
                            <button type="button" className="w-12 h-12 rounded-full border border-wood/20 flex items-center justify-center text-sm font-medium hover:bg-wood hover:text-white transition-colors focus:bg-wood focus:text-white shrink-0">4</button>
                            <button type="button" className="w-12 h-12 rounded-full border border-wood/20 flex items-center justify-center text-sm font-medium hover:bg-wood hover:text-white transition-colors focus:bg-wood focus:text-white shrink-0">5+</button>
                        </div>
                    </div>

                    <div className="space-y-2 mb-8">
                        <label className="text-[10px] uppercase tracking-widest text-wood-dark/50 font-bold ml-3">{t('res.contact')}</label>
                        <input type="text" placeholder="Name" className="w-full bg-stone/30 border border-transparent hover:border-wood/20 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:bg-white focus:shadow-md transition-all text-wood-dark mb-3" />
                        <input type="tel" placeholder="Telefonnummer" className="w-full bg-stone/30 border border-transparent hover:border-wood/20 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:bg-white focus:shadow-md transition-all text-wood-dark" />
                    </div>

                    <button className="w-full h-14 bg-wood hover:bg-wood-dark text-white rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-wood/30 hover:scale-[1.01] active:scale-[0.98]">
                        {t('res.btn')}
                    </button>
                </form>
            </div>
        </section>
    );
};

export const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-wood-dark text-cream relative overflow-hidden pt-20 pb-24 border-t border-white/5">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}></div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 text-amber">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5.5A7.5 7.5 0 0 0 4.5 13a7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 0 0 7.5-7.5A7.5 7.5 0 0 0 12 5.5Z" /><path d="M12 2a10.5 10.5 0 0 0-10.5 10.5c0 4.3 2.6 8 6.3 9.7" /><path d="M12 22a10.5 10.5 0 0 1-10.5-10.5c0-4.3 2.6-8 6.3-9.7" /><path d="M12 12a3 3 0 1 0 3-3 3 3 0 0 0-3 3Z" /></svg>
                            </div>
                            <span className="font-serif text-2xl text-cream tracking-tight">Saigon Soul</span>
                        </div>
                        <p className="text-cream/50 text-sm leading-relaxed mb-6">
                            Fusion Cuisine & High Class Sushi.<br />
                            Est. 2024 • Dortmund
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream hover:bg-amber hover:text-wood-dark transition-all duration-300"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream hover:bg-amber hover:text-wood-dark transition-all duration-300"><Facebook className="w-4 h-4" /></a>
                            <a href="mailto:hello@saigonsoul.de" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-cream hover:bg-amber hover:text-wood-dark transition-all duration-300"><Mail className="w-4 h-4" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-amber mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-cream/70">
                            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                            <li><a href="#reservation" className="hover:text-white transition-colors">Reservation</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                            <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-amber mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-cream/70">
                            <li>Kleppingstraße 22<br />44135 Dortmund</li>
                            <li>+49 231 123 45 67</li>
                            <li>hello@saigonsoul.de</li>
                            <li>Mo-So: 11:30 - 23:00</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-amber mb-6">{t('footer.newsletter.title')}</h4>
                        <p className="text-xs text-cream/50 mb-4 leading-relaxed">{t('footer.newsletter.desc')}</p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder={t('footer.newsletter.placeholder')}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-cream focus:outline-none focus:border-amber/50 transition-all placeholder:text-cream/20"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-amber rounded-lg text-wood-dark hover:scale-105 transition-transform">
                                <ArrowRight className="w-3 h-3" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] uppercase tracking-widest opacity-30">© 2024 Saigon Soul GmbH</p>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-cream/40">
                        <a href="#" className="hover:text-cream transition-colors">{t('footer.imprint')}</a>
                        <a href="#" className="hover:text-cream transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-cream transition-colors">{t('footer.cookie')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};