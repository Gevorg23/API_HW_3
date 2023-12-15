
//  API-ключ Unsplash
const apiKey = 'pingjSJ8xkY2XKNH8s-dDFtcnf4eZGbNVj3ZXlBhAdM';

const photoContainer = document.getElementById('photoContainer');
const photo = document.getElementById('photo');
const photographer = document.getElementById('photographer');
const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

// Функция для получения случайного изображения из Unsplash
async function getRandomPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        const data = await response.json();

        // Отображение изображения и информации о фотографе
        photo.src = data.urls.regular;
        photographer.textContent = `Photographer: ${data.user.name}`;
    } catch (error) {
        console.error('Error fetching photo:', error);
    }
}

// Функция для обработки лайка
function likePhoto() {
    let likes = parseInt(likeCount.textContent.split(':')[1].trim()) || 0;
    likes++;
    likeCount.textContent = `Likes: ${likes}`;
    // Сохранение количества лайков в локальное хранилище
    localStorage.setItem('likeCount', likes);
}

// Загрузка изображения при загрузке страницы
window.addEventListener('load', () => {
    getRandomPhoto();

    // Восстановление количества лайков из локального хранилища
    const savedLikes = localStorage.getItem('likeCount');
    if (savedLikes) {
        likeCount.textContent = `Likes: ${savedLikes}`;
    }
});
