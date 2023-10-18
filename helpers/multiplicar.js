const fs = require('fs')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida, consola = ''

    for (let i = 1; i <= hasta; i++) {
      consola += base + ' x ' + i + ' = ' + `${base * i}\n`
      salida += base + ' x '.yellow + i + ' = '.yellow + `${base * i}\n`.green
    }

    if (listar) {
      console.log('\n==========================='.cyan)
      console.log('       Tabla del:'.cyan, `${base}`.green)
      console.log('===========================\n'.cyan)
      console.log(salida)
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, consola)
    return `tabla-${base}.txt`
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivo
}
