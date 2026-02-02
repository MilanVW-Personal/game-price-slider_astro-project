# IT-Challenges 3 - Astro Project
## Short explanation
This repository contains all the files and source code for the Astro project I had to create for my IT Challenges 3 course. This README aims to provide a clearer understanding of how the app is structured and how it works. You can watch the project live via [this link](https://www.milan-vanwinkel-statweb.be/itc3_astro).

## What is this project?
This project is a web application, built with Astro, that retrieves and displays a number of games from a JSON file. Thanks to features like a slider, the games are filtered based on their discounted price. You can also use the search bar to search for specific games in the list, which changes with each input.

## Why did I make this project?
As I mentioned before, this was a mandatory project for IT Challenges 3. It was the second assignment in the course, as there was also a web scraping project with Puppeteer before this project.

## When did I start this project?
I started this project all the way back in September 2024, at the beginning of my second academic year. Without the adjustments I've recently made, including to able to host the project, I worked on it right up to the deadline for this and the first project, which was October 6, 2024.

## Used technologies
- HTML
- CSS
- JavaScript
- Astro
- GitHub Actions
- TypeScript
- Tailwind

## Screenshots / Functionalities
You can also view this project live via the link at the top of this README, but below the three functionalities are listed again, each with the help of a screenshot.

1. The homepage / landing page you see when loading the project.
![screenshot-homepage](./frontend/src/data/homepage-screenshot.png)

2. When you change the slider, the list is also filtered. Only games with a discount percentage greater than or equal to the slider percentage are filtered and displayed. The default is 50%, so you won't see all the games right away.
![screenshot-filter](./frontend/src/data/filtered-screenshot.png)

3. Besides the slider, you can also use the search bar to find a specific game in the list, regardless of the slider's percentage. Because I typed "re" into the search bar in this screenshot, I can see all games with "re" in their names.
![screenshot-searchquery](./frontend/src/data/zoekwaarde-screenshot.png)