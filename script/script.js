document.addEventListener('DOMContentLoaded', () => {
    const bonecoSuperior = document.getElementById('boneco_superior');
    if (bonecoSuperior) {
        bonecoSuperior.addEventListener('click', () => {
            bonecoSuperior.classList.add('trembling');
            setTimeout(() => {
                bonecoSuperior.classList.remove('trembling');
            }, 500);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const bonecoInferior = document.getElementById('boneco-inferior');
    if (bonecoInferior) {
        bonecoInferior.addEventListener('click', () => {
            bonecoInferior.classList.add('dancing');
            setTimeout(() => {
                bonecoInferior.classList.remove('dancing');
            }, 500);
        });
    }
});

// Função para definir favicon baseado no modo (light/dark)
function setFavicon(mode) {
    const faviconLinks = document.querySelectorAll('link[rel="icon"]');
    const lightIconPath = 'img/icone/';
    const darkIconPath = 'img/icone/';

    const lightIcons = [
        'icone_azul_16x16.ico',
        'icone_azul_32x32.ico',
        'icone_azul_48x48.ico',
    ];

    const darkIcons = [
        'icone_branco_16x16.ico',
        'icone_branco_32x32.ico',
        'icone_branco_48x48.ico',
    ];

    faviconLinks.forEach(link => {
        const sizes = link.getAttribute('sizes');
        let iconFilename;
        if (sizes) {
            const sizeValue = sizes.split('x')[0]; // Extrai a primeira dimensão do tamanho
            const index = ['16', '32', '48'].indexOf(sizeValue);
            iconFilename = mode === 'light' ? lightIcons[index] : darkIcons[index];
        } else {
            iconFilename = mode === 'light' ? lightIcons[0] : darkIcons[0];
        }
        const faviconURL = `${mode === 'light' ? lightIconPath : darkIconPath}${iconFilename}`;
        link.href = faviconURL;
    });
}

// Verifica a preferência do usuário
let prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
setFavicon(prefersDarkMode ? 'dark' : 'light');

// Adiciona um listener para mudanças na preferência de cores
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newPrefersDarkMode = event.matches;
    setFavicon(newPrefersDarkMode ? 'dark' : 'light');
    prefersDarkMode = newPrefersDarkMode;
});

// Troca o GIF animado por uma imagem estática após a reprodução inicial
window.onload = () => {
    const logoGif = document.getElementById('logoGif');
    const staticImage = 'img/icone/logo_cia_animaturas_80px.png'; // Caminho para a versão estática da imagem

    setTimeout(() => {
        logoGif.src = staticImage;
    }, 3000); // Ajuste o tempo conforme a duração do seu GIF
};
// FIM

// Função para mostrar ou esconder o botão de "Voltar ao Topo"
window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Função para rolar a página de volta ao topo
document.getElementById('back-to-top').addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// modais para efeito das fotos na página quem-somos
// Seleciona todas as fotos de perfil e os modais
const profilePhotos = document.querySelectorAll('.integrante');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Ao clicar na foto de perfil, abre o modal correspondente
profilePhotos.forEach(photo => {
  photo.addEventListener('click', function() {
    const memberId = this.getAttribute('data-member');
    document.getElementById('modal-lena').style.display = 'block';
  });
});

// Ao clicar no "x", fecha o modal
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const memberId = this.getAttribute('data-member');
    document.getElementById('modal-lena').style.display = 'none';
  });
});

// Fecha o modal ao clicar fora da área de conteúdo
window.addEventListener('click', function(event) {
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});

