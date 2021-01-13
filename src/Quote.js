import React from 'react';

export default function Quote({ text, primary }) {
	const quoteClass = `quote ${primary ? 'quote--primary' : ''}`;
	return <div className={quoteClass}>{text}</div>;
}
