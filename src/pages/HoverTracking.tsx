import React, { useRef, useState } from 'react'
import './HoverTracking.css'
function HoverTracking() {
    const tabs = ["status", "setting", "profile", "dashboard"]
    const containerRef = useRef<HTMLUListElement>(null);
    const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({});

    const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>, tabIndex: number) => {
        console.log("Mouse entered: ", tabIndex)
        const container = containerRef.current;
        if (!container) return;
        const tabEl = container.children[tabIndex] as HTMLElement;
        const rect = tabEl.getBoundingClientRect();
        setHoverStyle({
            width: rect.width + 'px',
            height: rect.height + 'px',
            transform: `translate(${rect.left - container.getBoundingClientRect().left}px, 0px)`,
            opacity: 1,
        });

    }
    const handleMouseLeave = () => {
        setHoverStyle({ ...hoverStyle, opacity: 0 })
    }

    return (
        <div className='flex flex-col justify-center h-screen'>
            <div className='mx-auto'>
                <ul className='flex text-3xl gap-2'>
                    {tabs.map((tab, index) => {
                        return <li key={index} onMouseEnter={(e) => handleMouseMove(e, index)} onMouseLeave={handleMouseLeave}
                            className='hover:bg-gray-900 transition-all duration-200 p-2 rounded-xl glassy-box'>
                            {tab}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HoverTracking