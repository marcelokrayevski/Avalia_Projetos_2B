// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBNFi_0UutnVRfDdrHvvO2PEoIn_PSZv9I",
  authDomain: "avalia-projetos.firebaseapp.com",
  databaseURL: "https://avalia-projetos-default-rtdb.firebaseio.com",
  projectId: "avalia-projetos",
  storageBucket: "avalia-projetos.firebasestorage.app",
  messagingSenderId: "325454185380",
  appId: "1:325454185380:web:4457d5d84d18370863f731"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

function embaralharArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let perguntasSessao = {};

document.addEventListener("DOMContentLoaded", () => {
  const selectMesa = document.getElementById("select-mesa");
  const selectAluno = document.getElementById("select-aluno");
  const btnIniciar = document.getElementById("btn-iniciar");
  const formAvaliacao = document.getElementById("form-avaliacao");

  selectMesa.addEventListener("change", () => {
    const mesa = selectMesa.value;
    selectAluno.innerHTML = '<option value="">-- Selecione seu Nome --</option>';

    if (mesa && window.TURMA && window.TURMA[mesa]) {
      window.TURMA[mesa].forEach(aluno => {
        const opt = document.createElement("option");
        opt.value = aluno;
        opt.textContent = aluno;
        selectAluno.appendChild(opt);
      });
      selectAluno.disabled = false;
    } else {
      selectAluno.disabled = true;
    }
  });

  btnIniciar.addEventListener("click", () => {
    const mesa = selectMesa.value;
    const aluno = selectAluno.value;

    if (!mesa || !aluno) {
      alert("Por favor, selecione sua mesa e seu nome antes de iniciar.");
      return;
    }

    document.getElementById("step-identificacao").style.display = "none";
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
    perguntasSessao = {};

    Object.keys(window.PERGUNTAS_POR_MESA).forEach(numMesa => {
      if (String(numMesa) !== String(mesa) && window.PERGUNTAS_POR_MESA[numMesa].length > 0) {
        const blocoMesa = document.createElement("div");
        blocoMesa.className = "mesa-section";

        let htmlPerguntas = `<h2 class="mesa-title">Perguntas da Mesa ${numMesa}</h2>`;

        window.PERGUNTAS_POR_MESA[numMesa].forEach((p, index) => {
          const textoRespostaCorreta = p.opcoes[p.correta];
          const opcoesEmbaralhadas = embaralharArray(p.opcoes);

          perguntasSessao[p.id] = {
            textoRespostaCorreta: textoRespostaCorreta
          };

          htmlPerguntas += `
            <div class="question-card">
              <p class="question-text"><strong>${index + 1}. ${p.texto}</strong></p>
              ${opcoesEmbaralhadas.map((opt) => `
                <label class="option-label">
                  <input type="radio" name="${p.id}" value="${opt.replace(/"/g, '&quot;')}" required>
                  <span>${opt}</span>
                </label>
              `).join('')}
            </div>
          `;
        });

        blocoMesa.innerHTML = htmlPerguntas;
        quizContainer.appendChild(blocoMesa);
      }
    });

    formAvaliacao.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  formAvaliacao.addEventListener("submit", async (e) => {
    e.preventDefault();
    const mesa = selectMesa.value;
    const aluno = selectAluno.value;

    let totalPerguntas = 0;
    let acertos = 0;

    Object.keys(perguntasSessao).forEach(qId => {
      totalPerguntas++;
      const respSelecionada = document.querySelector(`input[name="${qId}"]:checked`);
      if (respSelecionada && respSelecionada.value === perguntasSessao[qId].textoRespostaCorreta) {
        acertos++;
      }
    });

    if (totalPerguntas === 0) {
      alert("Nenhuma pergunta encontrada nas outras mesas.");
      return;
    }

    // Cálculo ajustado para escala de 0 a 100 (múltiplos de 4 com 25 questões)
    const notaFinal = Math.round((acertos / totalPerguntas) * 100);

    const resultado = {
      aluno: aluno,
      mesa: mesa,
      acertos: acertos,
      totalPerguntas: totalPerguntas,
      nota: notaFinal,
      data: new Date().toLocaleString("pt-BR")
    };

    try {
      const chaveAluno = aluno.replace(/[^a-zA-Z0-9]/g, "_");
      await db.ref("avaliacoes/" + chaveAluno).set(resultado);
      
      // Mensagem genérica sem a nota
      alert("Avaliação enviada com sucesso! Obrigado por responder.");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao guardar no Firebase:", error);
      alert("Ocorreu um erro ao enviar suas respostas. Tente novamente.");
    }
  });
});