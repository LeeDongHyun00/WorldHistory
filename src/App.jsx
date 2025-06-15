import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Pages/Main";
import Ancient from "./Pages/Ancient";
import Medieval from "./Pages/Medieval";
import Renaissance from "./Pages/Renaissance";
import Enlightenment from "./Pages/Enlightenment";
import Modern from "./Pages/Modern";
import Contemporary from "./Pages/Contemporary";
import { getEras } from "./api";

// npm install axios, json-server, lucide-react, react-router-dom, tailwindcss, postcss, autoprefixer

function App() {
  const [eras, setEras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 시대 데이터 가져오기
  useEffect(() => {
    const fetchEras = async () => {
      try {
        const data = await getEras();
        setEras(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEras();
  }, []);

  // 시대별 컴포넌트 매핑
  const componentMap = {
    ancient: Ancient,
    medieval: Medieval,
    renaissance: Renaissance,
    enlightenment: Enlightenment,
    modern: Modern,
    contemporary: Contemporary,
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-white text-xl">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-white text-xl">에러: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
      {/* 리모컨 */}
        <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50 glass-effect rounded-3xl p-5">
          <Link
            to="/"
            className="text-white no-underline px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium text-center glass-effect border glass-hover hover:transform hover:-translate-x-1 hover:shadow-lg"
          >
            메인
          </Link>
          <Link
            to="/ancient"
            className="text-white no-underline px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium text-center glass-effect border glass-hover hover:transform hover:-translate-x-1 hover:shadow-lg"
          >
            고전
          </Link>
          <Link
            to="/medieval"
            className="text-white no-underline px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium text-center glass-effect border glass-hover hover:transform hover:-translate-x-1 hover:shadow-lg"
          >
            중세
          </Link>
          <Link
            to="/renaissance"
            className="text-white no-underline px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium text-center glass-effect border glass-hover hover:transform hover:-translate-x-1 hover:shadow-lg"
          >
            르네상스
          </Link>
          <Link
            to="/enlightenment"
            className="text-white no-underline px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium text-center glass-effect border glass-hover hover:transform hover:-translate-x-1 hover:shadow-lg"
          >
            계몽주의
          </Link>
          <Link
            to="/modern"
            className="text-white no-underline px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium text-center glass-effect border glass-hover hover:transform hover:-translate-x-1 hover:shadow-lg"
          >
            근대
          </Link>
          <Link
            to="/contemporary"
            className="text-white no-underline px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium text-center glass-effect border glass-hover hover:transform hover:-translate-x-1 hover:shadow-lg"
          >
            현대
          </Link>
        </nav>

        <Routes>
          {/* Main을 제외한 시대 컴포넌트에게 db.json데이터를 넘김 */}
          <Route path="/" element={<Main eras={eras} />} />
          {eras.map((era) => {
            const Component = componentMap[era.id];
            const path = `/${era.id}`;
            return (
              <Route
                key={era.id}
                path={path}
                element={
                  <Component
                    name={era.name}
                    description={era.description}
                    color={era.color}
                    events={era.events}
                  />
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;