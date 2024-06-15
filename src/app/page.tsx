import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen gap-44 flex flex-col h-auto">
      <img
        className=" w-full -z-10 absolute "
        src="/6eccb606-d6a0-4f81-b735-2a4fc7b2c2f7.jpg"
      />
      <div className="w-[40%] ml-64 flex items-center h-[60vh]">
        {" "}
        <span className="text-7xl leading-tight font-semibold text-white ">
          A terra pode ser salva?
        </span>
      </div>

      <div className="fixed h-28 top-0  flex items-center justify-center w-full">
        <div className="h-full text-white text-2xl font-semibold gap-28 relative rounded-b-3xl justify-center items-center w-[60%] bg-[#0000009d] flex">
          <img
            className="w-20 ml-5 left-0 absolute h-20"
            src="https://s3-alpha-sig.figma.com/img/6a3e/1c62/a38883aa42fef6e43d3aa4ff620e268e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kZ4bjnLCcaZQXoG-vEMxTigR0wYyfyZiY9Ic35NoTFuxtmNdiBeSmu2ZFWfj1uVoXKETneRmab1qpfi0BBcl97ODiO5WQpZcg092WnEbKFudPnoZs7k74H6FQM4VWMa3lPcwHp4xfcdQc29zxdDHX4jNdKWFeZwnNTBw8Dno-33i3kQnaEYmjFaS7lI5Ds57lEhhL4zUba~FC9Rh7AIEkb7zNcrctUGUjxXXqGUIWZlg~XuT0OOA4nP0JjU1N-TJjz3-rF2Q6Ubm-Wn9FYZhAIORfi1cm6V7g5o7NWkSwnGLrjbC5fdD61J9V4~2bWIYZu697DvAwMWWFNKKZFqESQ__"
            alt=""
          />
          <span>ESG</span>
          <span>Sobre nós</span>
          <span>Checklist</span>
        </div>
      </div>
      <div className="h-auto gap-20 px-64 font-semibold text-xl py-44 w-full bg-white flex flex-col">
        <span>
          O aquecimento global, causado principalmente pela emissão de gases de
          efeito estufa provenientes de atividades humanas, representa uma
          ameaça significativa ao nosso planeta. O aumento das temperaturas
          médias tem efeitos devastadores, como o derretimento das calotas
          polares, elevação do nível do mar e aumento na frequência de eventos
          climáticos extremos, como furacões e secas. Além disso, a
          biodiversidade está em risco, com muitas espécies incapazes de se
          adaptar rapidamente às mudanças climáticas, o que afeta diretamente a
          agricultura e a segurança alimentar global. A saúde humana também
          sofre, com o aumento de doenças relacionadas à poluição e ao calor
          extremo.
        </span>
        <span>
          Educar a população sobre os impactos do aquecimento global e promover
          um estilo de vida sustentável são igualmente importantes. Campanhas de
          conscientização e a inclusão do tema nos currículos escolares podem
          mobilizar mais pessoas. Além disso, a implementação de políticas
          eficazes e a cooperação internacional são cruciais para cumprir
          acordos climáticos, como o Acordo de Paris.
        </span>
        <span className="mb-14">
          A luta contra o aquecimento global exige um esforço conjunto e
          compromisso de todos. Com ação imediata e coordenada, podemos reverter
          essa trajetória e garantir um futuro mais sustentável e saudável para
          as próximas gerações. O futuro do nosso planeta depende das decisões
          que tomamos hoje.
        </span>
        <div className="flex flex-col gap-20 justify-center items-center">
          {" "}
          <h1 className="text-3xl font-bold">Quantos Países Participam?</h1>
          <div className="bg-gradient-to-r pb-0.5 from-[#F2F2F2] via-[#C4C4C4] to-[#F2F2F2]">
            <img src="/chart.png" className="bg-white pb-10" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-20 justify-center items-center">
          {" "}
          <h1 className="text-3xl font-bold">Quantos Países Participam?</h1>
          <div className="bg-gradient-to-r pb-0.5 from-[#F2F2F2] via-[#C4C4C4] to-[#F2F2F2]">
            <img src="/Group 47 (1).png" className="bg-white pb-10" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
