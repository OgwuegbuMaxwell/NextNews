import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({params}) {

    // this page also have access to the nexted slug param
    const newsItemSlug = params.slug;

    // const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);
    const newsItem = await getNewsItem(newsItemSlug);

    // if no arcticle was found, tell nextjs to use not found error
    // instead of should another kind of error
    if (!newsItem) {
        notFound();
    }

    return <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
    </div>
}