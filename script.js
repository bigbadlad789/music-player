

let audio=new Audio("1.mp3");
let myProgressBar=document.getElementById("myProgressBar");
let gif =document.getElementById("gif");
let btn=document.getElementById("masterPlay");
let songItems =document.getElementById("songitem");
const songinfo=document.getElementsByClassName("songinfo");

let songs=[
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
    ]

    document.addEventListener('DOMContentLoaded', function() {
        const songItemsCollection = document.getElementsByClassName('songitem'); 
        const songItems = [...songItemsCollection]; // Convert to array
    
        songItems.forEach((element, i) => {
            
            element.getElementsByTagName("img")[0].src = songs[i].coverPath;
            element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
            songinfo[0].innerText=songs[i].songName;
          
            
        });
    });

btn.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
         audio.play();
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        masterPlay.classList.remove('fa-circle-pause');
         masterPlay.classList.add('fa-circle-play');
         gif.style.opacity=0;
    }
    
})
audio.addEventListener('timeupdate',()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audio.currentTime=myProgressBar.value*audio.duration/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audio.src=`songs/${index}.mp3`;
        audio.currentTime=0;
        audio.play();
        masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
        
    })
    
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=9){
        index=1;
    }
    else{
        index+=1
    }
    audio.src=`songs/${index}.mp3`
    audio.currentTime=0;
    audio.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(index<0){
        index=0;
    }
    else{
        index-=1
    }
    audio.src=`songs/${index}.mp3`
    audio.currentTime=0;
    audio.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})





