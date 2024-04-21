

const player = document.querySelector("#audioPlayer");
const music = document.querySelector(".foo-music");

let counter = 0 ;

function playMusic() {
    
    if (counter === 0) {
        player.play();
        counter ++;
        music.textContent = ".I.I. ON";
    }else {
        counter - 1;
        player.pause();
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
    setTimeout(function () {
    overlay.classList.toggle("d-none");
}, 100);
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
            let competences = project.competences;
            let img = project.images;
            let video = project.video;
            let logiciels = project.logiciels
            let similaires = project.similaires
            let id = project.id

            let content_project = document.querySelector('.project-details');
            let allProjects = document.querySelector('.all-projects-gallery');
            console.log(project.name);
            


            if (params.has('id')) {

                if(paramValue == id){
                content_project.innerHTML += `
                <style>
                .hero-section {
                    background-image: radial-gradient(#ffffff00, #000000a6), url(./assets/Projects${banner});
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
                <section class="video">
                    <div class="video-container">
                        <video controls class="video-item" loop muted>
                            <source src="./assets/Projects${video}" />
                        </video>
                    </div>
                </section>
                <section class="project">
                    
                    <div class="logiciels">
                        <h2 class="project-title">Compétences</h2>
                        <p class="sm-txt">${competences}</p>
                    </div>
                    <div class="logiciels">
                        <h2 class="project-title">Logiciels</h2>
                        <p class="sm-txt">${logiciels}</p>
                    </div>
                    <div class="others">
                        <h2 class="project-title">Autres Projets</h2>
                        <div class="similaires">
                    
                        
                        </div>
                    </div>
                </section>
                <section class="contact">
            <a class="follow" href="mailTo:contact.achauveau@gmail.com">
                <div class="mail">
                    <div class="mail-icon"><img src="./assets/img/mail.svg" alt=""></div>
                    <div class="mail-txt">Get in <br>touch</div>
                    <div class="mail-arrow"><img src="./assets/img/arrow.svg" alt=""></div>
                </div>
            </a>
           

            <a class="follow" href="./follow.html">
                <div class="mail" >
                <div class="mail-icon"><img src="./assets/img/bi_instagram.svg" alt=""></div>
                <div class="mail-txt">Follow <br>Me</div>
                <div class="mail-arrow"><img src="./assets/img/arrow.svg" alt=""></div>
                </div>
            </a>
            
        </section>`;
            
                    let content_img = document.querySelector('.gallery');
                    let content_gallery = document.querySelector('.images');
                    let content_video = document.querySelector('.video');
                    let content_similaires = document.querySelector('.similaires');

                    
                    if (img == "") {
                        content_gallery.classList.add("d-none")
                    }
                    if (video == "") {
                        content_video.classList.add("d-none")
                    }


                    img.forEach(function(i) {
                        content_img.innerHTML +=
                    `<div class="gallery-item">
                        <img src="./assets/Projects${i}" alt="">
                    </div>`

                    });


                    similaires.forEach(similaire => {
                        let url = `../assets/Projects${similaire.similaire_img}`;
                        let similaire_name = similaire.similaire_name;
                        let similaire_id = similaire.similaire_id;
                        content_similaires.innerHTML += 

                        `
                    <a href="./details.html?id=${similaire_id}">
                        <div class="other" style="background-image: radial-gradient(#ffffff00, #0000001a), url(${url})">
                            <p>${similaire_name}</p>
                        </div>
                    </a>
                    `
                    });
                }
            }
        })
    }
)
