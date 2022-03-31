// document.getElementById('toggle').addEventListener('click',function(){
//     // alert('hi')
//     var darkMode =document.getElementsByTagName("body")
// })
var darkMode =document.getElementById('toggle');
darkMode.onclick =function(){
    document.body.classList.toggle("dark-mode");
    
}