function getDetails(){
    var xhttp =new XMLHttpRequest();

    var dept = document.getElementById("dept").value;
    
    xhttp.onreadystatechange = function(){

        if(xhttp.readyState == 4 && xhttp.status == 200){

            // Response data is parsed
            var data = JSON.parse(xhttp.responseText)

            if(dept != "All"){
                 data = data.filter( element => element.Department == dept)
            }
            
           // Data is formatted into table structure
            formatData(data);
            // console.log(data);
        }
    }

    xhttp.open("GET","shoppinglist.json",true);
    xhttp.send();
}

function formatData(data){

    var table = document.getElementById("shoppingtable");

    // Deletes existing rows

    for(var i=1;i<table.rows.length;){
        table.deleteRow(i);
    }
   
    // for every record in json file, the table gets a new row

    data.forEach(function(obj) {
        var tr = document.createElement("tr");

        // Creates attribute for bootstrap class - table-info
        var attribut = document.createAttribute("class");
        attribut.value="table-info";
        tr.setAttributeNode(attribut);
        console.log(tr.getAttribute("class"));

        //Populates the row with data from json file

        tr.innerHTML = "<td>" + obj.SerialNumber + "</td>" + "<td>" + obj.Name + "</td>" +
        "<td>" + obj.Quantity + "</td>" +"<td>" + obj.Unit + "</td>" + "<td>" + obj.Department + "</td>"
        + "<td>" + obj.Notes + "</td>";

        table.appendChild(tr);
    });
    

}