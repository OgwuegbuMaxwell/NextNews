
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal/modal-backdrop";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug
    const newsItem = await getNewsItem(newsItemSlug);



    // Show a loading state while params or newsItem are resolving
    if (!newsItem) {
        notFound();
    }

    return (
        <>
            {/* <div className="modal-backdrop" onClick={router.back} /> */}
            <ModalBackdrop/>
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