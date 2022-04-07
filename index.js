const drums = document.querySelectorAll('.drum')

drums.forEach((drum) =>{

drum.addEventListener('click', ()=>{
const buttontext = drum.textContent
playdrum(buttontext)
})})
document.addEventListener('keydown', (e) =>{
const keyboard = e.key
playdrum(keyboard)
})


function playdrum(key){

    switch(key){
        case 'w':
            const crash = new Audio('./sounds/crash.mp3')
            crash.play()
            break
        case 'a':
                const kickbass = new Audio('./sounds/kick-bass.mp3')
                kickbass.play()
                break
        case 's':
                    const snare = new Audio('./sounds/snare.mp3')
                    snare.play()
                    break
        case 'd':
                    const tom1 = new Audio('./sounds/tom-1.mp3')
                    tom1.play()
                    break
        case 'j':
                    const tom2 = new Audio('./sounds/tom-2.mp3')
                    tom2.play()
                    break
        case 'k':
                        const tom3 = new Audio('./sounds/tom-3.mp3')
                        tom3.play()
                        break
        
                        case 'l':
                    const tom4 = new Audio('./sounds/tom-4.mp3')
                    tom4.play()
        
                    default: 
                    console.log(key)          
        }
 }   
// if(buttontext == 'w'){
//     const crash = new Audio('./sounds/crash.mp3')
//     crash.play()
//     }else if(buttontext == 'a'){
//     const kickbass = new Audio('./sounds/kick-bass.mp3')
//     kickbass.play()
//     }else if(buttontext == 's'){
//         const snare = new Audio('./sounds/snare.mp3')
//         snare.play()
// //         
// function animationbutton(key){
// const button = document.querySelector(`${key}`){
// setTimeout(() => {
//     button
// }, timeout);

// }

// }











