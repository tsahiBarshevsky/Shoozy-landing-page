// find the element
const progressBar = document.querySelector('#progress');
const backToTop = document.querySelector('#backToTop');

// find the distance from top and change progress bar design
document.onscroll = () =>
{
    const distanceTop = window.pageYOffset;
    const pageHeigh = document.body.scrollHeight - window.innerHeight;
    progressBar.style.width = (distanceTop / pageHeigh) * 100 + '%';
    if (distanceTop >= 500)
        backToTop.style.display = "block";
    else
        backToTop.style.display = "none";
}

//Pop up meassage
var modal = document.getElementById("myModal");  //Get the modal
var link = document.getElementById("modalLink"); //Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; //Get the <span> element that closes the modal
link.onclick = function() //When the user clicks on the button, open the modal
{
    modal.style.display = "block";
}
span.onclick = function() //When the user clicks on <span> (x), close the modal
{ 
    modal.style.display = "none";
}

window.onclick = function(event) // When the user clicks anywhere outside of the modal, close it
{
    if (event.target == modal)
        modal.style.display = "none";
}