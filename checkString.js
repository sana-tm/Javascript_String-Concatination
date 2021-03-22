
document.getElementById("submitText").onclick =function myFunction() {
  var str = document.getElementById("inputText").value;;
  var temp = "Py";
  var n = str.startsWith("Py");
  
  if(n==true)
  document.getElementById("result").innerHTML = str;
  else
  {
  var res = temp.concat(str);
  document.getElementById("result").innerHTML = res;
  }
}