var input1=document.getElementById("pNameId");
var input2=document.getElementById("pPriceId");
var input3=document.getElementById("pCatId");
var input4=document.getElementById("pDescId");
 var ma5zan=[];
 var tmp;
 
 if(localStorage.getItem("localProduct")==null)
{
  ma5zan=[];
}
else{
  ma5zan= JSON.parse  (localStorage.getItem("localProduct"));
  displayProduct();
};
var regexpPrice=/^[0-9]{1,5}$/ ;
function addProduct()
{
  if(regexpPrice.test( input2.value))
  {
    oneProduct = {
      pName : input1.value ,
      pPrice : input2.value ,
      pCat : input3.value ,
      pDesc : input4.value ,
  } 
  ma5zan.push(oneProduct);
  localStorage.setItem("localProduct" , JSON.stringify(ma5zan));
  displayProduct();
  clear();
  }

   else
   {
    console.log("plese enter price number")};
};
function displayProduct()
{
  var hasalah="";
  for(var i=0 ; i<ma5zan.length ; i++)
  {
        hasalah+=`
                <tr class="text-white">
                <td> ${ma5zan[i].pName} </td>
                <td> ${ma5zan[i].pPrice} </td>
                <td> ${ma5zan[i].pCat} </td>
                <td> ${ma5zan[i].pDesc} </td>
              <td>  <button  onclick="update(${i})"   class="btn btn-outline-warning ">Update</button> </td>
              <td> <button onclick="Delete(${i})" class="btn btn-outline-danger">Delete</button> </td>
                        </tr>`
                 };
                 document.getElementById("tBody").innerHTML=hasalah;
};
function clear()
{
  input1.value="";
  input2.value="";
  input3.value="";
  input4.value="";
};
function Delete(dell)
{
  ma5zan.splice(dell , 1);
  displayProduct();
  localStorage.setItem("localProduct" , JSON.stringify(ma5zan)); 
};
function update(up)
{
    input1.value= ma5zan[up].pName;
    input2.value= ma5zan[up].pPrice;
    input3.value= ma5zan[up].pCat;
    input4.value= ma5zan[up].pDesc;
    document.getElementById("addBtn").style.display=" none";
   document.getElementById("update").style.display= "block";
   tmp=up;
};
function savechange()
{
  
  ma5zan[tmp].pName=input1.value;
  ma5zan[tmp].pPrice=input2.value;
  ma5zan[tmp].pCat=input3.value;
  ma5zan[tmp].pDesc=input4.value;
 displayProduct();
  localStorage.setItem("localProduct", JSON.stringify(ma5zan));
  clear();
};