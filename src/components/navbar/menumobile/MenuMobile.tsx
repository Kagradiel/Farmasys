
import Popup from "reactjs-popup";

const Menu = () => { 
  
    return (
      <div className="menu z-10">
        <Popup
          trigger={
            <div className="menu-item">
              <div className="menu-fundo" />
            </div>
          }
          position="bottom center"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          contentStyle={{ padding: "0px", border: "none" }}
          arrow={false}
          className=".popup-content"
        >
          <div
            className="menu menu-interno md:hidden bg-neutral-400 bg-opacity-95 text-white backdrop-blur-lg 
                   w-[90vw] left-5 sm:left-7 top-20  rounded-[15px] flex flex-col content-center 
                  justify-between py-10 px-5 gap-15 h-[60dvh] text-base fixed font-extralight mt-3"
          >
            <div className="flex flex-col gap-9">
              <div className="menu-item ">
                
                  <span>01</span>
                  <span>Home</span>
                
              </div>
  
              <div className="menu-item">
                
                  <span>02</span>
                  <span>Produtos</span>
                
              </div>
  
              <div className="menu-item ">
                
                  <span>03</span>
                  <span>Categorias</span>
                
              </div>
  
              <div className="menu-item">
                
                  <span>04</span>
                  <span>Cadastrar Categoria</span>
               
              </div>
  
            </div>
          </div>
        </Popup>
      </div>
    );
  };
  
  export default Menu;
  