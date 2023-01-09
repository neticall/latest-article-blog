const container = document.querySelector('.container')
const box = document.querySelector('.box')

for (i=2 ; i<9 ;i++){
    container.appendChild(box.cloneNode(true))
    box.children[0].children[0].src='images/'+i+'.webp'
}