import React from "react";

export default function List() {
	return (
		<ul>
			<li>
				<div className="flex">
					<img
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						alt="img"
					/>
					<div className="tittle">
						<h3 className="name">John Doe</h3>
						<h5 className="age">20 years</h5>
					</div>
				</div>
			</li>
		</ul>
	);
}
