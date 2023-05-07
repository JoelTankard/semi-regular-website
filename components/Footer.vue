<template>
    <footer class="footer">
        <p class="sm:text-left">© Operator Pty Ltd</p>
        <p class="sm:text-center">Built in Sydney, Australia</p>
        <p class="sm:text-right">Privacy Policy · Terms Conditions · Contact</p>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    @apply bg-op-black text-white flex flex-col sm:flex-row justify-between items-end p-10 pb-10 text-xs;
    p {
        @apply w-full text-center;
    }
}
</style>