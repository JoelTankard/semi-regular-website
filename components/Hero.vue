<template>
    <section class="hero">
        <div class="hero-content section-content">
            <logo class="logo mb-12"/>
            <h1>Build a GPT-powered chatbot to support your customers. <br/>No fine-tuning.</h1>
            <p class="mb-12">Operator is an AI assistant building platform that allows you to create intelligent, context aware, problem solving support bots with just drag & drop.</p>
            <GetNotified />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero {
    @apply h-screen w-full bg-gradient-to-b from-white to-transparent -mb-14;

    .hero-content {
        @apply text-center max-w-3xl;

        p {
            @apply max-w-xl inline-block;
        }
    }
    .logo {
        @apply h-16;
    }
}
</style>