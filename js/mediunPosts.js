const container = document.getElementById('posts');
const feedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@renansalmazio';

fetch(feedUrl)
  .then(res => res.json())
  .then(data => {
    data.items.slice(0, 10).forEach(post => {
      const article = document.createElement('div');
      article.className = 'post';

      article.innerHTML = `
        <h2><a href="${post.link}" target="_blank">${post.title}</a></h2>
        <p><strong>Publicado em:</strong> ${new Date(post.pubDate).toLocaleDateString()}</p>
        
      `;

      container.appendChild(article);
    });
  })
  .catch(err => {
    container.innerHTML = '<p>Não foi possível carregar os artigos 😢</p>';
    console.error(err);
  });