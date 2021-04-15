function switchUP(){
  var redBorder = document.getElementById("RBord").value,
      greBorder = document.getElementById("GBord").value,
      bluBorder = document.getElementById("BBord").value,

      redBackground = document.getElementById("RBack").value,
      greBackground = document.getElementById("GBack").value,
      bluBackground = document.getElementById("BBack").value,

      width = document.getElementById("width").value;

  let changedClass = document.getElementById("pirate");

  changedClass.style.borderColor = 'rgb('+ redBorder + ',' + greBorder + ',' + bluBorder + ')';
  changedClass.style.background = 'rgb('+ redBackground + ',' + greBackground + ',' + bluBackground + ')';
  changedClass.style.borderWidth = width + 'px';

}
