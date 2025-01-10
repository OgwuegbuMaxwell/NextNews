import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";


export default function NewsDetailPage({params}) {

    const newslug = params.slug;

    const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newslug);

    // if no arcticle was found, tell nextjs to use not found error
    // instead of should another kind of error
    if (!newsItem) {
        notFound();
    }
    
    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
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