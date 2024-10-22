document.getElementById('calcular').addEventListener('click', function() {
    const valorProduto = parseFloat(document.getElementById('valorProduto').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const lucro = parseFloat(document.getElementById('lucro').value);

    if (isNaN(valorProduto) || isNaN(taxa) || isNaN(lucro)) {
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos corretamente.';
        document.getElementById('custoTotal').innerText = '';
        return;
    }

    const custoComTaxa = valorProduto + (valorProduto * (taxa / 100));
    const precoVenda = custoComTaxa + (custoComTaxa * (lucro / 100));

    document.getElementById('resultado').innerText = `Valor de Venda: R$ ${precoVenda.toFixed(2)}`;
    document.getElementById('custoTotal').innerText = `Custo Total (com taxa): R$ ${custoComTaxa.toFixed(2)}`;
});

// Evento para o botão de resetar
document.getElementById('resetar').addEventListener('click', function() {
    document.getElementById('valorProduto').value = '';
    document.getElementById('taxa').value = '';
    document.getElementById('lucro').value = '';
    document.getElementById('resultado').innerText = '';
    document.getElementById('custoTotal').innerText = '';
});
