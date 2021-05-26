import React from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";



export const withAuthRedirect = (Component) => {

	const RedirectComponent = (props) => {
        const isAuth = useSelector((state) => state.auth.isAuth);
		if (!isAuth) return <Redirect to={"/login"} />;
		return <Component {...props} />;
	};

	return RedirectComponent;
};
