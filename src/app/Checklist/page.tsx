"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const defaultChecklist = [
  {
    title: "Reciclar",
    status: "pendente",
    data: "12/06/2024",
    id: 1,
    editing: false,
  },
  {
    title: "Ir ao trabalho de bicicleta",
    status: "completa",
    data: "18/06/2024",
    id: 2,
    editing: false,
  },
  {
    title: "Economizar água",
    status: "pendente",
    data: "25/06/2024",
    id: 3,
    editing: false,
  },
  {
    editing: false,
    title: "Reciclar",
    status: "pendente",
    data: "12/06/2024",
    id: 5,
  },
  {
    editing: false,
    title: "Ir ao trabalho de bicicleta",
    status: "completa",
    data: "18/06/2024",
    id: 10,
  },
  {
    editing: false,
    title: "Economizar água",
    status: "pendente",
    data: "25/06/2024",
    id: 6,
  },
  {
    editing: false,
    title: "Reciclar",
    status: "pendente",
    data: "12/06/2024",
    id: 9,
  },
  {
    editing: false,
    title: "Ir ao trabalho de bicicleta",
    status: "completa",
    data: "18/06/2024",
    id: 7,
  },
  {
    editing: false,
    title: "Economizar água",
    status: "pendente",
    data: "25/06/2024",
    id: 8,
  },
];

const zodSchema = z.object({
  title: z.string().min(1, "Preencha Corretamente"),
  data: z.string().min(1, "Preencha Corretamente"),
});

