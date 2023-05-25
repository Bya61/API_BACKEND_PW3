const  fs  =  require('fs')

const  deleteImagem = (imagem)=>{

    fs.unlink(imagem, (error)=> {

        if (error) {
            console.log("erro de exclusão de imagem: " + error)
        }else{
            console.log("Imagem inserida com sucesso " )
        }
    }); 
        
    }
    
module.exports = deleteImagem;