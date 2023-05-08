import '@jorgechato/manyo/dist/style/lib.css';
import './globals.css';

import { Analytics } from '@vercel/analytics/react';

import { Header, Footer } from '@jorgechato/manyo';
import { Location } from '@/components/location/Location';


const config: { [key: string]: any } = require('@/my.config.js');

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const { TITLE, SITE_MAP, SOCIALS } = config;

    return (
        <html lang="en" className="overflow-x-hidden dark">
            <body className="bg-bg antialiased font-body leading-7 text-body">
                <Header title={TITLE} className="!mb-6 !sm:mb-6" />
                <Location of="Jorge" />
                <main id="content">
                    <div className="container mx-auto px-4">
                        {children}
                    </div>
                </main>
                <Footer socials={SOCIALS} siteMap={SITE_MAP} author="Jorge Chato" />
                <Analytics />
            </body>
        </html>
    )
}