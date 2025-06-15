import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Main({ eras }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathMap = {
    ancient: "/ancient",
    medieval: "/medieval",
    renaissance: "/renaissance",
    enlightenment: "/enlightenment",
    modern: "/modern",
    contemporary: "/contemporary",
  };

  return (
    <div className="z-50 bg-g radient-to-br from-blue-500 to-purple-600 min-h-screen relative overflow-hidden">
      {/* 상단 타이틀 영역 */}
      <div
        className={`absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center z-10 transition-all duration-700 ease-in-out
          ${scrollY > 30 ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"}`}
      >
        <h1 className="text-6xl font-bold text-white text-shadow-lg mb-4 transition-all duration-300">
          World History
        </h1>
        <p className="text-2xl text-white text-opacity-90 text-shadow">
          인류 역사의 위대한 여정을 탐험해보세요
        </p>
      </div>

      {/* 스크롤에 따라 컨텐츠 영역 조정 */}
      <div className={scrollY > 50 ? "h-0" : "h-screen"} />

      {/* 아래 컨텐츠 영역 - 2열 그리드 */}
      <div className="py-20 px-10 bg-black bg-opacity-20 backdrop-blur-sm transition-all duration-700 ease-out w-screen min-h-[120vh]">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {eras.length > 0 ? (
            eras.map((era, index) => (
              <Link
                key={era.id}
                to={pathMap[era.id] || "#"}
                className={`z-50 glass-effect rounded-3xl p-8 text-white no-underline
                  transition-all duration-700 ease-out relative overflow-hidden group glass-hover
                  transform opacity-0 translate-y-8
                  ${scrollY > 30 ? "opacity-100 translate-y-0" : ""}
                  hover:shadow-2xl`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl mb-2 font-semibold">{era.name || "시대명 없음"}</h3>
                <p className="text-base opacity-80 leading-relaxed">{era.description || "설명이 없습니다."}</p>
                <div className="absolute bottom-4 right-6 text-2xl opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  →
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-white text-xl">
              <p>시대 정보를 불러오는 중입니다...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}