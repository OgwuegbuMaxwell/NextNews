import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function InterceptedImagePage({params}) {

    // this page also have access to the nexted slug param
    const newsItemSlug = params.slug;

    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);

    // if no arcticle was found, tell nextjs to use not found error
    // instead of should another kind of error
    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <div className="modal-backdrop"/>

           

            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </div>
            </dialog>
        </>
    )
    
}