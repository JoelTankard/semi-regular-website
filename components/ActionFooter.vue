<template>
    <section class="action-footer">
        <div class="gradient"></div>
        <div class="overflow-hidden w-full flex justify-center items-center py-10">
           <div class="section-content">
                <div class="flex justify-center items-center mb-10">
                    <div class="footer-dots">
                        <img class="-mb-8 sm:mb-0" :src="require('@/assets/imgs/footer-dots-left.png')" />
                        <img  class="-mt-8" :src="require('@/assets/imgs/footer-dots-center.png')" />
                        <img  class="-mb-8 sm:mb-0" :src="require('@/assets/imgs/footer-dots-right.png')" />
                    </div>
                    <h1 class="sm:text-8xl text-6xl">Join to build the future of Chatbots</h1>
                </div>
                <GetNotified white />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.action-footer {
    @apply relative min-h-screen w-full bg-op-black text-white mt-0 md:mt-64;
        .gradient {
            background: linear-gradient(180deg, #F7FAFC 0%, #F5F8FA 6.67%, #EFF2F5 13.33%, #E4E7EC 20%, #D4D7DF 26.67%, #C0C3CF 33.33%, #A9ABBC 40%, #8F91A6 46.67%, #747690 53.33%, #595C7B 60%, #424467 66.67%, #2E3057 73.33%, #1E214A 80%, #141641 86.67%, #0D0F3C 93.33%, #0B0D3A 100%);
            @apply w-full absolute top-0 inset-x-0 h-3/5 md:h-full mt-0 md:-mt-64;
        }
        .section-content {
            @apply relative text-center;
        }

        .footer-dots {
            @apply absolute w-full flex justify-evenly items-center;

            img {
                @apply w-60 md:w-72 -mx-14 sm:-mx-10 md:mx-0;
            }
        }

        h1 {
            @apply md:max-w-3xl relative;
        }

}
</style>