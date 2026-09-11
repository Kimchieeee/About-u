const petalContainer = document.querySelector('.sakura-petals');
const typewriter = document.querySelector('#typewriter');
const continuePrompt = document.querySelector('#continuePrompt');
const message = document.body.dataset.message;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

for (let index = 0; index < 30; index += 1) {
    const petal = document.createElement('span');
    petal.className = 'petal';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.width = `${8 + Math.random() * 8}px`;
    petal.style.height = `${6 + Math.random() * 5}px`;
    petal.style.setProperty('--duration', `${8 + Math.random() * 9}s`);
    petal.style.setProperty('--delay', `${Math.random() * -14}s`);
    petal.style.setProperty('--sway', `${-90 + Math.random() * 180}px`);
    petalContainer.appendChild(petal);
}

function startTypewriter() {
    typewriter.textContent = '';
    continuePrompt.classList.remove('visible');

    if (reducedMotion) {
        typewriter.textContent = message;
        continuePrompt.classList.add('visible');
        return;
    }

    let characterIndex = 0;
    const typeNextCharacter = () => {
        typewriter.textContent += message[characterIndex];
        characterIndex += 1;

        if (characterIndex < message.length) {
            const pause = message[characterIndex - 1] === ' ' ? 115 : 82;
            window.setTimeout(typeNextCharacter, pause);
        } else {
            window.setTimeout(() => continuePrompt.classList.add('visible'), 850);
        }
    };

    window.setTimeout(typeNextCharacter, 1100);
}

startTypewriter();
