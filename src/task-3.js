const URL = 'https://jsonplaceholder.typicode.com/albums';

const toggleLoading = () => {
    const loadingHTML = document.querySelector('#loader');
    const isLoadingHide = loadingHTML?.hasAttribute('hidden');
    if (isLoadingHide) {
        loadingHTML.removeAttribute('hidden');
    } else {
        loadingHTML.setAttribute('hidden', '');
    }
}

const listHTML = document.querySelector('#data-container');

const renderAlbums = async () => {
    try {
        listHTML?.textContent = '';
        toggleLoading();

        const response = await fetch(URL);
        if (!response.ok)
            throw new Error(`${response.status}: ${response.statusText}`);

        const albums = await response.json();
        console.log(albums);

        albums.forEach(album => {
            const liElem = document.createElement('li');
            liElem.textContent = album.title;
            listHTML?.append(liElem);
        });
    } catch (error) {
        listHTML?.textContent = 'Произошла ошибка в получении данных об альбомах...';
        console.error(error);
    } finally {
        toggleLoading();
    }
}

renderAlbums();