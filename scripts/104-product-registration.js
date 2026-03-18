// identify or select the form
const productForm = document.querySelector("form"); // serch html elements

//identify the tbody
const body = document.getElementById("body");


//function to retrieve the info

function registerProduct(event) {

    event.preventDefault(); //prevent the browser from being refreshed
    console.log(event);

    //use name of inputs to get the values
    
    let name = productForm.elements["productName"].value;
    let price = productForm.elements["productPrice"].value;
    let category = productForm.elements["productCategory"].value;

    // create paragraph
    console.log(`
        Name: ${name}
        Price: ${price}
        Category: ${category}

    `);
        // use the values --1 DB-email-browser

        // create the row
        const row = document.createElement("tr");
        
 
        row.innerHTML = `
            <td>${name}</td>
            <td>${price}</td>
            <td>${category}</td>
            <td> <button class="btn btn-danger delete-btn">Delete</button> </td>

        `;

        // delete button
        row.querySelector(".delete-btn").addEventListener("click", function(){
            let confirmation = confirm("Are you sure you want to delete this item?");

            if(confirmation){
                row.remove();
            }
           
        });


        // add row to tbody
        body.appendChild(row);


}