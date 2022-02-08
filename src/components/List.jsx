import React from "react";

export default function List({ info }) {
	return (
		<>
			<ul>{iterate(info)}</ul>
		</>
	);
}

function iterate(data) {
	if (!data) return;
	return (
		<>
			{data.map((person, index) => {
				// old(person.birthday);
				return (
					<li key={index}>
						<div className="flex">
							<img src={person.img} alt="img" />
							<div className="tittle">
								<h3 className="name">{person.name}</h3>
								<h5 className="age">{old(person.birthday)} years </h5>
							</div>
						</div>
					</li>
				);
			})}
		</>
	);
}

//how old the person is
function old(personAge) {
	let year = new Date(personAge).getFullYear();
	let currentYear = new Date().getFullYear();

	let age = currentYear - year;
	return age;
}
