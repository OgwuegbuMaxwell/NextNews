import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";


export default async function NewsDetailPage({params}) {

    const newsSlug = params.slug;

    // const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newslug);
    const newsItem = await getNewsItem(newsSlug)

    // if no arcticle was found, tell nextjs to use not found error
    // instead of should another kind of error
    if (!newsItem) {
        notFound();
    }
    
    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.slug}/image`}>
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </Link>
                {newsItem.title}

                <h1>{newsItem.title}</h1>

                <time dateTime={newsItem.date}>
                    {newsItem.date}
                </time>

            </header>

            <p>
                {newsItem.content}
            </p>

           

        </article>
    )
}