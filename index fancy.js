$("#form_id").submit(function(e) {
    e.preventDefault();

var rotdeg = rotationdegrees();
var input_value = document.createElement('img');

//add frame and rotation to each picture
input_value.classList.add('frame');
input_value.style.transform = rotationdegrees();

input_value.src = document.getElementById('link_input').value;
document.getElementById('container').appendChild(input_value);

document.getElementById('link_input').value = '';

//set rotation degrees
function rotationdegrees() {

	return "rotate(" + (Math.floor((Math.random() * 30) - 20)) + "deg)";
}

console.log(rotdeg);

});