import Layout from "@/components/Layout";
import "@/styles/globals.css";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}
