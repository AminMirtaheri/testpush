import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import Banner from '../../image/book.jpeg';
import ReactStars from 'react-rating-stars-component';
import { bookmark } from '@heroicons/react/outline'
import axios from 'axios';
import { BASEURL } from '../../constants/index.js';
import { useParams } from 'react-router-dom';

const Product = () => {
  const [dis, setDis] = useState('')
  const [display, setDisplay] = useState('hidden')

  const params = useParams()

  const getData = async (FiltersItem) => {
    axios.get(`${BASEURL}/Product/SingleProduct?id=${params.Id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then((response) => {
      console.log(response)
    });
  }


  return (
    <div className='py-16'>
      <div><Toaster /></div>
      <section className='flex justify-center h-max'>
        <div className='w-4/12 h-max'>
          <img
            alt='book'
            src={Banner}
            layout="responsive"
            className="mx-auto rounded-lg"
            width={400}
            height={400}
            objectFit={"contain"}
          />
        </div>
        <div className='flex flex-col w-8/12 items-start px-8 justify-start h-max'>
          <div className='bg-gray-200 py-2 px-4 rounded-lg w-full text-left text-gray-600 font-semibold'>
            <h1>Home / Product</h1>
          </div>
          <h1 className='mt-8 text-3xl font-bold'>Mood Stability</h1>
          <ReactStars
            count={5}
            value={5}
            edit={false}
            size={30}
            activeColor="#4fd6f7"
          />
          <p className='text-xl font-semibold text-gray-800 mt-4'>Summary:</p>
          <p className='text-left text-justify mt-4'>"Get All The Support And Guidance You Need To Be A Success At Managing Moods!"
            Is the fact that you would like to be more stable but just don't know how making your life difficult... maybe even miserable?
          </p>
          <hr />
          <div className='flex items-center w-full text-left mt-3 border-t-2 border-t-gray-300 pt-4'>
            <div className='bg-gray-200 py-1 px-3 rounded-lg'>
              <p>Category:</p>
            </div>
            <p className='ml-4'>#drama, #selfknowing</p>
          </div>
          <div className='flex justify-end text-right w-full mt-5'>
            <div onClick={() => {
              toast.success('Successfully Saved!')
              setDis('hidden')
              setDisplay('block')
            }} className={`${dis} p-2 bg-gray-200 rounded-lg mr-2`}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#fff" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <div onClick={() => {
              toast('Successfully Deleted!', {
                icon: '🗑️',
              });
              setDisplay('hidden')
              setDis('block')
            }} className={`${display} p-2 bg-white rounded-lg mr-2`}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="#282828" viewBox="0 0 24 24" stroke="#282828" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>

            <button style={{ backgroundColor: '#4fd6f7' }} className='px-6 py-2 rounded-lg text-white'>
              Read Now
            </button>
          </div>
        </div>
      </section>
      <section className='flex flex-col text-left px-10 mt-10'>
        <div className='flex items-center text-left'>
          <div className='py-2 px-6  bg-gray-200 w-max rounded-t-lg'>
            Details
          </div>
          <div className='py-2 px-6 ml-1 bg-gray-200 w-max rounded-t-lg'>
            Comments
          </div>
        </div>
        <div className='bg-gray-200 px-10 py-10 rounded-r-lg rounded-b-lg'>
          <p>You wake up and feel a tickle in your throat. Your head hurts. You’re mildly annoyed as you get the kids ready for school and dress for work yourself. Meanwhile, an epic war is being fought, just below your skin. Millions are fighting and dying for you to be able to complain as you head out the door.

            But most of us never really stop to ask: What even is our immune system?

            Second only to the human brain in its complexity, it is one of the oldest and most critical facets of life on Earth. Without it, you would die within days. In Immune, Philipp Dettmer, the brains behind the most popular science channel on YouTube, takes readers on a journey through the fortress of the human body and its defenses. There is a constant battle of staggering scale raging within us, full of stories of invasion, strategy, defeat, and noble self-sacrifice. In fact, in the time you’ve been reading this, your immune system has probably identified and eradicated a cancer cell that started to grow in your body.

          </p>
        </div>
      </section>
    </div>
  )
}

export default Product