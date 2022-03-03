let audio_volume = 0.6

//theme 1

const theme_1_background = "#091921"
const theme_1_color = "#00fff1"

//theme 2

const theme_2_background = "#f7c340"
const theme_2_color = "#2d2d2d"

//theme 3

const theme_3_background = "#210909"
const theme_3_color = "#cf6868"

//theme 4
const theme_4_background = "#143b0f"
const theme_4_color = "#3dd338"

//Theme change

const change_theme = (theme) => {
    let root = document.documentElement
    if(theme === "theme_1") {
        root.style.setProperty('--background',theme_1_background)
        root.style.setProperty('--text',theme_1_color)
    }
    else if (theme === "theme_2") {
    root.style.setProperty('--background', theme_2_background)
    root.style.setProperty('--text',theme_2_color)
    }

    else if (theme === "theme_3") {
        root.style.setProperty('--background', theme_3_background)
        root.style.setProperty('--text',theme_3_color)
        }
    else {
        root.style.setProperty('--background', theme_4_background)
        root.style.setProperty('--text',theme_4_color)
        }
}

var current_theme = "theme_1"
const theme_changer = document.getElementById("util_button-theme")
theme_changer.addEventListener('click', (e) => {
    if(current_theme == "theme_1"){
        change_theme("theme_2")
        current_theme = "theme_2"
    } else if(current_theme == "theme_2"){
        change_theme("theme_3")
        current_theme = "theme_3"
    } else if(current_theme == "theme_3"){
        change_theme("theme_4")
        current_theme = "theme_4"    
    } else {
        change_theme("theme_1")
        current_theme = "theme_1"
    }
        
    })

//buttons animation

const animation = (key) => {
   const currentKey = document.querySelector(`.${key}`)
  currentKey.classList.add("pressed")
  setTimeout(() => {
      currentKey.classList.remove("pressed")
  }, 150)
}

//sound play§

const playSound = (path) => {
    const audio = new Audio(path);
    audio.volume = audio_volume;
    audio.play();

}


// Keybord control

document.addEventListener("keypress", (event) => {
    const triggeredKey = event.key;
    makeSound(triggeredKey)
    animation(triggeredKey)
})

const makeSound = (key) => {

    switch(key){
        case "w":
            playSound("SOUND/tom2_sound.mp3");
            break;
        case "a":
            playSound("SOUND/tom_sound.mp3");
            break;
        case "s":
            playSound("SOUND/kick_sound.mp3");
            break;
        case "d":
            playSound("SOUND/snare_sound.mp3");
            break;
        case "j":
            playSound("SOUND/hihat2_sound.mp3");
            break;
        case "k":
            playSound("SOUND/hihat_sound.mp3");
            break;
        case "l":
            playSound("SOUND/crash_sound.mp3");
            break;  
        default:
            console.log('Zły przycisk')                   
    }

}
//play song

const musicBtn = document.getElementById('util_button-play');
const myAudio = document.querySelector('#audio');
musicBtn.addEventListener('click', () => {
    if(myAudio.paused){
        audio.play();
        
      } else {
        audio.pause();
        
      }
    });

const slider = document.getElementById("volume_slider")
slider.onchange = (event) => {
    console.log(event.target.value)
    audio_volume = event.target.value / 100
    console.log(audio_volume)
}
const handleDrumClick = (event) => {
    const innerHTML = event.target.innerHTML;
    animation(innerHTML);
    makeSound(innerHTML);

}

const drums = document.querySelectorAll(".drum")
for(let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", handleDrumClick)
}