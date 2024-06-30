//Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyAppendCat(name = "Ralph"){
    return cats.push(name);
}



beforeEach(function () {
    cats.length = 0;
  
    cats.destructivelyPrependCat("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat(name){
    return cats.unshift(name);
}



beforeEach(function () {
    cats.length = 0;
  
    cats.destructivelyRemoveLastCat("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveLastCat(){
    return cats.pop();
}




beforeEach(function () {
    cats.length = 0;
  
    cats.destructiveRemoveFirstCat("Milo", "Otis", "Garfield");
  });
  function destructivelyRemoveFirstCat() {
    cats.shift();
}




beforeEach(function () {
    cats.length = 0;
  
    cats.append("Milo", "Otis", "Garfield");
  });
 
  function appendCat(name = "New Cat") {
    return [...cats, name];
  }




beforeEach(function () {
 cats.length = 0;
  
cats.append("Milo", "Otis", "Garfield");
  });
  function prependCat(name) {
    return [name, ...cats];
}


beforeEach(function () {
    cats.length = 0;
     
   cats.removeLastCat("Milo", "Otis", "Garfield");
     });
     function removeLastCat() {
        return cats.slice(0, cats.length - 1);
    }



    beforeEach(function () {
        cats.length = 0;
         
       cats.removeLastCat("Milo", "Otis", "Garfield");
         });
    function removeFirstCat() {
        return cats.slice(1);
    }