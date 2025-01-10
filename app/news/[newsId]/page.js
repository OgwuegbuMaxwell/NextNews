

export default function NewsDetailPage({params}) {

    const newsId = params.newsId;

    console.log(newsId)
    
    return (
        <div >
            <h1>News Detail</h1>

            <h1>News ID: {newsId}</h1>

        </div>
    )
}