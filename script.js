// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada para cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos os cards e seções
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.info-section, .contact-card, .type-card, .location-card');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Botão de copiar número de telefone (funcionalidade adicional)
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Número copiado!');
        }).catch(err => {
            console.error('Erro ao copiar:', err);
        });
    }
}

// Mostrar notificação temporária
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Adicionar animações CSS via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Adicionar funcionalidade de clique nos números de emergência
document.addEventListener('DOMContentLoaded', () => {
    const emergencyNumbers = document.querySelectorAll('.contact-card.urgent h3');
    emergencyNumbers.forEach(numberEl => {
        numberEl.style.cursor = 'pointer';
        numberEl.title = 'Clique para copiar';
        
        numberEl.addEventListener('click', () => {
            const number = numberEl.textContent.trim();
            copyToClipboard(number);
        });
    });
});

// Detecção de scroll para header fixo (opcional)
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(139, 71, 137, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Adicionar indicador de carregamento
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Analytics de cliques em links externos (para futuras melhorias)
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const linkText = e.target.textContent || e.target.innerText;
        console.log('Link externo clicado:', linkText);
        // Aqui você pode adicionar Google Analytics ou outra ferramenta de tracking
    });
});

// Adicionar classe de acessibilidade para foco com teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Estilo para navegação por teclado
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    body.keyboard-navigation *:focus {
        outline: 3px solid #8B4789;
        outline-offset: 2px;
    }
`;
document.head.appendChild(keyboardStyle);
