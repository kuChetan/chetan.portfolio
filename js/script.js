particlesJS("particles-js", {

particles:{

number:{value:80},

color:{value:"#38bdf8"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

line_linked:{
enable:true,
distance:150,
color:"#38bdf8",
opacity:0.4,
width:1
},

move:{
enable:true,
speed:3
}

},

interactivity:{

events:{
onhover:{enable:true,mode:"repulse"},
onclick:{enable:true,mode:"push"}
},

modes:{
repulse:{distance:120},
push:{particles_nb:4}
}

},

retina_detect:true

});

const text="Senior Technical Consultant | DevOps Engineer";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,50);

}

}

typing();
