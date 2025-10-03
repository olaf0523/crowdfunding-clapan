// app/page.tsx
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <main>
      {/* Full Background Section (Hero + Features) */}
      <section className="relative bg-[url('/assets/mainPage/main-page-bg1.png')] bg-cover bg-center min-h-screen">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1D2635]/60 "></div>

        {/* Content */}
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="pt-20 text-center md:pt-34">
            
            <h2 className="mt-2 text-3xl font-bold text-white md:text-6xl leading-relaxed">
              クリエイターとファンを<span className="text-[#E43D23]">つなぐ</span><br className="md:block hidden"/> 新しいテレビ。</h2>
            <p className="mx-auto mt-2 max-w-xl text-white font-semibold md:text-lg text-xs ">
                動画視聴とクラウドファンディングが融合した新しい体験。<br/>あなたの創造性を支援し、素晴らしいコンテンツと出会える場所です。            
            </p>
          </div>

          {/* Features Section */}
          <div className="py-8 pt-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Crowdfunding Card */}
              <div className="flex flex-col items-center rounded-lg border border-[#56647B] bg-[#1F2937]/90 p-8 text-center text-white   ">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F97316] to-[#DC2626]">
                  <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 21.15L10.75 16.9L14.3 20.425L18.25 16.5L16 14.25H22.25V20.5L20 18.25L14.3 23.975L10.75 20.425L7.675 23.525C8.575 24.9083 9.75 25.9917 11.2 26.775C12.6833 27.5917 14.2833 28 16 28C17.8167 28 19.5 27.5417 21.05 26.625C22.55 25.7417 23.7417 24.55 24.625 23.05C25.5417 21.5 26 19.8167 26 18C26 16.1833 25.5417 14.5 24.625 12.95C23.7417 11.45 22.55 10.2583 21.05 9.375C19.5 8.45833 17.8167 8 16 8C14.1833 8 12.5 8.45833 10.95 9.375C9.45 10.2583 8.25833 11.45 7.375 12.95C6.45833 14.5 6 16.1833 6 18C6 19.0833 6.16667 20.1333 6.5 21.15ZM4.575 23.1V23.075C3.85833 21.475 3.5 19.7833 3.5 18C3.5 16.3 3.825 14.675 4.475 13.125C5.10833 11.6417 6.00417 10.3208 7.1625 9.1625C8.32083 8.00417 9.64167 7.10833 11.125 6.475C12.675 5.825 14.3 5.5 16 5.5C17.7 5.5 19.325 5.825 20.875 6.475C22.3583 7.10833 23.6792 8.00417 24.8375 9.1625C25.9958 10.3208 26.8917 11.6417 27.525 13.125C28.175 14.675 28.5 16.3 28.5 18C28.5 19.7 28.175 21.325 27.525 22.875C26.8917 24.3583 25.9958 25.6792 24.8375 26.8375C23.6792 27.9958 22.3583 28.8917 20.875 29.525C19.325 30.175 17.7083 30.5 16.025 30.5C14.3417 30.5 12.7417 30.1833 11.225 29.55C9.74167 28.9333 8.425 28.0667 7.275 26.95C6.125 25.8333 5.225 24.55 4.575 23.1Z" fill="white"/>
                  </svg>

                </div>
                <h3 className="text-3xl font-bold my-2">クラファンサイト</h3>
                <p className="mt-2 text-md text-[#D1D5DB] leading-relaxed">
                  革新的なプロジェクトを支援し、<br /> クリエイターの夢を実現させる <br />クラウドファンディングプラットフォーム
                </p>
                <ul className="mt-6 space-y-3 text-left text-sm text-[#D1D5DB] font-light ">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#F97316]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    プロジェクト支援機能
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#F97316]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    リターン商品の受け取り
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#F97316]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    進捗の確認・更新
                  </li>
                </ul>
                <Link
                  href="/crowdfunding"
                  className="mt-8 block w-full rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  プロジェクトを始める
                </Link>
              </div>

              {/* Video Card */}
              <div className="flex flex-col items-center rounded-lg border bg-[#1F2937]/90 border-[#56647B] p-8 text-center text-white ">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#EF4444] to-[#DB2777]">
                  <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 30.5C14.3 30.5 12.675 30.175 11.125 29.525C9.64167 28.8917 8.32083 27.9958 7.1625 26.8375C6.00417 25.6792 5.10833 24.3583 4.475 22.875C3.825 21.325 3.5 19.7 3.5 18C3.5 16.3 3.825 14.675 4.475 13.125C5.10833 11.6417 6.00417 10.3208 7.1625 9.1625C8.32083 8.00417 9.64167 7.10833 11.125 6.475C12.675 5.825 14.3 5.5 16 5.5C17.7 5.5 19.325 5.825 20.875 6.475C22.3583 7.10833 23.6792 8.00417 24.8375 9.1625C25.9958 10.3208 26.8917 11.6417 27.525 13.125C28.175 14.675 28.5 16.3 28.5 18C28.5 19.7 28.175 21.325 27.525 22.875C26.8917 24.3583 25.9958 25.6792 24.8375 26.8375C23.6792 27.9958 22.3583 28.8917 20.875 29.525C19.325 30.175 17.7 30.5 16 30.5ZM16 28C17.8167 28 19.5 27.5417 21.05 26.625C22.55 25.7417 23.7417 24.55 24.625 23.05C25.5417 21.5 26 19.8167 26 18C26 16.1833 25.5417 14.5 24.625 12.95C23.7417 11.45 22.55 10.2583 21.05 9.375C19.5 8.45833 17.8167 8 16 8C14.1833 8 12.5 8.45833 10.95 9.375C9.45 10.2583 8.25833 11.45 7.375 12.95C6.45833 14.5 6 16.1833 6 18C6 19.8167 6.45833 21.5 7.375 23.05C8.25833 24.55 9.45 25.7417 10.95 26.625C12.5 27.5417 14.1833 28 16 28ZM14.275 13.525L20.375 17.575C20.4917 17.6583 20.5625 17.7667 20.5875 17.9C20.6125 18.0333 20.5917 18.1583 20.525 18.275C20.475 18.325 20.425 18.375 20.375 18.425L14.275 22.475C14.1583 22.5583 14.0333 22.5875 13.9 22.5625C13.7667 22.5375 13.6583 22.4667 13.575 22.35C13.525 22.2667 13.5 22.175 13.5 22.075V13.925C13.5 13.7917 13.55 13.675 13.65 13.575C13.75 13.475 13.8667 13.425 14 13.425C14.1 13.425 14.1917 13.4583 14.275 13.525Z" fill="white"/>
                  </svg>

                </div>
                <h3 className="text-3xl font-bold my-2">動画サイト</h3>
                <p className="mt-2 text-md text-[#D1D5DB] font-regular leading-relaxed">
                  多彩なコンテンツを楽しめる <br /> プレミアム動画視聴プラットフォーム<br /> バラエティからドラマまで
                </p>
                <ul className="mt-6 space-y-3 text-left text-sm text-[#D1D5DB] font-light">
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#EF4444]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    HD高画質ストリーミング
                  </li>
                  <li className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#EF4444]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    オリジナルコンテンツ
                  </li>
                  <li className="flex items-center    gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#EF4444]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    マルチデバイス対応
                  </li>
                </ul>
                <a
                  href="#"
                  className="mt-8 block w-full rounded-lg bg-gradient-to-r from-[#EF4444] to-[#DB2777] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  チャンネルを作成
                </a>
              </div>
            </div>

            {/* Start Now Banner */}
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-lg border my-5  border-[#EF44444D]/30 bg-gradient-to-b from-[#DC262633]/100 to-[#EA580C33]/100 z-100 p-8 text-white md:flex-row ">
              <div>
                <h4 className="text-xl font-bold">今すぐ始めよう</h4>
                <p className="mt-1 text-sm text-gray-300">
                  無料アカウント作成で、クラファンも動画視聴もお楽しみいただけます。
                </p>
              </div>
              <a
                href="#"
                className="flex-shrink-0 rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-200"
              >
                無料で始める
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
