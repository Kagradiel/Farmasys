import { ChangeEvent, useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Produto from "../../../models/produto/Produto";
import Categoria from "../../../models/categoria/Categoria";

const FormProdutos = () => {
  const navigate = useNavigate();

  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Erro ao buscar o produto.");
      }
    }
  }

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Erro ao buscar categorias.");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
    buscarCategorias();
  }, [id]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
  
    // Validações
    if (!produto.nome || !produto.preco || !produto.categoria) {
      alert("Preencha todos os campos");
      setIsLoading(false);
      return;
    }
  
    try {
      if (id !== undefined) {
        await atualizar(`/produtos`, produto, setProduto);
        alert("Produto atualizado com sucesso!");
      } else {
        await cadastrar("/produtos", produto, setProduto);
        alert("Produto cadastrado com sucesso!");
      }
  
      setIsLoading(false);
      retornar();
    } catch (error: any) {
      console.error("Erro:", error);
      alert(error.response?.data?.message || "Erro ao salvar produto");
      setIsLoading(false);
    }
  }
  

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-0">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-center mb-6">
          {id === undefined ? "Cadastrar Produto" : "Editar Produto"}
        </h1>

        <form className="flex flex-col gap-4" onSubmit={gerarNovoProduto}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="font-semibold">
              Nome do Produto
            </label>
            <input
              type="text"
              placeholder="Nome do produto"
              name="nome"
              className="border-2 border-slate-700 rounded-md p-3"
              value={produto.nome || ""}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="preco" className="font-semibold">
              Preço
            </label>
            <input
              type="number"
              placeholder="Preço do produto"
              name="preco"
              className="border-2 border-slate-700 rounded-md p-3"
              value={produto.preco || ""}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="categoria" className="font-semibold">
              Categoria
            </label>
            <select
              name="categoria"
              className="border-2 border-slate-700 rounded-md p-3"
              value={produto.categoria?.id}
              onChange={atualizarEstado}
            >
              <option value="">Selecione a categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="foto" className="font-semibold">
              Foto do Produto
            </label>
            <input
              type="text"
              placeholder="URL da foto"
              name="foto"
              className="border-2 border-slate-700 rounded-md p-3"
              value={produto.foto || ""}
              onChange={atualizarEstado}
            />
          </div>

          <button
            className="w-full py-2 rounded-md text-white bg-lime-700 hover:bg-lime-900 mt-4 flex items-center justify-center cursor-pointer"
            type="submit"
          >
            {isLoading ? (
              <div className="flex justify-center">
                <MutatingDots color="#ffffff" secondaryColor="#5a5a5a" />
              </div>
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>

          <button
            className="w-full py-2 rounded-md text-white bg-gray-500 hover:bg-gray-700 mt-4 flex items-center justify-center cursor-pointer"
            type="button"
            onClick={retornar}
          >
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormProdutos;
