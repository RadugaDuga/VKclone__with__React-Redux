import { useEffect } from "react";

const useClickOutside = ( ref, action) => {
	useEffect(() => {
		let handler = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				action();
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	});
};

export default useClickOutside;
