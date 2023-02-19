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
      <p>⛩ Mie, 🇯🇵 Japan</p>
      <h3 className="text-xl mt-6">Contact</h3>
      <Link
        href="mailto:nakamori.k@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        nakamori.k&lt;at&gt;gmail.com
      </Link>
      <h2 className="text-2xl mt-6">Interest</h2>
      <ul class="list-disc pl-6">
        <li>プログラミング</li>
        <li>英語</li>
        <li>ダーツ</li>
        <li>音楽鑑賞</li>
      </ul>
      {/* <h3 className="text-xl mt-6">Music</h3>
      <div class="my-4 h-[105px] max-w-xl transition hover:bg-[color:var(--hover)]">
        <a
          href="https://open.spotify.com/playlist/1rrcstuv7f3SoULWaWq8Rx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="my-4 flex h-full w-full overflow-hidden rounded-md border-2 border-solid border-[color:var(--line)]">
            <span class="flex shrink grow-[4] basis-44 flex-col overflow-hidden p-4">
              <span class="overflow-hidden text-ellipsis whitespace-nowrap font-bold">
                current
              </span>
              <span class="min-h-[2em] overflow-hidden text-ellipsis whitespace-nowrap text-xs text-[color:var(--secondary)]">
                current · Playlist · 134 songs · 2 likes
              </span>
              <span class="flex h-5 items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap text-xs">
                <img
                  src="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png"
                  height="16"
                  width="16"
                  alt=""
                  loading="lazy"
                  class="fill-white"
                />
                open.spotify.com
              </span>
            </span>
            <span class="flex max-w-[200px] shrink-[6] grow basis-44 overflow-hidden">
              <img
                src="https://mosaic.scdn.co/640/ab67616d00001e021116fcaa08591eaf39e8a352ab67616d00001e0224bbc6f98cda3a3b817cf705ab67616d00001e02588f7825b0b11fa855b611d4ab67616d00001e02d700845e98b043cc5ce7308e"
                height="105"
                width="200"
                alt="og image"
                loading="lazy"
                class="object-cover"
              />
            </span>
          </span>
        </a>
      </div> */}
      <h2 className="text-2xl mt-6">Project</h2>
      <ul class="list-disc pl-6">
        <li>
          <Link
            href="https://github.com/kenken1199/nextjs-markdown-blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            kenken1199.netlify.app
          </Link>{" "}
          - このサイト
        </li>
        <li>
          <Link
            href="https://github.com/kenken1199/mosaic-docker-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            mosaic-docker-app
          </Link>{" "}
          - 人物の顔に自動でモザイクをかけるアプリ
        </li>
      </ul>
    </>
  );
};

export default index;
