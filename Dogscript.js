function main(){
    console.log("Game begin!")
    nextTick = -1
    var sceneEl = document.querySelector('a-scene');
    var dog = sceneEl.querySelector('#dog');

    loadDog()
    addBounceAnimation()

    window.addEventListener("keydown", function (event) {
    	if(event.key == "r"){
            dog.emit('bounce')
        }
    })

    dog.addEventListener('click', function() {
      dog.emit('bounce');
    });
}

function loadDog(){
    dog.setAttribute('scale', {x: .5, y: .5, z: .5}, true);
}

function addBounceAnimation() {
    var dogScale = dog.getAttribute('scale');
    var dogScale2 = Object.assign({}, dogScale);
    dogScale2.y = dogScale2.y * 1.5
    dogScale2.x = dogScale2.x * 1.10
    dogScale2.z = dogScale2.z * 1.10
    var dogPos = dog.getAttribute('position');
    var dogPos2 = Object.assign({}, dogPos);
    dogPos2.y = dogPos2.y + (dog.getAttribute('geometry').height * 0.5)
    var len = 500

    console.log(dogScale)
    console.log(dogScale2)
    console.log(dogPos)
    console.log(dogPos2)

    dog.setAttribute('animation__scale1',{
        property:'scale',
        from: vec3tostr(dogScale),
        to: vec3tostr(dogScale2),
        startEvents: 'bounce',
        dur: len
    })
    dog.setAttribute('animation__pos1',{
        property:'position',
        from: vec3tostr(dogPos),
        to: vec3tostr(dogPos2),
        startEvents: 'bounce',
        dur: len
    })
    dog.setAttribute('animation__scale2',{
        property:'scale',
        from: vec3tostr(dogScale2),
        to: vec3tostr(dogScale),
        startEvents: 'bounce',
        delay: len,
        dur: len
    })
    dog.setAttribute('animation__pos2',{
        property:'position',
        from: vec3tostr(dogPos2),
        to: vec3tostr(dogPos),
        startEvents: 'bounce',
        delay: len,
        dur: len
    })
}

function vec3tostr(vec3){
    return vec3.x + " " + vec3.y + " " + vec3.z
}
