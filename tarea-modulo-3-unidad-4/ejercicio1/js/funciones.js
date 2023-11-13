

document.addEventListener('DOMContentLoaded', function() {
    const cubes = document.querySelectorAll('.cube');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBackgroundColor() {
        document.body.style.backgroundColor = getRandomColor();
    }

    cubes.forEach(cube => {
        cube.style.backgroundColor = getRandomColor();
        cube.addEventListener('click', changeBackgroundColor);
    });
});








document.getElementById('boton_color').addEventListener('click', function() { 
        document.body.style.backgroundColor = '#FF0000';
    
    });


    document.getElementById('boton_default').addEventListener('click', function() { 
        document.body.style.backgroundColor = 'coral';
    
    });




const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});




