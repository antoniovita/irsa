const ExamesPage = () => {
    return ( 

    <div className="container mx-auto p-4">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Nossos Exames
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/Centro-Radiologico-Como-e-o-preparo-para-ressonancia-magnetica-1.jpg"
          alt="Ressonância Magnética"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Ressonância Magnética
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          O mais moderno equipamento de Ressonância Magnética de Niterói.
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/OIP.jpg"
          alt="Tomografia Computadorizada"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Tomografia Computadorizada
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Ampla tradição na realização de estudos tomográficos.
        </p>
      </div>
      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/Ecocardiograma.jpg"
          alt="Ecodoppler Cardíaco"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Ecodoppler Cardíaco
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Avalia alterações no fluxo venoso, como varizes ou trombose.
        </p>
      </div>
      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/densitometria.jpg"
          alt="Densitometria Óssea"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Densitometria Óssea
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Método para medir a massa óssea e diagnosticar a osteoporose.
        </p>
      </div>
      {/* Card 5 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/mamografia-digital-image.jpg"
          alt="Mamografia Digital"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Mamografia Digital
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Exame não invasivo para diagnosticar o câncer de mama.
        </p>
      </div>
      {/* Card 6 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/Medica-realizando-ultrassonografia.-Fonte-Freepik.jpg"
          alt="Doppler Colorido"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Doppler Colorido
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Imagens dinâmicas para o diagnóstico de diversas patologias.
        </p>
      </div>
      {/* Card 7 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/iStock-1457592386-1-2048x1365-1.jpg"
          alt="Ultrassonografia"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Ultrassonografia
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Diagnóstico e acompanhamento de doenças com precisão.
        </p>
      </div>
      {/* Card 8 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/radioclinica-exame-de-imagem-elastografia-hepatica-1.jpg"
          alt="Elastografia"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Elastografia
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Avalia fibrose hepática e danos no fígado de forma rápida.
        </p>
      </div>
      {/* Card 9 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/Raio-x-digital.jpg"
          alt="Raio X"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">Raio X</h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Atendimento imediato sem agendamento prévio.
        </p>
      </div>
      {/* Card 10 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/core-biopsy_8958ab2d.jpg"
          alt="Biópsia Percutânea de Mama"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Biópsia Percutânea de Mama
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Procedimento para examinar nódulos e calcificações.
        </p>
      </div>
      {/* Card 11 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2025/01/Puncao-Tireoide-1.jpg"
          alt="Biópsia de Tireoide"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Biópsia de Tireoide
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Exame para diagnosticar se o nódulo é maligno ou benigno.
        </p>
      </div>
      {/* Card 12 */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <img
          src="https://www.irsa.med.br/wp-content/uploads/2024/10/doppler-vascular-catete-convenios-e-particulares-768x512.jpg.webp"
          alt="Exames Vasculares"
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-4 text-xl font-semibold">
          Exames Vasculares
        </h2>
        <p className="mt-2 text-gray-600 flex-grow font-light">
          Avalia as estruturas vasculares do organismo.
        </p>
      </div>
    </div>

        
    </div>

     );
}
 
export default ExamesPage;