const alunos = [
  {
    nome: "ALYCIA CRIS SILVA DE OLIVEIRA",
    link: "https://alyciacso.github.io/calculadora/",
  },
  {
    nome: "ANA CLARA DE CAMPOS AMARAL",
    link: "https://aninha1703.github.io/calculadora-juros/",
  },
  {
    nome: "ANA LUIZA PEREIRA DE SOUZA",
    link: "https://analsouza12-a11y.github.io/calculadora-juros/",
  },
  {
    nome: "ANDREY ZULIANI SOARES",
    link: "https://andreysoares221209.github.io/CalculadoraJuros/",
  },
  {    nome: "BRUNO LOPES TURATI",
    link: "https://brunoturatisenai-tech.github.io/calc/",
  },
  {
    nome: "ENRICO BORRAGINE TREVIZAN",
    link: "https://ribtrevizan.github.io/calculadora-juros/",
  },
  {
    nome: "ENZO TIRABASSI GOMES",
    link: "https://tirabassienzo.github.io/calculadora-juros/",
  },
  {
    nome: "FABRÍCIO JOSÉ DAROS AMARAL",
    link: "#",
  },
  {
    nome: "FELIPE GABRIEL CAMARGO OLIVEIRA",
    link: "https://felipegoliveira11-beep.github.io/calculadora-de-juros/",
  },
  {
    nome: "GUILHERME LEVY BASTOS BARRETO",
    link: "https://levyathan-007-git.github.io/Calculadora-de-Juros/",
  },
  {
    nome: "HELOISA SANTOS ALBINO",
    link: "https://h3l0is4alb1no.github.io/Calculadora-de-Juros/",
  },
  {
    nome: "ISABELLY COELHO DE OLIVEIRA",
    link: "https://isaacoelhoo.github.io/calculadora-juros/",
  },
  {
    nome: "JOÃO MIGUEL DE SOUZA TAVARES",
    link: "https://joaosenai009-tech.github.io/Calculadora-de-juros/",
  },
  {
    nome: "JOÃO PEDRO ARIOZI",
    link: "https://joaoariozi.github.io/calculadora-juros/",
  },
  {
    nome: "JOÃO PEDRO DIAS OLIVEIRA",
    link: "https://joaodias2009.github.io/calculadora-juros/",
  },
  {
    nome: "JULIA LUVIZOTTO GABRIEL",
    link: "https://juu2810.github.io/calculadora/",
  },
  {
    nome: "LIVIA SCUDELER PONTES",
    link: "https://liviascudeler.github.io/calculadora-juros/",
  },
  {
    nome: "LUCAS DE SOUSA BARROS",
    link: "https://sousabarroslucas7-sketch.github.io/calculadora-juros/",
  },
  {
    nome: "LUIZ ANTONIO SILVEIRA",
    link: "https://luizs-silveira.github.io/Calculadora-de-Juros/",
  },
  {
    nome: "MARIA LUIZA PONTES MARTINS",
    link: "https://marialumartins.github.io/calculadora-juros/",
  },
  {
    nome: "MARIA VITÓRIA DO LAGO BERNARDES CALDEIRA",
    link: "https://caldzinha.github.io/calculadora/",
  },
  {
    nome: "MATHEUS AUGUSTO PRADO",
    link: "#",
  },
  {
    nome: "MATHEUS BEZERRA MACIEL",
    link: "https://matheusbmaciel.github.io/Calculadora/",
  },
  {
    nome: "MATHEUS SCHMITT",
    link: "https://schmitt007.github.io/CalculadoradeJuros/",
  },
  {
    nome: "MIGUEL MARTINS DOS SANTOS",
    link: "https://miguelmsantos2005.github.io/Calculadora-de-Juros/",
  },
  {
    nome: "MIGUEL VESPA BATISTA",
    link: "https://miguelvespa400.github.io/Calculadora/",
  },
  {
    nome: "NÍCOLLAS PERSECHINO DE MORAIS",
    link: "https://nicollasmorais963-bit.github.io/Calculadora-de-Juros/",
  },
  {
    nome: "PEDRO HENRIQUE FUZATTI MODANEZI",
    link: "https://pedrofzttimodanezi.github.io/calculadora/",
  },
  {
    nome: "PEDRO RICARDO JANUÁRIO LOPES",
    link: "https://pjanuario10.github.io/calculadora-juros/",
  },
  {
    nome: "PIETRO TIRABASSI GOMES",
    link: "https://pietrotirabassigomes.github.io/calculadoraJC/",
  },
  {
    nome: "PIETRO TREVISANI BARBOSA",
    link: "#",
  },
  {
    nome: "VITOR EMANUEL LUVIZOTTO KELLER",
    link: "#",
  },
];

const listaAlunos = document.getElementById("listaAlunos");
const totalProjetos = document.getElementById("totalProjetos");
const pesquisa = document.getElementById("pesquisa");

alunos.sort((a, b) => a.nome.localeCompare(b.nome));

totalProjetos.textContent = alunos.length;

function gerarCards(lista) {
  listaAlunos.innerHTML = "";

  lista.forEach((aluno) => {
    listaAlunos.innerHTML += `
            <div class="card">

                <h2>${aluno.nome}</h2>

                <a
                    href="${aluno.link}"
                    target="_blank"
                >
                    Abrir Projeto
                </a>

            </div>
        `;
  });
}

gerarCards(alunos);

pesquisa.addEventListener("input", () => {
  const texto = pesquisa.value.toLowerCase();

  const filtrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(texto),
  );

  gerarCards(filtrados);
});
