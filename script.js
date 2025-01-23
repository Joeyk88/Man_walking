 document.addEventListener('DOMContentLoaded', () => {
    const characterImages = [
    'knight/0_Warrior_Walk_000.png',
    'knight/0_Warrior_Walk_001.png',
    'knight/0_Warrior_Walk_002.png',
    'knight/0_Warrior_Walk_003.png',
    'knight/0_Warrior_Walk_004.png',
    'knight/0_Warrior_Walk_005.png',
    'knight/0_Warrior_Walk_006.png',
    'knight/0_Warrior_Walk_007.png',
    'knight/0_Warrior_Walk_008.png',
    'knight/0_Warrior_Walk_009.png',
    'knight/0_Warrior_Walk_010.png',
    'knight/0_Warrior_Walk_011.png',
    'knight/0_Warrior_Walk_012.png',
    'knight/0_Warrior_Walk_013.png',
    'knight/0_Warrior_Walk_014.png',
    'knight/0_Warrior_Walk_015.png',
    'knight/0_Warrior_Walk_016.png',
    'knight/0_Warrior_Walk_017.png',
    'knight/0_Warrior_Walk_018.png',
    'knight/0_Warrior_Walk_019.png',
    'knight/0_Warrior_Walk_020.png',
    'knight/0_Warrior_Walk_021.png',
    'knight/0_Warrior_Walk_022.png',
    'knight/0_Warrior_Walk_023.png',
    'knight/0_Warrior_Walk_024.png',
    'knight/0_Warrior_Walk_025.png',
    'knight/0_Warrior_Walk_026.png',
    'knight/0_Warrior_Walk_027.png',
    'knight/0_Warrior_Walk_028.png',
    'knight/0_Warrior_Walk_029.png'
];

const attackImages = [
    'Attacking/0_Warrior_Attack_2_000.png',
    'Attacking/0_Warrior_Attack_2_001.png',
    'Attacking/0_Warrior_Attack_2_002.png',
    'Attacking/0_Warrior_Attack_2_003.png',
    'Attacking/0_Warrior_Attack_2_004.png',
    'Attacking/0_Warrior_Attack_2_005.png',
    'Attacking/0_Warrior_Attack_2_006.png',
    'Attacking/0_Warrior_Attack_2_007.png',
    'Attacking/0_Warrior_Attack_2_008.png',
    'Attacking/0_Warrior_Attack_2_009.png',
    'Attacking/0_Warrior_Attack_2_010.png',
    'Attacking/0_Warrior_Attack_2_011.png',
    'Attacking/0_Warrior_Attack_2_012.png',
    'Attacking/0_Warrior_Attack_2_013.png',
    'Attacking/0_Warrior_Attack_2_014.png',
];

const backgroundImage = 'skov/2.jpg'; 

let lastScrollPosition = 0; 
let ticking = false; 
let isAttacking = false; 

window.addEventListener('scroll', function () {
    lastScrollPosition = window.scrollY; 

    if (!ticking) {
        window.requestAnimationFrame(function() {
            const road = document.getElementById('road');
            
            
            const speedFactor = 1; 
            road.style.backgroundPositionY = `-${lastScrollPosition * speedFactor}px`;

            
            const frameIndex = Math.floor(lastScrollPosition / 10) % characterImages.length; // Skift frame hver 10px
            const character = document.getElementById('character');
            character.src = characterImages[frameIndex];

            
            road.style.backgroundImage = `url('${backgroundImage}')`; 

            ticking = false; 
        });
        ticking = true; 
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'e' && !isAttacking) { 
        isAttacking = true; 
        let attackFrameIndex = 0; 

        const character = document.getElementById('character');
        const attackInterval = setInterval(() => {
            if (attackFrameIndex < attackImages.length) {
                character.src = attackImages[attackFrameIndex]; 
                attackFrameIndex++; 
            } else {
                clearInterval(attackInterval); 
                isAttacking = false; 
                character.src = characterImages[Math.floor(lastScrollPosition / 10) % characterImages.length]; // Gendan gå-billede
            }
        }, 10);
    }
});
fetch('header/header.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);

        
        const header = document.getElementById('main-header');
        const eventButton = document.getElementById('event-button');

        if (eventButton) {
            eventButton.addEventListener('click', () => {
                header.classList.add('hidden');
            });
        } else {
            console.error('Eventyr-knappen blev ikke fundet i DOM\'en.');
        }
    })
    .catch(error => console.error('Error loading header:', error));



});
