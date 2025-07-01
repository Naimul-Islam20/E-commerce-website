

import Image from 'next/image';
import blogData from './blogData.json';

export default function BlogPage() {
  const reversedData = [...blogData].reverse();

  return (
    <div>

      {/* 🔹 Blog Section 1 - Normal */}
      <section className='container mx-auto sm:col-12 md:col-6 lg:col-4 px-18 pt-10 pb-20'>
        <h2 className="text-3xl font-bold mb-6">Standard</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((item) => (
            <div key={item.id} className="group overflow-hidden text-left ">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"/>
              </div>
              <div>
                <h3 className="text-xl font-semibold mt-6">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-3">{item.descript}</p>
                 <p className="mt-12"> <strong><u>read more</u></strong> </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='container mx-auto sm:col-12 md:col-6 lg:col-4 px-18 bg-gray-100 pt-20 pb-30'>
        <div className=' '>
        <h2 className="text-3xl font-bold mb-6">More Blogs</h2>
        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reversedData.map((item) => (
            <div key={item.id} className="group overflow-hidden text-left ">
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:brightness-75" />
              </div>
              <div >
                <h3 className="text-xl font-semibold mt-9">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-7">{item.descript}</p>
                <p className="mt-12"> <strong><u>read more</u></strong> </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

    </div>
  );
}
