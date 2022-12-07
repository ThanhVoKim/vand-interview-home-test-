import React, { Suspense } from 'react';

interface ISuspenseElementProps {
	children: React.ReactNode;
}

const SuspenseElement: React.FC<ISuspenseElementProps> = ({ children }) => {
	return <Suspense fallback={'...Loading'}>{children}</Suspense>;
};

export default SuspenseElement;
