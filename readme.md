# Hello, Good Evening, and Welcome
Welcome to the innards of [my website](http://daneden.me). Fairly recently, my site and I went through a somewhat philosophical change, opting for speed over much else on the backend, and for editorial-inspired design over personal taste. (Of course, the editorial design only goes as far as my personal taste – and writing style – allow.)

## Who This Repo is For
This repo is mostly for me. I, like many of you, host my site on GitHub for reasons of portability, ease of work, and peace of mind. Beyond my own needs, I have also open-sourced this repo for you, the reader (and most likely developer), to explore the things that make my site tick.

## Points of Interest
Some things you may find interesting:

- [Uncompressed Sass files](https://github.com/daneden/daneden.me/tree/master/assets/scss)
- [adaptive-images.php](https://github.com/daneden/daneden.me/blob/master/adaptive-images.php) – this drop-in PHP file from [@responsiveimg](http://twitter.com/responsiveimg) makes responsive images a cinch. 10/10, would recommend.
- [Gruntfile.js](https://github.com/daneden/daneden.me/blob/master/Gruntfile.js) – the Grunt configuration used to help me develop locally. Pushing to the server triggers `jekyll build`, so any preprocessing is done locally.
- And finally, the [plugins directory](https://github.com/daneden/daneden.me/tree/master/_plugins). There are a few very useful Jekyll plugins in here, including HTML5 image/`figure` tags, ordinal dates, a cachebusting helper, and typographic helpers.

## FAQ

<dl>
  <dt>Why aren’t you hosting this on GitHub?</dt>
  <dd>While GitHub lets you host Jekyll-powered sites directly on GitHub itself, they don’t allow many custom Jekyll plugins. They also don’t allow executable code such as PHP, which is pretty vital to many parts of the site.</dd>

  <dt>Ew. *This* is the Animate.css page code?</dt>
  <dd>I know. It needs work. Why not help me move Animate.css to GitHub pages by opening or contributing to an issue on <a href="https://github.com/daneden/animate.css">the project</a> itself?</dd>

  <dt>How is your site so blazing fast?</dt>
  <dd>Glad you asked! There are a few reasons. First, my site is hosted on one of <a href="https://clientarea.ramnode.com/aff.php?aff=088">RamNode</a>’s SSD servers (yes, that is an affiliate link, and yes, I will get money if you sign up), backed by Apache and Varnish cache on top to help cache requested resources. Second, the <a href="http://adaptive-images.com">adaptive images</a> project is helping me keep my bandwidth and your waiting times down by supplying scaled images. On top of that, Jekyll is helping me make my entire site completely static, which we all know is stupid fast. And finally, the whole domain is being supported by a <a href="https://www.cloudflare.com">CloudFlare</a> pro plan, with SPDY, CDN, and other acronyms.</dd>
</dl>