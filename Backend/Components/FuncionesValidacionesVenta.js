const {
    regexID
} = require("./Regex");

const {
    mensajeErrorID
} = require("./Regex");

function FuncionValidarID(id){
    if (regexID.test(id)) {
        return true;
    } else {
        throw new Error(`${mensajeErrorID}`);
    }
}

module.exports = {
    FuncionValidarID
}