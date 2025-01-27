import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import Categoria from "../../../models/categoria/Categoria"; 
import CardCategoria from "../cardcategoria/CardCategoria"; 
import { buscar } from "../../../services/Service";

function ListaCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
      console.log("Categorias carregadas:", categorias);
    } catch (error) {
      console.error("Erro ao buscar categorias", error);
    }
  }
  useEffect(() => {
    buscarCategorias();
  }, []);

return (
  <>
    {categorias.length === 0 ? (
      <div className="flex justify-center w-full pt-28">
        <MutatingDots color="#000000" secondaryColor="#5a5a5a" />
      </div>
    ) : (
      <div className="flex justify-center w-full my-4 pt-28">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    )}
  </>
  );
}

export default ListaCategorias;