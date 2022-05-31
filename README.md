# LAP 2 Project: Telegraph
[![Typing SVG](https://readme-typing-svg.herokuapp.com?lines=Welcome+to+our+Lap+2+Project)](https://git.io/typing-svg)
## Project Goal
Create a close replica of anonymous instant posting site [telegraph](https://telegra.ph/)

## Installation & usage

Begin by cloning or downloading this repo.
```
git clone https://github.com/nasiima/lap2---telegraph.git
```

### Server Setup

>The server is hard-coded to run on port 3000

- `cd server`
- `docker compose up`
- to stop and keep data: `docker compose down`
- to stop and remove all artifacts: `docker-compose down --volumes --remove-orphans`

### Client Setup
- `cd client`
Choose the option you prefer:
- Open index.html
- Create a local webserver
	- Navigate to the client folder
	- Run the following command: `python -m http.server`
	- Navigate to [this address: localhost:8000](localhost:8000)

## Challenges and Triumphs
### MongoDB
This was my first time linking mongodb to an api, and I learned a bit by choosing this db. After several difficult setbacks we reached a working MVP - Chris

### Styling
I feel like we came pretty close to matching the site's style, though there are still several subtle elements that I would like discover solutions for - Chris

## Technologies
![HTML5](https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&logo=html5&logoColor=ffffff)
![CSS3](https://img.shields.io/badge/-CSS3-%231572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A)
![Markdown](https://img.shields.io/badge/-Markdown-000000?style=flat-square&logo=markdown)
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=ffffff)
![Npm](https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm)
![Git](https://img.shields.io/badge/-Git-%23F05032?style=flat-square&logo=git&logoColor=%23ffffff)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)
![VS Code](http://img.shields.io/badge/-VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=ffffff)
![Windows](http://img.shields.io/badge/-Windows-0078D6?style=flat-square&logo=windows&logoColor=ffffff)
<img src="https://img.shields.io/badge/-MongoDB-4DB33D?style=flat&logo=mongodb&logoColor=FFFFFF">
![Docker](https://img.shields.io/badge/-Docker-%231313CF?style=flat-square&logo=docker)
