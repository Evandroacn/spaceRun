function revealPeloScroll() {
        const reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
            const windowAltura = window.innerHeight;
            const elementoCima = reveals[i].getBoundingClientRect().top;
            const elementoVisivel = 150;

            if (elementoCima < windowAltura - elementoVisivel) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', revealPeloScroll);

    // Executa na carga da página também
    window.addEventListener('load', revealPeloScroll);