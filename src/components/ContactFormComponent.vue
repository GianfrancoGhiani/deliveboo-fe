<template>
    <section class="contact_me py-3">
        <div class="">
            <div class="container-fluid text-center">


                <div class="d-flex flex-column align-items-center">
                    <h1 class="text-uppercase text-white fw-bold m-5">contact us</h1>
                    <h4>Questions? Contact now our support team and we'll answer you as soon as possible</h4>
                    <div v-if="success" class="alert alert-success text-start" role="alert">
                        The message has been successfully sent!
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="contactform row w-50 m-5">
                        <form class="col-12 text-start" @submit.prevent="sendForm()">
                            <div class="mb-4">
                                <input class="border border-light text-white bg-transparent form-control" type="text"
                                    name="name" id="name" placeholder="Name" v-model="name"
                                    :class="{ 'is-invalid': errors.name }" required>
                                <p v-for="(error, index) in errors.name" :key="index" class="invalid-feedback">
                                    {{ error }}
                                </p>
                            </div>
                            <div class="mb-4">
                                <input class=" border border-light text-white bg-transparent form-control " type="text"
                                    name="email" id="email" placeholder="Email" v-model="email"
                                    :class="{ 'is-invalid': errors.email }" required>
                                <p v-for="(error, index) in errors.email" :key="index" class="invalid-feedback">
                                    {{ error }}
                                </p>

                            </div>
                            <div class="mb-5">
                                <textarea class="border border-light text-white bg-transparent form-control" name="message"
                                    id="message" cols="30" rows="10" placeholder="Message" v-model="message"
                                    :class="{ 'is-invalid': errors.message }" required></textarea>
                                <p v-for="(error, index) in errors.message" :key="index" class="invalid-feedback">
                                    {{ error }}
                                </p>
                            </div>
                            <div class="d-flex justify-content-center mt-5 mb-3">
                                <button class="mail text-white w-25 " type="submit" :disabled="loading">{{
                                    loading ?
                                    'Sending...' : 'Send'
                                }}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center col-lg-12 p-4">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d358195.89843116904!2d8.5754299!3d45.4616357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c22ab05c3bbf%3A0xa481aa5be8d54a11!2sBoolean%20SRLS!5e0!3m2!1sit!2sit!4v1674663934196!5m2!1sit!2sit"
                class="w-100" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
</section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            errors: {},
            loading: false
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }


            setTimeout(() => {
                axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((response) => {
                    console.log(response.data);
                    this.success = response.data.success;
                    if (!this.success) {
                        this.errors = response.data.errors;
                        console.log(this.errors);
                    } else {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }

                });
                this.name = '';
                this.email = '';
                this.message = '';
                this.loading = false;

            }, 1000);






        }
    }
}
</script>

<style lang="scss" scoped>
@use './../assets/styles/partials/variables' as *;

.logo-w {
    width: 80px;
}

.mail {
    background-color: transparent;
    border: 1px solid white;
    border-radius: 16px;
    padding: 5px;
    transition: 0.3s;


    // &:after {
    //     position: absolute;
    //     content: "";
    //     width: 0;
    //     height: 100%;
    //     top: 0;
    //     left: 0;
    //     direction: rtl;
    //     z-index: -1;
    //     background: $orange;
    //     transition: all 0.3s ease;
    // }

    &:hover {
        font-weight: 900;
    }

    &:hover:after {
        left: auto;
        right: 0;
        width: 100%;
    }



}


@media screen and (max-width: 600px) {
    .w-50 {
        min-width: 100%;
    }
}
</style>