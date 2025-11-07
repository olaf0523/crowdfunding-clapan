"use client"
import React from 'react';
import ProjectCard from '../components/project-card';
import ProjectCarousel from '../components/project-carousel';
import { projects, bannerProjects } from "@/app/data/projects";

const CrowdfundingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-700">

      <main className="xl:max-w-[1440px] mx-auto px-0  py-16 pt-20">
        {/* === UPDATED CAROUSEL WITH FOCUSED CENTER ITEM === */}
        <ProjectCarousel projects={bannerProjects} />
        {/* === END OF CAROUSEL SECTION === */}

        {/* Sorting & Filtering Bar
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white rounded-lg shadow-sm p-4">
          <div className="flex space-x-1 mb-4 md:mb-0 overflow-x-auto w-full md:w-auto">
            <span className="px-4 py-2 text-gray-500 whitespace-nowrap">並べ替え</span>
            <button className="px-4 py-2 text-red-600 border-b-2 border-red-600 font-medium whitespace-nowrap">人気順</button>
            <button className="px-4 py-2 text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">新着順</button>
            <button className="px-4 py-2 text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">終了日が近い順</button>
            <button className="px-4 py-2 text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">支援総額</button>
          </div>
          
          <div className="flex space-x-4">
            <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded transition-colors whitespace-nowrap">
              さらに絞り込む
            </button>
            <div className="hidden md:flex space-x-4">
              <button className="text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">マイページ</button>
              <button className="text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">気になる</button>
              <button className="text-gray-700 hover:text-red-600 transition-colors whitespace-nowrap">閲覧履歴</button>
            </div>
          </div>
        </div> */}

        {/* Project Grid Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 sm:max-w-5xl max-w-md mx-auto gap-4 md:gap-y-8 mb-12  px-4 md:px-4  ">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-0">
          <button type="button" className="h-8 w-8 flex items-center justify-center rounded-full border border-black hover:bg-gray-100 transition-colors mr-5" aria-label="Previous page">
            <svg width="10" height="10" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5307 19.6687L6.66191 12.7999H21.9995V9.59995H6.66191L13.5307 2.73115L11.2683 0.46875L0.537109 11.1999L11.2683 21.9312L13.5307 19.6687Z" fill="black" />
            </svg>

          </button>

          {[1, 2, 3, 4, 5, 6, 7, 8].map(page => (
            <button
              key={page}
              type="button"
              className={`h-8 w-8 flex items-center font-regular text-2xl justify-center rounded-full ${page === 1
                ? 'bg-red-600 text-white border border-[#FF0066]'
                : ' hover:bg-gray-100'}`}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          ))}

          <button type="button" className="h-8 w-8 flex items-center justify-center rounded-full border border-black hover:bg-gray-100 transition-colors ml-5" aria-label="Next page">
            <svg width="10" height="12" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.26861 19.6687L11.531 21.9312L22.2622 11.1999L11.531 0.46875L9.26861 2.73115L16.1374 9.59995H0.799805V12.7999H16.1374L9.26861 19.6687Z" fill="black" />
            </svg>

          </button>
        </div>
      </main>

    </div>
  );
};

export default CrowdfundingPage;