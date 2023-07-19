<template>
    <div class="inline-block max-w-lg w-full mx-auto relative">
        <form @submit="func_submit" :class="[`size-${size}`, { 'white': white }]">
            <div class="input-wrapper">
                <i class="uil uil-mailbox"></i>
            <input v-model="data_email" placeholder="Your email" type="email" :disabled="data_loading" />
            </div>  
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

    .input-wrapper {
        @apply relative text-sun-black pointer-events-none flex items-center bg-white border-2 border-white focus:border-sun-yellow  p-3 px-6 rounded-full w-full bg-gray-50;
        i {
            @apply text-2xl mr-2;
        }
    }
    input {
        @apply w-full bg-transparent outline-none pointer-events-auto absolute inset-0 pl-16;

        &:focus {
            @apply outline-none;
        }
    }

    button {
        @apply w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2 bg-sun-yellow border-2 border-sun-yellow-light p-3 pl-6 pr-4 rounded-full text-sun-black whitespace-nowrap flex items-center justify-center;
        i {
            @apply text-xl
        }
        &:hover {
            @apply bg-sun-yellow-dark;
        }
    }

    &.size-lg {
        @apply text-lg;
    }

    &.white {
        input {
            @apply border-white text-white bg-sun-black;
        }

        button {
            @apply bg-white text-sun-black;
        }
    }
}

</style>