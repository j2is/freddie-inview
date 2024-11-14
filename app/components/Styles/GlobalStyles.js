'use client';

// ****************************************/
// Global Styles & Resets
// ****************************************/

import { createGlobalStyle, css } from "styled-components";
import media from "./Media";
import font from "./Font";

const styles = css`
  *{
		margin: 0;
		padding: 0;
	}


	html{
		box-sizing: border-box;
		-webkit-print-color-adjust: exact;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	iframe {
		margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
	}

	*, *:before, *:after{
		box-sizing: inherit;
	}

	body,h1,h2,h3,h4,p{
		border: 0;
	}

	body {
		line-height: 1;
	};

	::selection{
		background: ${({ theme }) => theme.selectionHighlightColor};
		color: black;
	}

  button:focus {
    outline: none;
  }

  a,
  a:hover {
    cursor: pointer;
  }


	button {
		border: 0;
		background: transparent;
	}

  fieldset {
    border: 0;
  }

	.main-wrapper{
		background: white;
		width: 100%;
	}

	.page {
		padding-top: ${props => props.theme.sitePaddingTop};
		${media.smallDesktopAndBelow`
			padding-top: ${props => props.theme.sitePaddingTopDesktop};
		`}
		${media.tabletPortraitAndBelow`
			padding-top: ${props => props.theme.sitePaddingTopMobile};
		`}
	}

	a {
		outline: 0;
		text-decoration: none;
	}

	ul{
		text-decoration: none;
		list-style-type: none;
		padding: 0;
	}

	.no-select{
		user-select: none;
	}

	button:hover {
		cursor: pointer;
	}

	.disabled{
		pointer-events: none;
	}

  input {
    -webkit-appearance: none;
  };

  input[type="password"]{
    font-family: arial;
    letter-spacing: 0.3rem;
    ${media.smallDesktopAndBelow`
      letter-spacing: 3px;
    `};
  }

  input:-webkit-autofill div {
    padding-left: 0;
  }

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover
	textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.grey100} inset;
	}

	body, h1, h2, h3, h4, h5, h6, p, a, li, span, input, label, button, em, figcaption, small{
		text-rendering: optimizelegibility;
		-webkit-text-size-adjust: 100%;
		-ms-text-size-adjust: 100%;
		-webkit-font-smoothing: antialiased;
		color: ${props => props.theme.black};
		font-weight: normal;
		font-feature-settings: "kern" 1;
		font-family: ${font.family100};
	}

	html, body{
		font-size:  ${props => (props.theme.baseline * 100) / props.theme.viewport}vmax;
		/* font-size: 0.694vmax */
		/* 1440px times 0.694 = 10px base */
	}


  cite {
    font-style: normal;
  }

	ul,
  ol {
    position: relative;
  }

	q::before,
	q > p,
	q::after{
		display: inline;
	}

  button[disabled]{
    opacity: 0.2;
    pointer-events: none;
  }

	.is-desktop {
		@media (max-width: 980px) {
			display: none;
		}
	}

	.is-mobile {
		display: none;
		@media (max-width: 980px) {
			display: block;
		}
	}

	h1,
	h1 p,
	h2,
	h2 p {
		letter-spacing: 0;
		line-height: ${font.titleLineHeight};
	}

	h1,
	h1 p {
		font-size: ${font.h1};
		${media.smallDesktopAndBelow`
			font-size: ${font.h1Tablet};
		`}
		${media.tabletPortraitAndBelow`
			font-size: ${font.h1Mobile};
		`}
	}

	h2,
	h2 p {
		font-size: ${font.h2};
		${media.smallDesktopAndBelow`
			font-size: ${font.h2Tablet};
		`}
		${media.tabletPortraitAndBelow`
			font-size: ${font.h2Mobile};
		`}
	}

	h3,
	h3 p {
		font-size: ${font.p};
		line-height: ${font.pLineHeight};
		${media.smallDesktopAndBelow`
			font-size: ${font.pTablet};
		`}
		${media.tabletPortraitAndBelow`
			font-size: ${font.pMobile};
		`}
	}

	ol.list,
	ul.list {
		display: grid;
		row-gap: 1.2rem;
    padding-left: 1rem;
    font-size: ${font.p};
    line-height: ${font.pLineHeight};
    ${media.smallDesktopAndBelow`
			row-gap: 12px;
		  padding-left: 10px;
      font-size: ${font.pTablet};
		`};
    ${media.tabletPortraitAndBelow`
      font-size: ${font.pMobile};
		`};
  }

	ol.list li,
  ul.list li {
    position: relative;
		padding-left: 1rem;
		${media.smallDesktopAndBelow`
			padding-left: 10px;
		`}
  }

  ul.list li:before {
    position: absolute;
    left: -1rem;
    top: 1rem;
    width: 0.9rem;
    height: 0.1rem;
    background: black;
    display: block;
    transform: translateY(calc(-50% - 0.1rem));
    content: "";
		${media.smallDesktopAndBelow`
			left: -10px;
			top: 10px;
			width: 9px;
			height: 1px;
			transform: translateY(calc(-50% - 1px));
		`}
		${media.tabletPortraitAndBelow`
			top: 9px;
		`}
  }

	@view-transition {
		navigation: auto;
	}
`;

const GlobalStyles = createGlobalStyle`
	${styles}
`;

export default GlobalStyles;
