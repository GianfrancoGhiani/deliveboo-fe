<template>
    <div class="parallax">
        <section class="container">
            <!-- cards container  -->
            <div class="cards-container">
                <!--  card -->
                <div class="card single-card" v-for="(member, i) in team" :key="i">
                    <!-- content -->
                    <div class="card-content">
                        <!-- front -->
                        <div class="front">
                            <!--  img -->
                            <div class="pt-4 pb-3 d-flex justify-content-center align-items-center">
                                <img class="img-profile" :src="member.image" :alt="member.name">
                            </div>
                            <!-- body -->
                            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                                <!-- person -->
                                <div class="profile-person">
                                    <span class="profile-name ">{{member.name}}</span>
                                    <span class="profile-qualification ">{{member.qualification}}</span>
                                </div>
                                <!-- social -->
                                <div class="profile-social">
                                    <a href="#nogo"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="#nogo"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="#nogo"><i class="fa-brands fa-telegram"></i></a>
                                    <a :href="member.github" target="blank"><i class="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>

                        <!-- back -->
                        <div class="back d-flex flex-column justify-content-center align-items-center">
                            <p class="profile-description">
                            <span>About me:</span>
                            {{member.description}}
                            </p>
                            <!-- social -->
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
    </div>
    <ChatComponent />
    <ScrollTopComponent />
</template>

<script>
    export default {
        name: 'AboutUs',
        data(){
            return {
                team: [
                    {
                        name: 'Simone',
                        image: 'https://avatars.githubusercontent.com/u/98409091?v=4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempora enim pariatur saepe illo impedit?',
                        qualification:'Full Stack Developer',
                        github: 'https://github.com/BarrioTropical',
                    },
                    {
                        name: 'Mattia',
                        image: 'https://avatars.githubusercontent.com/u/54687718?v=4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempora enim pariatur saepe illo impedit?',
                        qualification:'Full Stack Developer',
                        github: 'https://github.com/Mattia-rollo',
                    },
                    {
                        name: 'Riccardo',
                        image: 'https://avatars.githubusercontent.com/u/64532705?v=4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempora enim pariatur saepe illo impedit?',
                        qualification:'Full Stack Developer',
                        github: 'https://github.com/RiccardoPellegrino',
                    },
                    {
                        name: 'Gianfranco',
                        image: 'https://avatars.githubusercontent.com/u/13931076?v=4',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempora enim pariatur saepe illo impedit?',
                        qualification:'Full Stack Developer',
                        github: 'https://github.com/gianfrancoghiani',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.parallax {
    background-image: url('public/img/logos/dominos.png');
    height: 100%;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
section {
    padding: 100px;

    .container{
        width: 100vw;
    }
    .cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
        .single-card {
            width: 85%;
            margin: 25px auto;
            background: transparent;
            color: pink;
            cursor: pointer;
            border-radius: 0;
            transition: 0.3s;
            perspective: 1000px;
            height: 500px;
            border: none;
            
            &:hover .card-content {
                transform: rotateY( 180deg ) ;
            }
            
            .card-content {
                position: absolute;
                width: 100%;
                height: 100%;
                transition: transform 1s;
                transform-style: preserve-3d;
                border: 2px solid pink;
                .front {
                    padding: 25px 0px;
                    // box-shadow: 8px 8px 10px rgba(62, 62, 62, 0.76);

                    .img-profile{
                        width: 68%;
                        height: 100%;
                        border: 2px solid pink;
                    }

                    .card-body{
                        padding-bottom: 40px;
                        line-height: 1.8;

                        .profile-person {
                            text-align: center;
                            
                            .profile-name {
                                display: block;
                                font-size: 40px;
                                font-weight: bold;
                                letter-spacing: 0.8px;
                                text-transform: uppercase;
                            }
                            .profile-qualification {
                                display: block;
                                font-size: 20px;
                                font-weight: bold;
                                color: pink;
                                letter-spacing: 0.8px;
                            }
                            .profile-description{
                            padding: 15px 30px;
                            font-size:30px;
                            }
                        }

                        .profile-social{
                            font-size: 22px;
                            padding-top: 25px;

                            a {
                                i {
                                    color: pink;
                                    margin-right: 10px;
                                    transition: all 0.5s;

                                    &:hover{
                                        color: pink;
                                        scale: 1.2;
                                    } 
                                } 
                            }
                        }
                    }
                }

                .front,
                .back {
                position: absolute;
                height: 100%;
                width: 100%;
                background: white;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;

                .profile-social{
                            font-size: 22px;
                            padding-top: 25px;

                            a {
                                i {
                                    color: pink;
                                    margin-right: 10px;
                                    transition: all 0.5s;

                                    &:hover{
                                        color: pink;
                                        scale: 1.2;
                                    } 
                                } 
                            }
                        }
                }

                .back {
                    padding: 25px 30px;
                    background: white;
                    color: pink;
                    text-align: center;
                    transform: rotateY( 180deg );
                    // box-shadow: 8px 8px 10px rgba(62, 62, 62, 0.76);


                    span {
                        font-size: 20px;
                        font-weight: bold;
                        display: block;
                        padding-bottom: 15px;
                    }
                }
            }
            
        }
    }
}

@media screen and (min-width:768px) {
    section {
        .cards-container {
                .single-card{
                width: 70%;
                margin: 35px auto;
            }
        }
    }  
}

@media screen and (min-width:992px) {
    section {
        .cards-container {
                .single-card{
                width: calc(100% / 2 - 80px);
                margin: 35px 40px;
            }
        }
    }  
}

@media screen and (min-width:1200px) {
    section {
        .cards-container {
                .single-card{
                width: calc(100% / 3 - 56px);
                margin: 50px 28px;
            }
        }
    }   
}
</style>