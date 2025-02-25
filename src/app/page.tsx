"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
];

const Home = () => {
  return (
    <div className="">
      {/* Slide principal */}
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 3, ease: "easeOut" }}
  viewport={{ amount: 0.2 }}
>
  <Swiper
    slidesPerView={1}
    autoplay={{
      disableOnInteraction: false,
      delay: 5000,
    }}
    modules={[Autoplay]}
    loop={true}
  >
    {/* Slide 1 */}
    <SwiperSlide>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4 py-6">
        <div className="relative">
          <Image
            src="/images/doctor.png"
            alt="Doctor"
            width={400}
            height={400}
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover"
          />
          <h1 className="text-white absolute top-[50%] left-2 transform -translate-y-1/2 p-2 sm:p-3 rounded-3xl bg-emerald-700 text-center animate-float text-sm sm:text-base">
            Atendimento excelente
          </h1>
          <h1 className="text-white absolute bottom-2 right-2 p-2 sm:p-3 rounded-3xl bg-emerald-700 text-center animate-float text-sm sm:text-base">
            Equipamento moderno
          </h1>
        </div>
        <div className="flex flex-col gap-3 max-w-xs sm:max-w-xl text-center md:text-left">
          <h1 className="font-bold text-xl sm:text-3xl md:text-4xl">
            Diagnóstico de Alta Resolução
          </h1>
          <p className="text-sm sm:text-lg font-light">
            Realizamos procedimentos de alta complexidade e estamos sempre
            investindo em nosso parque tecnológico para garantir a excelência
            nos laudos, tão respeitados pelo corpo clínico da cidade e adjacências.
          </p>
          <Button className="text-sm sm:text-lg">Resultados Online</Button>
        </div>
      </section>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 px-4 py-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/ressonancia.png"
            alt="Aparelho"
            width={400}
            height={400}
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 max-w-xs sm:max-w-xl text-center md:text-left">
          <h1 className="font-bold text-xl sm:text-3xl md:text-4xl">
            O mais moderno equipamento de Ressonância Magnética de Niterói.
          </h1>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-700"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <p className="text-xs sm:text-sm md:text-base">Excelência na Imagem</p>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-700"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <p className="text-xs sm:text-sm md:text-base">Mais Espaço e Conforto</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-700"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <p className="text-xs sm:text-sm md:text-base">Diagnóstico Preciso</p>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-700"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <p className="text-xs sm:text-sm md:text-base">Suporta até 150kg</p>
              </div>
            </div>
          </div>
          <Button className="text-xs sm:text-sm md:text-lg">Agende-se</Button>
        </div>
      </section>
    </SwiperSlide>

    {/* Slide 3 */}
    <SwiperSlide>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4 py-6">
        <div className="relative">
          <Image
            src="/images/people.png"
            alt="Doctor"
            width={400}
            height={400}
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover"
          />
          <div className="text-xs sm:text-sm text-yellow-300 absolute top-[30%] left-4 sm:left-10 transform -translate-y-1/2 p-2 sm:p-3 rounded-3xl bg-sky-900 text-center animate-float">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <h1 className="text-xs sm:text-sm font-light text-yellow-300 absolute bottom-4 right-2 sm:right-4 p-2 sm:p-3 rounded-3xl bg-sky-900 text-center animate-float">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </h1>
          <h1 className="text-xs sm:text-sm font-light text-yellow-300 absolute bottom-2 left-2 p-2 sm:p-3 rounded-3xl bg-sky-900 text-center animate-float">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
          </h1>
        </div>
        <div className="flex flex-col gap-3 max-w-xs sm:max-w-xl text-center md:text-left">
          <h1 className="text-xl sm:text-3xl font-bold">Excelência Reconhecida</h1>
          <p className="text-xs sm:text-sm md:text-lg">
            O IRSA se destaca pela alta aprovação de seus pacientes, fruto de
            investimentos contínuos em tecnologia de ponta e de uma equipe
            especializada que assegura diagnósticos precisos e um atendimento
            humanizado.
          </p>
          <Button className="text-xs sm:text-sm md:text-lg">Ver avaliações</Button>
        </div>
      </section>
    </SwiperSlide>
  </Swiper>
