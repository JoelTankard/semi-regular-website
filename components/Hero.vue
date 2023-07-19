<template>
    <section class="hero">
            <pre-video :class="['hero-video', { 'is-loaded': isVideoLoaded }]" @loaded="onVideoLoad" hero src="https://cdn.joeltankard.com/sunday/hero-video-compressed.mp4" />
            
            <div class="h-screen -mx-2 sm:mx-0">
        <div class="hero-content section-content">
            <div class="flex flex-col sm:flex-row justify-start items-start">
                <div class="mb-8">
            <logo class="logo"/>
            </div>
          
            <div class="sm:ml-8">
            <!-- <h2 class="text-3xl sm:text-6xl">Break free from routine</h2> -->
            <h1 class="text-6xl sm:text-8xl">Weekly day trips every <i>Sunday</i>, <br/>auto-planned itinerarys.</h1>
            <p class="mb-12 ">Sunday breaks up your monotonous life by giving you auto-planned day trips within 2hrs of your location. Sign up to get early access.</p>
            <GetNotified />
              </div>
            </div>
        </div>
        </div>
        <div class="hero-gradient"></div>
    </section>
</template>

<script>
export default { 
    name: 'Hero',
    data(){
        return {
            isVideoLoaded: false
        }
    },
    methods: {
        onVideoLoad() {
            this.isVideoLoaded = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.hero {
    @apply w-full bg-black relative;

    h1 {
        line-height: 0.9;
    }
    
    .hero-video {
        @apply absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out;

        &.is-loaded {
            @apply opacity-70;
        }
    
    }

    .hero-gradient {
        @apply w-full z-10 -mt-40;
        height: 500px;
        background: linear-gradient(180deg, rgba(249, 247, 244, 0.00) 0%, rgba(249, 247, 244, 0.01) 6.67%, rgba(249, 247, 244, 0.04) 13.33%, rgba(249, 247, 244, 0.08) 20.00%, rgba(249, 247, 244, 0.15) 26.67%, rgba(249, 247, 244, 0.23) 33.33%, rgba(249, 247, 244, 0.33) 40.00%, rgba(249, 247, 244, 0.44) 46.67%, rgba(249, 247, 244, 0.56) 53.33%, rgba(249, 247, 244, 0.67) 60.00%, rgba(249, 247, 244, 0.77) 66.67%, rgba(249, 247, 244, 0.85) 73.33%, rgba(249, 247, 244, 0.92) 80.00%, rgba(249, 247, 244, 0.96) 86.67%, rgba(249, 247, 244, 0.99) 93.33%, #F9F7F4 100%);
    }

    .hero-content {
        @apply z-20 max-w-screen-xl flex justify-center items-start sm:items-center pt-24  relative text-sun-white h-full;

        p {
            @apply max-w-xl inline-block;
        }
    }
    .logo {
        @apply w-16 sm:w-20 inline-block;
    }
}
</style>