const SENHA_CORRETA = "masaju1820";

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

document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.getElementById("btn-login");
  const btnPdf = document.getElementById("btn-pdf");
  const btnZerar = document.getElementById("btn-zerar");

  if (btnLogin) btnLogin.addEventListener("click", autenticar);
  if (btnPdf) btnPdf.addEventListener("click", gerarPDF);
  if (btnZerar) btnZerar.addEventListener("click", limparDados);
});

function autenticar() {
  const senhaDigitada = document.getElementById("admin-pass").value;
  if (senhaDigitada === SENHA_CORRETA) {
    document.getElementById("login-block").style.display = "none";
    document.getElementById("admin-content").style.display = "block";
    carregarTabelaRealtime();
  } else {
    alert("Senha incorreta!");
  }
}

function carregarTabelaRealtime() {
  const tbody = document.getElementById("corpo-tabela");

  db.ref("avaliacoes").on("value", snapshot => {
    tbody.innerHTML = "";

    if (!snapshot.exists()) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;">Nenhuma avaliação enviada ainda.</td></tr>`;
      return;
    }

    snapshot.forEach(childSnapshot => {
      const item = childSnapshot.val();
      const chaveAluno = childSnapshot.key;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>Mesa ${item.mesa}</td>
        <td>${item.aluno}</td>
        <td>${item.acertos} / ${item.totalPerguntas}</td>
        <td><strong>${item.nota}</strong></td>
        <td>${item.data}</td>
        <td>
          <button class="btn-danger" style="padding: 4px 8px; font-size: 0.8rem; width: auto;" onclick="excluirAluno('${chaveAluno}', '${item.aluno}')">
            Resetar
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  });
}

// Função para resetar a nota de um único aluno
function excluirAluno(chave, nomeAluno) {
  if (confirm(`Deseja apagar a avaliação de "${nomeAluno}" para que possa refazer?`)) {
    db.ref("avaliacoes/" + chave).remove().then(() => {
      alert(`Avaliação de ${nomeAluno} foi removida!`);
    }).catch(error => {
      console.error("Erro ao remover:", error);
      alert("Erro ao tentar excluir a avaliação.");
    });
  }
}

function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Relatório de Avaliações - Apresentações de Mockups", 14, 20);

  db.ref("avaliacoes").once("value").then(snapshot => {
    if (!snapshot.exists()) {
      alert("Não há dados para exportar!");
      return;
    }

    const rows = [];
    snapshot.forEach(childSnapshot => {
      const d = childSnapshot.val();
      rows.push([`Mesa ${d.mesa}`, d.aluno, `${d.acertos}/${d.totalPerguntas}`, d.nota, d.data]);
    });

    doc.autoTable({
      startY: 30,
      head: [['Mesa', 'Aluno', 'Acertos', 'Nota Final', 'Data/Hora']],
      body: rows,
    });

    doc.save("Relatorio_Notas_Turma.pdf");
  });
}

function limparDados() {
  if (confirm("Tem certeza de que deseja apagar TODAS as notas salvas no Firebase?")) {
    db.ref("avaliacoes").remove().then(() => {
      alert("Todos os dados foram zerados com sucesso!");
    });
  }
}