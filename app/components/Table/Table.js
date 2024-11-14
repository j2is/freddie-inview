"use client";

import React, { useState } from "react";
import TableStyles from "./Table.styled";

export default function Table({ rows }) {
	return (
		<TableStyles className="table">
			<table>
				{rows?.map((row, i) => {
					if (i === 0) {
						return <thead key={row?._key}>
							<tr>
								{row?.cells.map((text, j) => {
									return <th key={j}>{text}</th>
								})}
							</tr>
						</thead>
					}

					if (i > 0) {
						return (
							<tbody key={row?._key}>
								<tr key={row?._key}>
									{row?.cells.map((text, j) => {
										return <td key={j}>{text}</td>
									})}
								</tr>
							</tbody>
						)
					}
					return null;
				})}
			</table>
		</TableStyles>
	);
}
