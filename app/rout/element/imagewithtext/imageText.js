import Image from 'next/image';
import blogData from './data.json';

export default function BlogPage() {
  return (
      <div className='container mx-auto px-4 pt-25 pb-25'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((item) => (
            <div key={item.id}
              className="flex flex-col items-center text-center">
               <div className="relative w-30 h-30">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill className="object-cover rounded-xl"/>
              </div>
          
              <div className="mt-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-3 max-w-xs">{item.descript} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
