import "../../styles/globals.css";
// import styles bundle
import "swiper/swiper.min.css";
import Footer from "../../components/Footer";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://radult.vercel.app"),
  title: {
    default: "Radult",
    template: `%s | Radult`,
  },
  description:
    "Discover the world of entertainment with Radult – download movies, web series, and dramas from all over the world. Watch online or download and enjoy anytime. Visit Radult now!",

  alternates: {
    canonical: "http://radult.vercel.app",
  },
  keywords:
    "radult, radult offcial, free movies online, entertain, movies hd, watch movies online, stream online movies",
  icons: {
    icon: "/radult.png",
  },
  verification: {
    google: "ukHC9GAy9b931S-e_NdYZkWfC4v8wbLk2Q5uMy8IUoI",
  },
  twitter: {
    title: {
      default: "Radult",
      template: `%s | Radult`,
    },
    description:
      "Discover the world of entertainment with Radult – download movies, web series, and dramas from all over the world. Watch online or download and enjoy anytime. Visit Radult now!",
    creator: "@Radult_Official",
    site: "@radult",
    card: "summary_large_image",
  },
  openGraph: {
    url: "http://radult.vercel.app/",
    title: {
      default: "Radult",
      template: `%s | Radult`,
    },
    description:
      "Discover the world of entertainment with Radult – download movies, web series, and dramas from all over the world. Watch online or download and enjoy anytime. Visit Radult now!",
    images: [
      {
        url: "https://cdn.sanity.io/images/pimty1yn/production/5be1a3d762466a10386bb8f8b4e14f76bd408253-550x230.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/png",
      },
      {
        url: "https://cdn.sanity.io/images/pimty1yn/production/5be1a3d762466a10386bb8f8b4e14f76bd408253-550x230.png",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second",
        type: "image/png",
      },
      {
        url: "https://cdn.sanity.io/images/pimty1yn/production/5be1a3d762466a10386bb8f8b4e14f76bd408253-550x230.png",
      },
      {
        url: "https://cdn.sanity.io/images/pimty1yn/production/5be1a3d762466a10386bb8f8b4e14f76bd408253-550x230.png",
      },
    ],
    siteName: "Radult",
  },
};

export const revalidate = 60; //Revalidate the page after 30sec

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bodyCss overflow-x-hidden text-white">
        {children}
        <Footer />
      </body>
      {/* <Script
        async
        data-cfasync="false"
        src="//cloudypotsincluded.com/61b9a08f8f37dea611c24336bd6b49fc/invoke.js"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JYTSYLFS0R"
      /> */}
      {/* Social Ads */}
      <Script
        type="text/javascript"
        src="//pl21810075.toprevenuegate.com/da/be/87/dabe87d07065242cc46fba0c9ff21664.js"
      />
      {/* Popunder */}
      {/* <Script
        type="text/javascript"
        src="//pl20519927.highcpmrevenuegate.com/cd/fb/bc/cdfbbcbd31d1fbb838c6b8af31025535.js"
      /> */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Radult",
            "url": "https://radult.vercel.app/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://radult.vercel.app/search/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
  `,
        }}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-JYTSYLFS0R',{
             page_path : window.location.pathname,
          });
         `,
        }}
      />
    </html>
  );
}
