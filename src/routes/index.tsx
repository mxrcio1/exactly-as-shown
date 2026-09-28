import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  BookA,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  Clock,
  Hand,
  House,
  Lock,
  MessageCircle,
  Palette,
  Puzzle,
  Scissors,
  Search,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Target,
} from "lucide-react";
import heroImg from "@/assets/hero-escolinha.jpg.asset.json";
import familia1Img from "@/assets/familia-1.png.asset.json";
import familia2Img from "@/assets/familia-2.png.asset.json";
import familia3Img from "@/assets/familia-3.png.asset.json";
import familia4Img from "@/assets/familia-4.png.asset.json";
import logoImg from "@/assets/logo-escolinha.png.asset.json";
import depoimento1Img from "@/assets/depoimento-1.png.asset.json";
import depoimento2Img from "@/assets/depoimento-2.png.asset.json";
import depoimento3Img from "@/assets/depoimento-3.png.asset.json";
import ofertaImg from "@/assets/oferta-mockup.jpg";
import atividadesImg from "@/assets/atividades-preview.jpg";
import bonus1Img from "@/assets/bonus-1-brincadeiras.png.asset.json";
import bonus2Img from "@/assets/bonus-2-caderno.png.asset.json";
import bonus3Img from "@/assets/bonus-3-megapacote.png.asset.json";
import bonus4Img from "@/assets/bonus-4-jogos.png.asset.json";
import rotinaImg from "@/assets/rotina.jpg";

const TITLE = "Escolinha Digital | Atividades Educativas Adaptadas para Crianças com Autismo";
const DESCRIPTION =
  "Biblioteca digital com mais de 1.900 atividades lúdicas e adaptadas para crianças com TEA, prontas para imprimir e aplicar em casa, na escola ou no consultório.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://pay.cakto.com.br/38wgku";
const cta = CHECKOUT_URL || "#oferta";

const familiasImgs = [familia1Img, familia2Img, familia3Img, familia4Img];

const menu = [
  { rotulo: "Para quem é", ancora: "#para-quem-e" },
  { rotulo: "Como funciona", ancora: "#como-funciona" },
  { rotulo: "Atividades", ancora: "#atividades" },
  { rotulo: "Bônus", ancora: "#bonus" },
  { rotulo: "Dúvidas", ancora: "#duvidas" },
];

const publicos = [
  {
    publico: "Professores",
    Icone: BookOpen,
    texto:
      "Chega de passar a noite adaptando material. Adapte a aula em minutos, com atividades prontas para aplicar.",
  },
  {
    publico: "Pais e responsáveis",
    Icone: House,
    texto:
      "Uma rotina leve de estímulo em casa, com atividades curtas e fáceis de aplicar, sem precisar ser especialista.",
  },
  {
    publico: "Terapeutas e profissionais de apoio",
    Icone: Brain,
    texto:
      "Um acervo variado para complementar sessões e sugerir tarefas para a família continuar em casa.",
  },
];

const passos = [
  {
    numero: 1,
    titulo: "Receba seu acesso",
    texto:
      "Receba o acesso por e-mail logo após a confirmação e encontre todo o material em um só lugar.",
  },
  {
    numero: 2,
    titulo: "Escolha a habilidade",
    texto: "Navegue pelas categorias e escolha a atividade que combina com o momento da criança.",
  },
  {
    numero: 3,
    titulo: "Imprima e aplique",
    texto:
      "Baixe o PDF, imprima quantas vezes quiser e comece a usar em casa, na escola ou no consultório.",
  },
];

const cores = {
  laranja: { bg: "oklch(0.94 0.05 60)", fg: "oklch(0.55 0.15 50)" },
  roxo: { bg: "oklch(0.93 0.05 300)", fg: "oklch(0.5 0.16 300)" },
  rosa: { bg: "oklch(0.94 0.05 0)", fg: "oklch(0.55 0.17 10)" },
  azul: { bg: "oklch(0.93 0.05 260)", fg: "oklch(0.5 0.17 262)" },
  verde: { bg: "oklch(0.94 0.06 160)", fg: "oklch(0.5 0.12 160)" },
  amarelo: { bg: "oklch(0.95 0.08 90)", fg: "oklch(0.5 0.11 75)" },
  ciano: { bg: "oklch(0.94 0.05 210)", fg: "oklch(0.5 0.11 220)" },
  lilas: { bg: "oklch(0.94 0.04 330)", fg: "oklch(0.52 0.14 330)" },
};

