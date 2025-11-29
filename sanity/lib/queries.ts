import { defineQuery } from "next-sanity";

export const startups_query = defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || category match "*"+$search+"*" || title match "*"+$search+"*" || author -> name match "*"+$search+"*" ] | order(_createdAt desc){
    _id,
    title,
    slug,
    _createdAt,
    author -> {
    _id, name, image , bio
    },
    views,
    description,
    category,
    image
} `); 
 
 export const startup_by_id_query = ` *[_type == "startup" && _id == $id][0]{
   _id,
    title,
    slug,
    _createdAt,
    author -> {
    _id, name, image , bio ,username
    },
    views,
    description,
    category,
    image,
    pitch
    } `;
export const startup_views = defineQuery(`  
*[_type =="startup" && _id == $id][0]{
_id,views
}
`)