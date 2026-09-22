import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, ShieldCheck, Lock, Sparkles, Star, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-escolinha.jpg.asset.json";
import ofertaImg from "@/assets/oferta-mockup.jpg";
import atividadesImg from "@/assets/atividades-preview.jpg";
import bonusImg from "@/assets/bonus-kit.jpg";

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
  }),
  component: Index,
});

const CHECKOUT_URL = "";
const cta = CHECKOUT_URL || "#oferta";

const menu = [
  { rotulo: "Para quem é", ancora: "#para-quem-e" },
  { rotulo: "Como funciona", ancora: "#como-funciona" },
  { rotulo: "Atividades", ancora: "#atividades" },
  { rotulo: "Bônus", ancora: "#bonus" },
  { rotulo: "Dúvidas", ancora: "#duvidas" },
];

const publicos = [
  {
    publico: "Professores e professoras",
    icone: "🍎",
    texto:
      "Chega de passar a noite adaptando material. Tenha atividades prontas para planejar a semana em minutos.",
  },
  {
    publico: "Pais e responsáveis",
    icone: "🏡",
    texto:
      "Uma rotina leve de estímulo em casa, com atividades curtas e fáceis de aplicar, sem precisar ser especialista.",
  },
  {
    publico: "Terapeutas e profissionais de apoio",
    icone: "🧠",
    texto:
      "Um acervo variado para complementar sessões e sugerir tarefas para a família continuar em casa.",
  },
];

