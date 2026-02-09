import React from "react";

export default function Footer() {
	return (
		<section className="footerMain" id="ContactUs">
			{/* <img className="footerTopBg" src="./Images/RadialCircle.svg" alt="" />
			<img className="footerBottomBg" src="./Images/RadialCircle.svg" alt="" /> */}

			<div className="footerContainer">
				{/* Left Side */}
				<div className="leftSection">
					<div className="topLeftSection">
						<h1 className="footerHead">Contact Us</h1>

						<p>
							<a href="mailto:jawaharbhawan@iitr.ac.in">
								jawaharbhawan@iitr.ac.in
							</a>
						</p>

						<p>+91 90457 89183</p>

						<p>
							Jawahar Bhawan, Jawahar Bhawan Road,
							<br />
							IIT Roorkee, Roorkee – 247667
							<br />
							Uttarakhand, India
						</p>
					</div>

					<div className="bottomLeftSection">
						<a href="#top">Home</a>
						<a
							href="https://channeli.in/bhawan_app/complain"
							target="_blank"
							rel="noreferrer"
						>
							Feedback Form
						</a>
						<a
							href="https://channeli.in/bhawan_app/complain"
							target="_blank"
							rel="noreferrer"
						>
							Register a Complaint
						</a>
					</div>
				</div>

				{/* Right Side */}
				<div className="rightSection">
					<h1 className="footerHead">Find Us Here</h1>
					<div className="mapWrapper">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1158.8119324506313!2d77.9000185827351!3d29.86429626323842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb368ef396751%3A0xeddda126ec67f931!2sJawahar%20Bhawan%20Rd%2C%20Indian%20Institute%20of%20Technology%20Roorkee%2C%20Roorkee%2C%20Uttarakhand%20247667!5e0!3m2!1sen!2sin!4v1649440856842!5m2!1sen!2sin"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Jawahar Bhawan Location"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
}