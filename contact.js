
/*
function myFunction(){
    let x= document.getElementById('input1');
    let y= document.getElementById('input2');
    let z= document.getElementById('input3');

    let xValue= x.value;
    let yValue= y.value;
    let zValue= z.value;

    alert("Name: " + xValue + "\nEmail: " + yValue);


}
*/



//prevents page from refreshing upon hitting submit buttom
button1.addEventListener('click', function(event) {
    event.preventDefault();
});


//send alert message if any field is empty and send alert with thank you if all fields are filled
function myFunction(){

    //gets html object
    let x= document.getElementById('input1');
    let y= document.getElementById('input2');
    let z= document.getElementById('input3');
    
    //gets value of object and checks is it's empty
    //quotes represent empty field
    if ((x.value == "") || (y.value == "") || (z.value == "")){
        alert("Plase fill all required fields.")
        return false;
    }
    else{
        alert("Thank you for your submission. We'll get back to you soon.")
        return true;
    }

}