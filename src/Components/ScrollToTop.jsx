import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // wait for route render
        setTimeout(() => {
            window.lenis?.scrollTo(0, { immediate: true });
        }, 0);
    }, [pathname]);

    return null;
}