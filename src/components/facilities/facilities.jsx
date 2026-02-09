import React, { useState, useEffect } from "react";
import data from "./data.js";
import "../../app.css";
import OtherFacilities from "../otherFacilities.jsx";

export default function Facilities() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalCards = data.length;

	const nextCard = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
	};

	const prevCard = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
	};

	const goToCard = (index) => {
		setCurrentIndex(index);
	};

	// Keyboard navigation
	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key === "ArrowLeft") prevCard();
			if (e.key === "ArrowRight") nextCard();
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, []);

	// Touch/Swipe support
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	const handleTouchStart = (e) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 50) nextCard();
		if (touchStart - touchEnd < -50) prevCard();
	};

	return (
		<>
			{/* About Section - Keep as is */}
			<section className="aboutMain" id="About">
				<div className="aboutContent">
					<h1>About Us</h1>
					<p>
						Jawahar Bhawan is one of the oldest and most beautiful bhawans in the institute. Whether it be due to the large and spacious rooms or the sprawling well-maintained lawns, you are sure to be mesmerized by the charm of Jawahar Bhawan. Being an ode to the former prime minister Pandit Jawaharlal Nehru, the administration made sure to not skimp on any facilities. Hence, this is the only bhawan to have its club with a billiards and pool table, with sports facilities such as table tennis, volleyball and tennis courts and other facilities like 24-hour cyber room, Wi-Fi connectivity in each room, tailor, canteen and barber shop Jawahar bhawan provides an ideal environment for the overall development of a true IITian.
					</p>
				</div>
				<div className="aboutImg">
					<img src="./Images/about.png" alt="About" />
				</div>
			</section>

			{/* NEW SLIDER SECTION WITH HEADING */}
			<section className="facilitiesContainer" id="Facilities">
				{/* Section Heading */}
				<div className="facilities-heading-wrapper">
					<h1 className="facilities-heading">Bhawan Facilities</h1>
					<div className="facilities-heading-divider"></div>
				</div>

				<div className="slider-container">
					{/* Card Counter */}
					<div className="card-counter">
						<span>{currentIndex + 1}</span> / <span>{totalCards}</span>
					</div>

					{/* Cards Wrapper */}
					<div
						className="cards-wrapper"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						{data.map((facility, index) => (
							<div key={index} className="facility-card">
								{/* Background Image */}
								<img
									src={`./Images/card/${facility.img}`}
									alt={facility.name}
									className="card-image"
								/>

								{/* Gradient Overlay */}
								<div className="card-overlay"></div>

								{/* Content Card with Blur */}
								<div className="card-content">
									<div className="card-icon-wrapper">
										<img
											src={`./Images/card/${facility.vector}`}
											alt={`${facility.name} icon`}
											className="card-icon"
										/>
									</div>
									<h2 className="card-title">{facility.name}</h2>
									<div className="card-divider"></div>
									<p className="card-description">{facility.description}</p>
								</div>
							</div>
						))}
					</div>

					{/* Navigation Buttons */}
					<button
						className="nav-button prev-button"
						onClick={prevCard}
						aria-label="Previous facility"
					>
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
						</svg>
					</button>
					<button
						className="nav-button next-button"
						onClick={nextCard}
						aria-label="Next facility"
					>
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
						</svg>
					</button>

					{/* Indicator Dots */}
					<div className="indicator-dots">
						{data.map((_, index) => (
							<div
								key={index}
								className={`dot ${index === currentIndex ? "active" : ""}`}
								onClick={() => goToCard(index)}
							></div>
						))}
					</div>
				</div>
			</section>

			{/* Other Facilities Section - Keep as is */}
			<section className="otherFacilitiesContainer">

				
				<OtherFacilities />
			</section>
		</>
	);
}