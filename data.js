// Base de dados dos alunos dividida por mesas
window.TURMA = {
  1: ["Guilherme Timóteo", "Gabriel Pacheco", "Davi Robes", "Daniel Nunes"],
  2: ["Ester Gabriela", "Caio Ribeiro", "Gustavo Mayer", "Isabela Wojakevicz", "Paula Corá", "Vinícius Barreto"],
  3: ["Arthur Antonio", "Lucas Gabriel", "Gabrielly Vitória", "Heloise Cristina", "Lucas Mello", "Vitor Loffer"],
  4: ["Enzo Maurício", "Alexandre Rolim", "Ticiane Cheva", "Luísa Carloto", "Endrio Cardozo", "Mirella Grubel"],
  5: ["Beatriz Suntak", "Julia Bonato", "Felipe Cecilano", "Kaio Mocellin", "Luiz Felipe", "Fábio Fecher"],
  6: ["Leonardo Paizani", "Nicolas de Paula", "Letícia Kuchaki", "Giulia Portella", "Iara Maria", "Matheus Perin"]
};

// Estrutura das 5 perguntas formuladas por cada uma das 6 mesas
window.PERGUNTAS_POR_MESA = {
  1: [
    {
      id: "m1_q1",
      texto: "Qual o nome da nossa empresa?",
      opcoes: ["Robes", "Robes Tech", "IntelliAgenda", "SmartTime"],
      correta: 0
    },
    {
      id: "m1_q2",
      texto: "O que a nossa empresa desenvolveu?",
      opcoes: [
        "Agenda inteligente",
        "Aplicativo de controle financeiro",
        "Rede social corporativa",
        "Gerenciador de senhas"
      ],
      correta: 0
    },
    {
      id: "m1_q3",
      texto: "Qual dor ela resolve?",
      opcoes: [
        "A de não conseguir organizar seu tempo e ter um dia produtivo",
        "A alta taxa de juros bancários para pequenas empresas",
        "O esquecimento de senhas de redes sociais",
        "A lentidão na navegação da internet"
      ],
      correta: 0
    },
    {
      id: "m1_q4",
      texto: "Qual era o logo da nossa empresa?",
      opcoes: ["Coroa", "Ampulheta", "Relógio", "Lâmpada"],
      correta: 0
    },
    {
      id: "m1_q5",
      texto: "SITUAÇÃO PROBLEMA: Uma pessoa quer acordar cedo e participar de todas as aulas, arrumar a casa e ir na academia. Como o Robes ajudaria a criar uma rotina para o dia a dia?",
      opcoes: [
        "O Robes ajudaria a criar uma rotina para que a pessoa se organizasse melhor usando as funções que ele tem",
        "Enviando alertas de voz automáticos para os professores justificarem a ausência",
        "Contratando uma pessoa para realizar as tarefas domésticas no lugar do usuário",
        "Bloqueando o telefone celular para impedir que a pessoa saia de casa"
      ],
      correta: 0
    }
  ],

  2: [
    {
      id: "m2_q1",
      texto: "O que é a empresa Magi?",
      opcoes: [
        "Uma empresa de tecnologia voltada à gestão de resíduos eletrônicos",
        "Uma loja de venda e manutenção de computadores usados",
        "Uma fábrica de componentes eletrônicos recicláveis",
        "Uma consultoria de energia solar para empresas"
      ],
      correta: 0
    },
    {
      id: "m2_q2",
      texto: "Qual o objetivo da Magi?",
      opcoes: [
        "Ajudar as pessoas a separar corretamente o lixo eletrônico e evitar poluição",
        "Vender lixo eletrônico para recicladoras internacionais",
        "Desenvolver novos aparelhos eletrônicos de baixo custo",
        "Oferecer cursos pagos sobre sustentabilidade"
      ],
      correta: 0
    },
    {
      id: "m2_q3",
      texto: "Quais serviços a empresa oferece?",
      opcoes: [
        "Coleta, triagem, reaproveitamento, reciclagem, monitoramento e descarte adequado",
        "Apenas transporte e descarte em aterros sanitários",
        "Compra e venda de eletrodomésticos novos",
        "Manutenção de redes elétricas industriais"
      ],
      correta: 0
    },
    {
      id: "m2_q4",
      texto: "Como o site da Magi ajuda o usuário?",
      opcoes: [
        "Por um app de monitoramento e relatórios digitais que acompanham os lixos",
        "Oferecendo cupons de desconto para compra de eletrônicos",
        "Agendando consultas presenciais com técnicos",
        "Fornecendo um mapa estático sem atualização em tempo real"
      ],
      correta: 0
    },
    {
      id: "m2_q5",
      texto: "Quais benefícios a Magi proporciona ao meio ambiente?",
      opcoes: [
        "Reduz a poluição e incentiva a reciclagem e o descarte correto de resíduos eletrônicos",
        "Diminui o consumo de energia elétrica das residências",
        "Substitui completamente o uso de plástico nas empresas",
        "Limpa rios e oceanos através de robôs autônomos"
      ],
      correta: 0
    }
  ],

  3: [
    {
      id: "m3_q1",
      texto: "Qual o nome da empresa?",
      opcoes: ["Ararinhas Enterprise", "Arara Azul Tech", "Enterprise Pets", "Ninho Co."],
      correta: 0
    },
    {
      id: "m3_q2",
      texto: "Qual o nome do site?",
      opcoes: ["Ninho", "Ararinha", "PetHouse", "AdoteJá"],
      correta: 0
    },
    {
      id: "m3_q3",
      texto: "Aonde o João foi encontrado?",
      opcoes: ["No Lixão", "No ferro velho", "No pneu de caminhão", "Todas estão certas"],
      correta: 3
    },
    {
      id: "m3_q4",
      texto: "Qual o objetivo da empresa?",
      opcoes: [
        "Anunciar animais para adoção e vender produtos para animais",
        "Apenas vender ração em grande escala",
        "Resgatar exclusivamente aves silvestres",
        "Prestar serviços de adestramento ao domicílio"
      ],
      correta: 0
    },
    {
      id: "m3_q5",
      texto: "O que acontece com os fundos da loja da empresa?",
      opcoes: [
        "Despesas médicas para os animais, e para caridade",
        "Distribuição de lucros entre os sócios",
        "Investimento exclusivo em publicidade",
        "Compra de novas sedes físicas"
      ],
      correta: 0
    }
  ],

  4: [
    {
      id: "m4_q1",
      texto: "Qual é o objetivo principal da plataforma “Chama o Mestre”?",
      opcoes: [
        "Conectar clientes a profissionais que oferecem serviços",
        "Vender ferramentas e materiais de construção online",
        "Oferecer cursos de capacitação técnica para pedreiros e eletricistas",
        "Contratar funcionários fixos para empresas de engenharia"
      ],
      correta: 0
    },
    {
      id: "m4_q2",
      texto: "Quais filtros o usuário pode utilizar para encontrar profissionais na plataforma?",
      opcoes: [
        "Dia disponível, faixa de preço e ordem de classificação",
        "Idade do profissional, modelo do veículo e endereço residencial",
        "Quantidade de seguidores, marca das ferramentas e horário de almoço",
        "Apenas a cidade onde o profissional reside"
      ],
      correta: 0
    },
    {
      id: "m4_q3",
      texto: "Qual é a principal vantagem de usar a plataforma “Chama o Mestre”?",
      opcoes: [
        "Comparar profissionais, preços e disponibilidade em um só lugar",
        "Obter desconto automático em lojas de tintas parceiras",
        "Garantia de atendimento gratuito em casos de emergência",
        "Isenção total de taxas de pagamento para qualquer serviço"
      ],
      correta: 0
    },
    {
      id: "m4_q4",
      texto: "O que o cliente pode comparar na plataforma?",
      opcoes: [
        "A experiência, a disponibilidade e os preços dos profissionais",
        "As marcas de ferramentas utilizadas e a distância até a loja mais próxima",
        "O tipo de uniforme do prestador de serviço e sua escolaridade",
        "Apenas o número de telefone de cada profissional"
      ],
      correta: 0
    },
    {
      id: "m4_q5",
      texto: "Quais tipos de profissionais podem ser encontrados na plataforma?",
      opcoes: [
        "Pedreiros, encanadores, eletricistas e jardineiros",
        "Apenas advogados e contadores especializados",
        "Programadores de software e designers gráficos",
        "Médicos, dentistas e fisioterapeutas"
      ],
      correta: 0
    }
  ],

  5: [
    {
      id: "m5_q1",
      texto: "Qual é o problema que a oficina enfrenta?",
      opcoes: [
        "A dificuldade de saber quantos carros estão na oficina e quais serviços faltam fazer",
        "A falta de peças de reposição no estoque",
        "A falta de mecânicos qualificados na equipe",
        "A ausência de clientes aos finais de semana"
      ],
      correta: 0
    },
    {
      id: "m5_q2",
      texto: "Como o site vai ajudar a oficina?",
      opcoes: [
        "Vai ajudar a organizar os carros e deixar mais fácil saber o que precisa ser feito em cada um",
        "Através do agendamento automático de guinchos pela cidade",
        "Comprando peças diretamente do fabricante com desconto",
        "Realizando o pagamento de impostos da empresa"
      ],
      correta: 0
    },
    {
      id: "m5_q3",
      texto: "Quais informações dos carros vão aparecer no site?",
      opcoes: [
        "O modelo, a cor, a placa e os serviços que precisam ser feitos",
        "O nome do antigo proprietário e o histórico de multas",
        "Apenas a foto do veículo e o valor da avaliação",
        "A apólice de seguro e o número do chassi"
      ],
      correta: 0
    },
    {
      id: "m5_q4",
      texto: "Como vamos saber quais carros precisam de prioridade?",
      opcoes: [
        "Vamos conseguir ver quais carros estão há mais tempo na oficina e dar prioridade pra eles",
        "Pelo valor do serviço mais caro cadastrado",
        "Pela marca e ano de fabricação do carro",
        "Por ordem alfabética do nome do cliente"
      ],
      correta: 0
    },
    {
      id: "m5_q5",
      texto: "O que vai melhorar com a criação do site?",
      opcoes: [
        "Vai ficar mais fácil de organizar tudo e diminuir a chance de esquecer algum serviço",
        "A oficina vai conseguir consertar os carros sem intervenção humana",
        "Os custos de energia elétrica da oficina vão diminuir",
        "A velocidade máxima dos carros atendidos vai aumentar"
      ],
      correta: 0
    }
  ],

  6: [
    {
      id: "m6_q1",
      texto: "Qual é o nome do site?",
      opcoes: ["GLLMNI", "MercadoTop", "PreçoCerto", "SuperExpress"],
      correta: 0
    },
    {
      id: "m6_q2",
      texto: "Qual era a função do site?",
      opcoes: [
        "Procurar melhores preços no mercado da região",
        "Comprar cupons de desconto para restaurantes",
        "Avaliar a qualidade do atendimento das lojas",
        "Contratar entregadores autônomos"
      ],
      correta: 0
    },
    {
      id: "m6_q3",
      texto: "Quantos mercados apareciam no site?",
      opcoes: ["3", "5", "10", "15"],
      correta: 0
    },
    {
      id: "m6_q4",
      texto: "Nosso site tinha como fazer compras online e chegar até sua casa pela entrega express?",
      opcoes: [
        "Sim",
        "Não, apenas consulta presencial",
        "Apenas em compras acima de R$ 500,00",
        "Apenas para produtos perecíveis"
      ],
      correta: 0
    },
    {
      id: "m6_q5",
      texto: "O site tinha como trocar de estado?",
      opcoes: [
        "Sim",
        "Não, atendia apenas um município",
        "Apenas no plano pago",
        "Disponível somente na versão mobile"
      ],
      correta: 0
    }
  ]
};