import React from 'react'
import Title from '../components/Title'

const UserProfile = () => {

    const handleSubmit = (e) => {
        console.log(e);
    }

  return (
      <>
      <Title title={'User Info'}/>
    <div className="text-left w-1/3 p-10">

        <h1 className='text-3xl font-bold'>View Profile</h1>
        <p className='font-semibold'>Sponsor photo</p>

        <div className="uploadimage flex items-center">

            <img src="/logo192.png" className='w-32 h-32' alt="" />

            <div className="text-left pl-4">
                <p>Upload your photo</p>
                <p className='text-xs my-2'>Your photo should be in PNG or JPG format</p>
                <input type="file" name="" id="" />
            </div>

        </div>

        <form action="" className='mt-4'>

                <p className='font-semibold mt-3'>Full Name</p>
                <input type="text" className='px-2 py-1 mt-1 w-full border outline-none rounded-md' placeholder='Your Full Name' name='fullName' />

                <p className='font-semibold mt-3'>Email</p>
                <input type="email" className='px-2 py-1 mt-1 w-full border outline-none rounded-md' placeholder='Your Email' name='email' />

                <p className='font-semibold mt-3'>Phone Number</p>
                <input type="text" className='px-2 py-1 mt-1 w-full border outline-none rounded-md' placeholder='Your Phone Number' name='phoneno' />

                <p className='font-semibold mt-3'>Location</p>
                <input type="text" className='px-2 py-1 mt-1 w-full border outline-none rounded-md' placeholder='Your Location' name='location' />

                <p className='font-semibold mt-3'>About Me</p>
                <textarea name="about" className='px-2 py-1 mt-1 w-full border outline-none rounded-md' rows="2"></textarea>


                <input type="submit" className='px-3 py-1 rounded text-white bg-primary-500' value="Save Profile" />



            </form>


        <button className='px-3 py-1 mt-2 rounded text-white bg-primary-400'>Delete Account</button>


    </div>
    
    
    </>
  )
}

export default UserProfile