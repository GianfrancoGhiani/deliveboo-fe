<template><!-- <div class="parallax">
        <section class="container">
            <h1 class="text-center">Meet Our Team</h1>

            
            <div class="cards-container">
              
                <div class="card single-card" v-for="(member, i) in team" :key="i">
                  
                    <div class="card-content">
                        
                        <div class="front">
                           
                            <div class="pt-4 pb-3 d-flex justify-content-center align-items-center">
                                <img class="img-profile" :src="member.image" :alt="member.name">
                            </div>
                           
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                
                                <div class="profile-person">
                                    <span class="profile-name ">{{ member.name }}</span>
                                    <span class="profile-qualification ">{{ member.qualification }}</span>
                                </div>
                                
                                <div class="profile-social">
                                    <a href="#nogo"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="#nogo"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="#nogo"><i class="fa-brands fa-telegram"></i></a>
                                    <a :href="member.github" target="blank"><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>

                        
                        <div class="back d-flex flex-column justify-content-center align-items-center">
                            <p class="profile-description">
                                <span>About me:</span>
                                {{ member.description }}
                            </p>
                            
                            <div class="profile-social">
                                <a href="#nogo"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#nogo"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#nogo"><i class="fa-brands fa-telegram"></i></a>
                                <a :href="member.github" target="blank"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</div> -->
    <h1 class="text-center">About Us</h1>

    <div class="container">
        <div class="card" v-for="(member, i) in team" :key="i">
            <img :src="member.image" :alt="member.name" class="card__image">
            <p class="card__name">{{ member.name }}</p>
            <div class="grid-container text-center">

                <div class="grid-child-posts text-center">
                    {{ member.qualification }}
                </div>

            </div>
            <ul class="social-icons">
                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
            </ul>
            <div class="description text-center">
              {{ member.description }}
            </div>
        </div>
</div>
</template>

