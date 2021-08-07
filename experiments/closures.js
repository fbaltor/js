// Em vez de fazer:
//
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
//
//Ele faria assim:
//
document.getElementById('size-12').onclick = size(12);
document.getElementById('size-14').onclick = size(14);
document.getElementById('size-16').onclick = size(16);
