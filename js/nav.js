//nav,
function setup(){

	//nav
	const nav = document.querySelector('nav');

	//banner
	const banner = document.querySelector('.banner');
	const text1 = document.querySelector('.text1');
	const text2 = document.querySelector('.text2');
	
	//skill
	const skill = document.querySelector('.skill');
	const skillTitle = document. querySelector('.skill__title__text');
	const skillText = document.createElement('span');
	skillText.innerHTML = 'my&nbsp;skills';

	//qualifications
	const qualifications = document.querySelector('.qualifications');
	const qualificationsTitle = document. querySelector('.qualifications__title__text');
	const qualificationsText = document.createElement('span');
	qualificationsText.innerHTML = 'my&nbsp;qualifications';

	//nav-function
	FixNav(nav,skill,skillText,skillTitle,qualifications,qualificationsTitle,qualificationsText);

	//banner-function 
	bannerTextAnime(text1,text2);
	bannerCarAnime();
	bannerBackground();
	setInterval(bannerBackground,100);

	console.log('123');


}

//nav
const FixNav=(nav,skill,skillText,skillTitle,qualifications,qualificationsTitle,qualificationsText)=>{

	const bannerText = document.querySelector('.banner__text');
	const bannerAnime = document.querySelector('.banner__anime');
	const navHeight = nav.getBoundingClientRect().height;
	const car = document.querySelector('.carImg');

	window.addEventListener('scroll',()=>{
		const scrollHeight = Math.floor(window.pageYOffset);

		skillTitleAnime(scrollHeight,skill,skillText,skillTitle);
		qualificationsTextAnime(scrollHeight,qualifications,qualificationsTitle,qualificationsText);

		if( scrollHeight > 0 ){
			nav.classList.add('fix-nav');
			bannerText.style.display = 'none';
			bannerAnime.style.display = 'flex';

		}else{
			nav.classList.remove('fix-nav');
			bannerText.style.display = 'block';
			bannerAnime.style.display = 'none';
		}
	});
	return FixNav;
}

//bannerAnime
const bannerTextAnime=(text1,text2)=>{

	text1.innerHTML = text1.textContent.replace(/\S/g, "<span>$&</span>")
	text2.innerHTML = text2.textContent.replace(/\S/g, "<span>$&</span>")

	anime.timeline({
		loop:true
	})

	.add({
		targets:'.text1 span',
		// translateY: [start value, End Value],
		translateY:[-600, 0],
		scale:[10,1],
		opacity:[0,1],
		easing:'easeOutExpo',
		duration:1500, //1.5se/
		delay:anime.stagger(100),
	})
	.add({
		targets:'.text1 span',
		// translateY: [start value, End Value],
		translateX:[0, -1000],
		scale:[1,1],
		opacity:[1,0],
		easing:'easeOutExpo',
		duration:2000, //1.5se/
		delay:anime.stagger(50),
	})

	.add({
		targets:'.text2 span',
		// translateY: [start value, End Value],
		translateX:[-1000, 0],
		scale:[1,1],
		opacity:[0,1],
		easing:'easeOutExpo',
		duration:1000, //1.5se/
		delay:anime.stagger(100),
	})

	.add({
		targets:'.text2 span',
		// translateY: [start value, End Value],
		translateY:[0, 0],
		scale:[1,5],
		opacity:[1,0],
		easing:'easeOutExpo',
		duration:2000, //1.5se/
		delay:anime.stagger(100),
	})
}

//bannerCarAnime
const bannerCarAnime=()=>{

	const banner = document.querySelector('.banner');
	const car = document.querySelector('.carImg');
	const infininte = document.querySelector('.banner__anime');
	const bannerHeight= banner.getBoundingClientRect().height;
	console.log(car.style.left);

	infininte.addEventListener('animationend',(e)=>{
		if(e.target === e.currentTarget){
			window.addEventListener('scroll',()=>{
				const scrollHeight = Math.floor(window.pageYOffset);
				if(scrollHeight===0){
					window.location.reload()
				}else{
					car.style.left = scrollHeight / 80  + 1 + 'rem';
				}
			})
		}
	})
}

//bannerBackground
const bannerBackground=()=>{

	const bg = document.querySelector('.banner__background')
	const bgSpan = document.createElement('span')
	const colors=["#2196f3","#e91e63","#ffeb3b","#74ff1d"]

	let size = Math.random()*50;

	bgSpan.style.width = 20 + size + "px";
	bgSpan.style.height = 20 + size + "px";
	bgSpan.style.top = Math.random() * bg.offsetHeight + "px";
	bgSpan.style.left = Math.random() * bg.offsetWidth + "px";

	const bgColor = colors[Math.floor(Math.random()*colors.length)];
	bgSpan.style.background = bgColor;

	bg.appendChild(bgSpan);
	setTimeout(function(){
		bgSpan.remove();
	},5000)

}

//skillTitleAnime
const skillTitleAnime=(scrollHeight,skill,text,skillTitle)=>{

	const skillHeight = Math.round(skill.getBoundingClientRect().height / 2);
	const skillTitleSpan = document.querySelector('.skill__title__text span')

	if(scrollHeight > skillHeight ){
		skillTitleSpan ? '':skillTitle.appendChild(text);
		skillIconStyle();
	}

}

//skillIconStyle
const skillIconStyle=()=>{

	const skillIcon = document.querySelectorAll('.skill__sheet__card .skill__sheet__icon');

	const iconList = [
		{icon:'&#xe632;',color:'#fc490b'},
		{icon:'&#xeb76;',color:'#019FE8'},
		{icon:'&#xe636;',color:'#F0DB4E'},
		{icon:'&#xebdd;',color:'#0868AB'},
		{icon:'&#xe799;',color:'#00C87D'},
		{icon:'&#xec8c;',color:'#CD669B'},
		{icon:'&#xe600;',color:'#0277BD'},
		{icon:'&#xe6e0;',color:'#1C83F7'},
	];

	for(i=0;i<skillIcon.length;i++){
		const span = document.createElement('span');
		skillIcon[i].querySelector('span') ? '': skillIcon[i].appendChild(span);
		span.innerHTML = iconList[i].icon;
		span.style.color= iconList[i].color;
	}

}

//qualificationsTextAnime
const qualificationsTextAnime=(scrollHeight,qualifications,qualificationsTitle,text)=>{

	const qualificationsHeight = Math.floor(qualifications.offsetTop / 1.6);
	const qualificationsSpan = document.querySelector('.qualifications__title__text span')
	if(scrollHeight > qualificationsHeight ){
		qualificationsSpan ? '':qualificationsTitle.appendChild(text);
		qualificationsImgAnime(scrollHeight,qualifications);
	}
}

//qualificationsImgAnime
const qualificationsImgAnime=()=>{
	const qualificationsImgContent = document.querySelectorAll('.qualifications__img .qualifications__img__content ');
	for(var i=0;i<qualificationsImgContent.length;i++){
		qualificationsImgContent[i].classList.add('acvtive')
	}
}

setup();