const categorias = [
  { nome: "Atenção e foco", Icone: Target, cor: cores.laranja, descricao: "Atividades que ajudam a manter o interesse e a concentração." },
  { nome: "Linguagem e comunicação", Icone: MessageCircle, cor: cores.roxo, descricao: "Palavras, figuras e situações para ampliar a expressão." },
  { nome: "Socialização e emoções", Icone: Smile, cor: cores.rosa, descricao: "Reconhecer sentimentos e praticar a convivência." },
  { nome: "Cognição e raciocínio", Icone: Puzzle, cor: cores.azul, descricao: "Quebra-cabeças, sequências e lógica de forma lúdica." },
  { nome: "Coordenação motora", Icone: Scissors, cor: cores.verde, descricao: "Traçar, recortar, colar e pintar com propósito." },
  { nome: "Alfabetização e números", Icone: BookA, cor: cores.amarelo, destaque: true, descricao: "Vogais, letras, leitura, escrita e primeiros conceitos matemáticos." },
  { nome: "Cores e formas", Icone: Palette, cor: cores.ciano, descricao: "Identificação e associação visual de cores e figuras geométricas." },
  { nome: "Atividades sensoriais", Icone: Hand, cor: cores.lilas, descricao: "Propostas para explorar texturas e estímulos de forma leve." },
];

const galeria = [
  { nome: "Números e contagem", cor: cores.amarelo },
  { nome: "Alfabetização", cor: cores.amarelo },
  { nome: "Coordenação motora", cor: cores.verde },
  { nome: "Raciocínio lógico", cor: cores.azul },
  { nome: "Vogais", cor: cores.amarelo },
  { nome: "Formas geométricas", cor: cores.ciano },
  { nome: "Cores", cor: cores.ciano },
  { nome: "Recorte e colagem", cor: cores.verde },
  { nome: "Sensorial", cor: cores.lilas },
  { nome: "Leitura", cor: cores.roxo },
  { nome: "Escrita", cor: cores.roxo },
  { nome: "Emoções", cor: cores.rosa },
  { nome: "Quebra-cabeça", cor: cores.azul },
];

const rotina = [
  { momento: "Antes da aula ou da terapia", Icone: Clock, texto: "Escolha 1 ou 2 atividades na plataforma e imprima em poucos minutos." },
  { momento: "Durante", Icone: Search, texto: "A criança usa o apoio visual e ganha autonomia, enquanto você acompanha." },
  { momento: "Depois", Icone: Star, texto: "Guarde os trabalhos, celebre a conquista e planeje o próximo passo." },
  { momento: "Em casa", Icone: House, texto: "Repita ou reforce com uma atividade curta, criando uma rotina tranquila." },
];

const inclusos = [
  {
    titulo: "+1.900 atividades completas",
    descricao:
      "Acervo completo para estimular habilidades cognitivas, motoras e comportamentais.",
  },
  {
    titulo: "Estímulos visuais e linguagem simples",
    descricao: "Exercícios de fácil compreensão pensados para gerar mais engajamento.",
  },
  {
    titulo: "PDFs prontos para imprimir",
    descricao: "Baixe e imprima quando e quantas vezes quiser.",
  },
  {
    titulo: "Acesso vitalício",
    descricao: "Pague uma vez e acesse sempre, com o material organizado por categorias.",
  },
];

const bonusList = [
  { numero: 1, valor: "39,90", foto: bonus1Img, alt: "Capa do bônus 101 Brincadeiras e Atividades para Crianças no TEA", titulo: "101 Brincadeiras e Atividades para Crianças no TEA", descricao: "Ideias de brincadeiras e atividades para estimular o desenvolvimento de crianças no TEA." },
  { numero: 2, valor: "19,90", foto: bonus2Img, alt: "Capa do Caderno de Estímulos e Atividades Adaptadas", titulo: "Caderno de Estímulos e Atividades Adaptadas", descricao: "Atividades adaptadas para trabalhar diferentes habilidades de forma prática e lúdica." },
  { numero: 3, valor: "19,90", foto: bonus3Img, alt: "Capa do Mega Pacote de 300 Atividades Especializadas", titulo: "Mega Pacote de 300 Atividades Especializadas", descricao: "Um grande pacote de atividades especializadas para ampliar suas opções de aplicação." },
  { numero: 4, valor: "9,90", foto: bonus4Img, alt: "Capa do Kit Jogos Educativos Adaptados", titulo: "Kit Jogos Educativos Adaptados", descricao: "Jogos educativos adaptados para aprender brincando e estimular diferentes habilidades." },
];

