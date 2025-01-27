import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { buscar, deletar } from "../../../services/Service"; 
import Categoria from "../../../models/categoria/Categoria"; 

function DeletarCategoria() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria | null>(null);

  useEffect(() => {
    if (id) {
      buscar(`/categorias/${id}`, setCategoria).catch((error) => {
        console.error("Erro ao buscar categoria:", error);
      });
    }
  }, [id]);

  async function handleDelete() {
    if (id && categoria) {
      try {
        await deletar(`/categorias/${id}`);
        alert("Categoria deletada com sucesso!");
        navigate("/categorias"); 
      } catch (error) {
        alert("Erro ao deletar a categoria.");
      }
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center pt-28  ">
      {categoria ? (
        <div className="w-1/2 bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-semibold mb-4">Deletar Categoria</h1>
          <p className="mb-4">Tem certeza que deseja deletar a categoria "{categoria.nome}"?</p>
          <div className="flex justify-end gap-4">
            <button
              className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-700 cursor-pointer"
              onClick={handleDelete}
            >
              Deletar
            </button>
            <button
              className="bg-gray-500 text-white py-2 px-6 rounded hover:bg-gray-700 cursor-pointer"
              onClick={() => navigate("/categorias")}
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <p>Carregando categoria...</p>
      )}
    </div>
  );
}

export default DeletarCategoria;