var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado'); 
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudaJogador('X');

function escolheGrid(id){
    if (vencedor !== null) {
        return;
    }

    var grid = document.getElementById(id);
    if (grid.innerHTML !== '-') {
        return;
    }

    grid.innerHTML = jogador;
    grid.style.color = '#FFF';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudaJogador(jogador);
    checaVencedor();
}

function mudaJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    var grid1 = document.getElementById(1);
    var grid2 = document.getElementById(2);
    var grid3 = document.getElementById(3);
    var grid4 = document.getElementById(4);
    var grid5 = document.getElementById(5);
    var grid6 = document.getElementById(6);
    var grid7 = document.getElementById(7);
    var grid8 = document.getElementById(8);
    var grid9 = document.getElementById(9);

    if (checaSequencia(grid1, grid2, grid3)) {
        mudaCorGrid(grid1, grid2, grid3);
        mudaVencedor(grid1);
        return;
    }

    
    if (checaSequencia(grid4, grid5, grid6)) {
        mudaCorGrid(grid4, grid5, grid6);
        mudaVencedor(grid4);
        return;
    }

    if (checaSequencia(grid7, grid8, grid9)) {
        mudaCorGrid(grid7, grid8, grid9);
        mudaVencedor(grid7);
        return;
    }

    if (checaSequencia(grid1, grid4, grid7)) {
        mudaCorGrid(grid1, grid4, grid7);
        mudaVencedor(grid1);
        return;
    }

    if (checaSequencia(grid2, grid5, grid8)) {
        mudaCorGrid(grid2, grid5, grid8);
        mudaVencedor(grid2);
        return;
    }

    if (checaSequencia(grid3, grid6, grid9)) {
        mudaCorGrid(grid3, grid6, grid9);
        mudaVencedor(grid3);
        return;
    }

    if (checaSequencia(grid1, grid5, grid9)) {
        mudaCorGrid(grid1, grid5, grid9);
        mudaVencedor(grid1);
        return;
    }

    if (checaSequencia(grid3, grid5, grid7)) {
        mudaCorGrid(grid3, grid5, grid7);
        mudaVencedor(grid3);
    }
}

function mudaVencedor(grid) {
    vencedor = grid.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorGrid(grid1, grid2, grid3) {
    grid1.style.background = 'crimson';
    grid2.style.background = 'crimson';
    grid3.style.background = 'crimson';
}

function checaSequencia(grid1, grid2, grid3){
    var eigual = false;

    if(grid1.innerHTML !== '-' && grid1.innerHTML === grid2.innerHTML && grid2.innerHTML === grid3.innerHTML){
        eigual = true;
    }
    return eigual;
}

function reiniciar()
{
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var grid = document.getElementById(i);
        grid.style.background = '#000';
        grid.style.color = '#000';
        grid.innerHTML = '-';
    }

    mudaJogador('X');
}