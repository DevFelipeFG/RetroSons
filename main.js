function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}
function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
}
function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}
function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}
function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}
function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
}
function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
}
function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play();
}

const listasDeTeclas = document.querySelectorAll('.tecla');

listasDeTeclas[0].onclick = tocaSomPom
listasDeTeclas[1].onclick = tocaSomClap
listasDeTeclas[2].onclick = tocaSomTim
listasDeTeclas[3].onclick = tocaSomPuff
listasDeTeclas[4].onclick = tocaSomSplash
listasDeTeclas[5].onclick = tocaSomToim
listasDeTeclas[6].onclick = tocaSomPsh
listasDeTeclas[7].onclick = tocaSomTic
listasDeTeclas[8].onclick = tocaSomTom