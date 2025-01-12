import { useState, useEffect } from "react";

const useRedirect = (delay: number) => {
    const [countdown, setCountdown] = useState(delay / 1000);
    const [isRedirectDisabled, setRedirectDisabled] = useState(false);

    useEffect(() => {
        if (isRedirectDisabled) return;

        const timerId = setTimeout(() => {
            window.location.href = "/";
        }, delay);

        return () => clearTimeout(timerId);
    }, [isRedirectDisabled, delay]);

    useEffect(() => {
        if (isRedirectDisabled) return;

        const intervalId = setInterval(() => {
            setCountdown((prev) => Math.max(prev - 1, 0));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isRedirectDisabled]);

    const disableRedirect = () => setRedirectDisabled(true);

    return { countdown, disableRedirect };
};
export default useRedirect;