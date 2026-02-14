// --- BOOT SEQUENCE ---
window.onload = function() {
    setTimeout(() => {
        document.getElementById('bootScreen').classList.add('hidden');
        document.getElementById('loginScreen').classList.remove('hidden');
        document.getElementById('loginScreen').classList.add('flex');
    }, 3000); 
}

// --- LOGIN LOGIC ---
function checkName() {
    const input = document.getElementById('nameInput').value.toLowerCase().trim();
    const validNames = ['nirmala', 'mala', 'putri', 'lestari', 'nirmala putri lestari'];

    if (validNames.includes(input)) {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('questionScreen').classList.remove('hidden');
        
        // Memutar musik (karena user sudah berinteraksi dengan klik tombol Login)
        const music = document.getElementById('bgMusic');
        music.volume = 0.5; // Set volume 50% biar ga kaget
        music.play().catch(e => console.log("Gagal memutar musik: ", e));
    } else {
        document.getElementById('errorMsg').classList.remove('hidden');
    }
}

// --- DODGE LOGIC ---
let scaleFactor = 1;

function dodge() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    noBtn.style.position = 'fixed'; 

    const maxWidth = window.innerWidth - 100; 
    const maxHeight = window.innerHeight - 50;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    scaleFactor += 0.4;
    yesBtn.style.transform = `scale(${scaleFactor})`;
    yesBtn.style.boxShadow = `${4 * scaleFactor}px ${4 * scaleFactor}px 0px rgba(255, 20, 147, 0.5)`;
    
    if(scaleFactor > 2) yesBtn.innerText = "PLEASE YES! ❤️";
    if(scaleFactor > 3) yesBtn.innerText = "HARUS YES!! 😡";
}

// --- ACCEPT LOVE LOGIC ---
function acceptLove() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());

    setTimeout(() => {
        document.getElementById('questionScreen').classList.add('hidden');
        document.getElementById('desktopScreen').classList.remove('hidden');
        document.getElementById('desktopScreen').classList.add('flex');
    }, 1000);
}

// --- MODAL LOGIC ---
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(element) {
    element.classList.add('hidden');
}
