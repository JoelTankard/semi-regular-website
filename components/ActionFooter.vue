<template>
    <section class="action-footer">

        <div class="gradient"></div>
                            <pre-video :class="['footer-video', { 'is-loaded': isVideoLoaded }]" @loaded="onVideoLoad" hero src="https://cdn.joeltankard.com/sunday/hero-video-compressed.mp4" />

        <div class="overflow-hidden w-full flex justify-center items-center py-10">
           <div class="section-content">
                <div class="flex justify-center items-center mb-10">
                    <div class="footer-dots">
                        <div class="dot-section -mb-8 sm:-mb-20 md:mb-0">
                            <span class="dot left-0 ml-12 sm:ml-20 -mt-36 bg-sun-blue rounded-full" />
                            <span class="dot left-0 mt-0 sm:mt-28 ml-12 sm:ml-5 bg-sun-orange rounded-full" />
                            <span class="dot right-0 mr-16 mt-20 bg-sun-green rounded-full" />
                        </div>
                        <div class="dot-section -mb-8 sm:-mb-20 md:mb-0">
                            <span class="dot right-0 -mt-48 sm:-mt-64 md:-mt-48 lg:-mt-40 mr-8 bg-sun-yellow rounded-full" />
                       </div>
                        <div class="dot-section -mb-8 sm:-mb-20 md:mb-0">
                            <span class="dot left-0 mt-24 ml-12 bg-sun-purple rounded-full" />
                            <span class="dot left-0 sm:left-auto sm:right-0 mt-6 ml-36 sm:ml-0 sm:mr-14 xl:mr-16 bg-sun-orange rounded-full" />
                            <span class="dot right-0 -mt-20 mr-12 sm:-mr-12 bg-sun-purple rounded-full" />
                        </div>
                    </div>
                    <div class="mb-10">
                        <h3 class="text-6xl md:text-8xl mb-4 -mx-2 sm:mx-0 font-normal">Join to discover somewhere new every <i>Sunday</i></h3>

                    </div>
                </div>
                <GetNotified />
            </div>
        </div>
         <div class="footer">
            <p class="sm:text-left">© Operator Technology Pty Ltd</p>
            <p class="sm:text-center">Built in Sydney, Australia</p>
            <p class="sm:text-right">Privacy Policy · Terms Conditions · Contact</p>
         </div>
    </section>
</template>

<script>
export default {
    name: 'Footer',
    data() {
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
.action-footer {
    @apply relative min-h-screen w-full bg-sun-blue text-white;

    .footer-video {
        @apply absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out;

        &.is-loaded {
            @apply opacity-50;
        }
    
    }
        .gradient {
            @apply w-full relative z-10;
            height: 500px;
background: linear-gradient(180deg, #F9F7F4 0%, rgba(249, 247, 244, 0.99) 6.67%, rgba(249, 247, 244, 0.96) 13.33%, rgba(249, 247, 244, 0.92) 20.00%, rgba(248, 247, 244, 0.85) 26.67%, rgba(248, 247, 244, 0.77) 33.33%, rgba(248, 246, 244, 0.67) 40.00%, rgba(247, 246, 244, 0.56) 46.67%, rgba(247, 246, 245, 0.44) 53.33%, rgba(246, 246, 245, 0.33) 60.00%, rgba(246, 245, 245, 0.23) 66.67%, rgba(246, 245, 245, 0.15) 73.33%, rgba(245, 245, 245, 0.08) 80.00%, rgba(245, 245, 245, 0.04) 86.67%, rgba(245, 245, 245, 0.01) 93.33%, rgba(245, 245, 245, 0.00) 100%);        
}
        .section-content {
            @apply relative text-center pb-48;
        }

        .footer-dots {
            @apply absolute w-full h-full flex justify-evenly items-center;

            .dot-section {
                @apply relative border-white w-60 md:w-72 -mx-14 sm:-mx-4 md:mx-0;
            }

            .dot {
            @apply w-3 h-3 absolute;
        }
        }

        h1 {
            @apply md:max-w-3xl relative;
        }

.footer {
    @apply relative w-full text-white flex flex-col sm:flex-row justify-between items-end p-10 text-xs;
    p {
        @apply w-full text-center mb-4;
    }
}
}
</style>