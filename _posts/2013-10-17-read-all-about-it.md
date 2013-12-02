---
layout: post
title: Read All About It
---

This website has gone through a lot of iterations, the vast majority of which have—unfortunately—been lost to my trigger-happy self. Now seems as good a time as ever to document something about the formal design decisions behind the current iteration. Specifically, the typographic decisions.

When it came to the task of redesigning my website again, I gave myself a broad objective; it should read like a newspaper. Not necessarily in its content, but its typographic appearance. Its typeface and typographic hierarchy should at some level resemble that of a newspaper. I felt it was a suitable objective to aim for due to the general long-term readability of newspaper body copy and easily-digestible headlines. Combining inspiration from various news publications with general typographic "best practices," I’ve managed to create a design with which I’m happier than I have ever been.

## Type Selection
One of the most vital parts of any news publication design is a readable and diverting headline. [H&FJ](class:caps)’s [Mercury](http://www.typography.com/fonts/mercury-text/overview/) was an obvious choice; it was specifically designed for use in newspapers. It also happened to recently have been optimised for their web font service, with a bigger x-height and screen-optimised character contrast. While Mercury Text is designed for body use, it makes a wonderful headline, too:

<figure>
	<p class="alpha">Gas, INC. raises energy prices by 9.2%</p>
	<p class="alpha">President Obama speaks as shutdown ends: 'This town has to change'</p>
	<figcaption>Mercury Text is diverse enough to be used as an inflated headline typeface</figcaption>
</figure>

Mercury Text ScreenSmart is nice and open, so we can afford to give it some tight tracking and leading (or letter-spacing and line-height in CSS). It also has some excellent, discreet ligatures:

<figure>
	<p class="alpha">Quaffing causes ½ of all waffle deficiencies, say experts</p>
	<figcaption>Mercury Text's ligatures (seen on *"ffi, ffl,"* and *"fi"*) are discreet but effective. (If you can't see the ligatures, check [this screenshot](/uploads/2013/10/ligatures.png))</figcaption>
</figure>

Tight leading can cause some conflicts between ascenders and descenders, but it's a rare problem. Secondary headlines are also set in Mercury, and tertiary headlines are set in [H&FJ](class:caps)’s [Whitney ScreenSmart](http://www.typography.com/fonts/whitney/overview/). Designed originally for the [Whitney Museum](http://whitney.org), it’s an authoritative yet soft typeface. With similar character contrast and weight to Mercury, it’s perfect to complement the main headlines and body text.

<figure>
	<p class="beta">Energy debate</p>
	<p class="beta">More on This Story</p>
	<p class="beta">'Total Opportunism'</p>
	<p class="gamma">No Comments Yet</p>
	<p class="gamma p">Agony Aunt</p>
	<figcaption>Whitney’s soft and formal appearance complements and contrasts Mercury perfectly</figcaption>
</figure>

With typeface selection out of the way, it was a simple case of setting the type. It helps working with real content, which, luckily, there is plenty of on my blog.

## Typesetting
There are a few typographic rules-of-thumb that I tend to follow for every project, and this site is no exception.

*Two to three alphabets per line.* By this, I mean 2–3 instances of “a–z” should fit on a line at body copy size. Of course, line length is a difficult thing to enforce in responsive design, but not impossible. Type size and line length increases on larger screens, and decreases on small screens. Small screens are tricky, but around seven words per line on my iPhone in portrait orientation seems fine to me.

*No smaller than 16px for body copy.* With Mercury ScreenSmart, type sizes can afford to be smaller than other fonts, thanks to its generous x-height and open design. An 18px font size on a 27px baseline is nice and readable, and even shrunken down to 14px on small screens is no problem.

*As type size increases, type weight decreases.* This rule is one I have followed for years, but decided to break for my own site. While Mercury’s regular weight makes a perfectly suitable and handsome headline, Mercury Bold is simply sublime.

* * *

These observations & thoughts, like the design of this site, are subject to iteration and change. I, for one, think that this is my most readable and enjoyable site design yet.