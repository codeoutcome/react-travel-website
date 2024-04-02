import React from 'react';

const Stats = () => {
    return (
        <div>
            <section class="block w-full bg-gradient-to-r from-blue-500 to-blue-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-lg text-center">
                        {/* <h2 class="mb-4 text-white text-3xl font-extrabold tracking-tight leading-tight text-center md:text-4xl block w-full leading-12">Stats</h2> */}
                        {/* <p class="text-white font-light lg:mb-16 sm:text-xl">Loreum   ipsum</p> */}
                        <div>
                            <div class="grid grid-rows-2 grid-flow-col gap-6">
                               <div class="px-4 py-4">
                                    <div class="text-white text-2xl font-extrabold tracking-tight leading-tight text-center block w-full leading-12 mb-2">15+yrs</div>    
                                    <div class="text-white text-xl tracking-tight leading-tight text-center block w-full leading-12">Experience in building entry systems</div>
                                </div>
                               <div class="px-4 py-4">
                                    <div class="text-white text-2xl font-extrabold tracking-tight leading-tight text-center block w-full leading-12 mb-2">250+</div>
                                    <div class="text-white text-xl tracking-tight leading-tight text-center block w-full leading-12">Successful entry systems launched</div>
                                </div>
                               <div class="px-4 py-4">
                                    <div class="text-white text-2xl font-extrabold tracking-tight leading-tight text-center block w-full leading-12 mb-2">150,000+</div>
                                    <div class="text-white text-xl tracking-tight leading-tight text-center block w-full leading-12">Completed site registrations</div>
                                </div>
                               <div class="px-4 py-4">
                                    <div class="text-white text-2xl font-extrabold tracking-tight leading-tight text-center block w-full leading-12 mb-2">300,000+</div>
                                    <div class="text-white text-xl tracking-tight leading-tight text-center block w-full leading-12">Entry submissions to our systems</div>
                                </div>
                               <div class="px-4 py-4">
                                    <div class="text-white text-2xl font-extrabold tracking-tight leading-tight text-center block w-full leading-12 mb-2">£100 M+</div>
                                    <div class="text-white text-xl tracking-tight leading-tight text-center block w-full leading-12">In revenue generated for our clients</div>
                                </div>
                                <div class="px-4 py-4">
                                    <div class="text-white text-2xl font-extrabold tracking-tight leading-tight text-center block w-full leading-12 mb-2">500,000+</div>
                                    <div class="text-white text-xl tracking-tight leading-tight text-center block w-full leading-12">Media files handled</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stats;