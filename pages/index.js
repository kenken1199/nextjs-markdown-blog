import React from "react";
import Image from "next/image";
import Link from "next/link";
const index = () => {
  return (
    <>
      <Image
        src="/nextjs.png"
        alt="Picture of the author"
        width={1400}
        height={1200}
      />
      <div class="border-2 border-gray-100"></div>
      <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
          "Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </p>
      </blockquote>
      <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
          "Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </p>
      </blockquote>
      <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
          "Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </p>
      </blockquote>
      <div class="border-2 border-gray-100 mb-10"></div>
      <div className="mb-10  flex justify-between">
        <Link
          href="blog"
          class="block w-[430px] p-6  bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Blog
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Technology, English, Interest
          </p>
        </Link>
        <Link
          href="about"
          class="block w-[430px] p-6  bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Profile, Contact, etc...
          </p>
        </Link>
      </div>
    </>
  );
};

export default index;
