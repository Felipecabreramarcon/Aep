"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const inputsHeaders = [
    {
      type: "text",
      placeholder: "Nome *",
      id: "nome",
    },
    {
      type: "text",
      placeholder: "Sobrenome *",
      id: "sobrenome",
    },
    {
      type: "text",
      placeholder: "Email *",
      id: "email",
    },
    {
      type: "text",
      placeholder: "Telefone *",
      id: "telefone",
    },
    {
      type: "text",
      placeholder: "Estado *",
      id: "estado",
    },
    {
      type: "select",
      placeholder: "Gênero *",
      id: "genero",
      options: ["Masculino", "Feminino", "Outro"],
    },
  ];
  const formatPhoneText = (value: string) => {
    const phoneNumber = value; // <-- nº de celular não formatado
    return phoneNumber
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const buttonHeaders = [
    { text: "Entrar com Facebook", img: "/group 47 (2).png" },
    { text: "Entrar com Google", img: "/icons8-google (1) 1.png" },
    { text: "Entrar com Twitter", img: "/Vector.png" },
    { text: "Entrar com Instagram", img: "/icons8-instagram 1.png" },
  ];

  interface ids {
    id: "nome" | "sobrenome" | "email" | "telefone" | "estado" | "genero";
  }

  const zodSchema = z.object({
    nome: z.string().min(1, "Preencha Corretamente"),
    sobrenome: z.string().min(1, "Preencha Corretamente"),
    email: z.string().min(1, "Preencha Corretamente").email("Email Inválido"),
    telefone: z.string().min(15, "Preencha Corretamente"),
    estado: z.string().min(1, "Preencha Corretamente"),
    genero: z.string().min(1, "Preencha Corretamente"),
  });
  const submit = () => {
    window.location.href =
      "https://doe.wwf.org.br/manifesto?utm_source=google&utm_medium=cpc&utm_campaign=2022_abr_olivasdigital_search_manifesto_doacao_cpc&utm_content=2022_abr_olivasdigital_search_manifesto_doacao_cpc_-_google_ambiente_-_search_doe&gad_source=1&gclid=Cj0KCQjw97SzBhDaARIsAFHXUWDjFYHemfZu4YtJIzrUjTRlnLzqwC9oYNhKXuuP4HEuSXmP5DzR2hsaApYwEALw_wcB ";
  };
  const {
    setValue,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof zodSchema>>({
    resolver: zodResolver(zodSchema),
  });

  console.log(watch());
  return (
    <div className="w-screen overflow-x-hidden gap-44 flex flex-col h-auto">
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
          <span className="cursor-pointer">Home</span>
          <span
            className="cursor-pointer"
            onClick={() => {
              window.location.href = "Checklist";
            }}
          >
            Checklist
          </span>
        </div>
      </div>
      <div className="h-auto gap-20 px-64 font-semibold text-xl py-44 w-full bg-[--bg] flex flex-col">
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
        <div className="flex flex-col gap-20 w-full justify-center items-center">
          {" "}
          <h1 className="text-3xl font-bold">Quantos Países Participam?</h1>
          <div className="bg-gradient-to-r pb-0.5  w-[65vw] from-[#F2F2F2] via-[#C4C4C4] to-[#F2F2F2]">
            <img
              src="/chart.png"
              className="bg-[--bg] w-full px-40 pb-10"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-20 w-full justify-center items-center">
          {" "}
          <div className="bg-gradient-to-r h-[45vh] pb-0.5 w-[65vw] items-center justify-center flex from-[#F2F2F2] via-[#C4C4C4] to-[#F2F2F2]">
            <img
              src="/Group 47 (1).png"
              className="bg-[--bg] w-full px-56 h-full pb-14 "
              alt=""
            />
          </div>
          <div className=" h-[125vh] flex w-screen px-20">
            <div className="w-2/3  h-full bg-gradient-to-b pr-0.5 from-[#F2F2F2] via-[#C4C4C4] to-[#F2F2F2] flex flex-col">
              <div className=" bg-[--bg] px-10 pb-40 w-full h-full gap-20 flex flex-col ">
                <div className="flex flex-col pt-6 gap-8">
                  {" "}
                  <span className="text-3xl text-[#2E653E] font-bold">
                    Seu apoio ajuda a salvar a Terra
                  </span>
                  <span className="text-[#757575] text-xl font-normal leading-loose">
                    Construir o nosso futuro é defender a vida do planeta para
                    as pessoas, com acesso à água, alimentação, saúde, educação
                    e tecnologia.
                  </span>
                </div>
                <div className=" bg-white shadow-[4px_4px_12px_3px_#C4C4C4] w-full h-[80%]  flex flex-col pt-4  rounded-[24px] px-20 ">
                  <div className="h-32 w-full bg-gradient-to-r pb-0.5  from-[#F2F2F2] via-[#c2c2c28c] to-[#F2F2F2] ">
                    <div className="w-full text-2xl text-[#424242] font-semibold h-full bg-white pt-14 ">
                      Dados pessoais
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit(submit)}
                    className="w-full h-auto grid px-4 gap-y-10 gap-4 pt-10 grid-cols-2"
                  >
                    {inputsHeaders.map((input, index) => {
                      if (
                        input.id === "telefone" ||
                        input.id === "email" ||
                        input.id === "nome" ||
                        input.id === "sobrenome" ||
                        input.id === "estado" ||
                        input.id === "genero"
                      ) {
                        if (input.id === "telefone")
                          return (
                            <div key={index} className="relative">
                              <input
                                {...register(input.id as any)}
                                className="h-12 w-full border-2 font-normal text-base  rounded-lg pl-4"
                                type={input.type}
                                onChange={(e) =>
                                  setValue(
                                    "telefone",
                                    formatPhoneText(e.target.value)
                                  )
                                }
                                placeholder={input.placeholder}
                                id={input.id}
                              />
                              {errors?.[input.id] && (
                                <span className="absolute text-sm font-normal  right-0 bottom-[-20px] text-red-600">
                                  {errors?.[input?.id]?.message}
                                </span>
                              )}
                            </div>
                          );
                        if (input.options) {
                          return (
                            <div key={index} className="relative h-12 w-full">
                              <select
                                {...register(input.id as any)}
                                className={`h-full w-full  font-normal pr-2  text-base border-2 rounded-lg pl-4`}
                                name={input.id}
                                id={input.id}
                              >
                                <option className="" value="">
                                  {input.placeholder}
                                </option>
                                {input.options.map((option) => {
                                  return (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  );
                                })}
                              </select>
                              {errors?.[input?.id] && (
                                <span className="absolute text-sm font-normal  right-0 bottom-[-20px] text-red-600">
                                  {errors?.[input?.id]?.message}
                                </span>
                              )}
                            </div>
                          );
                        }
                        if (!input.options) {
                          return (
                            <div key={index} className="relative">
                              <input
                                {...register(input.id as any)}
                                className="h-12 w-full border-2 font-normal text-base  rounded-lg pl-4"
                                type={input.type}
                                placeholder={input.placeholder}
                                id={input.id}
                              />
                              {errors?.[input?.id] && errors && (
                                <span className="absolute text-sm font-normal  right-0 bottom-[-20px] text-red-600">
                                  {errors?.[input.id]?.message}
                                </span>
                              )}
                            </div>
                          );
                        }
                      }
                    })}
                    <div className="col-span-full flex gap-2 px-1 items-center h-4 ">
                      <input type="checkbox" className="w-3 h-7" />
                      <label className=" text-sm font-normal text-gray-400">
                        Sim, gostaria de doar por mês
                      </label>
                    </div>
                    {buttonHeaders.map((button, index) => {
                      return (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                          }}
                          className="h-12 w-full hover:bg-gray-100 border-2 flex font-normal items-center px-6 gap-3 rounded-lg"
                        >
                          <img src={button.img} alt="" />
                          <span className="text-base ">{button.text}</span>
                        </button>
                      );
                    })}
                    <div className="col-span-full flex justify-center items-center w-full">
                      <button className="w-3/5 h-12 bg-[#BDBDBD] rounded-md">
                        Doe aqui!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/3 px-10 pt-44 ">
              <h1 className="text-2xl mb-14 text-center font-semibold">
                Sua participação é importante!
              </h1>
              <img className="w-full" src="CART.png" />
              <img src="cart (2).png" className="w-full" alt="" />
              <img src="cart (3).png" className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
