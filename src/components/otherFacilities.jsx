import React from "react";
import "../app.css";

export default function OtherFacilities() {
	return (
		<section className="otherFacilitiesContainer">
			<div className="otherFacilitiesInner">
				<h1 className="otherHeading">Other Facilities</h1>
				<div className="otherHeadingLine"></div>

				<div className="otherCardsContainer">
					<div className="otherCard">
						<h2>Barber / Tailor / Stationary</h2>
						<p>
							Basic day-to-day services are available inside the bhawan so
							students never have to worry about essentials.
						</p>
					</div>

					<div className="otherCard">
						<h2>Cyber Room</h2>
						<p>
							A dedicated cyber room with reliable internet access for
							assignments, research, and late-night submissions.
						</p>
					</div>

					<div className="otherCard">
						<h2>Fruit Shop</h2>
						<p>
							Fresh fruits available within the bhawan so you can stay healthy
							without leaving the hostel.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
