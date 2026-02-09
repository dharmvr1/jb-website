import React from "react";

export default function Gallery() {
	const images = Array.from({ length: 21 }, (_, i) => i + 1);

	return (
		<section className="galleryMain" id="Gallery">
			<h1>Our Gallery</h1>

			<div className="galleryGrid">
				{images.map((num, index) => (
					<div
						key={num}
						className={`galleryItem ${
							index === 0 || index === 5 || index === 10
								? "large"
								: ""
						}`}
					>
						<img
							src={`./Images/gallery/${num}.jpg`}
							alt={`Gallery ${num}`}
						/>
					</div>
				))}
			</div>
		</section>
	);
}