<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            team: [
                {
                    name: 'Simone',
                    image: 'https://ca.slack-edge.com/T91QPE3BP-U03UYJJFYAE-bfa2acc254ac-512',
                    description: '"Ciao, sono un full stack web developer con un occhio di riguardo per l esperienza utente e una forte attenzione al dettaglio. Ho una vasta esperienza nella creazione di siti web altamente performanti e scalabili, grazie alla mia conoscenza di diverse tecnologie e framework."',
                    qualification: 'Full Stack Developer',
                    github: 'https://github.com/BarrioTropical',
                },
                {
                    name: 'Mattia',
                    image: 'https://avatars.githubusercontent.com/u/54687718?v=4',
                    description: '"Sono un full stack web developer appassionato alla creazione di prodotti digitali user-friendly e accessibili a tutti. Grazie alla mia competenza nell implementazione di tecnologie all avanguardia. Sono sempre alla ricerca di nuove sfide e di nuove opportunità per ampliare le mie conoscenze ."',
                    qualification: 'Full Stack Developer',
                    github: 'https://github.com/Mattia-rollo',
                },
                {
                    name: 'Riccardo',
                    image: 'https://avatars.githubusercontent.com/u/64532705?v=4',
                    description: '"Ciao, sono un full stack web developer che crede fermamente nella tecnologia. Grazie alle mia passione per lo sviluppo web, ho la capacità di creare prodotti digitali funzionali, accessibili e sicuri. Sono sempre alla ricerca di nuovi modi per migliorare l esperienza utente e offrire soluzioni tecnologiche innovative."',
                    qualification: 'Full Stack Developer',
                    github: 'https://github.com/RiccardoPellegrino',
                },
                {
                    name: 'Gianfranco',
                    image: 'https://avatars.githubusercontent.com/u/108810086?v=4',
                    description: '"Eccomi, sono un full stack web developer pronto a creare soluzioni digitali su misura per le tue esigenze. Sia che si tratti di front-end o back-end, sono sempre pronto ad affrontare nuove sfide e a portare le tue idee dal concetto alla realtà, attraverso la mia competenza tecnica e la mia passione per lo sviluppo web."',
                    qualification: 'Full Stack Developer',
                    github: 'https://github.com/gianfrancoghiani',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

// .text-center {
//     color: $orange;
// }

// .parallax {
//     background-image: url('public/img/logos/Costa-Cafe.png');
//     height: 100%;
//     background-attachment: fixed;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
// }

// section {
//     padding: 30px;

//     .cards-container {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center;

//         .single-card {
//             width: 85%;
//             margin: 25px auto;
//             background: transparent;
//             color: $orange;
//             cursor: pointer;
//             border-radius: 0;
//             transition: 0.3s;
//             perspective: 1000px;
//             height: 550px;
//             border: none;

//             &:hover .card-content {
//                 transform: rotateY(180deg);
//             }

//             .card-content {
//                 position: absolute;
//                 width: 100%;
//                 height: 100%;
//                 transition: transform 1s;
//                 transform-style: preserve-3d;
//                 border: 2px solid;

//                 .front {
//                     padding: 25px 0px;


//                     .img-profile {
//                         width: 68%;
//                         height: 100%;
//                         border-radius: 50%;

//                     }

//                     .card-body {
//                         padding-bottom: 40px;
//                         line-height: 1.8;

//                         .profile-person {
//                             text-align: center;

//                             .profile-name {
//                                 display: block;
//                                 font-size: 30px;
//                                 font-weight: medium;
//                                 letter-spacing: 0.8px;
//                                 text-transform: uppercase;
//                             }

//                             .profile-qualification {
//                                 display: block;
//                                 font-size: 20px;
//                                 font-weight: bold;
//                                 color: $orange;
//                                 letter-spacing: 0.8px;
//                             }

//                             .profile-description {
//                                 padding: 15px 30px;
//                                 font-size: 30px;
//                             }
//                         }

//                         .profile-social {
//                             font-size: 22px;
//                             padding-top: 25px;

//                             a {
//                                 i {
//                                     color: $orange;
//                                     margin-right: 10px;
//                                     transition: all 0.5s;

//                                     &:hover {
//                                         color: $orange;
//                                         scale: 1.2;
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }

//                 .front,
//                 .back {
//                     position: absolute;
//                     height: 100%;
//                     width: 100%;
//                     background: $dark-gray;
//                     -webkit-backface-visibility: hidden;
//                     backface-visibility: hidden;

//                     .profile-social {
//                         font-size: 22px;
//                         padding-top: 25px;

//                         a {
//                             i {
//                                 color: $orange;
//                                 margin-right: 10px;
//                                 transition: all 0.5s;

//                                 &:hover {
//                                     color: $orange;
//                                     scale: 1.2;
//                                 }
//                             }
//                         }
//                     }
//                 }

//                 .back {
//                     padding: 25px 30px;
//                     background: black;
//                     color: $orange;
//                     text-align: center;
//                     transform: rotateY(180deg);



//                     span {
//                         font-size: 20px;
//                         font-weight: bold;
//                         display: block;
//                         padding-bottom: 15px;
//                     }
//                 }
//             }

//         }
//     }
// }

@import url("https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500&display=swap");

.container {
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-gap: 50px;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    background-color: #0F0F0F;
    font-family: 'Baloo Paaji 2', cursive;
}

.card {
    background-color: #222831;
    height: 37rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.7);
    color: white;
}

.card__name {
    margin-top: 15px;
    font-size: 1.5em;
    color: $orange;
}

.card__image {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    border: 5px solid #272133;
    margin-top: 20px;
    box-shadow: 0 10px 50px $orange;
}


// .draw-border {
//   box-shadow: inset 0 0 0 4px #58cdd1;
//   color: #58afd1;
//   -webkit-transition: color 0.25s 0.0833333333s;
//   transition: color 0.25s 0.0833333333s;
//   position: relative;
// }

// .draw-border::before,
// .draw-border::after {
//   border: 0 solid transparent;
//   box-sizing: border-box;
//   content: '';
//   pointer-events: none;
//   position: absolute;
//   width: 0rem;
//   height: 0;
//   bottom: 0;
//   right: 0;
// }

// .draw-border::before {
//   border-bottom-width: 4px;
//   border-left-width: 4px;
// }

