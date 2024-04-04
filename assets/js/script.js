

const player = document.querySelector("#audioPlayer");
const music = document.querySelector(".foo-music");

let counter = 0 ;

function playMusic() {
    
    console.log(counter);
    if (counter === 0) {
        player.play();
        counter ++;
        console.log(counter);
        music.textContent = ".I.I. ON";
    }else {
        counter - 1;
        player.pause();
        console.log(counter);
        music.textContent = "..... OFF";

    }
}

music.addEventListener("click", togglePlay);



// var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? pauseMusic() : playMusic();
};

player.onplaying = function() {
  isPlaying = true;
};
player.onpause = function() {
  isPlaying = false;
};


function playMusic() {
    player.play();
    music.textContent = ".I.I. ON";
}

function pauseMusic() {
    player.pause();
    music.textContent = "..... OFF";
}


const burgerBtn = document.querySelector(".burger-menu");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay-menu");    

function openMenu() {
    overlay.classList.toggle("d-none");
}

burgerBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", openMenu);







let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);

let paramValue = params.get('id');

fetch('./assets/data/projects.json')
    .then(response => response.json())
    .then(data => {
        data.projects.map(project => {
            let name = project.name;
            let banner = project.banner
            let littleDesc = project.littleDesc;
            let desc = project.desc;
            let img = project.images;
            let logiciels = project.logiciels
            let similaires = project.similaires
            let id = project.id

            let content_project = document.querySelector('.project-details');


            if (params.has('id')) {

                if(paramValue == id){
                content_project.innerHTML += `
                <style>
                .hero-section {
                    background-image: url(./assets/Images${banner});
                    background-size: cover;
                }
                </style>
                <section class="hero-section">
                    <p class="hero-txt">${name}</p>
                </section>
                <section class="intro">
                    <p class="sm-txt">${littleDesc}</p>
                </section>
                <section class="images">
                    <div class="gallery">


                    </div>

                </section>
                <section class="project">
                    
                    <div class="logiciels">
                        <h2 class="project-title">Logiciels</h2>
                        <p class="sm-txt">${logiciels}</p>
                    </div>
                    <div class="others">
                        <h2 class="project-title">Autres Projets</h2>
                        <div class="similaires">
                    
                        
                        </div>
                    </div>
                </section>`;
            
                    let content_img = document.querySelector('.gallery');
                    let content_similaires = document.querySelector('.similaires');

                    img.forEach(function(i) {
                        content_img.innerHTML +=
                    `<div class="gallery-item"><img src="./assets/Images${i}" alt=""></div>`

                    });

                    similaires.forEach(similaire => {
                        let url = `../assets/Images${similaire.similaire_img}`;
                        console.log(url);
                        let similaire_name = similaire.similaire_name;
                        let similaire_id = similaire.similaire_id;
                        content_similaires.innerHTML += 

                        `
                    <style>
                    .other {
                        background-color: #f7bb00;
                        background-image: url(${url});
                        background-size: cover;

                    }
                    </style>
                    <a href="./details.html?id=${similaire_id}">
                        <div class="other">
                            <p>${similaire_name}</p>
                        </div>
                    </a>
                    `
                    });
                        
                    //     content_similaires.innerHTML +=
                    // `
                    // <style>
                    // .other {
                    //     background-image: url(./assets/Images});
                    //     background-size: cover;
                    // }
                    // </style>
                    // <div class="other">
                    // <p>${similaires[j][1]}</p>
                    // </div>`

                    // });

                }
            }
        })
    })




    // fetch('./assets/data/projects.json')
    // .then(response => response.json())
    // .then(data => {
    //     const contentSimilaires = document.getElementById('content_similaires'); // Assurez-vous que cet élément existe dans votre HTML
    //     const similaires = data.similaires;

    //     // Créez un fragment de document
    //     const fragment = document.createDocumentFragment();

    //     similaires.forEach(similaire => {
    //         const url = `../assets/Images${similaire.similaire_img}`;
    //         const similaireName = similaire.similaire_name;
    //         const similaireId = similaire.similaire_id;

    //         const card = document.createElement('div');
    //         card.classList.add('other');
    //         card.style.backgroundImage = `url(${url})`;
    //         card.innerHTML = `<p>${similaireName}</p>`;

    //         const link = document.createElement('a');
    //         link.href = `./details.html?id=${similaireId}`;
    //         link.appendChild(card);

    //         fragment.appendChild(link);
    //     });

    //     // Ajoutez le fragment au contenu du DOM
    //     contentSimilaires.appendChild(fragment);
    // })
    // .catch(error => console.error('Une erreur est survenue :', error));
