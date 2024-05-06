'use client'
import '../css/globals.css'
import {Inter} from 'next/font/google'
import {NavbarDefault} from "@/component/Navbar";
import React, {useEffect} from "react";
import TagManager from 'react-gtm-module';
import {config} from "@/conf/config";

const inter = Inter({subsets: ['latin']})
const metadata = {
    title: "Resume as Code: Crafting Resumes with YAML and Markdown",
    description: "Create and manage professional resumes easily with Resume as Code. Write in YAML, export in various formats, and own all your data locally.",
    thumbnail: "/images/demo.png"
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    useEffect(() => {
        if (config.gtm) {
            TagManager.initialize({gtmId: config.gtm});
        }
    }, []);
    return (
        <html lang="en">
        <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description}/>
            <meta property="og:title" content={metadata.title}/>
            <meta property="og:description" content={metadata.description}
            />
            <meta property="og:image" content={metadata.thumbnail}/>
        </head>
        <body className={`pb-10 ${inter.className} bg-[#f8fafc]`}>
        <NavbarDefault/>
        {children}
        </body>
        </html>
    )
}
