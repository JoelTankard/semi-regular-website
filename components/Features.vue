<template>
    <section class="features md:py-16 bg-sun-white">
        <div class="max-w-screen-xl px-4 w-full">
        <div class="w-full mb-4">
    
            
            <div class="feature-segment my-0 md:my-32">
                <div class="feature-images">
                    <img src="@/assets/imgs/feature-1-left.png" class="right-0 m-0 md:mr-20 md:px-0  md:max-w-lg lg:max-w-2xl" />
                </div>
                <div class="feature-text text-center py-28 md:py-0">
                        <div class=" max-w-lg">
                        <h2 class="">
                            <span>Break free<DashRight/></span> 
                            <span>from routine</span>
                        </h2>

                   
                    <p>Break free from your weekday routine. With Sunday, you can transform your weekends into exciting adventures, exploring unique local spots and attractions.</p>
                </div>
                </div>
                <div class="feature-images">
                    <img src="@/assets/imgs/feature-1-right.png" class="left-0 0 m-0 md:ml-20 md:px-0  md:max-w-lg lg:max-w-2xl" />
                </div>
            </div>
            
        </div>

        <div class="feature-segment feature-left-image">
            <div class="feature-images">
                <img src="@/assets/imgs/feature-2.png" class="md:max-w-xl lg:max-w-3xl m-0 md:mr-16 right-0" />
            </div>
            <div class="feature-text text-center md:text-left py-24 md:py-0">
                <div class="max-w-lg">
                    <h2>
                        <span>No planning</span><br/>
                        <span><UnderlineArrow class="-mb-1 -mr-16" /><span>required</span></span>
                    </h2>
                    <p>No time wasted on research or scheduling. Sunday takes care of every detail, from selecting ideal local spots to creating your itinerary. Enjoy your journey without the hassle.</p>
                </div>
            </div>
        </div>

        <div class="feature-segment ">
               
                <div class="feature-text text-center md:text-left py-24 md:py-0">
                    <div class="max-w-lg">
                        <h2>
                            <span><Dash2Right class="-mt-6 -mr-8"/><span>Personalized</span></span><br/>
                            <span>Adventures</span>
                        </h2>
                        <p>Sunday offers personalized adventures that cater to your preferences. Whether you're new to the area or a long-term resident, discover your surroundings without the overwhelming choices.</p>
                    </div>
                </div>
                 <div class="feature-images">
                        <img src="@/assets/imgs/feature-3.png" class="md:max-w-xl lg:max-w-3xl m-0 md:ml-8 left-0" />
                    </div>
            </div>
            <!-- <div class="w-full md:flex justify-evenly items-stretch">
                <feature-block
                class="md:mr-2 mb-4 md:mb-0"
                            direction="col"
                                title="Effortless Exploration"
                                description="No time wasted on research or scheduling. Sunday carefully plans your day around a central location, serving you a digestible itinerary tailored to your taste."
                                :image="require('@/assets/imgs/forms.png')"
                            />
                <feature-block
                class="md:ml-2"
                    direction="col"
                        title="Personalized Adventures"
                        description="Whether you've just moved to a new city or have lived in one place for years, Sunday caters to your unique desire for exploration and helps you unearth the unexplored."
                        :image="require('@/assets/imgs/context-switch.png')"
                    />
           </div> -->
       </div>
   
    </section>
</template>

<style lang="scss" scoped>
.feature-segment {
 @apply flex flex-col md:flex-row justify-center items-stretch py-0 md:py-48;

 &.feature-left-image {
    @apply flex-col-reverse md:flex-row;
 }

 & > div {
    @apply w-full;
 }

 .feature-text {
        @apply flex flex-col items-center justify-center ;
        span {
            @apply relative whitespace-nowrap;
        }
        h2 {
            @apply mb-8;
        }
 }
 .feature-images {
        @apply flex flex-col justify-center items-center w-full relative px-0 sm:px-12;
        img {
            @apply relative md:absolute w-full sm:w-auto;
        }
 }
}
</style>