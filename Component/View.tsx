import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { startup_views } from '@/sanity/lib/queries'

const View = async ({id} : {id : string} ) => {
    const {views : totalViews} = await client
    .withConfig({useCdn : false})
    .fetch(startup_views , {id});
    
    return (
    <div className='view-container'>
   <div className=' absolute -top-2 -right-2'>
    <Ping />
   </div>
   <p className="view-text">
    <span className="font-black">
    views: {totalViews}
    </span>
    </p>
    </div>
  )
}

export default View
