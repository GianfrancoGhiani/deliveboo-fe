<template>
    <div v-if="authorization">
        <v-braintree :authorization="authorization" locale=“en_US” @success="onSuccess" @error="onError" @load="onLoad">
            <template #button="slotProps">
                <v-btn ref="paymentBtnRef" @click="slotProps.submit" />
            </template>
        </v-braintree>
    </div>
</template>

<script>
export default {
    name: 'PaymentComponent',
    data() {
        return {
            error: '',
        }
    },
    methods: {
        onSuccess(payload) {
            let token = payload.nonce;
            this.$emit('onSuccess', token)
        },
        onError(error) {
            let message = error.message;
            this.error = message;
            this.$emit('onError', message);
        },
        onLoad() {
            this.$emit('loading')
        }
    },
    props: {
        authorization: {
            required: true,
            type: String
        }
    }

}

</script>

<style lang="scss" scoped>

</style>