import data from './typographyData.json';
import { sizeClasses, colorMap } from './constantPage';

export default function TypographyPage() {
    //👉 bg-Color 
    const Highlight = (text = "", color = "default") => {
    const bgClass = colorMap[color] || colorMap.default;
    const html = text.replace(
      /\{\{(.*?)\}\}/g,
      `<span class="${bgClass} px-1 rounded">$1</span>`
    );
    return { __html: html };
  };

  // 👉 Slice data
  const topSix = data.slice(0, 6);
  const lastFour = data.slice(6, 10);
  const three = data.slice(6, 9);
  const bgcolor = data.slice(10, 12)

  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 py-12 space-y-12">
        <div className="space-y-8">
            {topSix.map((item, index) => {
            const Tag = `h${index + 1}`;
            const headingClass = sizeClasses[Tag];

            return (
                <div key={index}>
                <Tag className={headingClass}>{item.heading}</Tag>
                <p className="text-gray-700 text-base mt-2">{item.text }</p>
                </div>
            );
            })}
        </div>

        {/* 🔸 Section 2: Last 4 Items in Flex/Grid */}
        <div>
            <h1 className="text-3xl pb-3">4 Columns</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {lastFour.map((item, index) => (
                <div
                    key={index}
                    className=" pb-7 ">
                    <p className="text-gray-700 ">{item.text}</p>
                </div>
                ))}
            </div>
        </div>
        <div>
            <h1 className="text-3xl pb-3">3 Columns</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {three.map((item, index) => (
                <div
                    key={index}
                    className=" pb-7 pr-7">
                    <p className="text-gray-700 ">{item.text}</p>
                </div>
                ))}
            </div>
        </div>
        <div>
            <h1 className="text-3xl pb-3">2 Columns</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                {three.slice(0, 2).map((item, index) => (
                <div
                    key={index}
                    className=" pb-7 pr-7">
                    <p className="text-gray-700 ">{item.text}</p>
                </div>
                ))}
            </div>
        </div>
        <div>
            <h1 className="text-3xl pb-3">2 Columns/1 Column</h1>
            <div className="grid grid-cols-1 gap-6">
                {three.slice(0, 1).map((item, index) => (
                <div key={index} className="grid grid-cols-12 gap-4">
                    <div className="col-span-9 pr-20">
                    <p className="text-gray-700">{item.text}</p>
                    </div>
                    <div className="col-span-3 ">
                    <p className="text-gray-700">{item.text2}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
         <div>
            <div className="grid grid-cols-1 pt-20 gap-16">
                {bgcolor.map((item, index) => (
                    <p
                    key={index}
                    className="text-base text-gray-800 leading-relaxed"
                    dangerouslySetInnerHTML={Highlight(item.text , item.color)}
                    />
                ))}
            </div>
        </div>
    </div>
  );
}
