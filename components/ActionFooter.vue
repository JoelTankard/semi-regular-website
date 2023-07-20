<template>
    <section class="action-footer">

        <div class="gradient"></div>
                            <pre-video :class="['footer-video', { 'is-loaded': isVideoLoaded }]" @loaded="onVideoLoad" hero src="https://cdn.joeltankard.com/sunday/hero-video-compressed.mp4" />

        <div class="overflow-hidden w-full flex justify-center items-center py-10">
           <div class="section-content">
                <div class="flex justify-center items-center mb-10">
                    <div class="footer-dots">
                      
                    </div>
                    <div class="mb-10 relative flex flex-col justify-center items-center py-10">
                        <div class="dot-section top-0 left-0">
                        </div>
                          <div class="dot-section left-0">
                                <span class="dot -ml-12 mt-26 md:-mt-12 bg-sun-yellow " />
                            </div>
                         <div class="dot-section bottom-0 left-0">
                                 <span class="dot ml-32 bg-sun-blue " />
                        </div>
                         <div class="dot-section top-0">
                                        <span class="dot -mt-6 bg-sun-red " />
                                          <span class="dot -ml-32 md:-ml-64 md:-mt-24 bg-sun-purple " />
                                </div>
                   

                        <div class="dot-section top-0 right-0">
                                <span class="dot -ml-20 -mt-12 bg-sun-orange " />
                            </div>
                              <div class="dot-section right-0">
                                    <span class="dot mt-20 -mr-10 bg-sun-blue " />
                                </div>
                             <div class="dot-section bottom-0 right-0">
                            </div>
                                 <div class="dot-section bottom-0">
                                        <span class="dot ml-48 mt-10 bg-sun-green " />
                                </div>

                        <h3 class="text-5xl md:text-8xl mb-4 -mx-2 sm:mx-0 font-normal">Join to discover somewhere new every <i>Sunday</i></h3>
                        <p>Join our waitlist by entering your email and explore a new locale every Sunday.</p>
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
    @apply relative w-full bg-sun-blue text-white;

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

            .dot-section {
                @apply absolute h-1 w-1 flex justify-center items-center;
                  .dot {
            @apply w-3 h-3 absolute rounded-full;
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