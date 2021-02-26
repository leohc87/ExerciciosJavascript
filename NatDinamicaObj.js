// natureza dinamica de objetos
const mouse = {
    cor : 'red',
    marcar : 'dazz'
}    
mouse.velocidade = 5000;
mouse.trocarDPI = function () {
    console.log('mudando DPI');
}
console.log(mouse);