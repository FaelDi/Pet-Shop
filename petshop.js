let listaDePets = ["Bob","menino","tico"];

function addPet(nome){
    listaDePets.push(nome);
    return "Pet cadastrado com sucesso";
}

function listarPets(){
    let lista = "";
    //for(let i = 0; i < listaDePets.length; i++)
    listaDePets.forEach(element => {
        lista += `---------------------------------- \n nome: ${element} \n`;
    });
    //{
        
    //}
    return lista;
}



module.exports = {addPet,listarPets};