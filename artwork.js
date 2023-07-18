var disqus_config = function () {
  this.page.url = window.location.href;  // Set the page URL dynamically
  this.page.identifier = 'enlarged-image-' + Date.now();  // Set a unique identifier for the page
};

(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://https-hailace-github-io.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
