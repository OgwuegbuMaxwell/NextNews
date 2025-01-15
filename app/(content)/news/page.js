


import NewsList from "@/components/news/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import { getAllNews } from "@/lib/news";





export default async function NewsPage() {

    // const response = await fetch('http://localhost:5000/news')

    // if(!response.ok) {
    //     throw new Error('Failed to fetch news.')
    // }

    // const news = await response.json();

    const news = await getAllNews();




    return (
        <>
            <div className="header">
                <h1>News Page</h1>
            </div>

            <NewsList news={news}/>
            
            
        </>
    )
}