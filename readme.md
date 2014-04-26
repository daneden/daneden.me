# Hello, Good Evening, and Welcome
Welcome to the innards of [my website](http://daneden.me). Fairly recently, my site and I went through a somewhat philosophical change, opting for speed over much else on the backend, and for editorial-inspired design over personal taste. (Of course, the editorial design only goes as far as my personal taste – and writing style – allow.)

## Who This Repo is For
This repo is mostly for me. I, like many of you, host my site on Bitbucket for reasons of portability, ease of work, and peace of mind. Beyond my own needs, I have also open-sourced this repo for you, the reader (and most likely developer), to explore the things that make my site tick.

## Points of Interest
Some things you may find interesting:

- [Uncompressed Sass files](https://bitbucket.org/daneden/daneden.me/src/2a066a999866824bd25253c1adfe06cfe399e370/_assets/scss/?at=master)
- [Gruntfile.js](https://bitbucket.org/daneden/daneden.me/src/2a066a999866824bd25253c1adfe06cfe399e370/Gruntfile.js?at=master) – the Grunt configuration used to help me develop locally. Pushing to the server triggers `jekyll build`, so any preprocessing is done locally.
- And finally, the [plugins directory](https://bitbucket.org/daneden/daneden.me/src/2a066a999866824bd25253c1adfe06cfe399e370/_plugins/?at=master). There are a few very useful Jekyll plugins in here, including HTML5 image/`figure` tags, ordinal dates, and typographic helpers.

## Workflow
The source code here on Bitbucket is all good and well, but there’s still a vital missing ingredient between here and the live site. Here’s a short overview of how I modify and build my site;

1. [Grunt](http://gruntjs.com) is always running when I’m writing or designing. It handles a few things, as defined in my Gruntfile, namely:
  - SVGMin to minify my SVG files and remove unnecessary code
  - SVG2PNG to make PNG copies of my SVG files
  - Sass to make authoring my stylesheets easier
  - Autoprefixer to prefix CSS properties and values as needed
  - Jekyll to build my site into static HTML files
  - Finally, a “watch” task to watch my files for changes and perform the above tasks
2. Jekyll builds my site in a `_site` directory, which is ignored by Git so that I don’t end up with duplicate content and unnecessary bloat on Bitbucket.
3. When my post or design changes are in a state I’m happy with, I commit my changes and push to Bitbucket.
4. When Bitbucket recieves my changes, a post-commit hook is called. This is a simple URL pointing to a PHP file on my server that is accessed by Bitbucket—something along the lines of `http://1.2.3.4/pull.php?repo=daneden.me` (I have this post-commit hook for several of my Bitbucket repos, hence the `repo` variable in the URL).
5. The PHP script on my server pulls the changes from Bitbucket into the desired directory, and then runs `jekyll build`.
6. So long as the build succeeds, the site is now updated!

The contents of the PHP script are the life and blood of this workflow, so here’s a modified/simplified version:

```php
<?php
$path = null;

// Get the Repo variable
if($repo = $_GET["repo"]) {

  switch($repo) {
    case 'daneden.me':
      $path = '/server/path/to/daneden.me/';
      break;
    case 'brills':
      // In data-sensitive cases, staging servers are pulled automatically, but production pulls are done manually
      $path = '/server/path/to/dev.brills.me/';
      break;
    case 'justmytype':
      $path = '/server/path/to/justmytype.co/';
      break;
  }

  // CD to our target directory and pull from GitHub
  $output = 'cd ' . $path . ' && git pull';

  // If it's not just PHP or static files, we need to do some more work
  if($repo == 'daneden.me') {
    // Set production environment variable and build using Jekyll
    $output .= ' && export JEKYLL_ENV=production && jekyll build';
  }

  // If we successfully execute our git pull...
  if ($exec = shell_exec($output)) {
    // Pull succeeded!
    echo "<b class='txt'>$ " . $output . "</b>";
    echo "<b>Nice work, kid. Don&rsquo;t get cocky.</b>";
    echo "<br /><pre>" . $exec . "</pre>";
  } else {
    // Pull failed, let's give 'em what we know.
    echo "<b class='txt'>$ " . $output . "</b><br/>";
    echo "<strong>Something went wrong. This is all I&rsquo;ve got.</strong><br>";
    echo $exec;
    echo '<br><i>Output:</i> ' . $output . '<br><i>Path:</i> ' . $path . '<br><i>Repo:</i> ' . $repo;
  }
} else {
  // Repo URL variable not present.
  // Someone got here by accident. Let's give them something to watch.
  echo '<img src="http://24.media.tumblr.com/tumblr_mbal9whEhn1rogl95o1_500.gif" alt="Nothing to see here.">';
} ?>
```

## FAQ

<dl>
  <dt>Why aren’t you hosting this on GitHub?</dt>
  <dd>While GitHub lets you host Jekyll-powered sites directly on GitHub itself, they don’t allow many custom Jekyll plugins. They also don’t allow executable code such as PHP, which is pretty vital to many parts of the site.</dd>

  <dt>How is your site so blazing fast?</dt>
  <dd>Glad you asked! There are a few reasons. First, my site is hosted on one of <a href="https://clientarea.ramnode.com/aff.php?aff=088">RamNode</a>’s SSD servers (yes, that is an affiliate link, and yes, I will get money if you sign up), backed by Apache and Varnish cache on top to help cache requested resources. Second, the <a href="http://adaptive-images.com">adaptive images</a> project is helping me keep my bandwidth and your waiting times down by supplying scaled images. On top of that, Jekyll is helping me make my entire site completely static, which we all know is stupid fast. And finally, the whole domain is being supported by a <a href="https://www.cloudflare.com">CloudFlare</a> pro plan, with SPDY, CDN, and other acronyms.</dd>
</dl>
