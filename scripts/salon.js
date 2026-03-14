let salon = {
    name: "GrooMex",
    hours:"Open-8:00 AM Close-6:00 PM",
    phone: "555-555-5555",
    address: "123 Main St Gotham, NY 10001"

};
function displaySalonInfo(){
    let text = salon.name + " hours of operation: " + salon.hours + " we are located at " + salon.address + " Phone: " + salon.phone;
    document.getElementById("salonInfo").innerHTML = text;
}