import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'
import FormProdutos from '../formproduto/FormProduto';

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-lime-700 cursor-pointer'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormProdutos />
            </Popup>
        </>
    );
}

export default ModalPostagem;