---
layout: post
title: CSS prefixes are becoming a threat - but is Webkit really to blame?
hidden: true
---

It seems like the whole internet is up in arms today - and for good reason, too. The CSS working group recently had [a discussion](http://lists.w3.org/Archives/Public/www-style/2012Feb/0313.html) about the `-webkit-` prefix, which started something like this:



> tantek: At this point we're trying to figure out which and how many webkit prefix properties to actually implement support for in Mozilla
plinss: Zero.
tantek: Currently we have zero. Zero is no longer an option for us.



This is something to be concerned about. The whole idea of languages such as HTML and CSS is to encourage web standards. Standards that are supported across the board, on all devices and browsers. To suggest including the `-webkit-` prefix in the CSS specification is completely absurd, and goes entirely against the whole point of the CSS working group and web standards in general.
<!-- more -->
One particular statement that brings a fiery ball of anxiety to my throat came from Opera's Florian:



> We are currently losing market share because of not implementing `-webkit-` properties.



Wrong. Opera, Firefox, and Internet Explorer are losing market share for a few reasons, but **definitely** not because they're not implementing `-webkit-` properties. The main reason they're losing market share is because they're not implementing the same properties as Webkit. That might sound like the same thing, but it really isn't.

Most of the prefixed CSS properties supported in Webkit and other browsers are based on proposed standards. Things like box-shadow and border-radius. The problem with Firefox and Opera is that they're late to the game - the game that, admittedly, Webkit are setting the rules for. It was Webkit who proposed the gradient syntax (which has since been replaced by Mozilla's much neater syntax) to the CSS specification. Several months later, Firefox and Opera supported a similar gradient property. The same applies to CSS animations, which are now supported in Firefox and the upcoming Opera 12, as well as Internet Explorer 10. And the same again for 3D transformations. You can probably see the trend here.

Webkit (or more specifically, Apple) are innovating in web standards. They're breaking the perceptions of the traditional web and are contributing an awful lot to the CSS3 and HTML5 specification. Being an open source engine, all of Webkit's progress and implementation of new features is [publicly available.](http://webkit.org) Since Chrome is based on Webkit, it makes sense for Chrome to have a very rapid development cycle in order to implement these new features. This leaves other browsers left in the dust - it's one reason Firefox has adopted a more rapid development cycle.

Webkit is also gaining traction because it's everywhere. It's in our iPhones, iPads, Android devices, Blackberry handsets, Nokia handsets. It's built into Mac OS X. It's advertised everywhere from billboards to Google's home page - the number one most visited website in the world. It's fast. It's user friendly. It isn't bundled with crap. It's stable. It's free.

Other browsers are losing out on market share because _Webkit is a better browser1._ Other browsers are losing market share because they're late to implement experimental features which web authors _and_ users enjoy. Experimental or not, that's the truth. To me, this suggestion of including the prefixed properties in the specification means one of two things: the opposing vendors (Mozilla, Opera, MS) are getting lazy, or they're waving the white flag. And neither of these things are Webkit's fault.



## What happens next


If this idea goes through (which I'm sure it won't), it could be the end of standards as we know it. Implementing the prefix will _not_ fix Firefox or Opera's market share - it will make Webkit's larger. It'll encourage web authors to never bother writing properties with prefixes other than Webkit, let alone writing the unprefixed version at all. [Remy Sharp](http://remysharp.com/2012/02/09/vendor-prefixes-about-to-go-south/) makes some good suggestions on moving forward (but I have some reservations about some of the things he says, which are highlighted):





  1. Fucking drop experimental prefixes. It's unacceptable and a disservice to the developers working with your browser. You need to give timelines to dropping these things. Totally agree.


  2. Non-production ready browsers should support experimental prefixes, _production ready releases_ **should not**. If it's Chrome 16 - the stable version - experimental support should not be baked in. The properties should be full available _without_ the prefix.This, I'm not so sure on. Mainly because I work in Safari, and there's only really a stable version of that (there's the Webkit nightlies, but they're just a pain to set up)


  3. Work with the working groups (...Apple). Agree. There needs to be more open communication between Apple and the Working Group, as well as a **lot** more effort from other vendors to implement experimental features, regardless of their opinion on it's use. That's the point, isn't it? They're experimental. Why _not_ ship them?



Just as Remy did in his own article, I'll leave you with this:



> plinss: If we go down this path we have broken standardization.





* * *



1. When I say "Webkit is a better browser", I do of course know that Webkit is not a browser, but is in fact a layout engine. I'm actually referring to Safari, Chrome, Safari iOS, Android's browser, Blackberry's browser, and (in some devices) Nokia's browser. It's just much faster to say "Webkit" ;)
