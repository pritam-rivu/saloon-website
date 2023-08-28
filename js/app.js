const menuBtn = document.querySelector('header .header-top .row .menu-btn a')

const menuBlock = document.querySelector('header .header-top .col-3 .menu-block')


menuBtn.addEventListener('click', function(){
	menuBlock.classList.toggle('active')
})
