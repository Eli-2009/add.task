let img1 = document.createElement('img');
img1.src = 'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-trees-of-yellow-leaves-free-image.jpeg?w=600&quality=80';
img1.style.width = '250px';
img1.style.height = '160px';
document.body.appendChild(img1);




let img2 = document.createElement('img');
img2.src = 'https://tinypng.com/static/images/boat.png';
img2.style.width = '250px';
img2.style.height = '160px';
document.body.appendChild(img2);



let img3 = document.createElement('img');
img3.src = 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg';
img3.style.width = '250px';
img3.style.height = '160px';
document.body.appendChild(img3);




let img4 = document.createElement('img');
img4.src = 'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg';
img4.style.width = '250px';
img4.style.height = '160px';
document.body.appendChild(img4);


img1.addEventListener('click', () =>{
    img1.style.width = '350px'
    img1.style.height = '200px'

    img2.style.width = '250px';
    img2.style.height = '160px';

    img3.style.width = '250px';
    img3.style.height = '160px';

    img4.style.width = '250px';
    img4.style.height = '160px';
})


img2.addEventListener('click', () =>{
    img2.style.width = '350px'
    img2.style.height = '200px'

    img1.style.width = '250px';
    img1.style.height = '160px';

    img3.style.width = '250px';
    img3.style.height = '160px';

    img4.style.width = '250px';
    img4.style.height = '160px';
})


img3.addEventListener('click', () =>{
    img3.style.width = '350px'
    img3.style.height = '200px'

    img1.style.width = '250px';
    img1.style.height = '160px';

    img2.style.width = '250px';
    img2.style.height = '160px';

    img4.style.width = '250px';
    img4.style.height = '160px';
})


img4.addEventListener('click', () =>{
    img4.style.width = '350px'
    img4.style.height = '200px'

    img2.style.width = '250px';
    img2.style.height = '160px';

    img3.style.width = '250px';
    img3.style.height = '160px';

    img1.style.width = '250px';
    img1.style.height = '160px';
})