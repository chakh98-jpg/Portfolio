import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Denis Chakhabov | Développeur Full Stack",
    description: "Portfolio de Denis Chakhabov - Développeur Full Stack passionné par la création d'applications web modernes. Expertise en React, Node.js, Python et plus encore.",
    keywords: ["développeur", "full stack", "react", "node.js", "python", "portfolio", "Denis Chakhabov"],
    authors: [{ name: "Denis Chakhabov" }],
    openGraph: {
        title: "Denis Chakhabov | Développeur Full Stack",
        description: "Portfolio de Denis Chakhabov - Développeur Full Stack",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
