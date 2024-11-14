"use client";

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const FakeComponentOneStyles = styled.section`
  height: 130vh;
	padding: 6rem;
	${media.smallDesktopAndBelow`
		padding: 60px;
	`}
	${media.tabletPortraitAndBelow`
		padding: 40px;
	`}
	border-bottom: 2px solid black;

	h1{
		position: sticky;
		top: 6rem;
		${media.smallDesktopAndBelow`
			top: 60px;
		`}
		${media.tabletPortraitAndBelow`
			top: 40px;
		`}
	}
`;

export default FakeComponentOneStyles;
