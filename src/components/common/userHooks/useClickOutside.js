import { useEffect } from "react";

const useClickOutside = ( setAction , ref, ref2 = null) => {
	useEffect(() => {
		let handler = (event) => {
			if (ref.current && !ref.current.contains(event.target) && !ref2.current.contains(event.target)) {
				setAction();
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});
};

export default useClickOutside;
