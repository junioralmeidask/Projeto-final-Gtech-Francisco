const UserAccessModel = require('./criando-model');

async function execute() {
    let resultado = await UserAccessModel.create({
        email: "francisco@mail.com",
        password: "1234"
    });

    console.log(resultado.id);
}

execute();