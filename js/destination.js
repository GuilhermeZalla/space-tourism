const destination = {
    planets: document.querySelector("img.destination__img"),
    planetTitle: document.querySelector(".destination__title"),
    planetDescription: document.querySelector(".destination__description"),
    planetDistance: document.getElementById("distance"),
    planetTravelTime: document.getElementById("travel-time"),
    destinationLink: document.querySelectorAll(".destination__item a")
}

function changeDestination(element) {
    let planet = element.getAttribute("data-type");
    switch (planet) {
        case 'moon':
            destination.planets.setAttribute("src", "assets/destination/image-moon.png");
            destination.planetTitle.innerText = 'MOON';
            destination.planetDescription.innerHTML = "See our planet as you've never seen it before. A perfect <br> relaxing trip away to help regain perspective and come <br> back refreshed. While you're there, take in some history <br> by visiting the Luna 2 and Apollo 11 landing sites."
            destination.planetDistance.innerHTML = "384,400 KM";
            destination.planetTravelTime.innerHTML = "3 DAYS";
            element.classList.add("is-active-destination");
            for (let i = 0; i < destination.destinationLink.length; ++i) {
                if (destination.destinationLink[i].getAttribute("data-type") != 'moon') {
                    destination.destinationLink[i].classList.remove("is-active-destination");
                }
            }
            break;
        case 'mars':
            destination.planets.setAttribute("src", "assets/destination/image-mars.png");
            destination.planetTitle.innerText = 'MARS';
            destination.planetDescription.innerHTML = "Don't forget to pack your hiking boots. You'll need them to <br> tackle Olympus Mons, the tallest planetary mountain in <br> our solar system. It's two and a half times the size of <br> Everest!";
            destination.planetDistance.innerHTML = "225 MIL. KM";
            destination.planetTravelTime.innerHTML = "9 MONTHS";
            element.classList.add("is-active-destination");
            for (let i = 0; i < destination.destinationLink.length; ++i) {
                if (destination.destinationLink[i].getAttribute("data-type") != 'mars') {
                    destination.destinationLink[i].classList.remove("is-active-destination");
                }
            }
            break;
        case 'europa':
            destination.planets.setAttribute("src", "assets/destination/image-europa.png");
            destination.planetTitle.innerText = 'EUROPA';
            destination.planetDescription.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter,<br>Europa is a winter lover's dream. With an icy surface, it's<br>perfect for a bit of ice skating, curling, hockey or simple<br>relaxation in your snug wintery cabin.";
            destination.planetDistance.innerHTML = "628 MIL. KM";
            destination.planetTravelTime.innerHTML = "3 YEARS";
            for (let i = 0; i < destination.destinationLink.length; ++i) {
                if (destination.destinationLink[i].getAttribute("data-type") != 'europa') {
                    destination.destinationLink[i].classList.remove("is-active-destination");
                }
            }
            break;
        case 'titan':
            destination.planets.setAttribute("src", "assets/destination/image-titan.png");
            destination.planetTitle.innerText = 'TITAN';
            destination.planetDescription.innerHTML = "The only moon known to have a dense atmosphere other <br> than Earth, Titan is a home away from home (just a few <br>hundred degrees colder!). As a bonus, you get striking<br>views of the Rings of Saturn.";
            destination.planetDistance.innerHTML = "1.6 BIL. KM";
            destination.planetTravelTime.innerHTML = "7 YEARS";
            for (let i = 0; i < destination.destinationLink.length; ++i) {
                if (destination.destinationLink[i].getAttribute("data-type") != 'titan') {
                    destination.destinationLink[i].classList.remove("is-active-destination");
                }
            }
            break;
    }
}