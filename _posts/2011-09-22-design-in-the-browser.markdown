---
layout: post
title: Design in the browser
hidden: true
---

_"You there! Put down that old, clunky photo editing software package! Introducing **OLD** and exciting design approaches from the comfort of your keyboard!"_

Let's get one thing straight - Photoshop is pretty darn good. It has some drawbacks, sure, but most things do. It can help us design mockups and makes a breeze of things like optimising images for web usage. That's all good and well, but when it comes to web design, _why aren't you designing in the browser?_

You wouldn't design a book in Photoshop and leave it till the last minute, then just paste the design on. You'd take the time to make sure the paper was the right weight, that everything looked great in it's final physical form before finally sending it off to print thousands of copies. So why are we doing web design this way? The browser is a better design tool than any other software you could possibly use, and creating your designs in the browser from the start is going to save you a lot of time and effort.<!-- more -->


## The Evolving Landscape


There's never been a better time to take this approach to your web design. Great new features in the CSS3 specification allow us to use things like gradients, shadows and even animations in our designs - completely natively. Tools and services such as [Typekit](http://typekit.com) are making the implementation of beautiful and optimised web fonts as easy as 3 clicks. Long story short, web browsers are becoming as advanced as top-of-the-line photo editing software without even breaking a sweat. And like I said, there are some major advantages to using browsers as your design tool of choice.


## Speed, speed, speed


Web browsers are fast. I mean really fast. You can load a web browser quicker than you can say 'Elephant'. (Well, maybe not some browsers, but Chrome certainly loads that quickly on a good day) Photoshop on the other hand is slow. It's slow to start up - for me it takes about 20 seconds these days. It's slow to create a canvas. It's slow to save a large image. It's particularly slow at rendering & transforming text & vector layers, which is odd considering the simple nature of such items. If your code is neat, and your browser is new, it doesn't really matter whether your canvas is 20 or 20,000 pixels tall - it's going to be damn fast. And while your hardware-accelerated CSS animations are impressing your friends and colleagues, Photoshop will be sitting in the corner, politely tapping iTunes on the shoulder and asking it to leave.


## Text Rendering


It's no secret that not many people are a fan of Photoshop's text rendering. You should also remember (and a staggering number of people seem to forget this) that your text and indeed the rest of the design is going to look completely different in the browser than it does in Photoshop.  If you're on Windows, it's going to look a lot more crappy. If you're on a Mac, chances are, it'll look significantly better. Either way, I recommend [Safari](http://apple.com/safari) as my design browser of choice, mainly down to it's excellent text rendering on both Windows and Mac OS (as well as it's ruddy good support for CSS3 features).

Also, sign up for Typekit. I couldn't recommend them more highly. They offer a huge range of excellent fonts that have been painstakingly optimised for web use on Mac OS and Windows, and it's a service well worth paying for.


## Pixels under pressure


I touched briefly on the differences between your design in Photoshop and it's appearance in the browser - but it's a little more serious than a mention in a short paragraph. The most applicable example of this is shown by Andy Taylor in his [CSS grid](http://cssgrid.net). He created a Photoshop template for people to create mockups based on the grid, but warned people that instead of the specified 1140px width, the mockup is 1133px wide. This is based on the way that WebKit renders the layout - it drops an entire seven pixels through the method it uses to render subpixels. That's a huge amount of space to lose - imagine if a button you'd spent many minutes (or in CSS, seconds) on suddenly lost 7 whole pixels. I'd call up Adobe and demand a refund.

I wrote [more about my feelings on pixels](http://forrst.com/posts/Stop_using_pixels-vy1) over on Forrst - some people agreed, others profusely disagreed. It's your call.


## Access-anywhere-always-awesome


Web standards are a free game. They're easy and, in my opinion, fun & interesting to learn. Markup is turning into pretty much human english, and there's never been more information on learning HTML and CSS. And the very best thing about HTML and CSS is you don't need anything to start using it other than a text editor. Most of which are free!

Photoshop comes with a hefty $1000 dollar price tag. Compare this to the grand total of $60 I've spent on my choice of software, [Coda](http://panic.com). And if you're completely strapped for cash, then there are excellent free tools like [Notepad++](http://notepad-plus-plus.org/) and [Filezilla](http://filezilla-project.org/).

You can code and deploy websites on anything, be it your Mac, PC, Linux box - even your iPad.


## Design to deployment, in 2 easy steps


The other major advantage to designing in the browser is that there's no conversion process. Your design is already there in markup and CSS. If your client likes it, then it's just a case of replacing that dummy text with real content and ensuring it works across all the browsers. And with enough practice, you'll find yourself writing code faster than you can design in Photoshop anyway.


## Round it all up for us, Dan


You should be doing your designs in the browser. It'll remove a lot of headaches, particularly moving from design to markup. It also means you can show your client something real and interactive, rather than sending hundreds of email attachments and preview images. They can interact with it rather than staring at it, and enjoy all the little things you might have added to the experience layer without you having to explain them.

It's also super cheap and super fast compared to using software packages such as Photoshop. I've been doing it for years without even noticing, and finding myself wondering why 'web designers' take so long to create a website from a mockup.

I'd love to say that painters don't take photographs before they start painting, but they do. However, I leave you with this - if they could paint on the thin air in front of them, and transform their imagination into reality with no intervening medium, I'm sure they would.
