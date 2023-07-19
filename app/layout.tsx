import '@jorgechato/manyo/dist/style/lib.css';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';

import { Header, Footer } from '@jorgechato/manyo';


const config: { [key: string]: any } = require('@/my.config.js');

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const { TITLE, SITE_MAP, SOCIALS } = config;

    return (
        <html lang="en" className="overflow-x-hidden dark">
            <body className="bg-bg antialiased font-body leading-7 text-body">
                <Header title={TITLE} className="!mb-6 !sm:mb-6" />

                {children}

                <Footer socials={SOCIALS} siteMap={SITE_MAP} author="Jorge Chato" />
                <Analytics />
            </body>
        </html>
    )
}