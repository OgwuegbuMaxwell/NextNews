import NewsList from "@/components/news/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default  function FilteredNewsPage({params}) {
    
    const filter =  params.filter;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();


    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear)

        // update the links to display available news month for the year selected
        links = getAvailableNewsMonths(selectedYear)
    }


    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news found for the selected period.</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news}/>
    }

    // const news =  getNewsForYear(newsYear);
    // console.log(filter)

    // Throw an error for invalid filters
    if (selectedYear && !getAvailableNewsYears().includes(+selectedYear) || 
        selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)) {
        throw new Error('Invalid filter.')
    }

    

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map((link) => {
                            // if we have selected year, that means we are now showing the months
                            // if we have not seleted any year, we will just display the standard links :  `/archive/${link}`
                            const href = selectedYear? `/archive/${selectedYear}/${link}` : `/archive/${link}`;
                            return (
                            <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li>
                            )
                            
                        })}
                    </ul>
                </nav>
            </header>

            {newsContent}
        </>
    )


}