const passos = [
  {
    numero: 1,
    titulo: "Entre na plataforma",
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

const categorias = [
  {
    nome: "Atenção e foco",
    icone: "🎯",
    descricao: "Atividades que ajudam a manter o interesse e a concentração.",
  },
  {
    nome: "Linguagem e comunicação",
    icone: "💬",
    descricao: "Palavras, figuras e situações para ampliar a expressão.",
  },
  {
    nome: "Socialização e emoções",
    icone: "😊",
    descricao: "Reconhecer sentimentos e praticar a convivência.",
  },
  {
    nome: "Cognição e raciocínio",
    icone: "🧩",
    descricao: "Quebra-cabeças, sequências e lógica de forma lúdica.",
  },
  {
    nome: "Coordenação motora",
    icone: "✂️",
    descricao: "Traçar, recortar, colar e pintar com propósito.",
  },
  {
    nome: "Alfabetização e números",
    icone: "🔤",
    descricao: "Vogais, letras, leitura, escrita e primeiros conceitos matemáticos.",
  },
  {
    nome: "Cores e formas",
    icone: "🎨",
    descricao: "Identificação e associação visual de cores e figuras geométricas.",
  },
  {
    nome: "Atividades sensoriais",
    icone: "🌈",
    descricao: "Propostas para explorar texturas e estímulos de forma leve.",
  },
];

const galeria = [
  "Números e contagem",
  "Alfabetização",
  "Coordenação motora",
  "Raciocínio lógico",
  "Vogais",
  "Formas geométricas",
  "Cores",
  "Recorte e colagem",
  "Sensorial",
  "Leitura",
  "Escrita",
  "Emoções",
  "Quebra-cabeça",
];

const rotina = [
  {
    momento: "Antes da aula ou da terapia",
    texto: "Escolha 1 ou 2 atividades na plataforma e imprima em poucos minutos.",
  },
  {
    momento: "Durante a atividade",
    texto: "A criança usa o apoio visual e ganha autonomia, enquanto você acompanha.",
  },
  {
    momento: "Depois",
    texto: "Guarde os trabalhos, celebre a conquista e planeje o próximo passo.",
  },
  {
    momento: "Em casa",
    texto: "Repita ou reforce com uma atividade curta, criando uma rotina tranquila.",
  },
];

const inclusos = [
  {
    titulo: "+1.900 Atividades para Ensinar, Estimular e Incluir Crianças Autistas",
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
  {
    titulo: "Comunidade de professores",
    descricao: "Grupo fechado para trocar experiências e compartilhar atividades adaptadas.",
  },
  {
    titulo: "Suporte",
    descricao: "Atendimento para tirar dúvidas de acesso. [Informe o canal e o prazo reais]",
  },
];

const bonusList = [
  {
    numero: 1,
    titulo: "Mega Pacote com +1000 Moldes de EVA",
    descricao: "Moldes prontos para criar materiais, painéis e recursos visuais.",
  },
  {
    numero: 2,
    titulo: "Kit de Medalhas de Reconhecimento",
    descricao: "Medalhas para celebrar cada conquista e motivar a criança.",
  },
  {
    numero: 3,
    titulo: "+10 Jogos Inclusivos",
    descricao: "Jogos para aprender brincando, em grupo ou individualmente.",
  },
  {
    numero: 4,
    titulo: "Guia de Adaptação de Atividades",
    descricao: "Passo a passo para adaptar outras atividades às necessidades de cada aluno.",
  },
];

const itensOferta = [
  "+1.900 Atividades para Ensinar, Estimular e Incluir Crianças Autistas",
  "Acesso imediato e vitalício à plataforma",
  "Comunidade exclusiva de professores",
  "Suporte para dúvidas",
  "Bônus 1: Mega Pacote com +1000 Moldes de EVA",
  "Bônus 2: Kit de Medalhas de Reconhecimento",
  "Bônus 3: +10 Jogos Inclusivos",
  "Bônus 4: Guia de Adaptação de Atividades",
  "+ 8 bônus surpresa",
];

const faq = [
  {
    pergunta: "Como vou receber o material?",
    resposta:
      "Logo após a confirmação do pagamento, você recebe por e-mail o acesso à plataforma, onde todo o material fica disponível.",
  },
  {
    pergunta: "Quantas atividades o kit tem?",
    resposta: "São mais de 1.900 atividades organizadas por categorias, além dos bônus.",
  },
  {
    pergunta: "Posso usar em sala de aula e também em casa?",
    resposta:
      "Sim. O material é digital e em PDF, então você pode imprimir e usar em casa, na escola ou no consultório.",
  },
  {
    pergunta: "O material segue a BNCC?",
    resposta:
      "[Responda de acordo com a realidade do seu material. Só afirme alinhamento à BNCC se ele realmente existir.]",
  },
  {
    pergunta: "O acesso é mensal ou vitalício?",
    resposta: "O acesso é vitalício, com pagamento único. Não há mensalidade.",
  },
  {
    pergunta: "E se eu não gostar? Posso cancelar?",
    resposta:
      "Sim. Você tem 7 dias de garantia. Se o material não for para você, basta solicitar o reembolso dentro desse prazo.",
  },
  {
    pergunta: "As atividades substituem o acompanhamento profissional?",
    resposta:
      "Não. A Escolinha Digital é um material de apoio educativo e não substitui avaliação, terapia ou acompanhamento de profissionais de saúde e educação.",
  },
];

const depoimentos = [
  { nome: "[Nome real]", perfil: "[Professora / Mãe / Terapeuta]" },
  { nome: "[Nome real]", perfil: "[Professora / Mãe / Terapeuta]" },
  { nome: "[Nome real]", perfil: "[Professora / Mãe / Terapeuta]" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Barra de topo */}
      <div className="bg-gradient-sun px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
        Condição especial de lançamento na Escolinha Digital
      </div>

      {/* Cabeçalho */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-primary text-lg text-primary-foreground">
              ✏️
            </span>
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

      {/* Hero */}
      <section id="top" className="bg-gradient-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sunny px-4 py-1.5 text-sm font-bold text-sunny-foreground">
              <Sparkles className="size-4" /> Feito com apoio de especialistas
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              +1.900 Atividades para Ensinar, Estimular e Incluir Crianças Autistas
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              <strong className="text-foreground">Prontas para imprimir e simples de aplicar</strong> no
              mesmo dia. Uma biblioteca digital organizada por habilidades, com atividades visuais e
              adaptadas para crianças com autismo (TEA).
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Atividades lúdicas com apoio visual",
                "Arquivos em PDF prontos para imprimir",
                "Acesso vitalício e organizado por categorias",
                "Reduza o tempo de tela com atividades que engajam de verdade",
              ].map((p) => (
                <li key={p} className="flex items-center gap-3 font-medium">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-4" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3 backdrop-blur-sm">
              <div className="flex -space-x-1.5">
                {[1, 2, 3, 4].map((n) => (
                  <span
                    key={n}
                    className="grid size-8 place-items-center rounded-full border-2 border-background bg-sunny text-[10px] font-bold text-sunny-foreground"
                  >
                    {String.fromCharCode(64 + n)}
                  </span>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-sunny">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">[Número real]</span> pais já usam a Escolinha
                </span>
              </div>
            </div>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                <a href="#oferta">Quero garantir meu acesso</a>
              </Button>
              <Button asChild variant="outline" size="xl" className="w-full sm:w-auto rounded-full border-primary/30 text-primary hover:bg-primary/5 hover:text-primary">
                <a href="#atividades" className="gap-2">
                  ver as atividades <ChevronDown className="size-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={heroImg.url}
                alt="Professora e criança usando atividades impressas da Escolinha Digital"
                width={1200}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <Section id="para-quem-e" title="Feito para quem cuida, ensina e acompanha">
        <div className="grid gap-6 md:grid-cols-3">
          {publicos.map((c) => (
            <div key={c.publico} className="rounded-3xl bg-card p-7 shadow-soft">
              <div className="grid size-12 place-items-center rounded-2xl bg-secondary text-2xl">
                {c.icone}
              </div>
              <h3 className="mt-4 text-lg font-bold">{c.publico}</h3>
              <p className="mt-2 text-muted-foreground">{c.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Como funciona */}
      <Section
        id="como-funciona"
        title="Do acesso à primeira atividade em 3 passos"
        tone="muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {passos.map((p) => (
            <div key={p.numero} className="relative rounded-3xl bg-card p-7 shadow-soft">
              <span className="grid size-11 place-items-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground">
                {p.numero}
              </span>
              <h3 className="mt-4 text-lg font-bold">{p.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{p.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Áreas de desenvolvimento */}
      <Section
        title="Atividades organizadas por área de desenvolvimento"
        subtitle="Cada categoria reúne exercícios com linguagem simples e estímulos visuais claros."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((c) => (
            <div
              key={c.nome}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft"
            >
              <div className="text-3xl">{c.icone}</div>
              <h3 className="mt-3 font-bold">{c.nome}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.descricao}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Galeria */}
      <Section id="atividades" title="Espie algumas páginas do material" tone="muted">
        <div className="overflow-hidden rounded-3xl shadow-card">
          <img
            src={atividadesImg}
            alt="Páginas de atividades infantis impressas"
            loading="lazy"
            width={1200}
            height={800}
            className="w-full object-cover"
          />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {galeria.map((g) => (
            <span
              key={g}
              className="rounded-full bg-card px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-soft"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-muted-foreground">
          E essas são só algumas das mais de 1.900 atividades da Escolinha Digital.
        </p>
      </Section>

      {/* Um dia com a escolinha */}
      <Section
        title="Como a Escolinha Digital cabe na sua rotina"
        subtitle="Uma sugestão de uso simples, no ritmo de cada criança."
      >
        <ol className="relative mx-auto max-w-3xl space-y-6 border-l-2 border-dashed border-primary/30 pl-8">
          {rotina.map((r) => (
            <li key={r.momento} className="relative">
              <span className="absolute -left-[41px] top-1 size-4 rounded-full bg-accent ring-4 ring-background" />
              <h3 className="font-bold">{r.momento}</h3>
              <p className="text-muted-foreground">{r.texto}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* O que está incluso */}
      <Section id="o-que-esta-incluso" title="Tudo o que você recebe" tone="muted">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {inclusos.map((i) => (
            <div key={i.titulo} className="rounded-3xl bg-card p-6 shadow-soft">
              <span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground">
                <Check className="size-5" />
              </span>
              <h3 className="mt-4 font-bold">{i.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.descricao}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Bônus */}
      <Section
        id="bonus"
        title="Bônus que acompanham a Escolinha Digital"
        subtitle="Recursos extras para deixar suas aulas mais atrativas, dinâmicas e inclusivas."
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-card">
            <img
              src={bonusImg}
              alt="Moldes de EVA, medalhas e jogos inclusivos"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            {bonusList.map((b) => (
              <div key={b.numero} className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sunny font-display font-extrabold text-sunny-foreground">
                  {b.numero}
                </span>
                <div>
                  <h3 className="font-bold">{b.titulo}</h3>
                  <p className="text-sm text-muted-foreground">{b.descricao}</p>
                  <p className="mt-1 text-sm font-semibold text-primary">[R$ valor real]</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border-2 border-dashed border-primary/40 p-5 text-center">
              <h3 className="font-display font-extrabold">+ 8 bônus surpresa</h3>
              <p className="text-sm text-muted-foreground">
                Liberados somente após a confirmação da compra.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Oferta */}
      <Section
        id="oferta"
        title="Leve a Escolinha Digital para a sua rotina"
        subtitle="Pagamento único, sem mensalidade."
        tone="muted"
      >
        <div className="mx-auto grid max-w-4xl gap-0 overflow-hidden rounded-3xl bg-card shadow-card md:grid-cols-2">
          <img
            src={ofertaImg}
            alt="Kit Escolinha Digital Completo"
            loading="lazy"
            width={1200}
            height={912}
            className="h-full w-full object-cover"
          />
          <div className="p-7">
            <h3 className="font-display text-xl font-extrabold">Kit Escolinha Digital Completo</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {itensOferta.map((i) => (
                <li key={i} className="flex gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground line-through">R$ 97,00</p>
              <p className="font-display text-4xl font-extrabold text-primary">R$ 19,90</p>
              <p className="text-sm text-muted-foreground">ou 4x de R$ 5,77</p>
            </div>
            <Button asChild variant="cta" size="xl" className="mt-6 w-full">
              <a href={cta}>Quero a Escolinha Digital</a>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Pagamento único. Acesso imediato e vitalício.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-1">
                <Lock className="size-3.5" /> Compra segura
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-3.5" /> Privacidade protegida
              </span>
              <span className="flex items-center gap-1">
                <Star className="size-3.5" /> Garantia de 7 dias
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Garantia */}
      <Section title="Garantia incondicional de 7 dias">
        <div className="mx-auto max-w-2xl rounded-3xl bg-card p-8 text-center shadow-soft">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-accent-foreground">
            <ShieldCheck className="size-8" />
          </span>
          <p className="mt-4 text-muted-foreground">
            Você pode testar a Escolinha Digital com tranquilidade. Se em até 7 dias sentir que o
            material não é para você, devolvemos o valor pago.
          </p>
        </div>
      </Section>

      {/* Depoimentos */}
      <Section title="O que dizem quem já usa" tone="muted">
        <div className="grid gap-5 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <div key={i} className="rounded-3xl bg-card p-6 shadow-soft">
              <div className="flex gap-1 text-sunny">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-muted-foreground">[Depoimento real, com autorização]</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-secondary font-bold text-secondary-foreground">
                  ?
                </span>
                <div className="text-sm">
                  <p className="font-bold">{d.nome}</p>
                  <p className="text-muted-foreground">{d.perfil}</p>
                </div>
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
                <AccordionTrigger className="text-left font-display font-bold">
                  {f.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.resposta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Chamada final */}
      <section className="bg-gradient-sun px-4 py-16 text-center text-primary-foreground">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Sua próxima atividade está a um clique de distância
          </h2>
          <p className="mt-4 opacity-90">
            Junte-se à Escolinha Digital e tenha um acervo pronto para tornar a rotina mais leve e o
            aprendizado mais inclusivo.
          </p>
          <Button asChild size="xl" variant="soft" className="mt-8">
            <a href={cta}>Quero a Escolinha Digital</a>
          </Button>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border bg-background px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <p className="font-display text-lg font-extrabold">Escolinha Digital</p>
          <p className="text-sm text-muted-foreground">
            Aprender brincando, no ritmo de cada criança.
          </p>
          <nav className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
            <span>Termos de uso</span>
            <span>Política de privacidade</span>
            <span>Contato</span>
          </nav>
          <p className="max-w-xl text-xs text-muted-foreground">
            Material educativo de apoio. Não substitui acompanhamento profissional.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 Escolinha Digital. Todos os direitos reservados.
          </p>
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
    <section
      id={id}
      className={tone === "muted" ? "bg-secondary/40 px-4 py-16" : "bg-background px-4 py-16"}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title text-center">{title}</h2>
        {subtitle ? (
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">{subtitle}</p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
