import React from "react";
import "./Home.css";
import Me from "../../assets/images/avatar.webp";

const Home = () => {
	return (
		<section className="home">
			<div className="container">
				<div className="content">
					<div className="hero-main">
						<div className="hero-text">
							<h1>Graphic Designer & Editor</h1>
							<p>
								Hello, im neqxs. I'm professional Graphic Designer & Editor. If you will want to buy a video edit or graphic design 
								you should contact me.
							</p>
							<div className="contact-icon">
								<a href="https://discord.gg/GTnmndGbGt" target="_blank">
									<i className="fa-brands fa-discord"></i>
								</a>

								<a
									href="https://www.youtube.com/@nexqs"
									target="_blank"
								>
									<i className="fa-brands fa-youtube"></i>
								</a>

								<a href="mailto:neqxs777@gmail.com">
									<i className="fa-solid fa-envelope"></i>
								</a>
							</div>
						</div>
						<div className="hero-img">
							<img src={Me} alt={Me} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
