const buttonCor = document.getElementById('btn-cor');
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementsByTagName('h1')[0];

function apertarBotao(){
    try {
        buttonCor.addEventListener('click', async () => {
            const { mudarCor } = await import('./modulos/mudarCor.mjs');
            mudarCor(body);
            mudarCor(h1);

        });

    } catch (error) {
        console.error(error.message);
    }

}


apertarBotao();