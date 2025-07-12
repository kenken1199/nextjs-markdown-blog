import React from "react";
import Image from "next/image";
import Link from "next/link";
const index = () => {
  return (
    <>
      <div className="flex justify-center gap-8 items-center pb-6">
        <div className="relative w-36 h-36">
          <Image
            src="/header.png"
            alt="Picture of the author"
            // width={150}
            // height={150}
            fill
            className="rounded-full object-cover shadow"
          />
        </div>
        <h1 className="text-2xl">kenken1199</h1>
      </div>
      <div className="border border-gray-100"></div>
      <h2 className="text-2xl mt-6">Profile</h2>
      <p className="mt-3">kenken1199</p>
      <p className="mt-6">
        今まで幾度となく挫折してきた、英語とプログラミングの勉強とダイエットを真剣にやりはじめました。英語はTOEIC、プログラミングはPython、JavaScriptを中心に勉強しています。
      </p>
      <h3 className="text-xl mt-6">Region</h3>
      <p className="mt-3">⛩ Mie, 🇯🇵 Japan</p>
      <h3 className="text-xl mt-6">Contact</h3>
      <Link
        href="mailto:nakamori.k@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mt-3">nakamori.k&lt;at&gt;gmail.com</div>
      </Link>
      <h2 className="text-2xl mt-6">Interest</h2>
      <ul class="list-disc pl-6">
        <li className="mt-3">プログラミング</li>
        <li className="mt-3">英語</li>
        <li className="mt-3">ダーツ</li>
        <li className="mt-3">音楽鑑賞</li>
      </ul>
      {/* spotify1の埋め込み */}
      <Spotify link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" />
      {/* 埋め込みここまで */}
      <h2 className="text-2xl mt-6">Project</h2>
      <ul class="list-disc pl-6">
        <li className="mt-3">
          <Link
            href="https://github.com/kenken1199/nextjs-markdown-blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code className="underline bg-gray-100">
              kenken1199.netlify.app
            </code>
          </Link>{" "}
          - このサイト
        </li>
        <li className="mt-3">
          <Link
            href="https://github.com/kenken1199/mosaic-docker-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code className="underline bg-gray-100">mosaic-docker-app</code>
          </Link>{" "}
          - 人物の顔に自動でモザイクをかけるアプリ
        </li>
      </ul>
    </>
  );
};

export default index;
