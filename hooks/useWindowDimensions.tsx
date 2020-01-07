import { useState, useEffect } from 'react';

/** 
 * @returns [number, number] width and height of window  
 */
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return [
        width,
        height
    ];
}


/** 
 * - get width and height of window
 * - adjusts to window resizing
 * @returns [number, number] width and height of window
 */
export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}