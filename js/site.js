var aboutExpand = 0;

var container 	   = document.getElementById('main');
var aboutContainer = document.getElementById('aboutContainer');

var btnAboutOpen	   = document.getElementById('openAbout');
var btnAboutClose 	   = document.getElementById('closeAbout');

btnAboutOpen.addEventListener('click', expand_about, false);
btnAboutClose.addEventListener('click', close_about, false);

function expand_about(){
	if (aboutExpand==0){
		container.className += 'expand-about';
		aboutExpand = 1;
	}
}

function close_about(){
	if (aboutExpand==1){
		container.className = container.className.replace(/(?:^|\s)expand-about(?!\S)/, '');
		aboutExpand = 0;
	}
}