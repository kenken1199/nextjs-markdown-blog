---
title: "test"
date: "2022-07-15"
description: "Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。"
image: nextjs.png
categories: ["react"]
---

## 目次

Next.js を使って Markdown のブログサイトの構築を一から行なっていきます。

## Next.js の準備

### プロジェクトの作成

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

### Tailwind CSS の設定

## ブログの構築

### レイアウトの設定

```js[class="line-numbers"]
import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/prism.css";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

[記事一覧](/blog)

![Next.jsのWelcomeページ](/nextjs-welcome.png)

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

<img src="/nextjs-welcome.png" alt="Next.jsのWelcomeページ" width="1024" height="679" />

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

## まとめ

Next.js を使って Markdown のブログサイトの構築を一から行なっていきます。

```js[class="line-numbers"]
import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/prism.css";
import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```
Test test  
from STARBUCKS  

<iframe height="300" style="width: 100%;" scrolling="no" title="form" src="https://codepen.io/kenken1199/embed/wvavWBz?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kenken1199/pen/wvavWBz">
  form</a> by kenken1199 (<a href="https://codepen.io/kenken1199">@kenken1199</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>  

<iframe width="560" height="315" src="https://www.youtube.com/embed/hx-GB92UA8s?si=-FqqFA85O7sJ4Hlt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
