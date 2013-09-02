---
layout: post
title: Typekit's Web Font Loader is Awesome
hidden: true
---

It really is. I've [touched on this briefly](http://daneden.me/2011/07/a-smoother-page-load-via-jonikorpi/) before, pointing to Joni Korpi's [experiences](http://jonikorpi.com/a-smoother-page-load/) with the loader, but I've only really started using the tool for my own benefit. It's actually something I came across while I was putting together [Design Happy](http://dribbble.com/shots/394795-Design-Happy), my super-secret in-the-works project. Since it's still under wraps, I can't show off the cool stuff I've been doing with the loader.



## Twenty one years in the making


It's a happy coincidence that my birthday is coming up, which gave me a great, restriction-free creative project to show off the power of the web font loader with. If you're in a hurry, you can see the final thing [right here.](http://daneden.me/twentyone) Best served in Webkit. Let's dig in.
<!-- more -->
Since we're using Typekit, it'd make sense to use a few fonts from them right? The fonts from Typekit on the page are [Futura PT](https://typekit.com/fonts/futura-pt) and [Adelle Web.](https://typekit.com/fonts/adelle-web) As web fonts go, these are pretty heavy file sizes. As well as these, I added [Six Caps](http://www.google.com/webfonts/specimen/Six+Caps), this time from Google's web font directory.

I also tried to get some relatively heavyweight image files on there - there's a picture of me when I was born, me in the present, and a birds-eye view of my hometown, Stockport. All together, the page weighs in at 863kb. Nothing too monumental, but a pretty weighty page.

When you open the page though, the load doesn't (or shouldn't) seem too long a wait. The content is hidden and in its place, a friendly loading gif shows something's going on. This is possible thanks to Typekit's loader.

The loader was actually made in a [collaborative effort](https://developers.google.com/webfonts/docs/webfont_loader) by Google and Typekit. Basically, while the fonts are loading from whichever service, the html document is given a class of `wf-loading`. With this class, I can hide the content, thus preventing any weird behavior as remote font files are downloaded. Then, once the fonts have loaded, the content can be brought back - a class of `wf-active` (or `wf-inactive` if for some reason loading the fonts failed) takes over where the loading class once was. In the CSS for that page, `wf-active` is given a nice fading entrance.

Now, that's all good and well. Fight the [FOUT](http://paulirish.com/2009/fighting-the-font-face-fout/) and all that. But what really got me thinking with this tool is the possibility of using it for lazy loading 'real' content. By using the asynchronous loader, we can set off the web fonts loading while the rest of the content loads while it's hidden from the user's eyes. If you're on a decent connection, the supporting images in the page will have loaded with absolutely no wait after the content appeared. Isn't that great? If you're using Typekit, you've got a lazy loading plugin already set up for you.



## So what?


Forgive me for making such a big deal out of this, but it really does matter. Take a look over [this article](http://www.intuity.de/en/open-thoughts-about-performance/) by Intuity Media Labs - particularly the section titled "Shaping the assumed performance". By showing the user that something is loading with a simple animation, rather than showing the content's load itself, we can speed up the process in the user's mind. The Typekit font loader gives a super simple way to make this kind of loading really easy. Couple that with some animations to ease the content in once it's loaded, and you've got yourself one hell of a happy user.
