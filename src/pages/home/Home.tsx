import FundoHome from "../../assets/images/farmasys.png";
import ListaCategorias from "../../components/categorias/listacategoria/ListaCategoria";

function Home() {
  return (
    <>
      <section className="bg-white w-full flex justify-around mt-[17dvh] lg:mt-[20dvh]">
        
        <div className="container items-center flex flex-col lg:flex-row text-black">

          <div className="flex flex-col gap-4 w-[90vw] lg:w-[50vw] items-center 
          lg:items-start justify-center py-4">

            <h2 className=" text-3xl lg:text-5xl font-thin">Farmasys</h2>
            <p className="text-xl font-thin text-center">Trabalhando pela saude com tech</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                Adicionar produto
              </div>
            </div>

          </div>

          <div className="flex h-[400px] lg:w-[auto] lg:h-[70vh] justify-center ">
            <img
              src={FundoHome}
              alt="Imagem Página Home"
              className="w-2/3 mix-blend-multiply object-cover"
            />
          </div>

        </div>

        
      </section>

    </>
  );
}

export default Home;