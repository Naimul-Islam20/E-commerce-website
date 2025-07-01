
import Image from 'next/image';
import PortData from './portfolioData.json'

export default function BlogPage() {  

  return (
    <div>   
      <section className='container mx-auto sm:col-12 md:col-6 lg:col-4 px-18 pt-10 pb-20'>
        <h2 className="text-3xl font-bold mb-6">Standard</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PortData.map((item) => (
            <div key={item.id} className="overflow-hidden text-center group">
              <div className="relative h-120 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt='no image '
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-104 group-hover:brightness-90"/>
              </div>
              <div>
                <h3 className="text-xl font-semibold mt-6">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-3">{item.descrip}<span> / style </span> </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