const itensOferta = [
  "+1.900 Atividades para Ensinar, Estimular e Incluir Crianças Autistas",
  "Acesso imediato e vitalício à plataforma",
  "Bônus 1: 101 Brincadeiras e Atividades para Crianças no TEA",
  "Bônus 2: Caderno de Estímulos e Atividades Adaptadas",
  "Bônus 3: Mega Pacote de 300 Atividades Especializadas",
  "Bônus 4: Kit Jogos Educativos Adaptados",
];

const faq = [
  {
    pergunta: "Como vou receber o material?",
    resposta:
      "A Escolinha Digital é totalmente digital. Após a confirmação do pagamento, você receberá as instruções de acesso pelo seu e-mail para acessar o portal de atividades de forma rápida e prática.",
  },
  {
    pergunta: "Quantas atividades o kit tem?",
    resposta: "São mais de 1.900 atividades organizadas por categorias.",
  },
  {
    pergunta: "Posso usar em sala de aula e também em casa?",
    resposta:
      "Sim. O material é digital e em PDF, então você pode imprimir e usar em casa, na escola ou no consultório.",
  },
  {
    pergunta: "O material segue a BNCC?",
    resposta:
      "Sim. Os materiais são desenvolvidos para apoiar o processo de ensino e aprendizagem, com atividades educativas e adaptadas para diferentes necessidades.",
  },
  {
    pergunta: "E se eu não gostar? Posso cancelar?",
    resposta:
      "Sim. Você tem 7 dias de garantia. Se o material não for para você, basta solicitar o reembolso dentro desse prazo.",
  },
];

