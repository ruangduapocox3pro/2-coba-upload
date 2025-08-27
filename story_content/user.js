function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66rRYMcz9sg":
        Script1();
        break;
      case "5acRifN5Swn":
        Script2();
        break;
      case "6NJNN5XqjXi":
        Script3();
        break;
      case "6qsl5utwnDL":
        Script4();
        break;
      case "5yIAoTs27lm":
        Script5();
        break;
      case "6qeQJs6vfe1":
        Script6();
        break;
      case "6W7Vtn67KV3":
        Script7();
        break;
      case "5tXUubcz9UM":
        Script8();
        break;
      case "6cRv8njnAJu":
        Script9();
        break;
      case "6VrSmTevt4I":
        Script10();
        break;
      case "65lpAhUqgNI":
        Script11();
        break;
      case "68WNTwLALTZ":
        Script12();
        break;
      case "6ekaTCZO8RE":
        Script13();
        break;
      case "69GCmlHDnTZ":
        Script14();
        break;
      case "6032i4VNKrL":
        Script15();
        break;
      case "5yQQmm4xF3U":
        Script16();
        break;
      case "6og3tO2yyPl":
        Script17();
        break;
      case "6V8ZBekaKnK":
        Script18();
        break;
      case "6OIbxVte6la":
        Script19();
        break;
      case "5gENx2eCOUd":
        Script20();
        break;
      case "5a2sAZpB4Z7":
        Script21();
        break;
      case "6eAyt05pKdT":
        Script22();
        break;
      case "5wAZc17C6gj":
        Script23();
        break;
      case "69epT6qbXHA":
        Script24();
        break;
      case "6SN4XDjg29R":
        Script25();
        break;
      case "5jlfkGobzNM":
        Script26();
        break;
      case "65AAmqnshMD":
        Script27();
        break;
      case "66HhjjxRYEa":
        Script28();
        break;
      case "5gNeApXXC7x":
        Script29();
        break;
      case "6eCGH8nRyUj":
        Script30();
        break;
      case "5XEXwP9ahIH":
        Script31();
        break;
      case "6GersUkinLo":
        Script32();
        break;
      case "5uEhjSEXWxh":
        Script33();
        break;
      case "5V0gNu4H0PZ":
        Script34();
        break;
      case "63G2t6BUwmi":
        Script35();
        break;
      case "5zUNsRcEbtE":
        Script36();
        break;
      case "6eT2R9Vsgg8":
        Script37();
        break;
      case "6HkC8yZ8krs":
        Script38();
        break;
      case "5d0cpRaSu2I":
        Script39();
        break;
      case "6htpbociZO5":
        Script40();
        break;
      case "68KqINt7nvE":
        Script41();
        break;
      case "6RydSacZvhB":
        Script42();
        break;
      case "65akvCr6KOn":
        Script43();
        break;
      case "6q3cna4PZtv":
        Script44();
        break;
      case "5yncKLrYt2s":
        Script45();
        break;
      case "640eY8KnOF4":
        Script46();
        break;
      case "6G4qsu3DXjB":
        Script47();
        break;
      case "6EK1auaVoPN":
        Script48();
        break;
      case "6TYBMv0MMgK":
        Script49();
        break;
      case "60Qf4ZNdYNr":
        Script50();
        break;
      case "6D5IDhpc3Mu":
        Script51();
        break;
      case "5s9a98s9h6D":
        Script52();
        break;
      case "5rJG4LBRrvR":
        Script53();
        break;
      case "61URZU1BkVn":
        Script54();
        break;
      case "6rJA3UfzqGu":
        Script55();
        break;
      case "5WjRKcHhUdQ":
        Script56();
        break;
      case "68XfPwMJc79":
        Script57();
        break;
      case "5hEAh2dVPGZ":
        Script58();
        break;
      case "6rbJWlJwW7L":
        Script59();
        break;
      case "5XDetLB2LKJ":
        Script60();
        break;
      case "5jw9uaIwR3t":
        Script61();
        break;
      case "6hdkSKyYGiI":
        Script62();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong'); audio.src="musik.mp3"; 
audio.load(); 
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.pause();
audio.currentTime = 0; // kembali ke awal lagu
function fadeOutAudio() {
  var fadeAudio = setInterval(function () {
    if (audio.volume > 0.05) {
      audio.volume -= 0.05; // kurangi volume perlahan
    } else {
      clearInterval(fadeAudio);
      audio.pause();        // hentikan musik
      audio.currentTime = 0; // reset ke awal
      audio.volume = 1.0;   // kembalikan normal utk play berikutnya
    }
  }, 200); // setiap 200ms volume turun
}

}

function Script3()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script4()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script5()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script6()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script7()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script8()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script9()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script10()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script11()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script12()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script13()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script14()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script15()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script16()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script17()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script18()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script19()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script20()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script21()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script22()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script23()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script24()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script25()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script26()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script27()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script28()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script29()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script30()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script31()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script32()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script33()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script34()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script35()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script36()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script37()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script38()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script39()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script40()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script41()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script42()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script43()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script44()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script45()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script46()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script47()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script48()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script49()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script50()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script51()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script52()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script53()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script54()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script55()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script56()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script57()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script58()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script59()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script60()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script61()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script62()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

