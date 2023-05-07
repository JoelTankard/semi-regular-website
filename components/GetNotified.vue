<template>
    <div class="inline-block max-w-lg w-full mx-auto relative">
        <form @submit="func_submit" :class="[`size-${size}`, { 'white': white }]">
            <input v-model="data_email" placeholder="Your email" type="email" :disabled="data_loading" />
            <button type="submit" :disabled="data_loading"><span>Join waitlist</span>
                <loader v-if="data_loading" class="ml-2" />
                <i v-else class="text-2xl uil uil-arrow-right ml-2"></i>
            </button>
        </form>
        <p v-if="data_emailNotValid" class="text-red-500 text-xs mt-2 ml-2 absolute">Please enter valid email.</p>
    </div>
</template>

<script>
import Loader from '@/components/Loader';
import * as EmailValidator from 'email-validator';

export default {
    name: 'getNotified',
    components: {
        Loader
    },
    props: {
        size: {
            type: String,
            default: 'base'
        },
        white: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            data_emailNotValid: false,
            data_loading: false,
            data_email: '',
        }
    },
    methods: {
        func_submit() {
            event.preventDefault();
            if (!EmailValidator.validate(this.data_email)) return this.data_emailNotValid = true;
            this.data_emailNotValid = false;
            this.data_loading = true;
            this.$axios.$post('/early-access/submit-email', {
                email: this.data_email
            }).then((data) => {
                this.$emit('success')
            }).catch((err) => {
                this.$emit('error')
            }).finally(() => {
                this.data_loading = false;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
form {
    @apply font-semibold w-full sm:flex;

    input {
        @apply border-2 border-op-black p-4 px-8 rounded-full w-full bg-gray-50;

        &:focus {
            @apply outline-none;
        }
    }

    button {
        @apply w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2 bg-op-black border-2 border-op-black font-semibold p-4 pl-8 pr-6 rounded-full text-white whitespace-nowrap flex items-center justify-center;
    }

    &.size-lg {
        @apply text-lg;
    }

    &.white {
        input {
            @apply border-white text-white bg-op-black;
        }

        button {
            @apply bg-white text-op-black;
        }
    }
}

</style>