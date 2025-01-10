import Link from 'next/link';
import NavLink from '../nav-link/nav-link';


export default function MainHeader() {
  


  return (
    <header id="main-header">
      <div id="logo">
        {/* <Link href="/">NextNews</Link> */}
        <NavLink href="/"  >NextNews</NavLink>
      </div>

        <nav>
            <ul>
                <li>
                  {/* <Link href="/news" className={path.startsWith('/news') ? 'active' : undefined}>News</Link> */}
                    <NavLink href="/news"  >News</NavLink>
                </li>

                <li>
                  {/* <Link className={path.startsWith('/archive') ? 'active' : undefined} href="/archive">Archive</Link> */}
                  <NavLink href="/archive"  >Archive</NavLink>
                </li>

            </ul>
        </nav>
    </header>
  );
}