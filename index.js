document.getElementById('changeColorBtn').addEventListener('click', async function () {
    try {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const colorHex = `#${randomColor.padStart(6, '0')}`;

        console.log('Cor gerada localmente:', colorHex);

        document.body.style.backgroundColor = colorHex;

        const response = await fetch(`https://www.thecolorapi.com/id?hex=${randomColor}`);
        if (response.ok) {
            const data = await response.json();
            const colorName = data.name.value || 'Nome não encontrado';
            document.getElementById('colorName').textContent = `Cor atual: ${colorName}`;
        } else {
            document.getElementById('colorName').textContent = `Cor atual: ${colorHex}`;
        }
    } catch (error) {
        console.error('Erro ao buscar cor da API:', error);
        document.getElementById('colorName').textContent = 'Erro ao carregar cor';
    }
});
