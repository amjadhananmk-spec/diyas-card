function playMusic() {
    document.getElementById("bgMusic").play();
}

function surprise() {
    alert(`തു പാസ് ഹോ മേമേ
പാസ് ഹോ മേമേ
മേം കൊകി യീൻസ് കോ ലൈസേ
തു പാസ് ഹോ മേമേ
പാസ് ഹോ മേമേ
മേം കൊകി യീൻസ് കോ ലൈസേ

ഹായ് മേർ മി ജാവും
ജോ തുജ്കോ ന പാവും
ബാതോനാ മേൻ തേർ
രാതോനിലാവും
ഹോന്തോൻ സെ പലം ഹോഠാ
ഹോ മേ തേരാ ഹായ
തുജ്കോ ഹി പാവും
മേൻ തുജ്കോ പാവും

സായാ തു തൊ ബദൽ ഹമി ഹോ...
മോസം സാ സാ തേരാ ഹുവാ ഹോ..
സായാ തു തൊ ബദൽ ഹമി ഹോ..
മോസം സാ സാ തേരാ ഹുവാ ഹോ`);
}

window.onload = function () {
    const countdown = document.getElementById("countdown");

    if (countdown) {
        countdown.innerHTML = "🕚 11:11";
    }
};
