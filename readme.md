# Hello, Good Evening, and Welcome
Welcome to the innards of [my website](http://daneden.me). This iteration has,
so far, lasted longer than any of its predecessors, which is a staggering
achievement considering the rate at which I once designed, implemented, tore
down, and redesigned my website. The big reasons for this are its flexibility—introduced primarily by a sturdy grid system—and its speed, something that is under constant scrutiny by myself, and hopefully, as a result, is always improving.
 
## Installation
If you want to run this site locally:

- `git clone` it somewhere
- Create a file called `_config_local.yml` with the following contents:
  ```
  production: false
  ```
- Run `bundle install` and then `bundle exec jekyll serve`
- Party.

## Who This Repo is For
This repo is mostly for me. I, like many of you, host my code on GitHub for reasons of portability, ease of work, and peace of mind. Beyond my own needs, I have also open-sourced this repo for you, the reader (and most likely developer), to explore the things that make my site tick.

## FAQ
<dl>
  <dt>Why aren’t you hosting this on GitHub?</dt>
  <dd>While GitHub lets you host Jekyll-powered sites directly on GitHub itself, they don’t allow many custom Jekyll plugins. They also don’t allow executable code such as PHP, which is pretty vital to many parts of the site.</dd>

  <dt>How is your site so blazing fast?</dt>
  <dd>Glad you asked! There are a few reasons. First, my site is hosted on one of <a href="https://clientarea.ramnode.com/aff.php?aff=088">RamNode</a>’s SSD servers (yes, that is an affiliate link, and yes, I will get money if you sign up), backed by Apache and Varnish cache on top to help cache requested resources. Second, the <a href="http://adaptive-images.com">adaptive images</a> project is helping me keep my bandwidth and your waiting times down by supplying scaled images. On top of that, Jekyll is helping me make my entire site completely static, which we all know is stupid fast. And finally, the whole domain is being supported by a <a href="https://www.cloudflare.com">CloudFlare</a> pro plan, with SPDY, CDN, and other acronyms.</dd>
</dl>
