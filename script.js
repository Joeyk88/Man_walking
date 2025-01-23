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

const backgroundImage = 'skov/2.jpg'; // Single background image

let lastScrollPosition = 0; // Sporer den sidste scroll-position
let ticking = false; // Forhindrer flere scroll-events i at blive fyret af
let isAttacking = false; // Sporer, om karakteren angriber lige nu

function startAnimation() {
    // Set the background image
    const road = document.getElementById('road');
    road.style.backgroundImage = `url('${backgroundImage}')`; // Set the background image
    road.style.backgroundPositionY = '0'; // Reset background position

    // Update character image based on the current scroll position
    const character = document.getElementById('character');
    const frameIndex = Math.floor(lastScrollPosition / 10) % characterImages.length; // Calculate frame index
    character.src = characterImages[frameIndex]; // Set initial character image

    // Start the scroll event listener for character animation
    window.addEventListener('scroll', function () {
        lastScrollPosition = window.scrollY; // Update scroll position

        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Move the road background based on scroll
                const speedFactor = 1; // Adjust how fast the road moves
                road.style.backgroundPositionY = `-${lastScrollPosition * speedFactor}px`;

                // Update character image based on scroll position
                const frameIndex = Math.floor(lastScrollPosition / 10) % characterImages.length; // Change frame every 10px
                character.src = characterImages[frameIndex]; // Update character image

                ticking = false; // Reset ticking
            });
            ticking = true; // Set ticking to true to prevent further calls
        }
    });
}

window.addEventListener('keydown', function(event) {
    if (event.key === 'e' && !isAttacking) { // Tjek om 'E' er trykket, og om der ikke allerede angribes
        isAttacking = true; // Sæt angribende tilstand
        let attackFrameIndex = 0; // Initialiser angrebsframe-indekset

        const character = document.getElementById('character');
        const attackInterval = setInterval(() => {
            if (attackFrameIndex < attackImages.length) {
                character.src = attackImages[attackFrameIndex]; 
                attackFrameIndex++; 
            } else {
                clearInterval(attackInterval); 
                isAttacking = false; // Nulstil angribende tilstand
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
                header.classList.add('hidden'); // Hide the header
                startAnimation(); // Start the animation and set the background
            });
        } else {
            console.error('Eventyr-knappen blev ikke fundet i DOM\'en.');
        }
    })
    .catch(error => console.error('Error loading header:', error));

});