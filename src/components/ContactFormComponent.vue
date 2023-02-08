<template>
    <section class="contact_me py-3">
        <div class="">
            <div class="container-fluid text-center">

               
                <!-- <h2 class="text-uppercase text-white fw-bold mb-5"><img class="logo-w me-3"
                        src="../../public/img/logo.png" alt="">contact
                    us...</h2> -->
                <div v-if="success" class="alert alert-success text-start" role="alert">
                    The message has been successfully sent!
                </div>
                <div class="d-flex justify-content-center">
                    <div class="row w-50">
                        <form class="col-12 text-start" @submit.prevent="sendForm()">
                            <div class="mb-4">
                                <input class="border border-light text-white bg-transparent form-control" type="text" name="name" id="name"
                                    placeholder="Name" v-model="name" :class="{ 'is-invalid': errors.name }" required>
                                <p v-for="(error, index) in errors.name" :key="index" class="invalid-feedback">
                                    {{ error }}
                                </p>
                            </div>
                            <div class="mb-4">
                                <input class=" border border-light text-white bg-transparent form-control " type="text" name="email" id="email"
                                    placeholder="Email" v-model="email" :class="{ 'is-invalid': errors.email }"
                                    required>
                                <p v-for="(error, index) in errors.email" :key="index" class="invalid-feedback">
                                    {{ error }}
                                </p>

                            </div>
                            <div class="mb-5">
                                <textarea class="border border-light text-white bg-transparent form-control" name="message" id="message"
                                    cols="30" rows="10" placeholder="Message" v-model="message"
                                    :class="{ 'is-invalid': errors.message }" required></textarea>
                                <p v-for="(error, index) in errors.message" :key="index" class="invalid-feedback">
                                    {{ error }}
                                </p>
                            </div>
                            <div class="d-flex justify-content-center mt-5 mb-3">
                                <button class="mail text-white w-25 " type="submit"
                                    :disabled="loading">{{
    loading?
                                    'Sending...': 'Send'
                                    }}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
                this.name='';
          this.email='';
          this.message='';
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

.mail{
background-color: transparent;
border: 1px solid white;
border-radius: 16px;
padding: 5px;
transition: 0.3s;


&:after{
position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  background: $orange;
  transition: all 0.3s ease;
}

&:hover{
    font-weight: 900;
}

&:hover:after{
    left: auto;
  right: 0;
  width: 100%;
}



}





</style>