const images = document.querySelectorAll('.single-product-photo > img');
const mainImage = document.querySelector('.main-image > img');


const showImage = (e) => {
  const imgSrc = e.target.src;
  mainImage.src = imgSrc;

}

images.forEach(image => {
  image.addEventListener('mouseover', showImage)}
);

images.forEach(image => {
  image.addEventListener('click', showImage)
})
