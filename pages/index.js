import Head from "next/head";
import { getSortedDocsData } from "@/lib/mdxContent";
// components
import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home({ allDocsData }) {
  return (
    <>
      <Head>
        <title>ETECSA</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="my-8">
        <Hero />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {cardData.map((data) => (
            <Card
              key={data.id}
              imgH={data.imgH}
              imgW={data.imgW}
              imgSrc={data.imgSrc}
              cardHeader={data.cardHeader}
              cardData={data.cardContent}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allDocsData = getSortedDocsData();
  return {
    props: {
      allDocsData,
    },
  };
}

const cardData = [
  {
    id: "covid-card",
    imgH: "h-14",
    imgW: "w-14",
    imgSrc: "/svg/covid.svg",
    cardHeader: "COVID-19",
    cardContent: "Información actualizada del MINSAP sobre el SARS-CoV II.",
  },
  {
    id: "pesquisador-card",
    imgH: "h-12",
    imgW: "w-12",
    imgSrc: "/svg/minsap.svg",
    cardHeader: "Pesquisador Virtual",
    cardContent: "Aplicación móvil para encuesta digital sobre la COVID-19.",
  },
  {
    id: "transfermovil-card",
    imgH: "h-12",
    imgW: "w-12",
    imgSrc: "/svg/transfer.svg",
    cardHeader: "Transfermóvil",
    cardContent: "¡Descargala Ya! Pagos en linea al alcance de tus manos.",
  },
  {
    id: "nauta-card",
    imgH: "h-12",
    imgW: "w-12",
    imgSrc: "/svg/wifi.svg",
    cardHeader: "Aplicación Nauta",
    cardContent: "Conéctate de fácil y con seguridad en sitios WiFi.",
  },
  {
    id: "portal-card",
    imgH: "h-12",
    imgW: "w-12",
    imgSrc: "/svg/portal.svg",
    cardHeader: "Poral MiCubacel",
    cardContent:
      "Registrate desde tu móvil ¡Gratis!,   APN nauta y activar datos.",
  },
  {
    id: "espacio-card",
    imgH: "h-14",
    imgW: "w-14",
    imgSrc: "/svg/server.svg",
    cardHeader: "Espacio3W",
    cardContent: "Solicita un dominio nat.cu y paquetes de hospedaje web.",
  },
];
