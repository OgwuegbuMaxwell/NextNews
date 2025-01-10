import NewsList from "@/components/news/news-list";
import { DUMMY_NEWS } from "@/dummy-news";




export default function NewsPage() {
    return (
        <>
            <div className="header">
                <h1>News Page</h1>
            </div>

            <NewsList news={DUMMY_NEWS}/>
            
        </>
    )
}