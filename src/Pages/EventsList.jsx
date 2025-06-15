import * as LucideIcons from "lucide-react";

export default function EventsList({ events }) {
  // 시대별 이벤트 리스트 컴포넌트
  if (!events) {
    return (
      <div className="text-center py-8 text-xl text-white text-opacity-70">
        불러오는중...
      </div>
    );
  }

  const delayClasses = [
    'animation-delay-100',
    'animation-delay-200',
    'animation-delay-300',
    'animation-delay-400',
    'animation-delay-500',
    'animation-delay-600',
    'animation-delay-700',
  ];

  return (
    <div className="flex-1 py-10 px-10 bg-black bg-opacity-10 backdrop-blur-sm">
      <ul className="flex flex-col justify-center w-4/5 mx-auto">
        {events.map((event, idx) => {
          const IconComponent = event.icon ? LucideIcons[event.icon] : LucideIcons.Clock;
          // 시대 데이터 연도, 타이틀, 아이콘 가져와서 리스트
          return (
            <li
              key={idx}
              className={`opacity-0 glass-effect w-4/5 my-5 rounded-2xl p-6 transition-all duration-300 flex items-center gap-4 scale-95 opacity-80 animate-fade-in-up glass-hover hover:scale-105 hover:shadow-xl ${delayClasses[idx]}`}
            >
              <div className="glass-effect rounded-full p-3 flex items-center justify-center min-w-12 h-12 text-white">
                  <IconComponent size={24} />
              </div>
              <div className="flex-1 text-white">
                <h3 className="text-lg font-semibold mb-1">
                  {event.eventTitle || "제목 없음"}
                </h3>
              </div>
              <div className="text-sm text-gray-300">
                {event.year || "연도 정보 없음"}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}