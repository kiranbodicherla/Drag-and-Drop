function allowDrop(e){
    e.preventDefault();
}
function dragStart(e){
   e.dataTransfer.setData("src", e.target.id);

}
function drop(e){
    e.preventDefault();
    var data = document.getElementById(e.dataTransfer.getData("src"));
    var para = data.parentNode;
    var rest = e.currentTarget.firstElementChild;
    e.currentTarget.replaceChild(data, rest);
    para.appendChild(rest);
}