var products=[];
getStoredProducts(); 
console.log(products);
var Length=products.length;
for(var i=0;i<Length;i++){
  PreviousData(i);  
}
console.log(products[0].Name);
function PreviousData(i)
{
    var PrevId=products[i].Id;
    var PrevName=products[i].Name;
    var PrevDesc=products[i].Description;
    var PrevPrice=products[i].Price;
    var PrevQuantity=products[i].Quantity;
    var ProductList=document.getElementById("ProductsList");
            var Element = document.createElement("li");
            var Node=document.createTextNode("Name : "+PrevName+" "+"Description : "+PrevDesc+" "+" Price : "+PrevPrice+" "+"Quantity : "+PrevQuantity);
            Element.appendChild(Node);
            ProductList.appendChild(Element);
            var Button=document.createElement("Button");					  
		    Button.innerHTML = "Delete";
		    Element.appendChild(Button);
		    Button.addEventListener('click',function()
		  {
			Element.removeChild(Node);		
			Element.removeChild(Button);
            ProductList.removeChild(Element);
            DeleteFromArray(PrevId);
		  }); 	
          ProductList.appendChild(Element); 
          var EditButton=document.createElement("Button");					  
		    EditButton.innerHTML = "Edit";
		    Element.appendChild(EditButton); 
                  EditButton.addEventListener('click',function()
		  {
            document.getElementById('Form').style.visibility='visible';
            document.getElementById("Products").style.visibility = "visible";
      		document.getElementById('Add').innerHTML="Update";
      		document.getElementById("Name").value=PrevName;
      		document.getElementById("Desc").value=PrevDesc;
      		document.getElementById("Price").value=PrevPrice;
      		document.getElementById("Quantity").value=PrevQuantity;
            Element.removeChild(Node);		
			Element.removeChild(Button);
            ProductList.removeChild(Element);
      		DeleteFromArray(PrevId);      
		  });
            ProductList.appendChild(Element);
            document.getElementById("Name").value=" ";
            document.getElementById("Desc").value=" ";
            document.getElementById("Price").value=" ";
            document.getElementById("Quantity").value=" ";
}
            var productId= Length+1;
			function AddProduct()
			{
				document.getElementById("AddProductButton").style.visibility = "hidden";  //hides add product button
				document.getElementById("Form").style.visibility="visible";        //shows the form
				document.getElementById("Products").style.visibility = "hidden"; 
                document.getElementById("Save").style.visibility = "hidden";
			}
            function AddToList()
            {
                var objProduct = new Object();
               document.getElementById("Form").style.visibility = "hidden";
               document.getElementById("AddProductButton").style.visibility = "visible";
               objProduct.Id = productId;
               objProduct.Name = document.getElementById("Name").value;
               objProduct.Description = document.getElementById("Desc").value;
               objProduct.Price = document.getElementById("Price").value;
               objProduct.Quantity = document.getElementById("Quantity").value;
               products.push(objProduct);
               productId++;
            console.log(objProduct);
            document.getElementById("AddProductButton").style.visibility = "visible";
            var ProductList=document.getElementById("ProductsList");
            var Element = document.createElement("li");
            var Node=document.createTextNode("Name : "+objProduct.Name+" "+"Description : "+objProduct.Description+" "+" Price : "+objProduct.Price+" "+"Quantity : "+objProduct.Quantity);
            Element.appendChild(Node);
            ProductList.appendChild(Element);
            var Button=document.createElement("Button");					  
		    Button.innerHTML = "Delete";
		    Element.appendChild(Button);
		    Button.addEventListener('click',function()
		  {
			Element.removeChild(Node);		
			Element.removeChild(Button);
            ProductList.removeChild(Element);
            DeleteFromArray(objProduct.Id);
		  }); 	
          ProductList.appendChild(Element); 
          var EditButton=document.createElement("Button");					  
		    EditButton.innerHTML = "Edit";
		    Element.appendChild(EditButton); 
                  EditButton.addEventListener('click',function()
		  {
            document.getElementById('Form').style.visibility='visible';
            document.getElementById("Products").style.visibility = "visible";
      		document.getElementById('Add').innerHTML="Update";
      		document.getElementById("Name").value=objProduct.Name;
      		document.getElementById("Desc").value=objProduct.Description;
      		document.getElementById("Price").value=objProduct.Price;
      		document.getElementById("Quantity").value=objProduct.Quantity;
            Element.removeChild(Node);		
			Element.removeChild(Button);
            ProductList.removeChild(Element);
      		DeleteFromArray(objProduct.Id);      
		  });
            ProductList.appendChild(Element);
            document.getElementById("Name").value=" ";
            document.getElementById("Desc").value=" ";
            document.getElementById("Price").value=" ";
            document.getElementById("Quantity").value=" ";
		 }
function MyCart()
{
    document.getElementById("Products").style.visibility = "visible";
    document.getElementById("Save").style.visibility="visible";
    document.getElementById("Form").style.visibility="hidden"; 
}
function DeleteFromArray(Id)
{
    var Index=products.indexOf(Id);
    products.splice(Index,1);
    console.log(products);
}
function storeProducts() 
{
 //localStorage.products = JSON.stringify(products);
 localStorage.setItem("products", JSON.stringify(products));
    alert("Data Saved");
} 
function Logout()
    {
        window.location.href="Main.html";
    }

function getStoredProducts() 
{
//{ if (!localStorage.products) 
//{ // default to empty array 
 //   localStorage.products = JSON.stringify([]); }
 //document.getElementById("Products").style.visibility = "visible";
 //alert("Data Retrived");
 //return localStorage.products;
  var PrevData = localStorage.getItem("products");
            products= JSON.parse(PrevData); 

}