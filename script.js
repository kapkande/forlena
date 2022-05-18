// fff.onclick = function(event){
//   (text_change).toggleClass(active)
// };




// var name = prompt('Как вас зовут?', );

// alert('Вам зовут ' + name + ' вредина!')


function checkname() {
  if (name == "лена")

  {
    return true;
  }
  if (name == "Лена")

  {
    return true;
  }  
  if (name == "Lena")

  {
    return true;
  }  
}

let name = prompt('Как вас зовут?', 'name');

if ( checkname(name) ) {
  alert( 'Вас зовут ' + name + ' вредина!' );
} else {
  alert( 'Вас зовут лена вредина1!' );
}




var Va = document.querySelector('#text_change');

console.log(Va.innerHTML);

var result = Va.innerHTML*Va.innerHTML;
console.log (result); 
 console.log(Va); 



 Va.innerHTML = '2';
  // var Variable = document.querySelector('h1'); 
  // var myVariable = document.querySelector('h2');
  
  // typeof Variable;
  // typeof myVariable;
  
  // console.log(Variable); 
  // console.log(myVariable); 

  // alert('hello!');

  
//     var result = Variable*myVariable;
//     console.log (result); 
    

//     Variable 
//     myVariable

    
// myVariable = '2';
// console.log(myVariable);

// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/firefox2.png');
//     } else {
//       myImage.setAttribute ('src','images/firefox-icon.png');
//     }
// }