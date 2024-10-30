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
// fim da função

// Função para exibir o modal
const modal = document.getElementById("modal");
const modalContent = document.getElementById("member-bio");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".integrante").forEach((item) => {
  item.addEventListener("click", function () {
    const member = this.dataset.member;
    // Texto da minibio (exemplo; substitua conforme necessário)
    const bios = {
      lena: `Co-fundadora da Cia. Animaturas, Atriz, Arte-educadora, Produtora, Bonequeira, Pesquisadora de linguagens e técnicas teatrais, e Graduanda em Teatro-
Licenciatura pela UFC. Seu currículo inclui a apresentação de “Avoa Acauã, Avia Maria!” no projeto Palco de Giz da UFC e no XIV Festival de Teatro de Fortaleza, além
de “A Casa de Bernarda Alba” no XXIV Festival do Estudante. Dentro da Cia. Animaturas, utiliza as formas animadas como meio de transformação social.
Desenvolveu os projetos "Poéticas de Si" no Edital de Iniciativas do Desenvolvimento Comunitário do Centro Cultural Bom Jardim em 2022, com ações na Associação
Queira O Bem, e "Autoidentidade", fomentado pelo II Edital Cultura Infância, realizado em escolas públicas e instituições não governamentais da periferia de
Fortaleza. Concluiu recentemente o Programa de Residência Pedagógica da CAPES, na área de Teatro.`,
      integrante2: "Mini biografia do integrante 2...",
      integrante3: "Mini biografia do integrante 3..."
    };
    modalContent.textContent = bios[member] || "Biografia não encontrada";
    modal.style.display = "flex";
  });
});

// Função para fechar o modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});






