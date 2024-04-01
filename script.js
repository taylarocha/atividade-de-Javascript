<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Rolamento de Mensagem</title>
</head>
<body>
    <input type="text" id="mensagem" value="Mensagem para rolar">
    <button onclick="iniciarRolamento()">Iniciar Rolamento</button>
    <button onclick="pararRolamento()">Parar Rolamento</button>

    <script>
        let intervalo;

        function iniciarRolamento() {
            const mensagem = document.getElementById('mensagem').value;
            if (mensagem.length > 0) {
                intervalo = setInterval(function() {
                    const primeiroCaractere = mensagem.substring(0, 1);
                    const restoMensagem = mensagem.substring(1);
                    document.getElementById('mensagem').value = restoMensagem + primeiroCaractere;
                }, 100); // Ajuste o intervalo conforme necessário
            }
        }

        function pararRolamento() {
            clearInterval(intervalo);
        }
    </script>
</body>
</html>
