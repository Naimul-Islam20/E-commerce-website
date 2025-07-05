'use client';

const data = [
  { id: 1, text: 'this is demo text for check 1' },
  { id: 2, text: 'this is demo text for check 2' },
  { id: 3, text: 'this is demo text for check 3' },
  { id: 4, text: 'this is demo text for check 4' },
  { id: 5, text: 'this is demo text for check 5' },
];

export default function TextCarousel() {
  const items = [...data, ...data]; // 🔁 to create infinite effect

  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-6 w-max animate-scroll-slow">
        {items.map((item, index) => (
          <div
            key={`${item.id}-${index}`} // ✅ stable key
            className="w-[250px] h-[100px] bg-blue-200 text-black flex items-center justify-center text-lg font-semibold rounded"
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
