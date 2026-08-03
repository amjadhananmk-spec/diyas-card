function playMusic() {
    document.getElementById("bgMusic").play();
}

function surprise() {
    alert(`En kannukulla kathaadha

Nenjukulla nachaadha

Solle podhum

Un solle podhum

En ambamothom pichane

Kovam vechu theccaane

Innum venum

Oh innum venum

Vittu pona vaasalile

Vaazhka theera kaathirukken

Kaathilulla kaadhalellam

Kooti kaathu thaarenen naan

Oda oda naan mela saanjika

Theera theera un thollilaya

Eeram eeram kann oram

Medhuvaa kothume....`);
}

window.onload = function () {
    const countdown = document.getElementById("countdown");

    if (countdown) {
        countdown.innerHTML = "🕚 11:11";
    }
};
