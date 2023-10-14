let home= document.getElementById('homebut');
let about = document.getElementById('aboutbut');
let contact = document.getElementById('contactbut');
let service = document.getElementById('servicebut');

let nav = document.getElementById('firstnav');
window.addEventListener('scroll', function navbar(){
if(window.pageYOffset>100){
    document.getElementById('firstnav').style.backgroundColor='#fff '; 
    // document.getElementById('aboutbut').style.color= 'black';
    // document.getElementById('contactbut').style.color= '#fff';  
    // document.getElementById('servicebut').style.color= '#fff'; 
    // document.getElementById('homebut').style.color= '#fff'; 
    
}else{
    document.getElementById('firstnav').style.backgroundColor='transparent';
    // document.getElementById('aboutbut').style.color= 'black';
    // document.getElementById('contactbut').style.color= 'black';  
    // document.getElementById('servicebut').style.color= 'black'; 
    // document.getElementById('homebut').style.color= 'blue'; 
}
  })

  window.addEventListener('scroll' , function navbar(){
    if(window.pageYOffset>590){
    document.getElementById('aboutbut').style.color='blue';
    document.getElementById('liab').style.borderBottom='4px solid blue';
  

    this.document.getElementById('homebut').style.color= ' black';

    }else{
        document.getElementById('aboutbut').style.color='black';
        document.getElementById('aboutbut').style.borderBottom='none';
        this.document.getElementById('homebut').style.color= ' blue';

    }
  })