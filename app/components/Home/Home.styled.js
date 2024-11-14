"use client";

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const HomeStyles = styled.section`
	display: grid;
	row-gap: 3rem;
	padding: 2rem;
	${media.smallDesktopAndBelow`
		padding: 2rem;
	`}

	p, a {
		font-size: ${font.p};
		${media.smallDesktopAndBelow`
			font-size: ${font.pTablet};
		`}
		${media.tabletPortraitAndBelow`
			font-size: ${font.pMobile};
		`}
	}

	a {
		text-decoration: underline;
	}
`;

export default HomeStyles;