const depoimentos = [
  { nome: "Ana Paula", perfil: "Belo Horizonte, MG", foto: depoimento1Img, depoimento: "Gente, eu chorei quando vi meu filho fazendo as atividades sem reclamar. Ele tem 6 anos e autismo nível 2 e normalmente não para quieto. Com essas folhinhas ele ficou 20 minutos concentrado. 20 minutos!! Pra quem é mãe de autista sabe o quanto isso é grande." },
  { nome: "Fernanda Silveira", perfil: "Chapecó, SC", foto: depoimento2Img, depoimento: "Comprei na dúvida porque R$10 parecia suspeito de tão barato. Mas veio tudo certinho na hora. Minha filha de 7 anos ficou tão animada que ela mesma pediu pra fazer mais. Já imprimi umas 3 vezes a mesma folha porque ela quer repetir." },
  {
    nome: "Renata Cavalcanti",
    perfil: "Ubatuba, SP",
    foto: depoimento3Img,
    depoimento:
      "Trabalho com educação especial há 8 anos e sempre perdi muito tempo adaptando material. Comprei sem muita esperança por ser barato demais e me surpreendi. Já usei com 3 alunos diferentes e todos responderam bem. Virou parte da minha rotina de sala.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Barra de topo */}
      <div className="bg-gradient-sun px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
        OFERTA DE LANÇAMENTO: 90% de desconto só hoje na Escolinha Digital
      </div>

      {/* Cabeçalho */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background backdrop-blur sm:bg-background/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <img
              src={logoImg.url}
              alt="Escolinha Digital"
              width={36}
              height={36}
              className="size-9 rounded-xl bg-white object-contain"
            />
            <span className="font-display text-lg font-extrabold">Escolinha Digital</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
            {menu.map((m) => (
              <a key={m.ancora} href={m.ancora} className="transition-colors hover:text-primary">
                {m.rotulo}
              </a>
            ))}
          </nav>
          <Button asChild variant="cta" className="rounded-full">
            <a href="#oferta">Garantir acesso</a>
          </Button>
        </div>
      </header>

      {/* Hero — novo layout: imagem primeiro no mobile e à direita no desktop */}
      <section id="top" className="bg-gradient-hero px-4 pt-6 pb-8 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:grid md:grid-cols-2 md:items-center md:gap-10">
          {/* IMAGEM: primeiro no mobile, à direita no desktop */}
          <div className="order-1 md:order-2">
            <img
              src={heroImg.url}
              alt="+1900 Atividades para Autismo"
              width={1200}
              height={1008}
              className="w-full rounded-3xl shadow-lg"
            />
          </div>

          {/* TEXTO + BOTÕES: depois da imagem no mobile, à esquerda no desktop */}
          <div className="order-2 flex flex-col gap-4 md:order-1">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sunny px-4 py-1.5 text-sm font-bold text-sunny-foreground">
              <Sparkles className="size-4" /> Organizado por habilidades e categorias
            </span>

            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Atividades para Ensinar, Estimular e Incluir Crianças Autistas
            </h1>

            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Prontas para imprimir e simples de aplicar...</strong>
            </p>

            <ul className="space-y-3">
              {[
                "Atividades lúdicas com apoio visual",
                "PDFs prontos para imprimir e aplicar",
                "Mais de 1.900 atividades organizadas por categorias",
                "Acesso vitalício ao material",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* prova social: avatares + 2.500 famílias */}
            <div className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-background px-4 py-3 sm:w-fit sm:flex-row sm:items-center sm:gap-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {familiasImgs.map((imagem, index) => (
                    <img
                      key={imagem.url}
                      src={imagem.url}
                      alt={`Pessoa que usa a Escolinha Digital ${index + 1}`}
                      width={64}
                      height={64}
                      className="size-8 shrink-0 rounded-full border-2 border-background object-cover"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-sunny">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Mais de 2.500 famílias e professores</span>{" "}
                já usam a Escolinha
              </span>
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                <a href="#oferta">Quero garantir meu acesso</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="w-full rounded-full border-primary/30 text-primary hover:bg-primary/5 hover:text-primary sm:w-auto"
              >
                <a href="#atividades" className="gap-2">
                  ver as atividades <ChevronDown className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <Section id="para-quem-e" title="Feito para quem cuida, ensina e acompanha">
        <div className="grid gap-6 md:grid-cols-3">
          {publicos.map((c) => (
            <div key={c.publico} className="rounded-3xl bg-card p-7 shadow-soft">
              <div className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                <c.Icone aria-hidden="true" className="size-6" strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-lg font-bold">{c.publico}</h3>
              <p className="mt-2 text-muted-foreground">{c.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Como funciona */}
      <Section id="como-funciona" title="Comece a usar em 3 passos simples" tone="muted">
        <div className="relative grid gap-6 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[3.0625rem] left-[3.125rem] z-20 hidden h-0.5 w-[calc(66.6667%+1rem)] bg-accent/50 md:block"
          />
          {passos.map((p) => (
            <div key={p.numero} className="relative rounded-3xl bg-card p-7 shadow-soft">
              <span className="relative z-30 grid size-11 place-items-center rounded-full bg-accent font-display text-lg font-extrabold text-accent-foreground ring-4 ring-card">
                {p.numero}
              </span>
              <h3 className="mt-4 text-lg font-bold">{p.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{p.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Áreas de desenvolvimento */}
      <Section title="Atividades organizadas por área de desenvolvimento" subtitle="Cada categoria reúne exercícios com linguagem simples e estímulos visuais claros.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((c) => (
            <a
              key={c.nome}
              href="#paginas"
              className={`group relative rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft ${c.destaque ? "border-primary/50 ring-1 ring-primary/20" : "border-border"}`}
            >
              {c.destaque && (
                <span className="absolute right-3 top-3 rounded-full bg-sunny px-2.5 py-0.5 text-[11px] font-bold text-sunny-foreground">
                  Mais buscada
                </span>
              )}
              <span className="grid size-12 place-items-center rounded-full" style={{ backgroundColor: c.cor.bg, color: c.cor.fg }}>
                <c.Icone aria-hidden="true" className="size-6" strokeWidth={2} />
              </span>
              <h3 className="mt-3 font-bold">{c.nome}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.descricao}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Ver exemplos <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Galeria */}
      <Section id="atividades" title="Espie algumas páginas do material" subtitle="Mais de 1.900 atividades como essas, organizadas por categoria" tone="muted">
        <div id="paginas" className="scroll-mt-24 overflow-hidden rounded-3xl shadow-card">
          <img
            src={atividadesImg}
            alt="Páginas de atividades infantis em português: Cubra os Tracejados, Conte e Escreva, Ligue as Formas e Vamos Contar até 10"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full object-cover"
          />
        </div>
        <div className="mt-14 rounded-3xl bg-secondary/60 px-4 py-8">
          <div className="flex flex-wrap justify-center gap-3">
            {galeria.map((g) => (
              <a key={g.nome} href="#paginas" className="rounded-full px-4 py-2 text-sm font-semibold shadow-soft transition-transform hover:-translate-y-0.5" style={{ backgroundColor: g.cor.bg, color: g.cor.fg }}>
                {g.nome}
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-muted-foreground">E essas são só algumas das mais de 1.900 atividades da Escolinha Digital.</p>
        </div>
      </Section>

      {/* Um dia com a escolinha */}
      <Section title="Como a Escolinha Digital cabe na sua rotina" subtitle="Uma sugestão de uso simples, no ritmo de cada criança.">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ol className="relative space-y-7 border-l-2 border-dashed border-primary/30 pl-8">
            {rotina.map((r) => (
              <li key={r.momento} className="relative">
                <span className="absolute -left-[41px] top-2 size-4 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-full bg-secondary text-primary">
                    <r.Icone aria-hidden="true" className="size-4" strokeWidth={2} />
                  </span>
                  <h3 className="font-bold">{r.momento}</h3>
                </div>
                <p className="mt-1 text-muted-foreground">{r.texto}</p>
              </li>
            ))}
          </ol>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img src={rotinaImg} alt="Criança fazendo uma atividade impressa com a mãe" loading="lazy" width={1024} height={1024} className="w-full object-cover" />
          </div>
        </div>
      </Section>

      {/* O que está incluso */}
      <Section id="o-que-esta-incluso" title="Tudo o que você recebe" tone="muted">
        <div className="grid gap-5 md:grid-cols-2">
          {inclusos.map((i) => (
            <div key={i.titulo} className="flex h-full flex-col rounded-3xl bg-card p-6 shadow-soft">
              <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-5" /></span>
              <h3 className="mt-4 font-bold">{i.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.descricao}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Bônus */}
      <Section id="bonus" title="Bônus que acompanham a Escolinha Digital" subtitle="Recursos extras para deixar suas aulas mais atrativas, dinâmicas e inclusivas.">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            {bonusList.map((b) => (
              <div key={b.numero} className="overflow-hidden rounded-2xl shadow-card">
                <img src={b.foto.url} alt={b.alt} loading="lazy" className="w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {bonusList.map((b) => (
              <div key={b.numero} className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sunny font-display font-extrabold text-sunny-foreground">{b.numero}</span>
                <div>
                  <h3 className="font-bold">{b.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{b.descricao}</p>
                  <p className="mt-1 text-sm">de <span className="text-muted-foreground line-through">R$ {b.valor}</span> por <span className="font-extrabold text-accent">GRÁTIS</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Super Oferta */}
      <section
        id="oferta"
        className="relative overflow-hidden bg-[linear-gradient(160deg,#1a7fe6_0%,#0F6BCB_50%,#0A3F8A_100%)] px-4 py-12 text-white sm:py-16"
        style={{ fontFamily: "'Nunito', sans-serif" }}
      >
        <Star aria-hidden="true" className="pointer-events-none absolute left-5 top-8 size-9 rotate-12 fill-[#FFC20E] text-[#FFC20E] opacity-20 sm:left-10 sm:top-12" />
        <Star aria-hidden="true" className="pointer-events-none absolute bottom-10 right-5 size-10 -rotate-12 fill-[#67C23A] text-[#67C23A] opacity-20 sm:right-10" />

        <div className="relative mx-auto flex w-full max-w-[520px] flex-col items-center">
          <div className="grid size-[170px] place-items-center rounded-full bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            <img
              src={logoImg.url}
              alt="Escolinha Digital"
              width={170}
              height={170}
              className="size-full rounded-full object-contain"
            />
          </div>

          <h2 className="mt-7 text-center text-5xl font-black tracking-tight text-white sm:text-6xl">
            SUPER OFERTA
          </h2>

          <span className="mt-4 rounded-xl bg-[#D62828] px-5 py-2 text-sm font-black tracking-wide text-white shadow-[0_4px_0_rgba(0,0,0,0.18)]">
            SOMENTE HOJE
          </span>

          <ul className="mt-7 w-full space-y-3.5">
            {itensOferta.map((item) => {
              const isBonus = item.startsWith("Bônus ");
              const [prefix, ...rest] = item.split(":");
              return (
                <li key={item} className="flex items-start gap-3 text-[15px] font-extrabold leading-snug sm:text-base">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#67C23A] text-white shadow-sm">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <span>
                    {isBonus ? (
                      <>
                        <span className="font-black text-[#FFC20E]">{prefix}:</span>
                        {rest.join(":")}
                      </>
                    ) : (
                      item
                    )}
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 w-full rounded-[28px] bg-white px-6 py-7 text-center text-[#0A3F8A] shadow-[0_9px_0_rgba(0,0,0,0.20)] sm:px-8">
            <p className="text-sm font-black tracking-wide">KIT ESCOLINHA DIGITAL COMPLETO</p>
            <p className="mt-3 text-sm font-bold text-slate-500 line-through">De R$ 97,00</p>
            <p className="mt-1 text-6xl font-black leading-none text-[#F85E0B] sm:text-7xl">R$ 10,00</p>
            <p className="mt-3 text-base font-extrabold">ou 4x de R$ 2,50</p>
            <p className="mt-2 text-xs font-bold text-slate-500">Pagamento único. Acesso imediato e vitalício.</p>
          </div>

          <a
            href={cta}
            className="mt-7 flex w-full items-center justify-center rounded-2xl bg-[#FFC20E] px-5 py-5 text-center text-base font-black leading-tight text-[#4A2B00] shadow-[0_7px_0_#B68A00] outline-none transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_7px_0_#B68A00] active:translate-y-[3px] active:shadow-[0_3px_0_#B68A00] focus-visible:ring-4 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A3F8A] motion-reduce:transition-none sm:text-lg"
          >
            QUERO O KIT COMPLETO COM DESCONTO!
          </a>

          <div className="mt-6 flex w-full flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-bold text-white/90">
            <span>🔒 Compra segura</span>
            <span>🛡️ Privacidade</span>
            <span>💳 Pagamento facilitado</span>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <Section title="Garantia incondicional de 7 dias">
        <div className="mx-auto max-w-2xl rounded-3xl bg-card p-8 text-center shadow-soft">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-accent-foreground"><ShieldCheck className="size-8" /></span>
          <p className="mt-4 text-muted-foreground">Você pode testar a Escolinha Digital com tranquilidade. Se em até 7 dias sentir que o material não é para você, devolvemos o valor pago.</p>
        </div>
      </Section>

      {/* Depoimentos */}
      <Section title="Depoimentos reais sobre o kit Escolinha Digital" tone="muted">
        <div className="grid gap-5 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <div key={i} className="rounded-3xl bg-card p-6 shadow-soft">
              <div className="flex gap-1 text-sunny">{Array.from({ length: 5 }).map((_, s) => <Star key={s} className="size-4 fill-current" />)}</div>
              <p className="mt-3 text-muted-foreground">{d.depoimento}</p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={d.foto.url}
                  alt={`Foto de ${d.nome}`}
                  className="size-10 shrink-0 rounded-full object-cover ring-2 ring-secondary"
                />
                <div className="text-sm"><p className="font-bold">{d.nome}</p><p className="text-muted-foreground">{d.perfil}</p></div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="duvidas" title="Perguntas frequentes">
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-4 shadow-soft sm:p-8">
          <Accordion type="single" collapsible>
            {faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display font-bold">{f.pergunta}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.resposta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Chamada final */}
      <section className="bg-gradient-sun px-4 py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Sua próxima atividade está a um clique de distância</h2>
          <p className="mt-4 opacity-90">Junte-se à Escolinha Digital e tenha um acervo pronto para tornar a rotina mais leve e o aprendizado mais inclusivo.</p>
          <Button asChild size="xl" variant="soft" className="mt-8"><a href={cta}>Quero a Escolinha Digital</a></Button>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border bg-background px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <p className="font-display text-lg font-extrabold">Escolinha Digital</p>
          <p className="text-sm text-muted-foreground">Aprender brincando, no ritmo de cada criança.</p>
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground"><span>Termos de uso</span><span>Política de privacidade</span><span>Contato</span></nav>
          <p className="max-w-xl text-xs text-muted-foreground">Material educativo de apoio. Não substitui acompanhamento profissional.</p>
          <p className="text-xs text-muted-foreground">© 2026 Escolinha Digital. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  subtitle,
  tone = "default",
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  tone?: "default" | "muted";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={tone === "muted" ? "bg-secondary/40 px-4 py-16" : "bg-background px-4 py-16"}>
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title text-center">{title}</h2>
        {subtitle ? <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">{subtitle}</p> : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
