<template>
    <div id="checkout" class="d-flex flex-column align-items-center">

        <!-- <PaymentComponent v-if="!braintreeLoading" :authorization="apiToken" @loading="handleLoading"
            @onSuccess="paymentOnSuccess" @onError="paymentoOnError" ref="paymentRef"></PaymentComponent>
        <div v-if="error">
            {{ error }}
            
        </div>
        <button :disabled="disableBuyButton" @click.prevent="beforeBuy">Procedi con l acquisto</button>
         -->
        <div class="w-25">
            <div id="dropin-wrapper">
                <div id="checkout-message"></div>
                <div id="dropin-container"></div>
                <button id="submit-button" class="btn">Submit payment</button>
            </div>
        </div>
        <div id="payment-message" class="w-auto"></div>
        <!-- <button id="submit-button" class="button button--small button--green">Purchase</button> -->



    </div>
</template>

<script>
import PaymentComponent from '../components/PaymentComponent.vue';
import axios from 'axios';
import { store } from '../store';
// import { defineAsyncComponent } from 'vue';
// const PaymentComponent = defineAsyncComponent(() => import('../components/PaymentComponent.vue'))
export default {
    name: "CheckOutPage",
    components: { PaymentComponent },
    data() {
        return {
            apiToken: '',
            message: '',
            braintreeLoading: true,
            disableBuyButton: true,
            dataProductsIds: [],
            form: {
                token: '',
                products: [],
            }
        }

    },
    mounted() {
        this.getToken();

    }
    ,
    methods: {
        handleLoading() {
            this.disableBuyButton = false;
        },
        paymentOnSuccess(nonce) {
            this.form.token = nonce
            this.buy()
        },
        getToken() {
            axios.get(`${store.apiBaseUrl}/order`).then((res) => {
                this.apiToken = res.data.token;

                var button = document.querySelector('#submit-button');

                braintree.dropin.create({
                    authorization: this.apiToken,
                    selector: '#dropin-container'
                }, function (err, instance) {
                    button.addEventListener('click', function () {
                        button.setAttribute("disabled", true);
                        button.innerHTML = 'Loading...';
                        instance.requestPaymentMethod(function (err, payload) {

                            const productsArray = JSON.parse(localStorage.getItem('cart'));
                            let productsIds = [];
                            productsArray.forEach(element => {
                                productsIds.push(element.id);
                            });

                            console.log(payload.nonce)
                            axios.post(`${store.apiBaseUrl}/order/payment`,
                                {
                                    token: payload.nonce,
                                    products: productsIds
                                }
                            ).then((res) => {
                                const message = document.querySelector('#payment-message');
                                if (res.data.success) {
                                    message.classList.add('alert', 'alert-success', 'mb-3', 'mt-3');
                                } else {
                                    message.classList.add('alert', 'alert-danger', 'mb-3', 'mt-3');
                                }
                                message.innerHTML = res.data.message;
                                button.innerHTML = 'Paid';
                            })
                            // console.log(payload)
                        });
                    })
                });

                // this.braintreeLoading = false

            })
        },
        clearCart() {
            localStorage.clear();
            this.$router.go(0);
        },

    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>