function dropdown()
{
let dropdown_menu = document.getElementsByClassName("dropdown_menu");
if(dropdown_menu[0].style.maxHeight==="800px")
  {
    dropdown_menu[0].style.maxHeight="0";
    dropdown_menu[0].style.display="none";
  }
else
  {
    dropdown_menu[0].style.maxHeight="800px";
    dropdown_menu[0].style.display="block";
    dropdown_menu[0].style.borderRadius= "0";
    dropdown_menu[0].style.border="None";

  }
}
