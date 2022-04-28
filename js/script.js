let menu = document.querySelector('#menu-bars');
let header = document.querySelector('#headers');
let coursor1 = document.querySelector('.cursor-1')
let coursor2 = document.querySelector('.cursor-2')
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onmousemove = (e) => {
    coursor1.style.top = e.pageY + 'px'
    coursor1.style.left = e.pageX + 'px'
    coursor2.style.top = e.pageY + 'px'
    coursor2.style.left = e.pageX + 'px'
}
document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        coursor1.classList.add('active');
        coursor1.classList.add('active');
    }

    links.onmouseleave = () =>{
        coursor1.classList.remove('active');
        coursor1.classList.remove('active');
    }

});