</motion.div>


      {/* Seção: Convênios */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-bold text-xl sm:text-3xl md:text-4xl">Nossos Convênios</h1>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              autoplay={{
                disableOnInteraction: false,
                delay: 1500,
              }}
              modules={[Autoplay]}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 10 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 6, spaceBetween: 40 },
              }}
              className="w-full"
            >
              {imageUrls.map((url, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-lg p-4 transition-shadow duration-300 flex justify-center items-center">
                  <Image
                      src={url}
                      alt={`Slide ${index + 1}`}
                      width={150}
                      height={150}
                      className="max-h-[50px] max-w-[150] mx-auto object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </motion.div>

      {/* Seção: IRSA Solidário */}
      <motion.div
  id="solidario"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 3, ease: "easeOut" }}
  viewport={{ amount: 0.2 }}
>
  <div className="w-full h-[400px] sm:h-[500px] md:h-[700px] relative">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/images/irsa-solidario.mp4" type="video/mp4" />
    </video>
    {/* Faixa horizontal que corta o vídeo ao meio */}
    <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-sky-900 bg-opacity-90 py-10 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
        <Image 
          src="/images/irsalogo.png" 
          alt="IRSA" 
          width={80} 
          height={80} 
          className="w-16 sm:w-20 md:w-24 h-auto mb-2 sm:mb-4 mr-0 sm:mr-2 object-contain" 
        />
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold text-center">
          IRSA Solidário
        </h1>
      </div>
      <ul className="max-w-md mx-auto text-white text-xs sm:text-sm md:text-lg space-y-2 text-left">
        <li className="font-light">
          Exames por imagem com <span className="text-emerald-500">preço acessível</span> para desempregados e pessoas sem plano de saúde.
        </li>
        <li className="font-light">
          Parcelamos em <span className="text-emerald-500">5x SEM JUROS</span>. Basta entrar em contato com nossa Central de Atendimento.
        </li>
      </ul>
    </div>
  </div>
</motion.div>



      {/* Seção: Exames */}
      <motion.div
        id="exames"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-bold text-xl sm:text-3xl md:text-4xl mb-12">Nossos Exames</h1>
            <Swiper
              autoplay={{
                disableOnInteraction: false,
                delay: 3000,
              }}
              modules={[Autoplay]}
              loop={true}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
              }}
              className="w-full"
            >
              {/* Card 1 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/Centro-Radiologico-Como-e-o-preparo-para-ressonancia-magnetica-1.jpg"
                    alt="Ressonância Magnética"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Ressonância Magnética
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    O mais moderno equipamento de Ressonância Magnética de Niterói.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 2 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/OIP.jpg"
                    alt="Tomografia Computadorizada"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Tomografia Computadorizada
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Ampla tradição na realização de estudos tomográficos.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 3 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/Ecocardiograma.jpg"
                    alt="Ecodoppler Cardíaco"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Ecodoppler Cardíaco
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Avalia alterações no fluxo venoso, como varizes ou trombose.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 4 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/densitometria.jpg"
                    alt="Densitometria Óssea"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Densitometria Óssea
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Método para medir a massa óssea e diagnosticar a osteoporose.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 5 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/mamografia-digital-image.jpg"
                    alt="Mamografia Digital"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Mamografia Digital
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Exame não invasivo para diagnosticar o câncer de mama.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 6 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/Medica-realizando-ultrassonografia.-Fonte-Freepik.jpg"
                    alt="Doppler Colorido"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Doppler Colorido
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Imagens dinâmicas para o diagnóstico de diversas patologias.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 7 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/iStock-1457592386-1-2048x1365-1.jpg"
                    alt="Ultrassonografia"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Ultrassonografia
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Diagnóstico e acompanhamento de doenças com precisão.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 8 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/radioclinica-exame-de-imagem-elastografia-hepatica-1.jpg"
                    alt="Elastografia"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Elastografia
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Avalia fibrose hepática e danos no fígado de forma rápida.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 9 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/Raio-x-digital.jpg"
                    alt="Raio X"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">Raio X</h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Atendimento imediato sem agendamento prévio.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 10 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/core-biopsy_8958ab2d.jpg"
                    alt="Biópsia Percutânea de Mama"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Biópsia Percutânea de Mama
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Procedimento para examinar nódulos e calcificações.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 11 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2025/01/Puncao-Tireoide-1.jpg"
                    alt="Biópsia de Tireoide"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Biópsia de Tireoide
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Exame para diagnosticar se o nódulo é maligno ou benigno.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
              {/* Card 12 */}
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <Image
                    src="https://www.irsa.med.br/wp-content/uploads/2024/10/doppler-vascular-catete-convenios-e-particulares-768x512.jpg.webp"
                    alt="Exames Vasculares"
                    width={400}
                    height={160}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h2 className="mt-4 text-xl font-semibold">
                    Exames Vasculares
                  </h2>
                  <p className="mt-2 text-gray-600 flex-grow font-light">
                    Avalia as estruturas vasculares do organismo.
                  </p>
                  <Button className="mt-4">Agende Agora</Button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </motion.div>

      <motion.div
  id="sobre"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 3, ease: "easeOut" }}
  viewport={{ amount: 0.2 }}
