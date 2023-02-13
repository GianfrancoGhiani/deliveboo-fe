<template>
    <div>
        <!-- <suspense> -->
            <!-- <template #default> -->
                <PaymentComponent v-if="!braintreeLoading" :authorization="apiToken" @loading="handleLoading"
                    @onSuccess="paymentOnSuccess" @onError="paymentoOnError" ref="paymentRef"></PaymentComponent>
                <div v-if="error">
                    {{ error }}
                </div>
            <!-- </template> -->
            <!-- <template #fallback>
                loading
            </template> -->
        <!-- </suspense> -->
        <button :disabled="disableBuyButton" @click.prevent="beforeBuy">Procedi con l acquisto</button>
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
            braintreeLoading: true,
            disableBuyButton: true,
            form: {
                token: '',
                products: [],
            }
        }

    },
    mounted() {
        axios.get(`${store.apiBaseUrl}/order`).then((res) => {
            console.log(res.data.token);
            this.apiToken = res.data.token;
            this.braintreeLoading = false
        })
        this.getIds();
    },
    methods: {
        handleLoading() {
            this.disableBuyButton = false;
        },
        paymentOnSuccess(nonce) {
            this.form.token = nonce
            this.buy()
        },
        getIds() {
            const productsArray = JSON.parse(localStorage.getItem('cart'));
            let productsIds = [];
            productsArray.forEach(element => {
                productsIds.push(element.id);
            });
            console.log(productsIds)
        },
        beforeBuy() {
            this.$refs.paymentRef.$refs.paymentBtnRef.click
        },
        buy() {
            this.disableBuyButton = true;
            axios.post(`${store.apiBaseUrl}/order/payment`, { ...this.form }.then((response) => {
                this.message = response.message
                this.$router.push({ path: `/` })
                localStorage.clear();
            }))
            // this.clearCart();
        },
        clearCart() {
            localStorage.clear();
            this.$router.go(0);
        },

    }
}
</script>

<style lang="scss" scoped>

</style>