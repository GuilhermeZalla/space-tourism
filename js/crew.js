const crews = {
    button: document.querySelectorAll("button"),
    caption: document.querySelector(".crew__caption"),
    name: document.querySelector(".crew__title-name"),
    text: document.querySelector(".crew__text"),
    photo: document.querySelector(".crew__photo"),
}

crews.button.forEach(crew => {
    crew.addEventListener('click', function() {
        switch (crew.getAttribute("data-crew")) {
            case 'hurley':
                crews.caption.innerHTML = 'COMMANDER';
                crews.name.innerHTML = 'DOUGLAS HURLEY';
                if (window.matchMedia("(min-width: 601px) and (max-width: 990px)").matches) {
                    crews.text.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine<br> Corps pilot and former NASA astronaut. He launched into space for <br> the third time as commander of <br>Crew Dragon Demo-2.";
                } else if (window.matchMedia("(max-width: 600px)").matches) {
                    crews.text.innerHTML = "Douglas Gerald Hurley is an American engineer, <br> former Marine Corps pilot and former NASA <br> astronaut. He launched into space for the third <br> time as commander of Crew Dragon Demo-2.";
                } else {
                    crews.text.innerHTML = "Douglas Gerald Hurley is an American engineer, former <br>Marine Corps pilot and former NASA astronaut. He <br>launched into space for the third time as commander of <br>Crew Dragon Demo-2.";
                }
                crews.photo.setAttribute("src", "assets/crew/image-douglas-hurley.png");
                crews.photo.setAttribute("alt", "Photo of Commander Douglas Hurley");
                crews.photo.style.width = 'auto';
                for (let i = 0; crews.button.length; ++i) {
                    if (crews.button[i].getAttribute("data-crew") != 'hurley') {
                        crews.button[i].classList.remove("is-active-slider");
                    } else {
                        crews.button[i].classList.add("is-active-slider");
                    }
                }
                break;
            case 'mark':
                crews.caption.innerHTML = 'MISSION SPECIALIST';
                crews.name.innerHTML = 'MARK SHUTTLEWORTH';
                if (window.matchMedia("(min-width: 601px) and (max-width: 990px)").matches) {
                    crews.text.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the<br> company behind the Linux-based Ubuntu operating system. Shuttleworth<br> became the first South African to travel to space as a space tourist.";
                } else {
                    crews.text.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of <br>Canonical, the company behind the Linux-based Ubuntu<br>operating system. Shuttleworth became the first South <br>African to travel to space as a space tourist.";
                }
                crews.photo.setAttribute("src", "assets/crew/image-mark-shuttleworth.png");
                crews.photo.setAttribute("alt", "Photo of Mission Specialist Mark Shuttleworth");
                crews.photo.style.width = '360px';
                for (let i = 0; crews.button.length; ++i) {
                    if (crews.button[i].getAttribute("data-crew") != 'mark') {
                        crews.button[i].classList.remove("is-active-slider");
                    } else {
                        crews.button[i].classList.add("is-active-slider");
                    }
                }
                break;
            case 'victor':
                crews.caption.innerHTML = 'PILOT';
                crews.name.innerHTML = 'VICTOR GLOVER';
                if (window.matchMedia("(min-width: 601px) and (max-width: 990px)").matches) {
                    crews.text.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International<br> Space Station. Glover is a commander in the U.S Navy where he pilots an F/A-18. He<br>was a crew member of Expedition 64, and served as a station systems flight engineer.";
                } else {
                    crews.text.innerHTML = "Pilot on the first operational flight of the SpaceX Crew<br>Dragon to the International Space Station. Glover is a<br>commander in the U.S Navy where he pilots an F/A-18. He<br>was a crew member of Expedition 64, and served as a <br>station systems flight engineer.";
                }
                crews.photo.setAttribute("src", "assets/crew/image-victor-glover.png");
                crews.photo.setAttribute("alt", "Photo of Pilot Victor Glover");
                crews.photo.style.width = 'auto';
                for (let i = 0; crews.button.length; ++i) {
                    if (crews.button[i].getAttribute("data-crew") != 'victor') {
                        crews.button[i].classList.remove("is-active-slider");
                    } else {
                        crews.button[i].classList.add("is-active-slider");
                    }
                }
                break;
            case 'ansari':
                crews.caption.innerHTML = 'FLIGHT ENGINEER';
                crews.name.innerHTML = 'ANOUSHEH ANSARI';
                if (window.matchMedia("(min-width: 601px) and (max-width: 990px)").matches) {
                    crews.text.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea<br> Systems. Ansari was the fourth self-funded space tourist, the first <br> self-funded woman to fly to the ISS, and the first Iranian in space.";
                } else {
                    crews.text.innerHTML = "Anousheh Ansari is an Iranian American engineer and<br>co-founder of Prodea Systems. Ansari was the fourth<br>self-funded space tourist, the first self-funded woman to<br>fly to the ISS, and the first Iranian in space.";
                }
                crews.photo.setAttribute("src", "assets/crew/image-anousheh-ansari.png");
                crews.photo.setAttribute("alt", "Photo of Flight Engineer Anousheh Ansari");
                crews.photo.style.width = 'auto';
                for (let i = 0; crews.button.length; ++i) {
                    if (crews.button[i].getAttribute("data-crew") != 'ansari') {
                        crews.button[i].classList.remove("is-active-slider");
                    } else {
                        crews.button[i].classList.add("is-active-slider");
                    }
                }
                break;
        }
    })
})