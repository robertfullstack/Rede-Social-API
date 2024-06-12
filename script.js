var listPublicacoes = document.getElementById("list-publicacoes");

fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json().then(posts => {
    fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json().then(images => {

        posts.forEach((post, index) => {
            const cards = document.createElement('div');

            cards.innerHTML = `
                    <div class="card-main">
                        <h5>${post.title}</h5>
                        <p>ID da Publicação: ${post.id}</p>
                        <div class="container-image-publi">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                            <img src="${images[index].thumbnailUrl}"/>
                        </div>
                    </div>
                   
        `;
            listPublicacoes.appendChild(cards)
        })
    }))
}));