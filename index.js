(async() => 
    {
        const database = require('./db');
        const produto = require('./produto')

        await database.sync();

        await produto.create(
            {
                Nome: "Primeiro Teste",
                DataCriacao: Date()
            }
        )

        //const alterProd = await produto.findByPk(1);
        //alterProd.Nome = "Arquivo Alterado";



        //await alterProd.save();

        //produto.destroy({where : {id: 1}})

        const findProd = await produto.findByPk(1)
        console.log("Primeiro Registro Abaixo:")
        console.log(findProd);

        const findAllProd = await produto.findAll();

    }
)();