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
    // Daftar variasi nama panggilan
    const validNames = ['nirmala', 'mala', 'putri', 'lestari', 'nirmala putri lestari', 'ayank', 'sayang'];

    if (validNames.includes(input)) {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('questionScreen').classList.remove('hidden');
        
        // Memutar musik (Perlu interaksi user agar jalan di Chrome/Safari Mobile)
        const music = document.getElementById('bgMusic');
        music.volume = 0.6; 
        music.play().catch(e => console.log("Gagal memutar musik: ", e));
    } else {
        document.getElementById('errorMsg').classList.remove('hidden');
    }
}

// --- DODGE LOGIC (Tombol Kabur Anti-Klik) ---
let scaleFactor = 1;

function dodge(event) {
    // 1. PENTING: Mencegah tombol tereksekusi (klik) di HP
    if (event) {
        event.preventDefault(); // Mencegah klik standar
        event.stopPropagation(); // Mencegah event bubbling
    }

    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // 2. Set posisi jadi fixed agar bebas bergerak ke seluruh layar
    noBtn.style.position = 'fixed'; 

    // 3. Hitung batas layar (Viewport) dikurangi ukuran tombol
    // Kita kurangi 100px biar tombol gak mepet banget ke pinggir atau hilang
    const viewportWidth = window.innerWidth - 120; 
    const viewportHeight = window.innerHeight - 80;

    // 4. Acak posisi X dan Y baru
    // Math.max(20, ...) menjaga biar gak kepotong di kiri/atas
    const randomX = Math.max(20, Math.floor(Math.random() * viewportWidth));
    const randomY = Math.max(20, Math.floor(Math.random() * viewportHeight));

    // 5. Terapkan posisi baru
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // 6. Efek membesar tombol YES (Biar makin maksa)
    scaleFactor += 0.5;
    yesBtn.style.transform = `scale(${scaleFactor})`;
    
    // Pesan tombol YES berubah-ubah
    if(scaleFactor > 2) yesBtn.innerText = "PLEASE YES! 😭";
    if(scaleFactor > 3) yesBtn.innerText = "HARUS YES!! 😡";
    if(scaleFactor > 4) yesBtn.innerText = "GAK BISA NOLAK! 🤪";
}

// --- ACCEPT LOVE LOGIC ---
function acceptLove() {
    // Efek Confetti
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());

    // Pindah ke Desktop
    setTimeout(() => {
        document.getElementById('questionScreen').classList.add('hidden');
        document.getElementById('desktopScreen').classList.remove('hidden');
        document.getElementById('desktopScreen').classList.add('flex');
    }, 1000);
}

// --- MODAL LOGIC (Buka Tutup Folder) ---
function openModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function closeModal(element) {
    element.classList.add('hidden');
}
