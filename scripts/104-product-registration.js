// identify or select the form
const productForm = document.querySelector("form"); // serch html elements


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

}