const body = document.querySelector('body');
var mainImg = document.querySelector('.largeimg');
var textColor = document.querySelector('#main .description a');
var content = document.querySelector('#main .description p');
const bar = document.getElementById('bar')
const closeBtn = document.getElementById('close')
const navbar = document.getElementById('navbar')
var togglebrclr = document.querySelector('#navbar.active ul');
const smallImgs = document.querySelectorAll('.products img');
var blackTxt, blueTxt, vilotTxt, yellowTxt, redTxt, greenTxt;

blackTxt = 'Indulge in the bold and smoky flavors of BBQ Black Lays. These crispy potato chips are seasoned to perfection with a rich barbecue blend, delivering a satisfying crunch in every bite. Perfect for snacking or pairing with your favorite dip, BBQ Black Lays offer a savory and irresistible snack experience that will leave your taste buds craving more. Enjoy the smoky goodness of BBQ Black Lays today!'
blueTxt = "Savor the tangy delight of Salt and Vinegar Blue Lays. These crispy potato chips are a perfect blend of salty and tangy, offering a unique and mouthwatering flavor experience. With their vibrant blue packaging, they're not only delicious but also visually enticing. Dive into the bold taste of Salt and Vinegar Blue Lays for a snack that's sure to tantalize your taste buds."
vilotTxt = 'Experience the savory sensation of Gusto Bacon Violet Lays. These potato chips are crafted to perfection, infusing the rich and smoky flavor of bacon with a hint of violet essence. A delightful fusion of bold and unique tastes, Gusto Bacon Violet Lays are a must-try for those seeking a gourmet snack adventure. Elevate your snacking experience with the irresistible flavors of Gusto Bacon Violet Lays.'
yellowTxt = 'Classic Yellow Lays: Crisp, golden potato chips with a timeless, savory flavor. Each chip boasts a perfect balance of salt and potato goodness. A snacking icon loved for its satisfying crunch and irresistible taste. Indulge in the simple pleasure of Classic Yellow Lays today!'
greenTxt = 'Limon Green Lays: Zesty and refreshing potato chips with a tangy twist of lime. These vibrant green chips offer a citrusy burst of flavor thats both bold and invigorating. A perfect fusion of crunch and zest, Limon Green Lays deliver a delightful snacking experience thats anything but ordinary. Elevate your taste buds with a tangy kick today!'
redTxt = 'Wavy Original Red Lays: Ripples of pure potato perfection in a vibrant red package. These wavy chips offer a satisfying, hearty crunch and the authentic taste of classic potato chips. With their distinctive texture and rich flavor, Wavy Original Red Lays are an irresistible snack thats sure to satisfy your craving for a timeless favorite. Dive into a sea of flavor and waves of enjoyment!'

if (bar) {
    bar.addEventListener('click', function () {
        navbar.classList.add('active')
    })
}
if (closeBtn) {
    closeBtn.addEventListener('click', function () {
        navbar.classList.remove('active')
    })
}



smallImgs.forEach(function (img) {
    img.addEventListener('click', function (e) {
       
        mainImg.setAttribute('src', e.target.getAttribute('src'));
        
        if (e.target.getAttribute('src') === 'images/black.png') {
            body.classList.add('black');
            body.classList.remove('red', 'blue', 'vilote', 'yellow', 'green');
            textColor.style.color = 'black';
            content.textContent = blackTxt;
            togglebrclr.style.backgroundColor = 'black';

        } else if (e.target.getAttribute('src') === 'images/blue.png') {
            body.classList.add('blue');
            body.classList.remove('black', 'red', 'vilote', 'yellow', 'green');
            textColor.style.color = '#037aa5';
            content.textContent = blueTxt;
            togglebrclr.style.backgroundColor = '#037aa5';

        } else if (e.target.getAttribute('src') === 'images/vilote.png') {
            body.classList.add('vilote');
            body.classList.remove('black', 'blue', 'red', 'yellow', 'green');
            textColor.style.color = 'purple';
            content.textContent = vilotTxt;
            togglebrclr.style.backgroundColor = 'purple';

        } else if (e.target.getAttribute('src') === 'images/yellow.png') {
            body.classList.add('yellow');
            body.classList.remove('black', 'red', 'blue', 'vilote', 'green');
            textColor.style.color = 'yellow';
            content.textContent = yellowTxt;
            togglebrclr.style.backgroundColor = 'yellow';

        } else if (e.target.getAttribute('src') === 'images/red.png') {
            body.classList.add('red');
            body.classList.remove('black', 'blue', 'vilote', 'yellow', 'green');
            textColor.style.color = 'red';
            content.textContent = redTxt;
            togglebrclr.style.backgroundColor = 'red';

        } else if (e.target.getAttribute('src') === 'images/green.png') {
            body.classList.add('green');
            body.classList.remove('black', 'blue', 'vilote', 'yellow', 'red');
            textColor.style.color = 'green';
            content.textContent = greenTxt;
            togglebrclr.style.backgroundColor = 'green';
        }
    });
});
