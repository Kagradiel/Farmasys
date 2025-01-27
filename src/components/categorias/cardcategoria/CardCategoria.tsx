import { Link } from "react-router";
import Categoria from "../../../models/categoria/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex space-x-4">
          <div>
            <div className="text-lg font-bold dark:text-white">
              {categoria.nome}
            </div>
          </div>
        </div>
        <div className="flex gap-4" >
          <Link
            to={`/categorias`}
            className="text-white bg-lime-700 hover:bg-lime-900 
                    py-1 px-1 rounded"
          >
            Editar
          </Link>

          <Link
            to={`/deletarcategoria/${categoria.id}`}
            className="text-red-500 border py-1 px-2 border-red-300 
                       rounded-md"
          >
            X
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCategoria;
