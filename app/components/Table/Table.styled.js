"use client";

import styled from "styled-components";
import { font, media, underline } from "../Styles";

const TableStyles = styled.section`
	${media.tabletPortraitAndBelow`
    max-width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `}

  table {
    ${media.tabletPortraitAndBelow`
      min-width: 450px;
      width: 100%;
    `}
  }

`;

export default TableStyles;
