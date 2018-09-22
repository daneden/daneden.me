import Align from 'components/designSystem/Align'
import Image from 'components/Image'
import Codepen from 'react-codepen-embed'

export const frontmatter = {
layout: "post",
title: "Drawing With Numbers",
hero: "2017/01/diff-growth.png",
date: "2016-11-02"
}

# Drawing With Numbers

<Image src="2017/01/diff-growth.png" />

I’ve never considered myself much of an artist. My creativity has always found
its home in design and photography, practices which feel far less dependent on
natural creativity and talent. I can’t draw; I try to stay away from paint;
sculpting is one of those things that _sounds_ more fun to me than it actually
is.

<Align.Left>
<Image src="2016/11/dwn-serra.jpg" caption="An installation from Richard Serra in Dia:Beacon." />
</Align.Left>

I have, however, become deeply interested in generative art. How numbers can be
governed to create visually interesting works, with seemingly complex but
gratifyingly simple sets of rules. It’s hard to trace where this interest
really began, but I think it started in the [Dia:Beacon](http://www.diaart.org/visit/visit/diabeacon-beacon-united-states)
gallery in New York.

The Dia:Beacon is probably one of my favorite places on Earth. A vast,
expansive gallery with astonishing works of art, ranging from Richard Serra’s
immersive and imposing sculptures, to delicate and easily-missed installations
from Fred Sandback. One collection that stuck with me is the work of Sol
LeWitt. One piece features thousands, perhaps millions, of hand-drawn lines, in
a variety of patterns. The cumulative effect of line after line creates an
array of sometimes wildly different visualizations.

<Image src="2016/11/dwn-sollewitt.jpg" caption="A close-up of one of Sol LeWitt’s intricate pieces. It’s hard to do his work justice on a screen." />

The dedication and vision to create installations like this was boggling. It
made me itch to create. I can’t draw, but I _can_ tell computers to draw for
me.

## Humble Beginnings

My “sketches” started with one goal; to recreate a design I first saw on the
back of one of Dropbox’s design team sweatshirts, created by [Kristen
Spilman](https://twitter.com/kspilman). It’s simple enough—an array of
rectangles, each rotated so they’re pointing towards a point in space.

<Image src="2016/11/dwn-dropbox.jpg" />

I started by trying to recreate this design with a single rectangle using HTML
canvas. This taught me two things:

1. I had forgotten most of what I learned in high school maths
2. HTML canvas can only get you so far (on its own)

Thanks to some light tuition in mathematics from [Allen
Rabinovich](http://www.allenrabinovich.com/) and some persistence, I had a
functioning prototype of the design. During the course of building the first
prototype, I stumbled across [p5.js](https://p5js.org/), a JavaScript library
that _“makes coding accessible for artists, designers, educators, and
beginners”_. Thankfully, this description also works in reverse; it makes art
and design accessible for people fluent in coding, by providing a comprehensive
drawing toolkit.

I moved what I had learned into a p5 sketch, and before long, I had a real-life
version of what I had first set out to create.

<Codepen
  hash="MjNZJa"
  user="daneden"
  themeId="26171"
  defaultTab="result"
  />

## Graduating From JavaScript

I owe a lot of what I learned about p5.js and, in turn, Processing, to [Daniel
Shiffman](http://shiffman.net/). Thanks to his energizing videos[^1], I found
myself creating sketches in p5.js several times a day. The ease of use meant I
could have an idea, and within minutes have a little working prototype in my
browser.

Over time, my ideas became bigger, and my browser became slower.
When I would (occasionally) create a long-running loop, such as drawing tens of
thousands of points, my browser would stagger to a halt. It was time to
graduate to something more capable.

Processing, the Java library upon which p5.js is based, was the solution. I had
never written Java before, but since it was so syntactically similar to
JavaScript, with just a few Google searches, I was able to start porting over
some of my more ambitious p5.js sketches into Processing.

<Image src="2016/11/dwn-fabric.png" caption="One example of the kinds of sketches that would collapse on p5.js and demanded a more powerful medium. “Fabric,” [full size.](/uploads/2016/11/dwn-fabric.png)" />

A more performant environment and toolkit meant I could work on more demanding
and expressive ideas. Instead of drawing hundreds of points to a canvas, I
could draw thousands. The only limit now was my own creativity.

## New Frontiers

Unfortunately, creativity isn’t my strong suit. My design process is a tribute
to this; I typically resort to long-lived solutions and the safety of design
systems. This is usually a strength in my day-to-day, but in this new world of
creative output, I found it hard to generate new ideas. So, like any great
artist, I started stealing ideas.

If I saw a photograph or a tweet showing interesting visual forms, I’d set off
and try to recreate it or express it using Processing. Murmurations of
starlings; ocean waves crashing; pulsating wind farms; smoke patterns. I also
sought out other artists to spark inspiration, the greatest sources becoming
[Anders Hoff](http://inconvergent.net/)—who helped me realize the beauty and
simplicity[^2] of the algorithms I was starting to write—and [Jessica
Rosenkrantz](https://twitter.com/nervous_jessica) of [Nervous
System](http://n-e-r-v-o-u-s.com/), whose algorithms and works continue to fuel
a growing ambition.

I started moving my focus from motion towards sketches that gave the
_impression_ of motion, be it through the apparent movement of their lines, or
the stages of evolution they exhibited.

<Image src="2016/11/dwn-moons.png" caption="“Moons” series, expressing a single algorithm in several different ways. [Full size.](/uploads/2016/11/dwn-moons.png)" />
<Image src="2016/11/dwn-dashes.png" caption="Complexity borne out of simplicity. Fill a circle with dashes of random length, ensuring none of them overlap. “Dashes,” [full size.](/uploads/2016/11/dwn-dashes.png)" />
<Image src="2016/11/dwn-sandlines.png" caption="“Sandlines,” inspired by Anders Hoff’s [Sand Spline](http://inconvergent.net/generative/sand-spline/). [Full size.](/uploads/2016/11/dwn-sandlines.png)" />

## Making It Real

With my Processing folder growing in size, and hundreds of stills and movies
being saved on my hard drive, I wanted to explore bringing these works outside
of their digital home and into the real world through print. Printing the
pieces I was generating meant introducing additional dimensionality to them—the
opportunity to play with colors and ink saturations, paper types and weights,
print speeds and the kinds of happy accidents that typos alone don’t afford.

After some trial and error, my first prints were born, and along with them, a
torrent of new ideas. Each new print would prompt another, developing a series
and planting seeds for evolved ideas.

<Image src="2016/11/dwn-print1.jpg" />
<Image src="2016/11/dwn-print2.jpg" />
<Image src="2016/11/dwn-print3.jpg" />

Exploring generative art through Processing has not only given me a creative
outlet and a medium to express ideas, but it's helping me become a more
proficient programmer and a more creative designer. It's also given me a reason
to finally explore print as a medium and produce physical works that I can keep
and give to friends. You can't really _give_ someone a website.

I'm keen to learn more about this space, and it's leading me to more fertile
ground for learning—artificial intelligence and programming natural systems
seems like a small(er) step after dabbling in these algorithms.

## Thanks

In addition to those named in the text—Kristen Spilman, Allen Rabinovich,
Daniel Shiffman, Anders Hoff, and Jessica Rosenkrantz—I owe thanks to a
number of people for their help and inspiration to work on these pieces.

- [Joshua Jenkins](https://twitter.com/joshuajenkins), for inspiring ideas through his own generative art and data visualizations;
- [Dennis Jin](https://twitter.com/nobletofu), for his encouragement and his own works;
- [Elana Schlenker](https://twitter.com/elanaschlenker), for her advice and help with printing and evolving ideas;
- [Defne Beyce](https://defne-beyce.squarespace.com/), for her help with printing;
- Facebook’s [Analog Lab](https://twitter.com/analoglab) staff for allowing me to hang out, use the equipment, and ask dumb questions.

[^1]:

  Daniel’s videos on YouTube showed the successes and stumbles of writing JavaScript in a way I hadn’t seen before—I highly recommend subscribing to [his channel](https://www.youtube.com/user/shiffman).

[^2]:

  Anders’ [Generative](http://inconvergent.net/generative/) visual essay brings clarity to his beautiful work, and gave me a new perspective on how expressive the simplest ideas can be when the only variable is time (provided you can be patient enough for the results to be pleasing)
