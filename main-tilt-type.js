const pre = document.querySelector("body");


document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
})


function rotateElement(event, element) {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;
    // console.log(x, y)


    // find middle of page
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // get offset from middle
    const offsetX = ((x - middleX) / middleX) * 12;
    const offsetY = ((y - middleY) / middleY) * 12;
    // console.log(offsetX, offsetY)

    element.style.setProperty("--rotateX", -1 * offsetY + "deg")
    element.style.setProperty("--rotateY", offsetX + "deg")
}

const outputDiv = document.getElementById('typing-container');
const txt = `// PROJECT NIGHTFALL — BOOT SEQUENCE<nl>
                    [INIT] 00:00:00.000 - NTF-Core v3.7.1 initializing...<nl>
                    [AUTH] keyring: ▲▲▲▲-████-◎◎◎◎ (checksum: 9F:2C:4B)<nl>
                    [SYNC] Orbital handshake -> 0x7A:0x1C:0xF3 ... OK<nl>
                    [HALO] Stabilizer coils: 12/12<nl>
                    [ANN] Codename: NIGHTFALL // Subroutine: OBLIVION-ARC<nl>
                    --- boot stages loaded --- <nl>
                    > /usr/bin/ntf/ignite --phase=echo --mask=†<nl>
                    >>> sequence: ████████▓░░ 72% (quiet)<nl>.
                <nl>

         
                    # DOOM-TETHER v0.0.9 (cosmetic)<nl>
                    import time, binascii, random<nl>
                    def engage():<nl>
                    sentinel = b"MU1R4-H4VEN"<nl>
                    for i in range(8):<nl>
                    tick = binascii.hexlify(sentinel + bytes([i])).decode()<nl>
                    print(f"[{i:02}] -> 0x{tick[:8]}:{tick[8:]} :: AUTH {random.randint(100,999)}")<nl>
                    time.sleep(0.06)<nl>
                    print(">>> DOOM-TETHER ONLINE")<nl>
                    engage()<nl>
                    # (visual-only; not connected)<nl>.
                <nl>

       
                    ; OBLIVION-ARC microkernel (ENGAGED)<nl>
                    ORG 0x0000<nl>
                    START:<nl>
                    MOV R0, #0xDE<nl>
                    MOV R1, #0xAD<nl>
                    XOR R2, R0, R1<nl>
                    CALL @INIT-VECTOR<nl>
                    WAIT #0x0A<nl>
                    JMP START<nl>
                    @INIT-VECTOR:<nl>
                    PUSH R0<nl>
                    PUSH R1<nl>
                    NOP<nl>
                    POP R1<nl>
                    POP R0<nl>
                    RET<nl>
                    Hex: DE AD BE EF ... aesthetic only<nl>.
                <nl>

        
                    ████████████████████████░░░░░░░░░<nl>
                    █ PROJECT: OBLIVION-ARC / SEAL: 0xAF3D █<nl>
                    █ AUTH: [■■■■■■■■] | THREAT MATRIX: ▼ █<nl>
                    █ INIT: █▒▒▒▒▒▒▒▒▒ 14% | WAIT: 00:03:21 █<nl>
                    █████████████░░░░░░░░░░░░░░░░░░░░░░░░░<nl>.
                    <nl>

            
                    ///Come///
                    ///OBLIVION///
                    ///Come///
                    ///OBLIVION///<nl>
                    ///Come///
                    ///OBLIVION///
                    ///Come///
                    ///OBLIVION///`
const splitted = txt.split('<nl>');

splitted.forEach(function () {
    const p = document.createElement('p');
    outputDiv.appendChild(p);
});

const paras = outputDiv.querySelectorAll('p');
let i = 0;
let currentPara = 0;

const intervalId = setInterval(function () {
    paras[currentPara].innerHTML += splitted[currentPara][i];
    i++;

    if (i === splitted[currentPara].length) {
        currentPara++;
        i = 0;

        if (currentPara === splitted.length) {
            clearInterval(intervalId);
        }
    }
}, 4);
// ADD INTEGER AFTER COMMA ABOVE TO DEFINE TIME