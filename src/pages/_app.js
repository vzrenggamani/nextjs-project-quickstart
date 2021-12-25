import "tailwindcss/tailwind.css";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

function Index({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: SEO.openGraph.type,
          locale: SEO.openGraph.locale,
          url: SEO.openGraph.url,
          site_name: SEO.openGraph.site_name,
        }}
        twitter={{
          handle: SEO.twitter.handle,
          site: SEO.twitter.site,
          cardType: SEO.twitter.cardType,
        }}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default Index;
