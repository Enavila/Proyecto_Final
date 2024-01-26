const bcrypt = require('bcrypt');
// const contrasenaEncriptada = "$2b$10$2MZkMrF1cR/vLyIvmVX22OMX9ZKyuNfHh46GisskYM2NUr1O9LRUK" // 1234*
// const contrasenaEncriptada = "$2b$10$lTUvhNbF6or93AtuQgeBl.aEBUTA7WPL1I0B7JFhXgjokSRbXV3Xm" // 12345*
const contrasenaEncriptada = "$2b$10$OE4KWCKVJ0QXOYkYYXmWcu/VVLG34q.7f3WJgevchkvyVyOXVFpL." // 123456*
const contrasenaVerificada = await bcrypt.compare("123456*", contrasenaEncriptada)
console.log(contrasenaVerificada)