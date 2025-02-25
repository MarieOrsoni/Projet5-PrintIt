//Banner images - slides
const slides = [	
	{
	"image":"slide1.jpg",
	"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
{
	"image":"slide2.jpg",
	"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"	
},
	{		
	"image":"slide3.jpg",
	"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	"image":"slide4.png",
	"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//Calling html elements for banner slideshow 
const dots = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const bannerImg = document.querySelector(".banner-img");
const caption = document.querySelector('#banner p');
let index = 0;

//Insert dots
function displayDots() {
	for (let i = 0; i < slides.length; i++)
		{ const dot = document.createElement("div");
			dot.classList.add("dot");
			dots.appendChild(dot);
			if (i === index) {
				dot.classList.add("dot_selected")
			}
		}
}
displayDots();

//Arrow Right
function clickRight () {
	arrowRight.addEventListener("click", () => {
		const dotList = document.querySelectorAll(".dots .dot");
		dotList[index].classList.remove("dot_selected");
		if (index === slides.length -1) { 
			index = 0;
		} else {
			index++; 
		}
		bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
		caption.innerHTML = slides[index].tagLine;
		dotList[index].classList.add("dot_selected");
	});
	}

clickRight();

//Arrow Left
function clickLeft () {
	arrowLeft.addEventListener("click", () => {
		const dotList = document.querySelectorAll(".dots .dot");
		dotList[index].classList.remove("dot_selected");
		if (index === 0) { 
			index = slides.length -1;
		} else {
			index--;
		}
		bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
		caption.innerHTML = slides[index].tagLine;
		dotList[index].classList.add("dot_selected");
	});
	}
	clickLeft();




