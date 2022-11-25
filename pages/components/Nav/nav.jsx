import Link from "next/link";

export default function Nav (){
    return(
        <nav>
            <ul>
            <li>
                <link href="/">
                    <a>Home</a>
                </link>
            </li>
            <li>
                <link href="/about">
                <a>About</a>
                </link>
            </li>
            <li>
                <Link href="/blog">
            <a>blog</a>
                </Link>
            </li>
            </ul>
        </nav>
    )
}