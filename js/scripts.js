document.addEventListener('DOMContentLoaded', () => { 

    const btnFlotante = document.querySelector('.btn-flotante');
    // console.log(btnFlotante);

    btnFlotante.addEventListener('click', function(e) {

        e.preventDefault();
        
        const footer = document.querySelector('.footer');
    
    
        if( footer.classList.contains('activo') ) {
            footer.classList.remove('activo');
            this.classList.remove('activo');
            this.innerText = 'Idioma y Moneda';
        } else {
            footer.classList.add('activo');
            this.classList.add('activo');
            this.innerText = 'X Cerrar';
        }
    
    });

});


