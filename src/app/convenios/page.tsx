import Image from "next/image";

const Convenios = () => {
    const imageUrls = [
      "/images/convenio/1.jpg",
      "/images/convenio/2.png",
      "/images/convenio/3.jpg",
      "/images/convenio/4.png",
      "/images/convenio/5.webp",
      "/images/convenio/6.png",
      "/images/convenio/7.jpg",
      "/images/convenio/8.png",
      "/images/convenio/9.jpg",
      "/images/convenio/10.jpg",
      "/images/convenio/11.png",
      "/images/convenio/12.jpg",
      "/images/convenio/13.png",
      "/images/convenio/14.png",
      "/images/convenio/15.jpg",
      "/images/convenio/16.jpg",
      "/images/convenio/17.png",
      "/images/convenio/18.jpg",
      "/images/convenio/19.png",
      "/images/convenio/20.jpg",
      "/images/convenio/21.png",
      "/images/convenio/23.jpg",
      "/images/convenio/24.png",
      "/images/convenio/25.png",
      "/images/convenio/26.jpg",
      "/images/convenio/27.png",
      "/images/convenio/33.webp",
      "/images/convenio/29.png",
      "/images/convenio/30.png",
      "/images/convenio/31.png",
      "/images/convenio/32.png",
    ];
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Nossos Convênios
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md transition-all duration-300 transform p-4 flex items-center justify-center"
            >
              <Image
                src={url}
                width={150}
                height={150}
                alt={`Convênio ${index + 1}`}
                className="max-h-16 md:max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Convenios;
  