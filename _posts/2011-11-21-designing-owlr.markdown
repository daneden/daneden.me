---
layout: post
title: Designing Owlr
---

If you've been following me on [twitter](http://twitter.com/_dte), you've probably seen my talking about [Owlr.](http://owlr.me) if you're wondering what it is, it's a mobile web application for Forrst. It also happens to be the only Forrst application (at time of writing) to give users the ability to comments on and like posts.

[![](/uploads/2011/11/mobile.jpeg)](/uploads/2011/11/mobile.jpeg)

It was my job to design it. My good friend Michael gave me the great honour of working on it with him. He was in charge of the brains behind it all, and he did a bloody great job. I'm going to talk about the entire design process, the challenges I faced and decisions I made.<!-- more -->


## Why a web app?


I won't go too much into this, but it's something that no doubt has crossed your mind. Why a web app, and not a native application? Well for one thing, neither myself or Michael have any prior experience with Objective-C for iOS or Java for Android. But we also wanted to create an application with a very quick development cycle that was compatible across a variety of devices with minimal effort from ourselves. A web application was the logical route for Owlr, and while there are no firm plans, it could quite easily be ported to a fully native application using software such as PhoneGap.


## The teaser site


This was the first thing that I designed for Owlr, and it really set the tune to which the rest of the application would play later on, so I had to make sure it was a good one. I took ideas from a few different things - there's no point reinventing the wheel. I already had a landing page that I'd made for fun, as well as some fairly nice buttons and form components that I tend to reach for when I need some prebuilt elements.

[![](/uploads/2011/11/influence.png)](/uploads/2011/11/influence.png)

Having since created Animate.css, I also managed to get some friendly interactive animation on the inputs. If an email address failed validation, a popup dialogue would appear above the input and bounce. As I've said in articles before, animations should be used rarely and to benefit the user.

[![](/uploads/2011/11/owlr.png)](/uploads/2011/11/owlr.png)


## The Application


This is where it gets interesting. The main challenge with the design of the application was to build something incredibly lightweight, programmer-friendly (I wanted Michael to be able to plug in styles where he wanted using OOCSS) and cross compatible.

Throughout the entire interface, only two images are used - the header image, and a 2-times resolution version of the same header for the iPhone 4's retina display. Everything else seen on the website is pure CSS. Where small images were required, I used data URI's instead to lower the number of HTTP requests the application was making. When it comes to mobile, every byte counts.

There are quite a few icons in the application. They're all part of a fantastic [web font](http://www.justbenicestudio.com/studio/websymbols/) from Just be Nice studio. Using a font instead of static icons meant a lot of great benefits - we could easily change the size, color and any additional styles such as text shadows with minimal effort, they worked almost completely across all browsers, and they worked right away for retina displays. The icons also happen to be the ones I'm using on this blog for the Twitter/Facebook and previous/next post buttons.


### Content


Throughout the design, I wanted to create something original but that kept in theme with the Forrst website. Too many of the Forrst applications before Owlr (and even now) run with the Forrst theme, making no effort to make something original.

I tried to maintain a similar post layout. A header including the user avatar, post title, additional meta information and the post's type. To save on visual space, I used an icon to represent the post type. The post box is given a generous inner shadow to give it a 3D appearance. It might be a little strong, but it's not too strong to be distracting from the content. A comment/like button sits at the footer rather than at the side of the post.

I tried to maintain a theme between the posts and the other types of content. The profile view has a very similar layout to the posts. Using and reusing modules in this way creates a user consistency which is important for the user experience. It also makes both my job and Michael's job easier.

[![](/uploads/2011/11/similarities.png)](/uploads/2011/11/similarities.png)


## The Process


The process from design to testing to deployment was a pretty elegant one. Michael would let me know what pages I need to create designs for. I would get real content from Forrst itself to use in a design. I'd then strip out everything I possibly could from the markup - the markup on Owlr is as minimal as possible - and create a flat HTML file which I would then send to Michael through Subversion. (The Subversion software we used was the wonderful [Beanstalk](http://beanstalkapp.com) and [Versions](http://versionsapp.com)) He would then do his magic and convert the whole thing to PHP ready for injecting data from the Forrst API. Using OOCSS meant he could work quickly with the design without asking me "What exactly does this class do?" Once he was finished working the design into a PHP template, it would be deployed to the beta server, where ourselves and our small selection of beta testers could take it for a spin. Problems and bugs were reported back, fixed and eventually redeployed. This process went on for each page until said page was complete, then we moved on to the next.

Testing was an interesting process. I built the whole thing using [Sublime Text](http://www.sublimetext.com/) and Apple's [Safari](http://www.apple.com/safari/) - mainly down to the fact that Safari is the browser found on iOS devices. Occasionally, myself or Michael would open it up on an actual iOS device, but little formal testing was done on any device other than an iPhone.

It gives me great pleasure to know just how well it works on other devices. It works like a dream on iOS and Android, and works pretty well on Windows Phone too. (Windows Phone currently doesn't support @font-face, so the icons don't load) With very little effort and testing, we made a fully compatible mobile web application.


## The Future


As I previously mentioned, there are no firm plans for converting the application into a native one - though it could be done, and pretty easily. I've been working with PhoneGap on a Blackberry application for work, and I have to say it's a fantastically simple process.

As for continued development of Owlr itself, myself and Michael will of course continue to work hard on improving the application for users. For the best experience of Owlr, [visit it](http://owlr.me) on your iDevice and add it to your homescreen. We hope you'll love using it as much as we loved making it.
  *[OOCSS]: Object Oriented CSS
