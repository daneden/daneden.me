---
layout: post
title: Changing My Ways
hidden: true
---

**Note:** this post isn't supposed to serve as a tutorial. There are much smarter folks who'd do a better job at tutorials than me. Think of this as a log of my experiences.

I've always developed websites in a very similar (and bush-league) workflow. Develop locally for a short time, then quite quickly stick the site on a remote server via FTP, and continue to edit live on the private remote server.

If you're still reading this, I know you're very, very mad at me. That's a silly, dangerous, and irresponsible way to work. But I'm here to tell you that I'm a changed man. And if you work like that right now, by the time you finish reading this post, maybe you will be as well. <!-- more -->



## Git with the times


Over the last couple of weeks, I've been fine-tuning my workflow to include the [Git SCM](http://git-scm.com) system. I've been meaning to include Git in my workflow for some time. Having used it with great success for projects like [Animate.css](http://daneden.me/animate), [Toast](http://daneden.me/toast), [Basehold.it](http://basehold.it), and [more](http://github.com/daneden), I thought it would make sense to start version-controlling my own website as well as future client work.

Before I could get Git involved, I had to get a local environment set up for testing and developing my website on. Luckily, [Luke Jones](https://twitter.com/lukejones) has a great [tutorial](http://www.lukejones.me/articles/set-up-a-local-server-on-os-x/) on setting up a local server on Mac OS X _without_ using MAMP or other third-party software. This is great for a ton of reasons:





  * I don't have to worry about starting up any apps when I want to do some local development


  * MAMP isn't cluttering my already too-full dock


  * I also don't have to troubleshoot things when MAMP goes wrong (which is a lot of the time)


  * It gives me an excuse to open Terminal and look like a genius



Without MAMP, however, we don't get PHPMyAdmin. That's not the end of the world though, and there's actually a fantastic MySQL app called [Sequel Pro](http://www.sequelpro.com) that can be downloaded for free. It's much more powerful, pretty, and less confusing that PHPMyAdmin.

Once I'd finished setting up the server, it was just a case of dropping the current contents of my website onto my iMac for local development. Well, it's not quite that simple.



## WordPress Woes


I'm a huge fan of WordPress. However, one thing that does drive me crazy is moving from a local environment to a remote server and vice versa. Usually, I end up settling for completely different installations on both local and remote, with only the theme being the same. It's a pain. Without content, it can be difficult to design efficiently. All this is mainly because there's only one `wp-config.php` file - only one place to define your database connection. Too many times have I uploaded my local `wp-config.php` to my remote server by accident, overriding my database connection to a non-existent one.

Luckily, there's a trick you can use to have one connection locally, and another on the remote server. On your local machine, create a copy of `wp-config.php` and give it the name `wp-config-local.php`. Put your local database connection credentials in there. Now, make the following changes to `wp-config.php`:


{% highlight php %}
<?php
if ( file_exists( dirname( __FILE__ ) . '/wp-config-local.php' ) ) {
    require_once dirname(__FILE__) . '/wp-config-local.php';
} else {
    /* Put your remote/original wp-config here */
}
{% endhighlight %}


Then, when you upload your site back to the remote server, just be sure not to include `wp-config-local.php`. Neat, right?

One last thing to do on our local environment. We don't want to download all the uploaded media, so we should request it from the production server. To do that, we need a `.htaccess` file inside `/wp-content/uploads/` that looks like this:


{% highlight apache %}
# Attempt to load files from production if they're not in our local version
<IfModule mod_rewrite.c>
  RewriteEngine on
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule (.*) /uploads/$1
</IfModule>
{% endhighlight %}




## Back to Git


Let's bring this back to the main topic: Git. Now, I'm a huge fan of GitHub, so many of the following steps are oriented around how GitHub works - however, the same basic principle applies to many other SCM hosts such as Beanstalk and Codebase.

The first thing I did was create a new private repository on GitHub. If you're a student, GitHub will give you a [free "micro" plan](https://github.com/edu). After I'd created the repo, I wrote up a `.gitignore` file with all the files I didn't want uploading. Mine looks like this:


{% highlight apache %}
# Exclude these files from the git repo
wp-content/cache/*
wp-content/plugins/wp-minify/cache/*
wp-content/upgrade/*
wp-content/uploads/*
sitemap.*
wp-config-local.php

# Hidden system files
*.DS_Store
*Thumbs.DB

# Include these files in previously blocked directories
!wp-content/uploads/.htaccess
{% endhighlight %}


Next, I added the GitHub repo as a remote origin on my local machine, added all my files, and pushed to the remote repo. My website is now on GitHub. Hooray! But how could I get anything I push to GitHub to then go to my remote server?



## Remote control


This is where things start to get cool. On the remote server in the root of my site, I initialised a Git repository with `git init`. Then I added the GitHub repository as a remote origin. At this stage, the three copies of the website are identical, except for `wp-config-local.php` since it's in the `.gitignore` file.

I created a PHP file in the root of the site with the contents:


{% highlight php %}
<?php `git pull`;
{% endhighlight %}


While those look like single quotes, they're actually backticks. This tells the server to execute the contents as if they were entered on a command line. The final step was to point to this PHP script as a WebHook URL in the repository settings on GitHub.

That URL is hit every time you push to the repository, meaning any updates I make on my local machine are pushed to GitHub, then immediately pulled onto my live server.

Pretty. Freakin'. Awesome.



## Wrapping Up


I'm sure there are better tutorials on all this, and almost certainly smarter ways of doing it, but I'm just glad I'm no longer working with FTP. I'm working on implementing this workflow with many of my existing web projects, and with future projects too. Hopefully this was of some use to some people - I'd love to hear your thoughts.
