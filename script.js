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
