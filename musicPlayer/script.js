const songArray = [
    {trackName:"Say You Won't Let Go", trackId:"musics/track1.mp3"},
    {trackName:"I wanna Grow Old With You", trackId:"musics/track2.mp3"},
    {trackName:"Make You Feel My Love", trackId:"musics/track3.mp3"},
    {trackName:"When We Were Young", trackId:"musics/track4.mp3"},
    {trackName:"Ta Kal Loat Myar", trackId:"musics/track5.mp3"},
]

const songsContainer = document.getElementsByClassName('songsContainer')[0];
const audioTag = document.getElementsByClassName('audioTag')[0];
//buttons
const previousButton = document.getElementsByClassName('previousButton')[0];
const playButton = document.getElementsByClassName('playButton')[0];
const pauseButton = document.getElementsByClassName('pauseButton')[0];
const nextButton = document.getElementsByClassName('nextButton')[0];
//updating time
const time = document.getElementsByClassName('time')[0];

for(let i=0; i < songArray.length; i++){
    const trackName = songArray[i].trackName;
    const song = document.createElement('div');
    song.classList.add('song');
    song.addEventListener('click', () => {
        currentPlayingIndex = i;
        playNow();
    });
    const songTitle = (i + 1).toString() + ". " + trackName;
    song.textContent = songTitle;
    songsContainer.append(song);

}

let forDuration = "00:00";
let duration;
let currentTime = 0;

audioTag.addEventListener('loadeddata',() => {
    duration = Math.floor(audioTag.duration);
    forDuration = currentTimeAndDuration(duration); 
});

audioTag.addEventListener('timeupdate', () => {
    currentTime = Math.floor(audioTag.currentTime);
    let forTimeupdate = currentTimeAndDuration(currentTime);
    time.textContent = forTimeupdate + " / " + forDuration;
    //making to play a song automatically
    if(currentTime === duration){
        if(currentPlayingIndex === songArray.length -1){
            return
        }else{
            currentPlayingIndex +=1;
            playing = true;
            playNow();
        }
    }
    //updating progress bar
    updateProgressBar();
});

const currentTimeAndDuration = (param) => {
    const minutes = Math.floor(param/60);
    const seconds = param % 60;

    const minuteText = minutes <10 ? "0" + minutes.toString() : minutes;
    const secondText = seconds <10 ? "0" + seconds.toString() : seconds;
    return minuteText + ":" + secondText;
}

let playing = false;

const isPlaying = () => {
    if(playing === true){
        playButton.style.display = "none";
        pauseButton.style.display = "block"
    }else {
        playButton.style.display = "block";
        pauseButton.style.display= "none";
    }
}

//for buttons
let currentPlayingIndex = 0;
playButton.addEventListener('click',() => {
    playing = true;
    isPlaying();
    if(currentTime === 0){
        playNow();
    }
    audioTag.play();
});

pauseButton.addEventListener('click',() => {
    audioTag.pause();
    playing = false;
    isPlaying();
});

previousButton.addEventListener('click',() => {
    if(currentPlayingIndex ===0){
        return
    }
    currentPlayingIndex -=1;
    playNow();
});

nextButton.addEventListener('click',() => {
    if(currentPlayingIndex === songArray.length -1){
        return
    }
    currentPlayingIndex += 1;
    playNow();
});

//active song        *** 

const active = () => {
    const toActive = document.getElementsByClassName('song');
    for(let i=0; i<toActive.length; i++){
        toActive[i].classList.remove('active');
    }
    toActive[currentPlayingIndex].classList.add('active');
}

//function to play a song
const playNow = () => {
    const playingSong = songArray[currentPlayingIndex].trackId;
    audioTag.src = playingSong;
    audioTag.play();
    playing = true;
    isPlaying();
    active();
}

//progress bar
const insideProgress = document.getElementsByClassName('insideProgress')[0];
const updateProgressBar = () => {
    const insideProgressWidth = 450/duration * currentTime;
    insideProgress.style.width = insideProgressWidth.toString() + "px";
}