export const weekDayOptions = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

export const formatStringDate = (
	date: Date,
	options: Record<any, any> = weekDayOptions,
): string => {
	return date?.toLocaleDateString('vi-VN', options);
};
