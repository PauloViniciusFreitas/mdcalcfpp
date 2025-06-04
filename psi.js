document.getElementById('fibroseForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Soma dos pontos das variáveis
  let pontos = 0;
  pontos += parseInt(document.querySelector('input[name="spo2_90"]:checked').value, 10);
  pontos += parseInt(document.querySelector('input[name="tcar"]:checked').value, 10);
  pontos += parseInt(document.querySelector('input[name="dispneia"]:checked').value, 10);
  pontos += parseInt(document.querySelector('input[name="spo2_3"]:checked').value, 10);
  pontos += parseInt(document.querySelector('input[name="cvf"]:checked').value, 10);

  // Classificação de risco 
  let classe;
  if (pontos <= 2) {
    classe = "Baixo risco (0/1/2)";
  } else if (pontos <= 4) {
    classe = "Intermediário-risco (3/4)";
  } else {
    classe = "Alto risco (5/6/7/8)";
  }

  document.getElementById('score').textContent = `Pontuação total: ${pontos}`;
  document.getElementById('classe').textContent = classe;
  document.getElementById('resultado').style.display = 'block';

  // Rola suavemente até o final da página
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});