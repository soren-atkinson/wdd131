const gallery = document.querySelector('.images');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    
    if (e.target.tagName !== 'IMG') return;

    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    const full = src.replace('_sm', '_full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});


const menu = document.querySelector('nav');

const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('hide');
};

          