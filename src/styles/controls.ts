import colors from './colors';

export const buttonStyles: React.CSSProperties = {
	appearance: 'none',
	border: 'none',
	outline: 'none',
	background: colors.orange,
	borderRadius: 10,
	color: '#fff',
	padding: '15px 40px',
	cursor: 'pointer',
	fontSize: 24,
	fontWeight: 700
};

export const headerStyles: React.CSSProperties = {
	color: colors.blue
};

export const contentStyles: React.CSSProperties = {
	color: colors.black,
	lineHeight: '135%'
};
