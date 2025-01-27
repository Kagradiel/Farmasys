import { Link } from 'react-router-dom'
import Produto from '../../../models/produto/Produto'

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
    return (
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex space-x-4">
                    <div>
                        <img
                            src={produto.foto}
                            alt={produto.nome}
                            className="rounded-md bg-zinc-400 h-12 w-12 object-cover"
                        />
                    </div>
                    <div>
                        <div className="text-lg font-bold dark:text-white">{produto.nome}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-200">
                            Categoria: {produto.categoria.nome}
                        </div>
                    </div>
                </div>
                <div>
                    <Link
                        to={`/deletarproduto/${produto.id}`}
                        className="text-red-500 border py-1 px-2 border-red-300 rounded-md"
                    >
                        X
                    </Link>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
                    R${produto.preco}
                </div>
            </div>
            <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 p-4">
                <Link
                    to={`/editarproduto/${produto.id}`}
                    className="text-white bg-black hover:bg-zinc-600 py-2 px-4 rounded"
                >
                    Editar
                </Link>
                <Link
                    to={`/produto/${produto.id}`}
                    className="text-white bg-lime-700 hover:bg-lime-900 py-2 px-4 rounded"
                >
                    Ver Detalhes
                </Link>
            </div>
        </div>
    )
}

export default CardProduto
