---
layout: post
title: The Right Tools For The Job
hidden: true
---

A few days ago, I received this tweet:



> I'd like a full, comprehensive blog post by @[_dte](https://twitter.com/_dte) about when to use JS and when to use CSS to accomplish the same things.
>
> -- Logan Galla (@logangalla) [January 5, 2012](https://twitter.com/logangalla/status/155018833969688576)




I've thought about writing something on this topic for quite some time, but always chickened out when it came to sitting at my keyboard. I don't want this to seem like a "one true way" guide, but instead I'd like to offer insight into the thinking behind the decisions I make about CSS and JS, particularly when it comes to the interactive layer of a website.
<!-- more -->


## Stating the obvious


First of all, let's get one thing straight. If you're still using JavaScript for simple hover states (`onMouseOver`) such as a color change, **you're doing it wrong.** That's the one use case that I could never understand using JavaScript over CSS for - and I still see it an awful lot. Heck, even image replacement can be done with relative ease using CSS, so why rely on a technology that can be turned off on the client side?

But my problem with this technique goes beyond the fact it's not reliable - it's the simplest example of the philosophical approach behind my JS vs CSS decisions.



## CSS is visual, JavaScript is logical


Every time I find myself reaching for JavaScript, I think to myself - "Is the desired result a visual change, a logical operation, or a combination of the two?" If the first, then I'll see if I can achieve the result in CSS alone.

CSS is a descriptive and visual language. It defines how an object in HTML should be displayed, how the end user experiences the web page. JavaScript is a scripting language - similar to PHP and Perl and other server-side languages, but on the client side. It makes no sense to use JavaScript to manage visual effects or layout such as rollover links and images, or dropdown menus. It baffles me that people are still creating dropdown menus using JavaScript when it's easily done using [CSS and HTML alone.](http://csswizardry.com/2011/02/creating-a-pure-css-dropdown-menu/)

With the rise in support for CSS animations, I firmly believe that web authors should be moving away from using JavaScript for animations in websites - particularly animations that are non-essential. Apple have got the right idea. Their site uses CSS animations on the menu bar, as well as a few other places - but falls back to JavaScript (or in the case of the menu bar, no animation) for browsers that lack support.

And what about that blurry logical/visual line? What if you have visual changes when an action that involves logical processing is involved? Well, a combination of the two is the best solution in this case. Rather than injecting a large amount of inline CSS, I prefer adding or removing classes to the element in question, keeping visual appearance inside the CSS file(s).

And that divide is getting more vague, with the arrival of CSS media queries, keyframe animations, and more. Media queries allow us to target devices based on their widths, heights, screens and other properties. This is great - we can easily change the layout of our sites and selectively hide and show content based on the user's device with absolutely no JavaScript involved.

This is all good and well - sounds like CSS has a lot of the stuff covered. But where exactly _do_ I use JavaScript?



## JavaScript's place in my heart


I'm happy to admit that one of the biggest reasons I tend to avoid JavaScript is because I simply don't understand it. Tools such as jQuery are a huge help - the library is practically made for CSS-ers such as myself to make JavaScript more accessible to those who struggle with advanced languages. Here are a few reasons I might reach for JavaScript (with help from jQuery) in my websites:





  * **Dynamic content changing** - things like client-side form validation would be non existent without JavaScript (but remember - client-side validation alone is not enough!)

  * **Image sliders** _can_ be made without the help of JavaScript, but compatibility would be awful. Things like CSS animations and transitions as well as the `:target` selector could help make a simple CSS slider, but JavaScript makes the whole thing a lot more compatible, visually attractive, and more user friendly

  * **Feature detection** - one of the main reasons I feel comfortable using CSS for a lot of my work is thanks to JavaScript based feature detection tools, such as [Modernizr.](http://modernizr.com) So in a way, I have JavaScript to thank for much of the CSS I've written



Like I mentioned in the beginning, I don't want this to be a guide for anyone. You should do what you feel makes more sense to use. And if you feel like I'm doing something wrong, feel free to let me know - I'm easily persuaded, if you can show me a better alternative.
