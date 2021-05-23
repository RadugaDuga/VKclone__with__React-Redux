import React from "react";
import s from "./FormControl.module.css";

export const Textarea = ({ input, meta, ...props }) => {
	let hasError = meta.touched && meta.error;
	return (
		<div className={s.formControl + " " + (hasError ? s.error : null)}>
			<textarea {...input} {...props}></textarea>
			{hasError ? <span className={s.span}> {meta.error} </span> : undefined}
		</div>
	);
};

export const Input = ({ input, meta, ...props }) => {
	let hasError = meta.touched && meta.error;
	return (
		<div className={s.formControl + " " + (hasError ? s.error : "")}>
			<input {...input} {...props}></input>
			{hasError ? <span className={s.span}> {meta.error} </span> : undefined}
		</div>
	);
};
