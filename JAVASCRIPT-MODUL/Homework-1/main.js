let userName = prompt("Lütfen adınızı yazınız.")

let welcomeText = document.querySelector("#welcome")

welcomeText.innerHTML = `Hoşgeldin ${userName}. Siteme hoşgeldin.`

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#clock_date").innerHTML =  `Şuanda saat ${h}:${m}:${s}`
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
