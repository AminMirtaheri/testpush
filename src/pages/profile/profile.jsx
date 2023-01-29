import React from 'react'
import cover from '../../image/profile.jpg';
import avatar from '../../image/avatar.jpg';


const Profile = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className='w-full flex flex-col relative h-full'>
        <img src={cover} style={{ height: '370px' }} className=" w-full top-0 left-0" alt="" />
        <div className='bottom-5 absolute flex justify-between w-4/12'>
          <img style={{ borderRadius: "50%" }} alt="avatar" className='w-6/12 border-white border-4' src={avatar} />
          <div className='flex flex-col justify-center items-start text-left pt-6'>
            <p className='text-4xl text-white font-bold'>Martin Garix</p>
            <p className='text-2xl text-white font-semibold mt-4'>Plan #Premium</p>
          </div>
        </div>
      </div>
      <div style={{height: '50vh'}} className='flex justify-between w-full items-center px-8 py-4'>
        <div className='w-4/12 py-2 px-4'>
          <div className='flex justify-start w-full items-center  h-max border-2 border-gray-100 rounded-lg  py-2 px-4'>
            <div style={{backgroundColor: '#76ff03', borderRadius: '50%'}} className='w-4 h-4'>
            </div>
            <p className='text-xl font-medium ml-4'>
              Premium Plan
            </p>
          </div>
        </div>
        <div className='w-4/12 py-2 px-4'>
          <div className='flex justify-start w-full items-center  h-max border-2 border-gray-100 rounded-lg  py-2 px-4'>
            <div style={{backgroundColor: '#4fd6f7', borderRadius: '50%'}} className='w-4 h-4'>
            </div>
            <p className='text-xl font-medium ml-4'>
              170 days left
            </p>
          </div>
        </div>
        <div className='w-4/12 py-2 px-4'>
          <div className='flex justify-start w-full items-center  h-max border-2 border-gray-100 rounded-lg  py-2 px-4'>
            <div style={{backgroundColor: '#fdab01', borderRadius: '50%'}} className='w-4 h-4'>
            </div>
            <p className='text-xl font-medium ml-4'>
              3 Books Added
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='border-2 border-gray-200 px-4 py-3'>
          <p>
            subsciption plan
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile