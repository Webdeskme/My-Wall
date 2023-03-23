var htmlToImage = require('html-to-image');
var fs = require('fs');
const home = require('os').homedir();
const bootstrap = require('bootstrap');

function decodeBase64Image(dataString) {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
}
function commit(){
	const aff = [
        "You are enough",
        "You are going to seize the day",
        "Breathe, you can do this",
        "You are powerful",
        "You are getting better every day",
        "All you need is within you",
        "You are an unstoppable force of nature",
        "You can rise above the thoughts that make you angry or afraid",
        "Today will be a wonderful day",
        "You an achieve anything you strive for",
        "You can do this",
        "You are not governed by your problems",
        "You are led by your ambitions",
        "You will focus on what you can achieve",
        "Each and every day you are moving closer to achieving your goals",
        "You are intelligent and focused",
        "The obstacles in your life help you to evolve and grow",
        "Nothing is insurmountable",
        "You can be whoever you want to be",
        "You are not defined by your past, you are driven by your future",
        "Today will be a productive day",
        "You desere the space you occupy",
        "You are constantly growing and evolving into a better person",
        "Allow yourself to accept you for who you are",
        "You deserve to forgive and be forgiven",
        "You have survived difficult times before this, you will get through this as well",
        "Others care about you and your well-being",
        "You are loved",
        "Your intrusive thoughts do not speak for reality",
        "You are doing your best",
        "Your difficult times do not define you",
        "You belong in this world",
        "Your life has meaning",
        "Your mistakes do not define you",
        "To love oneself is the beginning of a lifelong romance."
]
var num = Math.floor(Math.random() * 35);
console.log(aff[num]);
document.getElementById('af').innerHTML = aff[num];
	document.getElementById('setGoal').innerHTML = document.getElementById('goal').value;
htmlToImage.toJpeg(document.getElementById('view1'), { quality: 1.00, width: 800, height: 600, backgroundColor: "coral" })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-wall.jpeg';
    link.href = dataUrl;

	var imageBuffer = decodeBase64Image(dataUrl);

var data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
var dir = home + "/My-Wall/";
fs.mkdir(dir + "Wallpaper/", { recursive: true }, (err) => {
  if (err) throw err;
});
fs.writeFile(dir + "Wallpaper/my-wall1.jpeg", data, {encoding: 'base64'}, function(err){
});
  });
}
