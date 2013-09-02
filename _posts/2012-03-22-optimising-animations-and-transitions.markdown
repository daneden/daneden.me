---
layout: post
title: Optimising animations and transitions
hidden: true
---

If you spend enough time with CSS transitions and animations, you start to notice some odd quirks. I've had a few emails from people using [Animate.css](http://daneden.me/animate) in their websites and experiencing some of these issues - most frequently, odd changes in text rendering during animations. I'll go over just a few tips for optimising CSS transitions and animations to make them smoother and bug-free.

<!-- more -->

## Flash of aliased text


When transforming an element with a transition, you might notice the text on the page appearing thinner and smoother for the duration of the transition in Webkit browsers. You can check a demo of what I mean [here.](http://dabblet.com/gist/2157388) What's happening here is that during the animation, 3D hardware acceleration is turned on, meaning that the browser applies antialiasing to the text. Once the transition is completed, this hardware acceleration is switched off again, returning the text to it's normal rendering weight. There are a couple of fixes available.

The first one is for Webkit browsers only, but since this problem only appears to affect Webkit browsers, that's OK. Simply apply `-webkit-font-smoothing: antialiased;` to the html or body element. This permanently switches on the hardware acceleration and antialiasing for the text. Check [the demo](http://dabblet.com/gist/2157424) again, and you'll see that the bug is fixed. There are a couple of fairly minor problems with this fix; for one, it only works in Webkit. But as I already mentioned, this bug is only present in Webkit browsers as far as I know anyway. The other problem is that the antialiasing applied to the text may be undesirable in places. Personally, I think it looks great, but it's not everybody's cup of tea.



### Cross-browser fix


There is a fix for the antialiasing bug that would work across all browsers, should the bug become apparent in non-webkit browsers. It involves applying a 3d transformation to the html or body element, turning on hardware acceleration. [Check out this demo.](http://dabblet.com/gist/2157436)



## Realistic movement


In the real world, when something moves, it doesn't travel in a linear way. It accelerates and decelerates smoothly, so it makes sense to try to attain this more natural movement in our web design. As a general rule, I avoid using a `linear` timing function for transitions and animations - it's very unrealistic, and feels quite forced. `ease` is a much nicer timing function, but still feels a little artificial. My personal favorite timing function isn't in the defined functions.



    -prefix-transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000);



It might be a little speedy for most people, but I love it. Check out this handy tool for testing and writing your own timing functions, [Ceaser.](http://matthewlein.com/ceaser/)



## Some final notes


Just a couple more things to bear in mind when it comes to animations, transitions, and transformations.





  * Applying `transform` to a fixed position element will reset its position to `static.` To get over this problem in animations, you could set the last keyframe to `-prefix-transform: none;`


  * Android devices (on versions below 4.0) won't animate or transition more than one CSS property. But [you knew that](http://daneden.me/2011/12/putting-up-with-androids-bullshit/) already.


  * Don't go [overboard](http://daneden.me/labs/lolimate) on your transitions or animations.



If I've missed anything out, got anything wrong, or you have anything to add, I'd love to know. Comment below, [tweet me](http://twitter.com/_dte), or [email me.](mailto:dan.eden@me.com)
