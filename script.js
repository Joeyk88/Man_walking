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

const backgroundImage = 'skov/2.jpg'; // Single background image

let lastScrollPosition = 0; // Sporer den sidste scroll-position
let ticking = false; // Forhindrer flere scroll-events i at blive fyret af
let isAttacking = false; // Sporer, om karakteren angriber lige nu

window.addEventListener('scroll', function () {
    lastScrollPosition = window.scrollY; // Opdater scroll-position

    if (!ticking) {
        window.requestAnimationFrame(function() {
            const road = document.getElementById('road');
            
            // Flyt vejens baggrund i forhold til scroll
            const speedFactor = 1; // Justér hvor hurtigt vejen bevæger sig
            road.style.backgroundPositionY = `-${lastScrollPosition * speedFactor}px`;

            // Opdater karakterens billede baseret på scroll-position
            const frameIndex = Math.floor(lastScrollPosition / 10) % characterImages.length; // Skift frame hver 10px
            const character = document.getElementById('character');
            character.src = characterImages[frameIndex]; // Opdater karakterens billede

            // Opdater baggrundsbilledet til den eneste baggrund
            road.style.backgroundImage = `url('${backgroundImage}')`; // Opdater baggrundsbilledet

            ticking = false; // Nulstil ticking
        });
        ticking = true; // Sæt ticking til true for at forhindre yderligere kald
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'e' && !isAttacking) { // Tjek om 'E' er trykket, og om der ikke allerede angribes
        isAttacking = true; // Sæt angribende tilstand
        let attackFrameIndex = 0; // Initialiser angrebsframe-indekset

        const character = document.getElementById('character');
        const attackInterval = setInterval(() => {
            if (attackFrameIndex < attackImages.length) {
                character.src = attackImages[attackFrameIndex]; // Opdater karakterens billede til angrebsframe
                attackFrameIndex++; // Gå til næste frame
            } else {
                clearInterval(attackInterval); // Stop angrebsanimationen
                isAttacking = false; // Nulstil angribende tilstand
                character.src = characterImages[Math.floor(lastScrollPosition / 10) % characterImages.length]; // Gendan gå-billede
            }
        }, 10); // Justér intervallet for billedhastigheden af angrebsanimationen
    }
});