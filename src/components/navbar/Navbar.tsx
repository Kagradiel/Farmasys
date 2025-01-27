import MenuMobile from "./menumobile/MenuMobile";

function Navbar() {

  
    return (
      <>
        <div
          className="w-[50px] md:w-4/6 xl:w-3/6 2xl:w-1/3 md:h-[45px] bg-lime-700 bg-opacity-40 
          xl:bg-opacity-30 text-zinc-900 md:text-white flex justify-center 
          items-center py-4 backdrop-blur-lg rounded-[90px] md:rounded-[10px] 
          fixed z-10 top-0 left-1/2 transform -translate-x-1/2 md:pl-[20px] 
          md:pr-[20px] mt-[3dvh]"
        >
          <div className="container justify-between text-lg hidden md:flex">
            
              Home
            
  
            <div className="flex gap-4 text-base font-light items-center">
  
              
                Produtos
              
  
              
                Categorias


                Cadatrar categorias
              
  

            </div>
          </div>
  
          <div className="md:hidden">
              <MenuMobile />
          </div>
        </div>
      </>
    );
  }
  
  export default Navbar;