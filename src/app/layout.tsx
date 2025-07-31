import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { geistSans } from "@/styles/fonts";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Sabbir BIn Abbas | Full Stack Developer",
	description: "My Personal profile card to aggregates all the important links in one place. Easily access social media, projects, and content through this sleek, user-friendly page.",
	keywords: [
		"bio links",
		"profile card",
		"social media",
		"portfolio",
		"personal website",
		"link aggregator",
		"Sabbir BIn Abbas"
	],
	authors: [
		{
			name: "Sabbir Bin Abbas",
			url: "https://sabbirbinabbas.web.app"
		}
	],
	publisher: "Sabbir Bin Abbas",
	robots: "index, follow",
	openGraph: {
		title: "Sabbir Bin Abbas | Full Stack Developer",
		description: "My Personal profile card to aggregates all the important links in one place. Easily access social media, projects, and content through this sleek, user-friendly page.",
		url: "https://sabbirba10.github.io/",
		siteName: "Sabbir BIn Abbas | Bio Card Links",
		images: [
			{
				url: "/src/components/images/opengraph.jpeg",
				width: 1919,
				height: 866,
				alt: "Website Preview"
			}
		],
		locale: "en_US",
		type: "website"
	},
	icons: {
		icon: [
			{
				url: "/logo-light.svg",
				media: "(prefers-color-scheme: light)"
			},
			{
				url: "/logo-dark.svg",
				media: "(prefers-color-scheme: dark)"
			}
		]
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<head>
				<Script id="fb-messenger-redirect" strategy="beforeInteractive">
					{`
                        (function () {
                            var ua = navigator.userAgent || navigator.vendor || window.opera;
                            var isFacebookBrowser =
                                ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
                            var isMessengerBrowser =
                                ua.indexOf("MessengerForiOS") > -1 || ua.indexOf("Messenger") > -1;

                            if (isFacebookBrowser || isMessengerBrowser) {
                                var url = window.location.href;
                                window.open(url, "_system", "location=yes");
                                setTimeout(function () {
                                    document.body.innerHTML =
                                        '<div style="display:flex;justify-content:center;align-items:center;min-height:100vh;background:#fff;">' +
                                            '<div style="max-width:400px;width:100%;text-align:center;padding:32px 16px;border-radius:12px;box-shadow:0 2px 16px rgba(0,0,0,0.08);">' +
                                                "<h2 style='margin-bottom:16px;'>For the best experience, please open this page in Chrome or Safari</h2>" +
                                                "<p style='margin-bottom:8px;'>Copy this link and paste in your browser:</p>" +
                                                '<p style="word-break:break-all;"><a href=\"' + url + '\" rel="nofollow noopener noreferrer" target="_blank">' + url + "</a></p>" +
                                            "</div>" +
                                        "</div>";
                                }, 1000);
                            }
                        })();
                    `}
				</Script>
			</head>
			<body className={`${geistSans.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<main>
						{children}
					</main>
					<Toaster richColors closeButton />
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
};