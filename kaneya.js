const loadData = () =>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data =>displayData(data))
}
loadData()
function displayData(data){
    console.log(data)
  document.getElementById('submit').addEventListener('click',function(){
   const dataFild = document.getElementById('quote');
   dataFild.innerText=data.quote;
    
 })
 
}