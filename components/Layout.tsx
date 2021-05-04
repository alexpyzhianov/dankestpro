import Head from "next/head";
import Link from "next/link";

export interface LayoutProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

export function Layout({ title, description, children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={description} />
            </Head>

            <header>
                <nav>
                    <Link href="/">🏠</Link>
                    <Link href="/blog">Блог</Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