// .draw-border::after {
//   border-top-width: 4px;
//   border-right-width: 4px;
// }

// .draw-border:hover {
//   color: #ffe593;
// }

// .draw-border:hover::before,
// .draw-border:hover::after {
//   border-color: #eb196e;
//   -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
//   transition: border-color 0s, width 0.25s, height 0.25s;
//   width: 100%;
//   height: 100%;
// }

// .draw-border:hover::before {
//   -webkit-transition-delay: 0s, 0s, 0.25s;
//   transition-delay: 0s, 0s, 0.25s;
// }

// .draw-border:hover::after {
//   -webkit-transition-delay: 0s, 0.25s, 0s;
//   transition-delay: 0s, 0.25s, 0s;
// }

// .btn {
//   background: none;
//   border: none;
//   cursor: pointer;
//   line-height: 1.5;
//   font: 700 1.2rem 'Roboto Slab', sans-serif;
//   padding: 0.75em 2em;
//   letter-spacing: 0.05rem;
//   margin: 1em;
//   width: 13rem;
// }

// .btn:focus {
//   outline: 2px dotted #55d7dc;
// }
.description {
    display: flex;
    justify-content: center;
    padding: 10px;
}

.social-icons {
    padding: 0;
    list-style: none;
    margin: 1em;
}

.social-icons li {
    display: inline-block;
    margin: 0.15em;
    position: relative;
    font-size: 1em;
}

.social-icons i {
    color: #fff;
    position: absolute;
    top: 0.95em;
    left: 0.96em;
    transition: all 265ms ease-out;
}

.social-icons a {
    display: inline-block;
}

.social-icons a:before {
    transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    content: " ";
    width: 45px;
    height: 45px;
    border-radius: 100%;
    display: block;
    background: linear-gradient(45deg, $orange, #db802a);
    transition: all 265ms ease-out;
}

.social-icons a:hover:before {
    transform: scale(0);
    transition: all 265ms ease-in;
}

.social-icons a:hover i {
    transform: scale(2.2);
    -ms-transform: scale(2.2);
    -webkit-transform: scale(2.2);
    color: $orange;
    background: -webkit-linear-gradient(45deg, #eeff00, #c648c8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 265ms ease-in;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    font-size: 1.2em;
}

.text-center {
    color: #EBB825;
}


// @media screen and (min-width:768px) {
//     section {
//         .cards-container {
//             .single-card {
//                 width: 70%;
//                 margin: 35px auto;
//             }
//         }
//     }
// }

// @media screen and (min-width:992px) {
//     section {
//         .cards-container {
//             .single-card {
//                 width: calc(100% / 2 - 80px);
//                 margin: 35px 40px;
//             }
//         }
//     }
// }

// @media screen and (min-width:1200px) {
//     section {
//         .cards-container {
//             .single-card {
//                 width: calc(100% / 4 - 56px);
//                 margin: 50px 18px;
//             }
//         }
//     }
// }


@media screen and (max-width:768px) {
    .container {
        display: grid;
        grid-template-columns: 300px;
        grid-gap: 50px;
        justify-content: center;
        align-items: center;
        background-color: #0F0F0F;
        font-family: 'Baloo Paaji 2', cursive;
    }
}

@media screen and (min-width:769px) and (max-width:999px) {
    .container {
        display: grid;
        grid-template-columns: 300px 300px;
        grid-gap: 50px;
        justify-content: center;
        align-items: center;
        background-color: #0F0F0F;
        font-family: 'Baloo Paaji 2', cursive;
    }
}

@media screen and (min-width:1000px) and (max-width:1300px) {
    .container {
        display: grid;
        grid-template-columns: 300px 300px;
        grid-gap: 50px;
        justify-content: center;
        align-items: center;
        background-color: #0F0F0F;
        font-family: 'Baloo Paaji 2', cursive;
    }
}

@media screen and (min-width:1301px) {
    .container {
        display: grid;
        grid-template-columns: 300px 300px 300px 300px;
        grid-gap: 50px;
        justify-content: center;
        align-items: center;
        background-color: #0F0F0F;
        font-family: 'Baloo Paaji 2', cursive;
    }
}
</style>