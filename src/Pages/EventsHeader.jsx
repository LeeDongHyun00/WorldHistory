
export default function EventsHeader({ name, description }) {
  // 시대 컴포넌트 맨 위에서 시대 이름과 설명 
  return (
    <header className="w-full py-16 px-10 flex flex-col justify-center items-center text-center text-white backdrop-blur-sm">
      <h2 className="text-5xl mb-4 text-shadow font-bold">{name}</h2>
      <p className="text-xl leading-relaxed max-w-4xl opacity-90 text-shadow">
        {description}
      </p>
    </header>
  );
}