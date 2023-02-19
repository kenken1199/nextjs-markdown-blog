import React from "react";
import Image from "next/image";
import Link from "next/link";
const index = () => {
  return (
    <>
      <Image
        src="/header.png"
        alt="Picture of the author"
        width={1400}
        height={1200}
      />
      <div className="border-2 border-gray-100"></div>
      <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
          "Nothing in the world is more common than unsuccessful people with
          talent, leave the house before you find something worth staying in
          for."
          <br />
          ── Banksy
        </p>
      </blockquote>
      <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
          "Stay hungry, stay foolish."
          <br />
          ── Steve Jobs
        </p>
      </blockquote>
      <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
          "生きてるだけで丸儲け"
          <br />
          ── 明石家さんま
        </p>
      </blockquote>
      <div className="border-2 border-gray-100 mb-10"></div>
      <div className="sm:flex justify-between">
        <Link
          href="blog"
          className="block sm:w-[430px] p-6 sm:m-0 mb-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Blog
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Technology, English, Interest
          </p>
        </Link>
        <Link
          href="about"
          className="block sm:w-[430px] p-6 sm:m-0  bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Profile, Contact, etc...
          </p>
        </Link>
      </div>
    </>
  );
};

export default index;
