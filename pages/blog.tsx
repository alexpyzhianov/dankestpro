import { cn } from "@bem-react/classname";
import { Layout } from "../components/Layout";
import { BlogTheme, TelegramPost } from "../components/TelegramPost";

const chosenMessages: { id: number; theme: BlogTheme }[] = [
    { id: 3, theme: BlogTheme.TOOLS }, // posthog
    { id: 33, theme: BlogTheme.RESOURCES }, // slant
    { id: 38, theme: BlogTheme.ENGINEERING }, // js koans
    { id: 42, theme: BlogTheme.TOOLS }, // poi
    { id: 60, theme: BlogTheme.ENGINEERING }, // channel name
    { id: 55, theme: BlogTheme.CONTROVERSIAL }, // scrum
    { id: 63, theme: BlogTheme.ENGINEERING }, // instant productivity
    { id: 79, theme: BlogTheme.RESOURCES }, // paul graham
    { id: 67, theme: BlogTheme.CONTROVERSIAL }, // writing
    { id: 73, theme: BlogTheme.ENGINEERING }, // algorithm for solving problems
    { id: 75, theme: BlogTheme.ENGINEERING }, // oscars
    { id: 43, theme: BlogTheme.CONTROVERSIAL }, // tailwind
];

const b = cn("blog");

export default function Blog() {
    return (
        <Layout title="Топовый блог" description="Dankest blog">
            <h1>Blogo</h1>
            <p>Избранное</p>

            <div className={b("masonry")}>
                {chosenMessages.map(({ id, theme }) => (
                    <TelegramPost key={id} id={id} theme={theme} />
                ))}
            </div>
        </Layout>
    );
}
