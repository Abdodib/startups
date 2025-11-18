import React from 'react'
import { formaDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
const StartupCard = ({post} : {post : StartupCardType}) => {
  return (
    <li className=' startup-card group'>
        <div className="flex-between">
            <p className="startup_card_date">
                {formaDate(post._createdAt)}
            </p>
            <div className="flex gap-1.5">
                <EyeIcon className="size-6" style={{ color: '#EE2B6' }} />
                <span className=' text-16-medium'>
                    {post.views}
                </span>

            </div>
        </div>
    </li>
  )
}

export default StartupCard
