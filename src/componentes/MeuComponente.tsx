
import'./MeuComponente.css'
function MeuComponente(){
    let variavel = "logo"
    return (
        <header className="header">  
           <div className="logo">
            {variavel}
           </div>
        </header>
    );
};
export default MeuComponente;