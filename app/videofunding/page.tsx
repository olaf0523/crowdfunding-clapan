"use client";
import React from "react";
import VideoCard from "../components/video-card";
import VideoCarousel from "../components/video-carousel";
import { bannerVideos, videos } from "@/app/data/projects";

const VideofundingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-700">
      <main className="xl:max-w-[1440px] mx-auto px-0  py-16 pt-18">
        <VideoCarousel videos={bannerVideos} />

        <div className="grid grid-cols-2 lg:grid-cols-3 sm:max-w-5xl max-w-md mx-auto gap-4 md:gap-y-8 mb-12 px-4 md:px-4  ">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className="flex justify-center space-x-0">
          <button
            type="button"
            className="h-8 w-8 flex items-center justify-center rounded-full border border-black hover:bg-gray-100 transition-colors mr-5"
            aria-label="Previous page"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5307 19.6687L6.66191 12.7999H21.9995V9.59995H6.66191L13.5307 2.73115L11.2683 0.46875L0.537109 11.1999L11.2683 21.9312L13.5307 19.6687Z"
                fill="black"
              />
            </svg>
          </button>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
            <button
              key={page}
              type="button"
              className={`h-8 w-8 flex items-center font-regular text-2xl justify-center rounded-full ${page === 1
                ? "bg-[#FF0066] text-white border border-[#FF0066]"
                : " hover:bg-gray-100"
                }`}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            className="h-8 w-8 flex items-center justify-center rounded-full border border-black hover:bg-gray-100 transition-colors ml-5"
            aria-label="Next page"
          >
            <svg
              width="10"
              height="12"
              viewBox="0 0 23 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.26861 19.6687L11.531 21.9312L22.2622 11.1999L11.531 0.46875L9.26861 2.73115L16.1374 9.59995H0.799805V12.7999H16.1374L9.26861 19.6687Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default VideofundingPage;
