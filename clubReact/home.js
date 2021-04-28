import React from "react";
import ReactDOM from "react-dom";
import F4EE from "./images/F4EE.png";
// Use in JSX
let F4EEimg = <img src={F4EE}  />;

class Home extends React.Component {
  render() {
    return (
      <main>
		
			<header>
				<h1>California Video Game Modders Club</h1>
			</header>
			
			<div class="flex-container">
			<h2>What is modding?</h2>
			<p>Modding is the act of modifying the files of a video game to create something new with it.</p>
			<h2>What games do we mod?</h2>
			<p>The primary games we mod are large, open-ended games with easily read game-files, such as Bethesda Softworks' Skyrim, or Mojang's Minecraft.</p>
			<h2>Why do we mod?</h2>
			<p>Because it is a good learning experience, since not all of us can make a game from scratch!</p>
			
			<img src={F4EE}  alt="F4EE Logo" width="400" height="400"/>
			<p>Pictured above is the logo for the modlist that the head of this club personally curates. The game is Fallout 4&#9889;.</p>
			</div>
		</main>
    );
  }
}

export default Home;