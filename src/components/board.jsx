import React from "react";
import "./Board.css";
import List from "./List";

export default function board() {
	return (
		<main id="site-main">
			<h1 className="text-dark title">Birthday Reminder</h1>

			<div className="board">
				<List />
			</div>
		</main>
	);
}
