import { cn } from "@bem-react/classname";
import { useEffect, useRef } from "react";
import { useMedia } from "use-media";

const b = cn("telegram-post");

type Color = { light: string; dark: string };

export enum BlogTheme {
    CONTROVERSIAL = "CONTROVERSIAL",
    ENGINEERING = "ENGINEERING",
    TOOLS = "TOOLS",
    RESOURCES = "RESOURCES",
}

const colors: Record<string, Color> = {
    YELLOW: { light: "CA9C0E", dark: "F0B138" },
    CYAN: { light: "13B4C6", dark: "39C4E8" },
    GREEN: { light: "29B127", dark: "72E350" },
    MONOCHROME: { light: "343638", dark: "FFFFFF" },
};

const themeColors: Record<BlogTheme, Color> = {
    [BlogTheme.CONTROVERSIAL]: colors.YELLOW,
    [BlogTheme.ENGINEERING]: colors.CYAN,
    [BlogTheme.TOOLS]: colors.GREEN,
    [BlogTheme.RESOURCES]: colors.MONOCHROME,
};

export interface TelegramPostProps {
    id: number;
    theme: BlogTheme;
}

function useTelegramEmbedPost(id: number, theme: BlogTheme, node: HTMLDivElement | null) {
    const forcedDark = useMedia("(prefers-color-scheme: dark)");
    const forcedLight = useMedia("(prefers-color-scheme: light)");

    useEffect(() => {
        const script = document.createElement("script");
        const color = themeColors[theme];

        script.src = "https://telegram.org/js/telegram-widget.js?14";
        script.async = true;
        script.setAttribute("data-telegram-post", `codegarden/${id}`);
        script.setAttribute("data-userpic", "false");
        script.setAttribute("data-width", "100%");
        script.setAttribute("data-dark", forcedDark && !forcedLight ? "1" : "0");
        script.setAttribute("data-color", color.light);
        script.setAttribute("data-dark-color", color.dark);

        node?.appendChild(script);
    }, [forcedDark, forcedLight]);
}

export function TelegramPost({ id, theme }: TelegramPostProps) {
    const nodeRef = useRef<HTMLDivElement>(null);

    useTelegramEmbedPost(id, theme, nodeRef.current);

    return <div className={b()} ref={nodeRef} />;
}
