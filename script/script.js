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
