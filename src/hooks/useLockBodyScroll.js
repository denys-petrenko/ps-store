import { useEffect } from "react"

export const useLockBodyScroll = (lock) => {
    useEffect(() => {
        lock
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflow = "";

        return () => document.body.style.overflow = "";
    }, [lock])
}