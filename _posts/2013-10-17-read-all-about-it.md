---
layout: post
title: Read All About It
---

This website has gone through a lot of iterations, the vast majority of which have—unfortunately—been lost to my trigger-happy self. Now seems as good a time as ever to document something about the formal design decisions behind the current iteration. Specifically, the typographic decisions.

When it came to the task of redesigning my website again, I gave myself a broad objective; it should read like a newspaper. Not necessarily in its content, but its typographic appearance. Its typeface and typographic hierarchy should at some level resemble that of a newspaper. I felt it was a suitable objective to aim for due to the general long-term readability of newspaper body copy and easily-digestible headlines. Combining inspiration from various news publications with general typographic "best practices," I’ve managed to create a design with which I’m happier than I have ever been.

## Type Selection
Arguably the most important typographic choice of any publication is the long-form body text. [H&FJ](class:caps)’s Mercury ScreenSmart was an obvious choice; with a long development history, Mercury was always intended for editorial use. Paired with Chronicle Display for headlines (seen below), Mercury is a fine typeface that works well for a variety of contexts.

<figure>
	<p class="alpha">Gas, INC. raises energy prices by 9.2%</p>
	<p class="alpha">President Obama speaks as shutdown ends: 'This town has to change'</p>
	<figcaption>Chronicle Display’s high-contrast and narrow design is simply beautiful at large sizes.</figcaption>
</figure>

Chronicle Display is nice and open, so we can afford to give it some tight tracking and leading (or letter-spacing and line-height in CSS) at these inflated sizes. It also has some excellent, discreet ligatures:

<figure>
	<p class="alpha">Quaffing causes 50% of all waffle deficiencies, say experts</p>
	<figcaption>Chronicle Display’s ligatures, seen here on *“ffi, ffl,”* and *“fi.”* (If you can't see the ligatures, check [this screenshot](/uploads/2014/01/chronicle-display-ligatures.png))</figcaption>
</figure>

Tight leading can cause some conflicts between ascenders and descenders, but it's a rare problem. Secondary and tertiary headlines are set in Mercury, and captions and additional supporting typographic elements are set in [H&FJ](class:caps)’s [Whitney ScreenSmart](http://www.typography.com/fonts/whitney/overview/). Designed originally for the [Whitney Museum](http://whitney.org), it’s an authoritative yet soft typeface. With similar character contrast and weight to Mercury, it’s perfect to complement the main headlines and body text.

With typeface selection out of the way, it was a simple case of setting the type. It helps working with real content, which, luckily, there is plenty of on my blog.

## Typesetting
There are a few typographic rules-of-thumb that I tend to follow for every project, and this site is no exception.

*Two to three alphabets per line.* By this, I mean 2–3 instances of “a–z” should fit on a line at body copy size. Of course, line length is a difficult thing to enforce in responsive design, but not impossible. Type size and line length increases on larger screens, and decreases on small screens. Small screens are tricky, but around seven words per line on my iPhone in portrait orientation seems fine to me.

*No smaller than 16px for body copy.* With Mercury ScreenSmart, type sizes can afford to be smaller than other fonts, thanks to its generous x-height and open design. An 18px font size on a 27px baseline is nice and readable, and even shrunken down to 14px on small screens is no problem.

*As type size increases, type weight decreases.* This rule is one I have followed for years, but decided to break for my own site. While Mercury’s regular weight makes a perfectly suitable and handsome headline, Mercury Bold is simply sublime.

* * *

These observations & thoughts, like the design of this site, are subject to iteration and change. I, for one, think that this is my most readable and enjoyable site design yet.