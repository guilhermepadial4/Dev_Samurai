const retornaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instância Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

try {
    const hora = retornaHora();
    console.log(hora);
}catch(err) {
    // console.log(err);
}finally {
    console.log('Tenha um ótimo dia.');
}
