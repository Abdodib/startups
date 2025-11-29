/* eslint-disable @next/next/no-img-element */
"use cache";
import { formaDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { startup_by_id_query } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import markdownit from 'markdown-it';
import React, { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/Component/View';


const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const post = await client.fetch( startup_by_id_query , {id});
    const md = markdownit();
    const parsedContent = md.render(post?.pitch || "");
    if (!post)return notFound();
  return (
    <>
    <section className=' pink_container !min-h-[230px]!'>
        <p className="tag"> {formaDate(post?._createdAt)} </p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading max-w-5xl!"> {post.description} </p>
    </section>
    <section className="section_container">
        <img 
        src={post.image} 
        alt="thumblait" 
        className=' w-full h-auto rounded-xl' 
        />
        <div className=' space-y-5 mt-10 max-w-4xl mx-auto'>
            <div className="flex-between gap-5">
                <Link href={`/user/${post.author._id}`}
                className=' flex gap-2 items-center mb-3'
                >
                    <div>
                    <Image src={post.author.image} alt='avatar' height={64} width={64}
                     className=' rounded-full drop-shadow-lg'
                     />
                     <p className="text-20-medium"> {post.author.name} </p>
                     <p className="text-16-medium text-black-300!">@{post.author.username}</p>    
                    </div>    
                </Link>
                <p className="category_tag">{post.category}</p>
            </div>
            <h3 className="text-30-bold">pitch details</h3>
            {
                parsedContent? 
                (
                    <article 
                    className=' prose max-w-4xl font-work-sans break-all'
                    dangerouslySetInnerHTML={{__html:parsedContent}}
                    />
                )
                :
                (
                    <p className='no-result'>
                        no details
                    </p>
                )
            }
        </div>
        <hr className=' devider'/>
        <Suspense fallback={<Skeleton className='view-skeleton'/>} >
        <View id = {id}/>
        </Suspense>
        {/*TODO:    EDITOR SELECT STARTUP  */}
    </section>
    </>
  )
}

export default Page