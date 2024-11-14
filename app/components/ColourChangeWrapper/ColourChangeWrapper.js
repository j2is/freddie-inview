"use client";

import React, { useState, useEffect, useRef } from "react";
import ColourChangeWrapperStyles from "./ColourChangeWrapper.styled";
import { motion, useInView } from 'framer-motion'

export default function ColourChangeWrapper({ children, colour, setActiveColour }) {
	const rootMargin = '-50% 0% -50% 0%';
	const container = useRef();

	const isInView = useInView(container, { margin: rootMargin })

	useEffect(() => {
		if (isInView && !!colour) {
			setActiveColour(colour);
		}
	}, [isInView, colour, setActiveColour]);

	return (
		<ColourChangeWrapperStyles ref={container}>
			{children}
		</ColourChangeWrapperStyles>
	);
}
