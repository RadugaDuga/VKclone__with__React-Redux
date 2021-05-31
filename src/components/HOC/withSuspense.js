import React from "react";
import Preloader from "../common/Preloader/Preloader";

export const withSuspence = (Component) => (props) => {
	return (
		<React.Suspense fallback={<Preloader/>}>
			<Component {...props} />
		</React.Suspense>
	);
};
