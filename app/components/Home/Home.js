"use client";

import { useEffect, useState, useCallback } from "react";
import HomeStyles from "./Home.styled";
import ColourChangeWrapper from '../ColourChangeWrapper';
import FakeComponentOne from "../FakeComponentOne"; // could be any component

export default function Home() {
	const [activeColour, setActiveColour] = useState(null);
	const [isInverse, setIsInverse] = useState(false);

	const pastelColors = [
		'hsla(350, 100%, 88%, 1)', // Soft Pink
		'hsla(270, 76%, 85%, 1)',  // Lavender
		'hsla(200, 81%, 87%, 1)',  // Baby Blue
		'hsla(150, 52%, 88%, 1)',  // Mint Green
		'hsla(20, 100%, 87%, 1)',  // Peach
		'hsla(50, 100%, 86%, 1)',  // Lemon
		'hsla(285, 42%, 86%, 1)',  // Lilac
		'hsla(190, 90%, 85%, 1)',  // Sky Blue
		'hsla(120, 25%, 85%, 1)',  // Sage Green
		'hsla(5, 100%, 87%, 1)',   // Coral
		'hsla(230, 60%, 87%, 1)',  // Periwinkle
		'hsla(40, 100%, 88%, 1)'   // Buttercream
	];

	const inverseIndexes = [
		3, 4
	];

	const changeBodyBg = (colour) => {
		document.body.style.backgroundColor = colour || 'white';
	};

	const checkInverse = (colour) => {
		const index = pastelColors.indexOf(colour);
		if (inverseIndexes.includes(index)) {
			setIsInverse(true);
		} else {
			setIsInverse(false);
		}
	};

	useEffect(() => {
		changeBodyBg(activeColour);
		checkInverse(activeColour);
	}, [activeColour]);

	return (
		<HomeStyles className={`${isInverse ? 'is-inverse' : ''}`}>
			{pastelColors.map((colour, index) => (
				<ColourChangeWrapper key={index} colour={colour} setActiveColour={setActiveColour}>
					<FakeComponentOne title={`Component ${index}`} />
				</ColourChangeWrapper>
			))}
		</HomeStyles>
	);
}