>
  {/* Seção "Sobre nós" */}
  <div className="flex flex-col md:flex-row justify-center items-center py-16 gap-8 md:gap-16 px-4">
    <Image
      className="rounded-full w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-cover"
      src="/images/confianca.jpg"
      alt="Confiança"
      width={400}
      height={400}
    />
    <div className="flex flex-col gap-4 p-5 max-w-full md:max-w-lg">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">Sobre nós</h1>
      <p className="text-xs sm:text-sm md:text-base font-light">
        O IRSA, referência em exames de imagem na cidade de Niterói{" "}
        <span className="text-emerald-500">desde 1967</span>, realiza procedimentos de alta complexidade e está sempre investindo em seu parque tecnológico para garantir a excelência nos laudos, tão respeitados pelo corpo clínico da cidade e adjacências.
      </p>
      <p className="text-xs sm:text-sm md:text-base font-light">
        Atualmente possui <span className="text-emerald-500">os mais modernos equipamentos</span> de Ressonância Magnética, Tomografia Computadorizada, Mamografia Digital, Densitometria Óssea, Ultrassonografia, Doppler Colorido, Ecodoppler Cardíaco, Elastografia Hepática e Raio X de Niterói.
      </p>
    </div>
  </div>

  {/* Seção "Você sabia?" e Atendimento Humanizado */}
  <div className="flex flex-col md:flex-row justify-center items-center py-16 gap-8 md:gap-16 bg-gray-50 px-4">
    <div className="flex flex-col bg-sky-900 rounded-2xl p-6 sm:p-10 text-white gap-4 max-w-full md:max-w-sm">
      <h1 className="text-xl sm:text-2xl md:text-3xl">Atendimento Humanizado</h1>
      <p className="text-xs sm:text-sm md:text-base max-w-full md:max-w-xs font-light">
        Possui também uma equipe de médicos composta de profissionais renomados, professores universitários e membros da Sociedade Brasileira de Radiologia e do Colégio Brasileiro de Radiologia, o que garante a excelência dos serviços prestados. Tudo para proporcionar mais segurança para você e sua família.
      </p>
    </div>
    <div className="flex flex-col gap-4 p-5 max-w-full md:max-w-sm">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">Você sabia?</h1>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-check-big text-emerald-700"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        <p className="text-xs sm:text-sm md:text-base">O IRSA é pioneiro em radiologia em Niterói.</p>
      </div>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-check-big text-emerald-700"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        <p className="text-xs sm:text-sm md:text-base">Possui o equipamento mais amplo de Niterói.</p>
      </div>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-check-big text-emerald-700"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        <p className="text-xs sm:text-sm md:text-base">É referência em todos os métodos diagnósticos.</p>
      </div>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-check-big text-emerald-700"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        <p className="text-xs sm:text-sm md:text-base">Todos seus exames são revisados.</p>
      </div>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-check-big text-emerald-700"
        >
          <path d="M21.801 10A10 10 0 1 1 17 3.335" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        <p className="text-xs sm:text-sm md:text-base">Possui canal de contato direto com o seu médico.</p>
      </div>
    </div>
  </div>
</motion.div>


      {/* Seção: Mural de Avaliações */}
      <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 3, ease: "easeOut" }}
  viewport={{ amount: 0.2 }}
>
  <div className="flex flex-col justify-center items-center py-16 bg-gray-100 px-4">
    <div className="w-full max-w-5xl mx-auto text-center">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8">
        Mural de Avaliações
      </h1>
      <Swiper
        slidesPerView={1}
        autoplay={{
          disableOnInteraction: false,
          delay: 2000,
        }}
        modules={[Autoplay]}
        loop={true}
        className="w-full"
      >
        <SwiperSlide className="flex justify-center items-center">
          <Image
            src="/images/avaliacao1.png"
            alt="Avaliação 1"
            width={400}
            height={300}
            sizes="(max-width: 768px) 90vw, 700px"
            className="w-[300px] sm:w-[400px] md:w-[400px] h-auto mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <Image
            src="/images/avaliacao2.png"
            alt="Avaliação 2"
            width={400}
            height={300}
            sizes="(max-width: 768px) 90vw, 700px"
            className="w-[300px] sm:w-[400px] md:w-[400px] h-auto mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <Image
            src="/images/avaliacao3.png"
            alt="Avaliação 3"
            width={400}
            height={300}
            sizes="(max-width: 768px) 90vw, 700px"
            className="w-[300px] sm:w-[400px] md:w-[400px] h-auto mx-auto"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center text-center grayscale mt-8">
        <Image
          src="/images/avaliargoogle.png"
          alt="Avaliações Google"
          width={300}
          height={150}
          sizes="(max-width: 768px) 80vw, 150px"
          className="w-[150px] sm:w-[300px] md:w-[300px] h-auto mx-auto"
        />
      </div>
    </div>
  </div>
</motion.div>

    </div>
  );
};

export default Home;
