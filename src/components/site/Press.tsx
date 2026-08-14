import { useState } from "react";
import Reveal from "./Reveal";

const pressNews = [
  {
    date: "18/09/25",
    title: "Qual é a importância da comunicação para a vida e a carreira?",
    link: "https://youtu.be/NwQV3AFfM2E?t=361",
    outlet: "Rádio Educativa FM 97,1 - Jornal Paraná Agora",
    location: "Curitiba-PR",
  },
  {
    date: "18/09/25",
    title: "Qual é a importância da comunicação para a vida e a carreira?",
    link: "https://www.diarioinduscom.com.br/Noticias/869194/qual_e_a_importancia_da_comunicacao_para_a_vida_e_a_carreira?",
    outlet: "Diário Induscom",
    location: "Curitiba-PR",
  },
  {
    date: "18/09/25",
    title: "Qual é a importância da comunicação para a vida e a carreira?",
    link: "https://viversantacatarina.com.br/qual-e-a-importancia-da-comunicacao-para-a-vida-e-a-carreira/",
    outlet: "Viver Santa Catarina",
    location: "Mafra-SC",
  },
  {
    date: "31/03/25",
    title: "Dados comprovam eficiência das mulheres em cargos de liderança, mas estereótipos persistem",
    link: "https://jornaldiadia.com.br/dados-comprovam-eficiencia-das-mulheres-em-cargos-de-lideranca-mas-estereotipos-persistem/",
    outlet: "Jornal Dia a Dia",
    location: "Três Lagoas-MS",
  },
  {
    date: "31/03/25",
    title: "Empreendedorismo: 5 dicas de comunicação eficaz para mulheres",
    link: "https://joox.com.br/empreendedorismo-5-dicas-de-comunicacao-eficaz-para-mulheres/",
    outlet: "Joox",
    location: "São Paulo-SP",
  },
  {
    date: "19/03/25",
    title: "Apesar de serem maioria no país, elas ainda enfrentam desafios no mundo corporativo; especialista diz como a comunicação assertiva pode ajudar as mulheres",
    link: "https://youtu.be/FnfL2nT3Ur4?t=4349",
    outlet: "Rádio Jovem Pan 103,9 FM - BOA DA PAN",
    location: "Curitiba-PR",
  },
  {
    date: "19/03/25",
    title: "Médica infectologista participa do Boa da Pan",
    link: "https://ric.com.br/jovem-pan/boa-da-pan/medica-infectologista-participa-do-boa-da-pan/",
    outlet: "RIC / Jovem Pan",
    location: "Curitiba-PR",
  },
  {
    date: "19/03/25",
    title: "Jornal da Mix – Entrevista – Valdireni Alves",
    link: "https://open.spotify.com/episode/7py8KmDEbFx7o0kxPrGgPU",
    outlet: "Rádio Mix FM 98,3 Curitiba",
    location: "Curitiba-PR",
  },
  {
    date: "20/03/25",
    title: "Dados comprovam eficiência das mulheres em cargos de liderança, mas estereótipos persistem",
    link: "https://folhadecuritiba.com.br/2025/03/19/dados-comprovam-eficiencia-das-mulheres-em-cargos-de-lideranca-mas-estereotipos-persistem/",
    outlet: "Folha de Curitiba",
    location: "Curitiba-PR",
  },
  {
    date: "28/03/25",
    title: "Empreendedorismo: 5 dicas de comunicação eficaz para mulheres",
    link: "https://jornaldobras.com.br/noticia/61084/empreendedorismo-5-dicas-de-comunicacao-eficaz-para-mulheres",
    outlet: "Jornal do Brás",
    location: "São Paulo-SP",
  },
  {
    date: "06/03/26",
    title: "Você fala com autoridade ou pede desculpa antes de ter razão?",
    link: "https://ellasmagazine.com.br/voce-fala-com-autoridade-ou-pede-desculpa-antes-de-ter-razao/",
    outlet: "Ellas Magazine",
    location: "Almirante Tamandaré-PR",
  },
  {
    date: "06/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://folhadecuritiba.com.br/mulheres-ainda-sao-minoria-na-lideranca/",
    outlet: "Folha de Curitiba",
    location: "Curitiba-PR",
  },
  {
    date: "06/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://crn1.com.br/2026/03/mulheres-ainda-sao-minoria-na-lideranca/",
    outlet: "CRN1",
    location: "Campo Mourão-PR",
  },
  {
    date: "09/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://www.diarioinduscom.com.br/Noticias/878541/mulheres_ainda_sao_minoria_na_lideranca",
    outlet: "Diário Induscom",
    location: "Curitiba-PR",
  },
  {
    date: "09/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://odiariodecuritiba.com.br/2026/03/05/mulheres-ainda-sao-minoria-na-lideranca/",
    outlet: "O Diário de Curitiba",
    location: "Curitiba-PR",
  },
  {
    date: "09/03/26",
    title: "Valdireni explica como a comunicação influencia a liderança feminina",
    link: "https://www.minhavidamagnolia.com.br/valdireni-explica-como-a-comunicacao-influencia-a-lideranca-feminina/",
    outlet: "Minha Vida Magnólia",
    location: "Chapecó-SC",
  },
  {
    date: "09/03/26",
    title: "Por que mulheres ainda são minoria na liderança corporativa",
    link: "https://www.segs.com.br/seguros/442168-por-que-mulheres-ainda-sao-minoria-na-lideranca-corporativa",
    outlet: "Segs",
    location: "Santos-SP",
  },
  {
    date: "10/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://paranaemdestaque.com.br/coluna/727/mulheres-ainda-sao-minoria-na-lideranca",
    outlet: "Paraná em Destaque",
    location: "Londrina-PR",
  },
  {
    date: "10/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://odiariodemaringa.com.br/2026/03/05/mulheres-ainda-sao-minoria-na-lideranca/",
    outlet: "O Diário de Maringá",
    location: "Maringá-PR",
  },
  {
    date: "10/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://www.soucatarina.com.br/noticias/8501-mulheres-ainda-sao-minoria-na-lideranca",
    outlet: "Sou Catarina",
    location: "Xaxim-SC",
  },
  {
    date: "10/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://www.cardosocontabil.com.br/noticias/artigos/2026/03/09/mulheres-ainda-sao-minoria-na-lideranca.html",
    outlet: "Cardoso Contábil",
    location: "Guaíba-RS",
  },
  {
    date: "10/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://justmi.jor.br/artigos/mulheres-ainda-sao-minoria-na-lideranca",
    outlet: "Just Mi",
    location: "Curitiba-PR",
  },
  {
    date: "10/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://odiariodoparana.com.br/sem-categoria/2026/03/05/mulheres-ainda-sao-minoria-na-lideranca/",
    outlet: "O Diário do Paraná",
    location: "Curitiba-PR",
  },
  {
    date: "10/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://contaaconta.com.br/noticias/artigos/2026/03/09/mulheres-ainda-sao-minoria-na-lideranca.html",
    outlet: "Conta a Conta",
    location: "Rio de Janeiro-RJ",
  },
  {
    date: "10/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://gva.cnt.br/noticias/artigos/2026/03/09/mulheres-ainda-sao-minoria-na-lideranca.html",
    outlet: "GVA Contabilidade",
    location: "Varginha-MG",
  },
  {
    date: "10/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://conttacto.cnt.br/noticias/artigos/2026/03/09/mulheres-ainda-sao-minoria-na-lideranca.html",
    outlet: "Conttacto",
    location: "Campo Grande-MS",
  },
  {
    date: "11/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://simonebello.blogspot.com/2026/03/mulheres-ainda-sao-minoria-na-lideranca.html",
    outlet: "Blog Simone Bello",
    location: "Curitiba-PR",
  },
  {
    date: "11/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://venturincontabil.com.br/noticias/artigos/2026/03/09/mulheres-ainda-sao-minoria-na-lideranca.html",
    outlet: "Venturin Contábil",
    location: "Curitiba-PR",
  },
  {
    date: "11/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://escritorioregente.com.br/noticias/artigos/2026/03/09/mulheres-ainda-sao-minoria-na-lideranca.html",
    outlet: "Escritório Regente",
    location: "Maringá-PR",
  },
  {
    date: "11/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://pratescontabil.com.br/noticias/artigos/2026/03/09/mulheres-ainda-sao-minoria-na-lideranca.html",
    outlet: "Prates Contábil",
    location: "Prudentópolis-PR",
  },
  {
    date: "11/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://escritoriouniaocne.com.br/noticias/artigos/2026/03/09/mulheres-ainda-sao-minoria-na-lideranca.html",
    outlet: "União Contábil",
    location: "Cianorte-PR",
  },
  {
    date: "11/03/26",
    title: "Mulheres ainda são minoria na liderança",
    link: "https://www.romacnet.com.br/noticias/artigos/2026/03/09/mulheres-ainda-sao-minoria-na-lideranca.html",
    outlet: "Roma Contabilidade",
    location: "Itaboraí-RJ",
  },
  {
    date: "16/09/25",
    title: "Jornalista paranaense expõe a importância da comunicação para a vida e a carreira",
    link: "https://www.bemparana.com.br/bem-estar/jornalista-paranaense-expoe-a-importancia-da-comunicacao-para-a-vida-e-a-carreira/",
    outlet: "Bem Paraná",
    location: "Curitiba-PR",
  },
  {
    date: "17/09/25",
    title: "Jornalista lança livro sobre a importância da comunicação",
    link: "https://folhadecuritiba.com.br/jornalista-lanca-livro-sobre-a-importancia-da-boa-comunicacao/",
    outlet: "Folha de Curitiba",
    location: "Curitiba-PR",
  },
  {
    date: "17/09/25",
    title: "Qual é a importância da comunicação para a vida e carreira?",
    link: "https://miriangasparin.com.br/2025/09/qual-e-a-importancia-da-comunicacao-para-a-vida-e-carreira/",
    outlet: "Mirian Gasparin",
    location: "Curitiba-PR",
  },
  {
    date: "17/09/25",
    title: "Qual é a importância da comunicação para a vida e a carreira?",
    link: "https://www.casadojornalista.org/qual-e-a-importancia-da-comunicacao-para-a-vida-e-a-carreira/",
    outlet: "Casa do Jornalista",
    location: "Florianópolis-SC",
  },
  {
    date: "17/09/25",
    title: "Livro aborda a importância da comunicação para a vida e a carreira",
    link: "https://revistafrancisca.com.br/livro-aborda-a-importancia-da-comunicacao-para-a-vida-e-a-carreira/",
    outlet: "Revista Francisca",
    location: "Joinville-SC",
  }
];

const Press = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleNews = showAll ? pressNews : pressNews.slice(0, 4);

  return (
    <section id="imprensa" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container-editorial">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-coral" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
                Na Imprensa
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              Registros que conectam <em className="text-coral italic">conhecimento</em> e mídia.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-pretty">
            Confira registros de imprensa, entrevistas e matérias que mencionam Valdireni Alves em veículos consolidados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {visibleNews.map((item, index) => (
            <Reveal key={index} variant="up" delay={index * 100}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 lg:p-8 bg-card border border-border rounded-lg hover:border-coral/40 transition-all duration-300 hover:shadow-soft"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-coral font-semibold">
                    {item.date}
                  </span>
                  <span className="text-muted-foreground group-hover:text-coral transition-colors">
                    →
                  </span>
                </div>
                <h3 className="font-serif text-xl mb-4 leading-tight group-hover:text-foreground transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-coral/60" />
                    {item.outlet}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-coral/60" />
                    {item.location}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {pressNews.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 text-foreground text-sm font-medium tracking-wide hover:border-coral hover:text-coral transition-colors duration-300"
            >
              {showAll ? "Ver menos" : "Ver todas as matérias"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Press;