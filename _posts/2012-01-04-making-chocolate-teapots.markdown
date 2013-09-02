---
layout: post
title: Making chocolate teapots
hidden: true
---

CSS3 is _pretty damn cool._ I've said that a lot, and I can't see that opinion changing any time soon. With CSS3, we can create effects previously only attainable through image manipulation, generation, and Adobe Flash player. With the advent of these CSS properties came a slew of curious designers, pushing the capabilities of these properties beyond their original scope.

I'm all for [experimentation](http://daneden.me/labs), but some of these experiments are getting a bit silly. Not too long ago, I came across a [shot](http://dribbble.com/shots/343890-dribbbling-around) on Dribbble which I really liked. I'm a big fan of animation, especially stuff that shows a high level of care - the change in shape at the peaks of the bounce, the shadow depth variation - it's all rather fancy. Then I thought to myself "I wonder how close I can get to this in CSS?" and whipped up [this little number.](http://daneden.me/labs/balllin) The ball is an `img` element since, well, it's an image. The shadow is a separate element, and I admit that isn't ideal - but it's as minimal as I could get the markup to go. Not too bad. Then, I was tweeted by someone not too long afterwards who had managed to make the _whole thing_ in CSS - [the ball and everything.](http://peterwunder.de/playground/balllin/) Here's where it starts to go wrong. <!-- more -->

It's really cool that you can create complex shapes with CSS with relative ease. What's not so cool is all the extra markup involved. Instead of just two elements, like my own interpretation of the shot, this CSS only experiment used a total of 5 HTML elements, and considerably more CSS. It's a little bit like making a chocolate teapot - it's impressive, for sure, but really? That's not going to work.

Another example that springs to mind is [this CSS only iPhone 4.](http://tjrus.com/iphone) Once again, it's really very cool. But that's about it. More than anything, you can kind of tell it's all coded rather than images - in a not-very-good way. It has over 3 thousand lines of CSS. _Three thousand lines of CSS._ Not even [fully-fledged websites](http://zerply.com/) have that much CSS, let alone a single page experiment. When I first saw it a month or so ago, I dismissed it as what it was - another pointless experiment pushing the boundaries of CSS beyond it's actual purpose. But now it's been doing the rounds again on Twitter and other networks, gaining traction and becoming super popular. People are getting seriously wowed by this chocolate teapot.

Another thing to remember is that images _are_ code. People say CSS will always be faster because it's written code rather than binary data, but with the right image compression, that's not always the case. Heck, you can even use data URI's in your CSS or HTML to load images straight away without additional HTTP requests.

I'm no saint myself - I've made an awful lot of CSS experiments in my time, but I've recently come to understand something - if your "experiment" requires more than one more element than the original technique (or, if your really strict, _any_ additional elements) then it simply isn't worth the effort. Let's all stop gawking at the extreme possibilities and get back to making excellent, semantic, markup-friendly and less bloated websites.
