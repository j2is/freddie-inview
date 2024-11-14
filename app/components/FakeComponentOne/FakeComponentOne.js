"use client";

import React, { useState } from "react";
import FakeComponentOneStyles from "./FakeComponentOne.styled";

export default function FakeComponentOne({ title }) {
	return (
		<FakeComponentOneStyles>
			{!!title && (
				<h1>
					{title}
				</h1>
			)}
		</FakeComponentOneStyles>
	);
}
