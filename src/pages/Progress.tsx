import { useState, useEffect, useRef } from "react";

function Progress() {
    const [dotCount, setDotCount] = useState(0);
    const diff = useRef(1);
    useEffect(() => {
        const interval = setInterval(() => {

            setDotCount(prev => {
                if (prev === 3) diff.current = -1;
                if (prev === 0) diff.current = 1;
                return prev + diff.current;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const dots = ".".repeat(dotCount);
    const spaces = "_".repeat(3 - dotCount);

    return (
        <div className="flex items-center justify-center font-extrabold text-7xl text-center min-h-[90vh] font-mono">
            Work in progress{dots}<span className="text-[#0e0e0e]">{spaces}</span>
        </div>
    );
}

export default Progress