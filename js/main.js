
var btn = document.getElementById("detail");

var person = [{
    pic: "images/pic1.jpg",
    name: "Mahatma Gandhi",
    details: "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. "
},
{
    pic: "images/pic2.jpg",
    name: "Jawaharlal Nehru",
    details: "Jawaharlal Nehru was an Indian anti-colonial nationalist, secular humanist, social democrat, and author who was a central figure in India during the middle third of the 20th century. Nehru was a principal leader of the Indian nationalist movement "
},
{
    pic: "images/pic3.jpg",
    name: "Sardar Vallabhai Patel",
    details: "Vallabhbhai Jhaverbhai Patel, commonly known as Sardar Vallabhai Patel, was an Indian independence nationalist, barrister and statesman who served as the first Deputy Prime Minister and Home Minister of India from 1947 to 1950 "
},
{
    pic: "images/pic4.jpg",
    name: "Kamaraj",
    details: "Kumaraswami Kamaraj, popularly known as Kamarajar was an Indian independence activist and politician who served as the Chief Minister of Madras State from 13 April 1954 to 2 October 1963."
}

]

btn.addEventListener("click", function () {

    var num = Math.round(Math.random() * 3);



    var photo = document.getElementById("image");
    photo.src = person[num].pic;

    var para = document.getElementById("para");
    para.innerHTML = person[num].name;
    para.style.fontWeight = "bold";
    para.style.padding = "15px";
    para.style.paddingLeft = "0px";

    var para2 = document.getElementById("para2")
    para2.innerHTML = person[num].details;
    para2.style.marginBottom = "15px";

})
