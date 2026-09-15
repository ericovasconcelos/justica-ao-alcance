const scenarios = {
    trabalho: {
        title: 'Violência de gênero no trabalho',
        body: 'Se a violência contra a mulher for baseada no gênero, medidas protetivas de urgência podem ser aplicadas mesmo quando o fato ocorre em ambiente profissional, fora de relação doméstica ou familiar.',
        law: 'Base: Tema 1.412 do STF.'
    },
    politica: {
        title: 'Violência política contra a mulher',
        body: 'O STF reconheceu expressamente que a proteção contra violência de gênero também compreende a violência política contra a mulher. Nesses casos, a competência para o crime eleitoral permanece com a Justiça Eleitoral, sem impedir a análise urgente de medidas protetivas.',
        law: 'Base: Tema 1.412 do STF.'
    },
    vicaria: {
        title: 'Usar filho ou familiar para atingir a mulher',
        body: 'Em 2026, a violência vicária passou a ser reconhecida expressamente pela Lei Maria da Penha. Ela ocorre quando alguém atinge pessoa próxima da mulher para causar sofrimento, exercer controle ou puni-la. A legislação também criou o crime de vicaricídio.',
        law: 'Base: Lei 15.384/2026.'
    },
    monitoramento: {
        title: 'Agressor viola limite de aproximação',
        body: 'A monitoração eletrônica do agressor passou a ser prevista como medida protetiva autônoma. A legislação também reforçou as consequências do descumprimento, inclusive quando há violação da área de exclusão monitorada ou adulteração do equipamento.',
        law: 'Base: Lei 15.383/2026.'
    },
    prazo: {
        title: 'A vítima demorou para representar',
        body: 'Nos crimes praticados no âmbito da violência doméstica e familiar contra a mulher que dependam de queixa ou representação, o prazo decadencial passou a ser de 12 meses, contado nos termos previstos em lei.',
        law: 'Base: Lei 15.438/2026.'
    },
    'medida-civel': {
        title: 'Medida protetiva com obrigação cível',
        body: 'Em 2026, medidas protetivas de natureza cível passaram a constituir título executivo judicial de pleno direito e a dispensar a propositura de uma ação principal. Isso reforça a autonomia e a efetividade da proteção concedida.',
        law: 'Base: Lei 15.412/2026.'
    }
};

const scenarioButtons = document.querySelectorAll('.scenario-button');
const scenarioTitle = document.getElementById('scenario-title');
const scenarioBody = document.getElementById('scenario-body');
const scenarioLaw = document.getElementById('scenario-law');

scenarioButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const scenario = scenarios[button.dataset.scenario];
        if (!scenario) return;

        scenarioButtons.forEach((item) => {
            item.classList.remove('is-active');
            item.setAttribute('aria-pressed', 'false');
        });

        button.classList.add('is-active');
        button.setAttribute('aria-pressed', 'true');
        scenarioTitle.textContent = scenario.title;
        scenarioBody.textContent = scenario.body;
        scenarioLaw.textContent = scenario.law;
    });
});

const quickExit = document.getElementById('quick-exit');

function exitSite() {
    window.location.replace('https://www.google.com.br');
}

if (quickExit) {
    quickExit.addEventListener('click', exitSite);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        exitSite();
    }
});
