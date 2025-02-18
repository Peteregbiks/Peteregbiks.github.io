document.getElementById('fpgamode').addEventListener('click', function(event) {
    var fpgamodeEle = document.getElementById('fpgamode');
    var currentMode = fpgamodeEle.textContent;
    var extractedMode = currentMode.match(/Digital Design Mode:\s*([A-Za-z\s]+)/);
    var modElems = document.getElementsByClassName('notfpga');
    var enable = null;
    if (extractedMode[1].trim() === "Disabled") {
        fpgamodeEle.textContent = "Digital Design Mode: Enabled";
        Array.from(modElems).forEach(element => {
            if (!element.classList.contains('hidden')) {
                element.classList.add('hidden');
            }
        });
        enable = true;
    }
    else {
        fpgamodeEle.textContent = "Digital Design Mode: Disabled";
        Array.from(modElems).forEach(element => {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
            }
        });
        enable = false;
    }
    sessionStorage.setItem('fpgaState', fpgamodeEle.textContent);
    sessionStorage.setItem('modeState', enable.toString());
});

document.addEventListener('DOMContentLoaded', () => {
    const mode = sessionStorage.getItem('fpgaState');
    const ElemStat = sessionStorage.getItem('modeState');
    var isEnabled = (ElemStat === 'true');
    var modElems = document.getElementsByClassName('notfpga');
 
    // Apply the mode (like dark mode) to the body if it's set
    if (mode) {
        var fpgamodeEle = document.getElementById('fpgamode');
        fpgamodeEle.textContent = mode;
    }
    if (isEnabled) {
        Array.from(modElems).forEach(function(element) {
            element.classList.add('hidden');
        });
    }
 });