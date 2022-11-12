const sounds = ['bird1.WAV', 'bird2.WAV', 'bird3.WAV', 'boing.WAV', 'boo.WAV', 'bowser-die.WAV', 'bowser-fire.WAV', 'bowser-grab.WAV', 'bowser-inhale.WAV', 'bowser-something.WAV', 'bowser-step.WAV', 'boxbreak.WAV', 'bubble.WAV', 'cannon1.WAV', 'cannon2.WAV', 'cannon3.WAV', 'cannon-fire.WAV', 'chomp.WAV', 'crank.WAV', 'crawl.WAV', 'crick2.wav', 'cricket.WAV', 'door-close.WAV', 'door-metal.WAV', 'door-open.WAV', 'door-wood.WAV', 'enter-painting.WAV', 'explosion.WAV', 'fuse-lite.WAV', 'fuse-loop.WAV', 'gunshot.WAV', 'invalid.WAV', 'lakitucam.WAV', 'laser.WAV', 'mario-boing.WAV', 'mario-buhbye.WAV', 'mario-cough.WAV', 'mario-die.WAV', 'mario-doh.WAV', 'mario-dream.WAV', 'mario-drown.WAV', 'mario-fire.WAV', 'mario-gameover.WAV', 'mario-haha.WAV', 'mario-hello.WAV', 'mario-herewego.WAV', 'mario-hoo.WAV', 'mario-imtired.WAV', 'mario-itsme.WAV', 'mario-letsgo.WAV', 'mario-lift.WAV', 'mario-lowonhealth.WAV', 'mario-mamamia.WAV', 'mario-okiedokie.WAV', 'mario-oof.WAV', 'mario-pain.WAV', 'mario-presstart.WAV', 'mario-pullup.WAV', 'mario-scream.WAV', 'mario-snore1.WAV', 'mario-snore2.WAV', 'mario-solongbowser.WAV', 'mario-theend.WAV', 'mario-ugh.WAV', 'mario-ungh.WAV', 'mario-wa.WAV', 'mario-waha.WAV', 'mario-whoa.WAV', 'mario-woo.WAV', 'mario-woohoo.WAV', 'mario-ya.WAV', 'mario-yah.WAV', 'mario-yahh.WAV', 'mario-yahoo.WAV', 'mario-yawn.WAV', 'mario-yippee.WAV', 'mips-hop.WAV', 'monkey1.WAV', 'peach1.WAV', 'peach2.WAV', 'peach3.WAV', 'peach4.WAV', 'peach5.WAV', 'peach6.WAV', 'peach7.WAV', 'peach8.WAV', 'peach9.WAV', 'penguin.WAV', 'pokeoutofsand.WAV', 'slide1.WAV', 'slide2.WAV', 'slide3.WAV', 'slide4.WAV', 'slide5.WAV', 'slide6.WAV', 'slide7.WAV', 'splash.WAV', 'step-floor.WAV', 'step-grass.WAV', 'step-longgrass.WAV', 'step-metalcap.WAV', 'step-wetwood.WAV', 'swim-above.WAV', 'swim-below.WAV', 'thwomp.WAV', 'timer.WAV', 'tinyzap.WAV', 'vulturewound.WAV', 'warp1.WAV', 'warp2.WAV', 'water.WAV', 'waterfall.WAV', 'waterfall2.WAV', 'wind.WAV', 'yoshi.WAV']
let page = document.getElementById('app');
const soundbox = [];

generate()
function generate() {
    let board = '';
    for (let i = 0; i < sounds.length; i++) {
        board += `
        <div class="knapp">
            <div class="navn">` + sounds[i] + `</div>
            <button onclick="controls(` + i + `, 'play')">Play</button> 
            <button onclick="controls(` + i + `, 'stop')">Pause</button>
        </div>`;
    }
    page.innerHTML = '<div class="brett">' + board + soundbox + '</div>';
}

function controls(number, command){
    if(command == 'play'){
    soundbox[number] = '<audio src="sounds/' + sounds[number] +'" loop autoplay></audio>';
    }
    if(command == 'stop'){
    soundbox[number] = '';
    }
    generate();
}