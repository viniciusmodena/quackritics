import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: Nunito;
	vertical-align: baseline;
}
:root{
	--primary: #FFE100;
	--primary-gradient: linear-gradient(135deg, #FFE100 0%, #FFE100 60%, #FFFFFF 100%);
	--grey-0: #F8F9FA;
	--grey-1: #868e96;
	--grey-2: #343B41;
	--grey-3: #212529;
	--grey-4: #121214;
	--success: #3FE864;
	--negative: #e83f5b;
	--opacity: rgba(0, 0, 0, 0.8);

	--regular: 400;
	--semi-bold: 600;
	--bold: 800;

	--toastify-font-family: Nunito;
	--toastify-icon-color-success: var(--primary);
	--toastify-color-progress-success: var(--primary);

	background-image: url("cinema_wallpaper.jpg");
    background-repeat: no-repeat;
    background-size: cover;
		min-height: 100vh;
	line-height: 1;
	min-height:100vh;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
button{
	cursor: pointer;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
h1{
	font-family: Oleo Script;
}
`;

export default GlobalStyle;
