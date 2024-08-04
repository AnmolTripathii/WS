import React from 'react'

function FAQ() {
    return (
        <div className='flex flex-col items-center justify-center w-full p-24 gap-4'>
            <h1 className='text-3xl font-bold text-center'>Digital Marketing Course <br /> FAQs</h1>
            <h2 className='text-center'>Lorem ipsum dolor sit amet consectetur Imperdiet tellus ut ornare pharetra.</h2>
            <div className=' flex flex-col w-full gap-4'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is website development?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, reiciendis nisi in laborum culpa, laudantium dolores cumque numquam consequatur nesciunt quibusdam fuga quae!</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">What is website development?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ab! Temporibus, natus. Eligendi expedita dolorem est, qui distinctio itaque? Quam, ex? Necessitatibus, ab!</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">What is website development?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, aut minus dicta quos aspernatur perspiciatis iure ut autem ad rem eveniet vel maxime?</p>
                    </div>
                </div>

            </div>
            <div className="flex justify-center mt-6">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Download Curriculum</button>
            </div>
        </div>
    )
}

export default FAQ