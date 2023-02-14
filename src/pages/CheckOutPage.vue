<template>
    <div id="checkout" class="d-flex flex-column align-items-center">


        <div class="w-auto p-5">
            <div class="">
                <div>
                    <label for="customer_firstname">Name</label>
                    <input type="text" name="customer_firstname" id="customer_firstname">
                </div>
                <div>
                    <label for="customer_lastname">Surname</label>
                    <input type="text" name="customer_lastname" id="customer_lastname">
                </div>
                <div>
                    <label for="customer_email">Email</label>
                    <input type="email" name="customer_email" id="customer_email">
                </div>
                <div>
                    <label for="customer_address">Address</label>
                    <input type="text" name="customer_address" id="customer_address">
                </div>
                <div>
                    <label for="customer_tel">Telephone Number</label>
                    <input type="text" name="customer_tel" id="customer_tel">
                </div>

            </div>
            <div id="dropin-wrapper">
                <div id="checkout-message"></div>
                <div id="dropin-container"></div>
                <button id="submit-button" class="btn">Submit payment</button>
            </div>
        </div>
        <div id="payment-message" class="w-auto"></div>




    </div>
</template>

<script>

import axios from 'axios';
import { store } from '../store';

export default {
    name: "CheckOutPage",

    data() {
        return {
            apiToken: '',
            message: '',
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
                    selector: '#dropin-container',
                    card: {
                        overrides: {
                            styles: {
                                input: {
                                    color: 'white',
                                },
                                'input:focus': {
                                    color: 'white',
                                },
                                '.number': {
                                    'font-family': 'monospace'
                                    // Custom web fonts are not supported. Only use system installed fonts.
                                },
                                '.invalid': {
                                    color: '#FC8019'
                                }
                            }
                        }
                    }
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
                                    localStorage.clear();
                                    // setTimeout(() => { location.replace("/"); }, 600)

                                } else {
                                    message.classList.add('alert', 'alert-danger', 'mb-3', 'mt-3');
                                }
                                button.classList.add('d-none');
                                message.innerHTML = res.data.message;

                            })

                        });
                    })
                });

            })
        },


    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>