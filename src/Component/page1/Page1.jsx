import React from 'react'
import Marketing from './Marketing'
import Form from './Form'
import Panel from './Panel'

function Page1() {
    return (
        <div className='flex flex-col items-center justify-center w-full p-3 md:p-16'>
            <div className=' flex flex-col md:flex-row justify-center items-center gap-6 w-full'>
                <Marketing />
                <Form />
            </div>
            <div className='w-full'>
                <Panel />
            </div>
        </div>

    )
}

export default Page1