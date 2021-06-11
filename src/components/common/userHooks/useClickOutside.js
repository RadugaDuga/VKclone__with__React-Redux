
import {useEffect} from 'react';


 const useClickOutside = (ref1, setAction) => {
    useEffect(() => {
        
        let handler = (event) => {
            if (ref1.current && !ref1.current.contains(event.target) ) {
                setAction()
            } 
        }
        
        document.addEventListener("mousedown", handler);
        
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
}

export default useClickOutside