<template>
    <section class="features">
        <div class="max-w-screen-xl p-4 w-full">
        <div class="w-full mb-4">
            <feature-block
                direction="row"
                    title="Control the conversation"
                    description="Operator puts guide-rails on GPT to keep the conversation on track. It’s as easy as connecting the blocks."
                    :image="require('@/assets/imgs/convo-flow.png')"
                />
        </div>
            <div class="w-full md:flex justify-evenly items-stretch">
                <feature-block
                class="md:mr-2 mb-4 md:mb-0"
                            direction="col"
                                title="Minimise human takeover"
                                description="Operator allows you to link up your API & existing services to give the AI full power to handle complex tasks for your customers."
                                :image="require('@/assets/imgs/forms.png')"
                            />
                <feature-block
                class="md:ml-2"
                    direction="col"
                        title="Reply in the right context"
                        description="Unlike current chatbot builders Operator leans fully into LLMs allowing conversations flow natural while achieving the tasks you set."
                        :image="require('@/assets/imgs/context-switch.png')"
                    />
           </div>
       </div>
   
    </section>
</template>