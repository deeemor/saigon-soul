'use client';

import React, { useEffect } from 'react';
import { MobileBottomBar, Navbar } from '@/components/Navigation';
import { ChatWidget } from '@/components/ChatWidget';
import { 
    HeroSection, 
    VibeSection, 
    AtmosphereSection, 
    QuoteSection, 
    MenuSection, 
    GallerySection, 
    TeamSection,
    TestimonialSection, 
    SocialSection,
    FAQSection,
    LocationSection,
    ReservationSection, 
    Footer 
} from '@/components/Sections';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal-up, .reveal-img');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return (
        <div className="bg-texture text-wood-dark antialiased pb-24 md:pb-0 selection:bg-amber/20 selection:text-wood-dark">
            <Navbar />
            
            <main>
                <HeroSection />
                <VibeSection />
                <AtmosphereSection />
                <QuoteSection />
                <MenuSection />
                <GallerySection />
                <TeamSection />
                <TestimonialSection />
                <SocialSection />
                <FAQSection />
                <LocationSection />
                <ReservationSection />
            </main>

            <Footer />
            <MobileBottomBar />
            <ChatWidget />
            <Analytics/>
        </div>
    );
}
