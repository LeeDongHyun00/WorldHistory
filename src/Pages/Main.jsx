import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

export default function Main({ eras }) {
  const [scrollY, setScrollY] = useState(0);
 
  // 상태를 사용하여 스크롤 위치를 추적
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathMap = {
    ancient: "/ancient",
    medieval: "/medieval",
    renaissance: "/renaissance",
    enlightenment: "/enlightenment",
    modern: "/modern",
    contemporary: "/contemporary"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 relative">
      <div className={`h-screen flex flex-col justify-center items-center text-center transition-all duration-500 ease-out ${
        scrollY > 30 ? 'transform -translate-y-full opacity-0' : ''
      }`}>
        <h1
          className={`text-6xl font-bold text-white text-shadow-lg mb-4 transition-all duration-300 ease-out ${
            scrollY > 30 ? 'transform -translate-y-12 opacity-0 text-5xl' : ''
          }`}
        >
          World History
        </h1>
        <p className={`text-2xl text-white text-opacity-90 text-shadow transition-all duration-300 ease-out ${
            scrollY > 30 ? 'transform -translate-y-12 opacity-0 text-1x5' : ''
          }`}>
          인류 역사의 위대한 여정을 탐험해보세요
        </p>
      </div>
     
      <div className={`py-20 px-10 bg-black bg-opacity-20 backdrop-blur-sm transition-all duration-500 ease-out ${
            scrollY > 10 ? 'transform -translate-y-96' : ''
          }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {eras.length > 0 ? (
            eras.map((era) => (
              <Link
                key={era.id}
                to={pathMap[era.id] || "#"}
                className="glass-effect rounded-3xl p-8 text-white no-underline transition-all duration-300 relative overflow-hidden group glass-hover hover:transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-2xl mb-2 text-white font-semibold">{era.name || "시대명 없음"}</h3>
                <p className="text-base opacity-80 leading-relaxed">{era.description || "설명이 없습니다."}</p>
                <div className="absolute bottom-4 right-6 text-2xl opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:transform group-hover:translate-x-1">
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