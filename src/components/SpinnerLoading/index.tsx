import { SpinIcon } from 'common/svg';
import React from 'react';

const SpinnerLoading = () => {
	return (
		<div className="fixed inset-0 z-10 flex items-center justify-center">
			<div className="absolute bg-gray-300 inset-0 z-0 bg-opacity-50" />
			<div className="flex items-center justify-center z-20 ">
				<SpinIcon className="animate-spin -ml-1 mr-3 w-8 text-primary fill-current" />{' '}
				Loading...
			</div>
		</div>
	);
};

export default SpinnerLoading;
