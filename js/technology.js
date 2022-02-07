const technologies = {
    button: document.querySelectorAll("button"),
    title: document.querySelector(".technology__title--text"),
    text: document.querySelector(".technology__text"),
    image: document.querySelector(".technology__img")
}

technologies.button.forEach(button => {
    button.addEventListener('click', function() {
        switch (button.getAttribute("data-tech")) {
            case 'launch':
                technologies.title.innerHTML = 'LAUNCH VEHICLE';
                technologies.text.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled<br>vehicle used to carry a payload from Earth's surface to <br>space, usually to Earth orbit or beyond. Our WEB-X<br>carrier rocket is the most powerful in operation. Standing<br>150 metres tall, it's quite an awe-inspiring sight on the<br>launch pad!"
                technologies.image.setAttribute("src", "/assets/technology/image-launch-vehicle-portrait.jpg");
                for (let i = 0; technologies.button.length; ++i) {
                    if (technologies.button[i].getAttribute("data-tech") != 'launch') {
                        technologies.button[i].classList.remove("is-active-technology");
                    } else {
                        technologies.button[i].classList.add("is-active-technology");
                    }
                }
                break;
            case 'spaceport':
                technologies.title.innerHTML = 'SPACEPORT';
                technologies.text.innerHTML = "A spacepor or cosmodrome is a site for launching (or<br>receiving) spacecraft, by analogy to the seaport for ships or<br>airport for aircraft. Based in the famous Cape <br>Canaveral, our spaceport is ideally situated to take<br>advantage of the Earth's rotation for launch."
                technologies.image.setAttribute("src", "/assets/technology/image-spaceport-portrait.jpg");
                for (let i = 0; technologies.button.length; ++i) {
                    if (technologies.button[i].getAttribute("data-tech") != 'spaceport') {
                        technologies.button[i].classList.remove("is-active-technology");
                    } else {
                        technologies.button[i].classList.add("is-active-technology");
                    }
                }
                break;
            case 'capsule':
                technologies.title.innerHTML = 'SPACE CAPSULE';
                technologies.text.innerHTML = "A space capsule is an often-crewed spacecraft that uses<br>a blunt-body reentry capsule to reenter the Earth's<br>atmosphere without wings. Our capsule is where you'll<br>spend your time during the flight.It includes a space<br> gym, cinema, and plenty of other activities to keep you<br>entertained.";
                technologies.image.setAttribute("src", "/assets/technology/image-space-capsule-portrait.jpg");
                for (let i = 0; technologies.button.length; ++i) {
                    if (technologies.button[i].getAttribute("data-tech") != 'capsule') {
                        technologies.button[i].classList.remove("is-active-technology");
                    } else {
                        technologies.button[i].classList.add("is-active-technology");
                    }
                }
        }
    })
})