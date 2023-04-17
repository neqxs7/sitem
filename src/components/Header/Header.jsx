import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
	const [theme, setTheme] = useState("light-theme");
	const toggleTheme = () => {
		theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
	};

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<nav>
			<a href="https://serhatcan.dev">neqxs</a>
			<div className="theme" onClick={() => toggleTheme()}>
				<i
					className={`fa-solid fa-${theme === "light-theme" ? "moon" : "sun"}`}
				></i>
			</div>
		</nav>
	);
};

export default Header;
