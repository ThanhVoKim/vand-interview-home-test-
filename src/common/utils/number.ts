export const numberFormat = (number?: number) => {
	if (number === undefined || number === null) return '';
	return new Intl.NumberFormat('vi-VN').format(number);
};