export default function Page() {
  const [checklist, setChecklist] = useState<any>(defaultChecklist);
  const [actualCheckList, setActualCheckList] = useState<any>(defaultChecklist);
  const [filter, setFilter] = useState<string>("todos");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof zodSchema>>({
    resolver: zodResolver(zodSchema),
  });

  useEffect(() => {
    setActualCheckList(checklist);

    if (filter == "todos") {
      setActualCheckList(checklist);
    } else {
      setActualCheckList(
        checklist.filter((elem: any) => elem.status === filter)
      );
    }
  }, [filter, checklist]);

  const handleComplete = (id: number) => {
    setChecklist((prev: any) => {
      const newData = prev.map((elem: any) => {
        if (elem.id === id && elem.status === "pendente") {
          return { ...elem, status: "completa" };
        } else if (elem.id === id && elem.status === "completa") {
          return { ...elem, status: "pendente" };
        } else return elem;
      });

      console.log(newData);
      return newData;
    });
  };

  const setEditing = (id: number) => {
    setChecklist((prev: any) => {
      const newData = prev.map((elem: any) => {
        if (elem.id === id) {
          return { ...elem, editing: !elem.editing };
        } else {
          return elem;
        }
      });
      return newData;
    });
  };

  const onChangeInput = (e: any, id: number, field: string) => {
    setChecklist((prev: any) => {
      const newData = prev.map((elem: any) => {
        if (elem.id === id) {
          return { ...elem, [field]: e.target.value };
        } else {
          return elem;
        }
      });
      return newData;
    });
  };

  const handleDelete = (id: number) => {
    setChecklist((prev: any) => {
      return prev.filter((elem: any) => elem.id !== id);
    });
  };

  console.log(checklist);
  console.log(watch());

  const handleAddNewTask = (data: any) => {
    setChecklist((prev: any) => {
      return [
        {
          title: data.title,
          status: "pendente",
          data: data.data,
          id: Math.floor(Math.random() * 10000),
          editing: false,
        },
        ...prev,
      ];
    });
    reset();
  };

  const filterElem = (
    <div className="flex w-full pb-0.5 h-auto bg-gradient-to-r from-[#F2F2F2] via-[#c2c2c28c] to-[#F2F2F2]">
      <div className="flex w-full px-10 h-16 pb-4 text-xl bg-[--bg] items-center gap-2  justify-between">
        <button
          onClick={() => setFilter("todos")}
          className={`w-20 h-11 ${
            filter == "todos" && "bg-gray-300 rounded-xl"
          } text-[#0571FF]`}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter("pendente")}
          className={`w-32 h-11 px-1 ${
            filter == "pendente" && "bg-gray-300 rounded-xl"
          }`}
        >
          Pendentes
        </button>
        <button
          onClick={() => setFilter("completa")}
          className={`${
            filter == "completa" && "bg-gray-300 rounded-xl"
          } w-32 h-11 px-1`}
        >
          Completas
        </button>
        <button
          onClick={() => {
            setChecklist([]);
          }}
          className="w-40 h-11 rounded-md bg-[#0571FF] text-white"
        >
          Limpar tudo
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-screen items-center gap-10 bg-[url('/sdad.jpeg')] bg-cover h-screen ">
      <div className=" flex justify-center  w-full">
        <div className="w-1/4 px-36 font-semibold text-white text-xl items-center rounded-b-3xl h-24 bg-black/50 flex justify-between">
          <span
            onClick={() => {
              window.location.href = "/";
            }}
            className="cursor-pointer"
          >
            Home
          </span>
          <span className="cursor-pointer">Checklist</span>
        </div>
      </div>
      <div className="flex  w-2/3 rounded-[40px] h-[80vh] p-5 shadow-[4px_4px_12px_3px_#C4C4C4] bg-[--bg]">
        <div className="w-1/2 bg-gradient-to-b pr-0.5 from-[#F2F2F2] via-[#c2c2c28c] to-[#F2F2F2] h-full">
          <div className="w-full h-full bg-[--bg] px-2 gap-10 flex flex-col">
            {filterElem}
            <div className="w-full h-full overflow-y-auto ">
              <div className="w-full px-5 h-auto pb-10  flex gap-5 flex-col">
                {actualCheckList?.map((item: any, index: number) => (
                  <div
                    className="w-full flex gap-4 items-center px-6 h-24 rounded-2xl bg-white shadow-[0px_0px_9.36px_0_#dbdbdb]"
                    key={index}
                  >
                    <button
                      onClick={() => handleComplete(item.id)}
                      className={`w-6 rounded-full ${
                        item.status === "completa" && "bg-[#0571FF]"
                      } h-6 border-2 border-[#0571FF] `}
                    ></button>
                    <div className="flex w-[70%] px-4 flex-col ">
                      {!item.editing ? (
                        <>
                          <span className="text-lg font-semibold ">
                            {item.title}
                          </span>
                          <span className="text-base font-semibold ">
                            meta de conclusão: {item.data}
                          </span>{" "}
                        </>
                      ) : (
                        <>
                          <div className="flex  ">
                            <span className="w-16 font-semibold  border-gray-300 px-2 rounded-md rounded-r-none border-2 h-8">
                              Titulo
                            </span>
                            <input
                              defaultValue={item.title}
                              onChange={(e) =>
                                onChangeInput(e, item.id, "title")
                              }
                              type="text"
                              className="w-2/3 h-8 border-2 border-l-0 rounded-l-none focus:outline-none px-2 mb-2 border-gray-300 rounded-md"
                            />
                          </div>
                          <div className="flex ">
                            <span className="w-16 font-semibold border-gray-300 px-2 rounded-md rounded-r-none h-8 border-2">
                              Meta
                            </span>
                            <input
                              defaultValue={item.data}
                              type="text"
                              className="w-2/3 h-8 border-2  border-l-0 rounded-l-none focus:outline-none px-2 border-gray-300 rounded-md"
                            />
                          </div>
                        </>
                      )}
                    </div>
                    <div className=" w-[20%] justify-center flex  gap-4">
                      <span
                        className="cursor-pointer"
                        onClick={() => setEditing(item.id)}
                      >
                        {" "}
                        {!item.editing ? <Pencil /> : <Check />}
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      >
                        {" "}
                        <Trash2 />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(handleAddNewTask)}
          className="w-full h-full px-2 pl-5 flex flex-col items-center justify-center"
        >
          <div className="w-full h-2/4 bg-white flex items-center flex-col border-2 rounded-md border-[#d1d5db] ">
            <div className="h-14  w-[90%] font-semibold text-2xl justify-center flex items-center border-b-2">
              Adicionar Nova Tarefa
            </div>
            <div className="flex flex-col gap-5 justify-center  w-full px-10 h-full">
              <div className="flex relative flex-col gap-1">
                <label className="text-xl font-medium">Titulo</label>
                <input
                  {...register("title")}
                  placeholder="Insira o titulo..."
                  className="w-full h-12 border-2   focus:outline-none px-4 border-gray-300 rounded-md"
                />{" "}
                {errors.title && (
                  <span className="absolute  right-0 top-1 text-red-600">
                    {errors.title.message}
                  </span>
                )}
              </div>{" "}
              <div className="flex relative flex-col gap-1">
                <label className="text-xl font-medium">Meta de conclusão</label>
                <input
                  {...register("data")}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  max={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() + 1)
                    )
                      .toISOString()
                      .split("T")[0]
                  }
                  placeholder="Insira o titulo..."
                  className="w-full h-12 border-2   focus:outline-none px-4 border-gray-300 rounded-md"
                />
                {errors.data && (
                  <span className="absolute right-0 top-1 text-red-600">
                    {errors.data.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full h-14 bg-[#0571FF] rounded-md text-xl text-white font-semibold"
              >
                Adicionar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
