//banner
// function setup(){

// 	const text1 = document.querySelector('.text1');
// 	const text2 = document.querySelector('.text2')
	
// 	bannerTextAnime(text1,text2);
// 	bannerCarAnime();
// }

// //bannerAnime
// const bannerTextAnime=(text1,text2)=>{

// 	text1.innerHTML = text1.textContent.replace(/\S/g, "<span>$&</span>")
// 	text2.innerHTML = text2.textContent.replace(/\S/g, "<span>$&</span>")

// 	anime.timeline({
// 		loop:true
// 	})

// 	.add({
// 		targets:'.text1 span',
// 		// translateY: [start value, End Value],
// 		translateY:[-600, 0],
// 		scale:[10,1],
// 		opacity:[0,1],
// 		easing:'easeOutExpo',
// 		duration:1500, //1.5se/
// 		delay:anime.stagger(100),
// 	})
// 	.add({
// 		targets:'.text1 span',
// 		// translateY: [start value, End Value],
// 		translateX:[0, -1000],
// 		scale:[1,1],
// 		opacity:[1,0],
// 		easing:'easeOutExpo',
// 		duration:2000, //1.5se/
// 		delay:anime.stagger(50),
// 	})

// 	.add({
// 		targets:'.text2 span',
// 		// translateY: [start value, End Value],
// 		translateX:[-1000, 0],
// 		scale:[1,1],
// 		opacity:[0,1],
// 		easing:'easeOutExpo',
// 		duration:1000, //1.5se/
// 		delay:anime.stagger(100),
// 	})

// 	.add({
// 		targets:'.text2 span',
// 		// translateY: [start value, End Value],
// 		translateY:[0, 0],
// 		scale:[1,5],
// 		opacity:[1,0],
// 		easing:'easeOutExpo',
// 		duration:2000, //1.5se/
// 		delay:anime.stagger(100),
// 	})
// }

// //bannerCarAnime
// const bannerCarAnime=()=>{

// 	const banner = document.querySelector('.banner');
// 	const car = document.querySelector('.carImg');
// 	const infininte = document.querySelector('.banner__anime');
// 	const bannerHeight= banner.getBoundingClientRect().height;
// 	console.log(car.style.left);

// 	infininte.addEventListener('animationend',(e)=>{
// 		if(e.target === e.currentTarget){
// 			window.addEventListener('scroll',()=>{
// 				const scrollHeight = Math.floor(window.pageYOffset);
// 				if(scrollHeight===0){
// 					window.location.reload()
// 				}else{
// 					car.style.left = scrollHeight / 80  + 1 + 'rem';
// 				}
// 			})
// 		}
// 	})
// }

// setup();