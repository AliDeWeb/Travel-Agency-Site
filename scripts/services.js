'use strict';
let $ = document;
let btn_container = $.querySelector('#nav-container');
let btn = $.querySelector('#nav');
let a_svg = $.querySelector('#svg-container-a');

a_svg.addEventListener('click', function(){
    btn_container.classList.remove('hidden');
})