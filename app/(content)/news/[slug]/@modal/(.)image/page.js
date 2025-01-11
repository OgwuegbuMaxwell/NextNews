"use client";

import { useEffect, useState } from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
    const router = useRouter();
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        async function fetchParams() {
            const resolvedParams = await params; // Await the params object
            const newsItemSlug = resolvedParams.slug;

            const foundItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);
            if (!foundItem) {
                notFound();
            } else {
                setNewsItem(foundItem);
            }
        }

        fetchParams();
    }, [params]);

    // Show a loading state while params or newsItem are resolving
    if (!newsItem) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </div>
            </dialog>
        </>
    );
}




// "use client"

// import { DUMMY_NEWS } from "@/dummy-news";
// import { notFound, useRouter } from "next/navigation";


// export default function InterceptedImagePage({params}) {

//     const router = useRouter();



//     // this page also have access to the nexted slug param
//     const newsItemSlug = params.slug;

//     const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);

//     // if no arcticle was found, tell nextjs to use not found error
//     // instead of should another kind of error
//     if (!newsItem) {
//         notFound();
//     }

//     return (
//         <>
//             <div className="modal-backdrop"  onClick={router.back}/>

           

//             <dialog className="modal" open>
//                 <div className="fullscreen-image">
//                     <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
//                 </div>
//             </dialog>
//         </>
//     )
    
// }