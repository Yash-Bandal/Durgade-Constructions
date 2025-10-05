// src/hooks/useScroll.js
import { useEffect, useState } from 'react';

export const useScroll = () => {
    const [scrollState, setScrollState] = useState({
        position: 0,
        isActive: false,
        isUp: false,
        isBetween: false,
    });

    useEffect(() => {
        const headerOffset = 100; // Adjust based on Navbar height
        let prevScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setScrollState({
                position: currentScroll,
                isActive: currentScroll > headerOffset,
                isUp: currentScroll <= prevScroll,
                isBetween: currentScroll <= 236,
            });
            prevScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollState;
};