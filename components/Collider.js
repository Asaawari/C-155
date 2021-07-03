AFRAME.registerComponent("flying-bird", {
    init: function(){
        for(var i=1; i<=20; i++){
            var id = "bird${i}";
            var posX = (Math.random() * 3000 + (-1000));
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + (-1000))

            var position = {x:posX, y:posY, z:posZ}

            this.flyingBirds(id, position)
        }
    },
    flyingBirds: (id, position)=>{
        var terrain = document.querySelector("#terrain-entity");
        var bird = document.createElement("a-entity");
        bird.setAttribute("id", id);
        bird.setAttribute("position", position);
        bird.setAttribute("scale", {x:500, y:500, z:500});
        bird.setAttribute("gltf-model", "./models/flyingbird/scene.gltf");
        bird.setAttribute("animation-mixer", {})
        bird.setAttribute("static-body", {shape:"sphere", sphereRadius:5});
        bird.setAttribute("gameplay", {elementId: `#${id}`})
        terrain.appendChild(bird);
    }
})