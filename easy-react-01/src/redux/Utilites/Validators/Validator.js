export const required = (value) => {
	if (value) return undefined;
	return "Это обязательное поле";
};

export const maxLengthCreator = (maxLength) => (value) => {
	// Сначала проверяем есть ли вэлью
	if (value && value.length > maxLength)
		return `Максимальная длина ${maxLength} символов`;
	return undefined;
};
