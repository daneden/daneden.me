import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

export const frontmatter = {
layout: "post",
title: "Subatomic Design Systems",
date: "2018-01-05"
}

# Subatomic Design Systems

The following theory of "Subatomic Design Systems" is loosely based on an
amalgam of existing design system theories and programming architecture
approaches, including Brad Frost’s Atomic Design, Yandex’s
Block-Element-Modifier, Harry Roberts’ Inverted Triangle CSS, Nicole Sullivan’s
Object-Oriented CSS, and general functional programming concepts. It aims to
take these practices, further abstract them so they are applicable to domains of
both Design and Engineering across different mediums, and provide a framework
for thinking about—rather than practical artifacts for building—design systems.

The rules of the theory are straightforward and intentionally quite loose; they
are based principally on 2D digital design systems, but could easily be applied
to 3D mediums such as Virtual Reality or exhibition spaces.

Above all, the distinguishing feature of Subatomic Design Systems (hereafter
SDS) is the property of change through composition. These systems are _designed_
to change over time and as an organisation or product grows—to be restrictive
enough to represent a whole, but flexible enough to easily evolve and meet
divergent needs.

## Glossary of terms

I've avoided using too many indirect terms in this writing, but it may still be
helpful to have a permanent reference of the terms used to define this system
thoery.

|          Term | Definition                                                                                                                                                            |
| ------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    _Particle_ | The primary, lowest-level building blocks of a Subatomic Design System                                                                                                |
|     _Element_ | Another way of saying "composition of particles". Loaded, and therefore avoided wherever possible.                                                                    |
|     _Pattern_ | Another loaded term, but in this context meaning "complex compositions," or compositions of compositions.                                                             |
| _Composition_ | The combination (a.k.a. addition, merging, multiplication, applying) of particles (or other compositions) to create something new, typically an Element or a Pattern. |

## Everything is a composition

In SDS, everything is a composition of the lowest-level particles of the system.
In our world, the lowest-level particles are properties of color, type, line,
spacing and position, time, value (or data), and function (or behaviour). Even
these particles are compositions, composed only of themselves. (If you’re
familiar with mathematics, you can think of particles as identity functions, the
value of which is itself.) Low-level particles have no visual representation,
since they are typically abstract properties. For example, even the word
‘Vegetable’ in the typeface Helvetica is a composition, and not a representation
of the abstract particle of the typeface Helvetica.

By composing low-level particles, you begin to create the elements of the system
that have visual form: Words, in the form of Labels or strings, which are
compositions of type and color; Views, which may be composed of spacing, color,
line, and function; complex Views, like buttons, which are compositions of
Labels and Views.

These compositions may be referred to as Elements or Atoms (per Brad Frost's
terminology)[^1].

## Everything is immutable

Compositions of particles may have the appearance of dynamic, changing values,
but they are in fact immutable. For instance, if I have a View that is a
composition of the color white as its background and dimensions (or spacing) of
100 points in width and 100 points in height, and I change the color from white
to black, I am not changing the View so much as creating a new composition. The
View is entirely new because the identities of the composed particles have been
exchanged for different ones, rather than changed or mutated.

It is through this immutability that SDS gains its strength. A finite set of
particles can be composed in practically infinite ways to create a vastly
comprehensive system that remains a cohesive whole due to its finite comprising
parts. Put more concretely, rather than creating a limited and vast set of UI
elements, you define the system in terms of its particle properties, thus
limiting the available styles but opening potentially unlimited avenues of
creativity for the actual pieces of UI.

The potential here lies in the fact that we're unburdening the system maintainer
of the responsibility to provide _every required Element of the system_.
Instead, new compositions can be created as necessary, by decomposing and
reassembling UI Elements from a common set of properties.

## Particles are stateless

A less abstract way of demonstrating the immutability of particles in SDS is
thinking of them as stateless. A particle represents a particular, unchanging
visual or behavioural property: their only responsibility is to represent that
property.

## States determine compositions

'State' in this manner refers to the state of data or value, or changes in
time-based sequences (for example, the state of a piece of UI (a composition)
may change based on user input or interaction). Changes in state result in
changes in UI, or, as we have defined them, changes in compositions.

It's through states—changes, presence or absence of data—that we derive
compositions of particles that make our UI. As such, a given composition may be
expressed as a function of state:

<BlockMath math="f(x) = A" />
<BlockMath math="f(\Delta x) = B" />

Where <InlineMath math="f" /> is a function that takes state and
returns UI (composed particles), <InlineMath math="x" /> is a state
and <InlineMath math="\Delta x" /> is a changed state, and
<InlineMath math="A" /> and <InlineMath math="B" /> are
the resulting compositions.

This is the basis through which data can been seen to augment and flow through a
user interface powered by SDS.

## Compositions can be composed

Let’s clarify the term ‘composition’ by simply defining it (for our purposes) as
an act of addition. We can use some abstract symbols to represent the kinds of
things we’d compose:

<BlockMath math="a = b + c" />

<BlockMath math="d = e + b + c" />

Above are two simple compositions. We can further simplify our composition
<InlineMath math="d" /> so it becomes:

<BlockMath math="d = e + a" />

If we were to change the composition <InlineMath math="a" /> to
something else, say, <InlineMath math="a = f + g" />, then our
composition <InlineMath math="d" /> would also change.

<BlockMath math="d = e + a = e + f + g" />

This chain of events makes it straightforward to propagate changes to the
appearance of our entire system in a few simple motions. Note that this still
isn’t quite what you’d consider mutability; we’re not changing the values of the
composed particles <InlineMath math="b" /> or <InlineMath math="c" />, but
changing the arrangements of the compositions to create new compositions.

As a more applicable example, a composition in a design system might be the
following (where <InlineMath math="p" /> is the set of particles
that comprise the system):

<BlockMath math="Button = Label + View" />
<BlockMath math="Label = p_{type} + p_{color}" />
<BlockMath math="View = p_{color} + p_{line} + p_{spacing}" />

## Views comprise the majority of the system

Views will inevitably make up the vast majority of our design system because of
their simplicity. A View is essentially just a composition that can contain
other compositions: a sort of box, or container. A View can represent a button,
a card, an invisible container, or even a complex input. At their simplest, a
View has no visual or behavioural properties of its own, and exist simply to
contain other Elements.

In design tools, a View may be thought of as a group (or a layer). On the web,
the parallel would be a `div`. In iOS, it would be a `UIView`. Assuming you are
familiar with one or all of these environments for creating UI, you'll
understand how essential those pieces are to the process. Views in SDS are
precisely as crucial.

When you begin to combine Views with other Views, you start to build complex
user interfaces, all the way up to entire pages or applications[^2]. This is,
after all, all that a user interface is at the cosmetic and functional level: a
composition of compositions of Views.

## Abstract rules define the particles and the highest-level compositions

By 'abstract rules,' I'm talking about things like brand values, context, and
audience. It's these variables that determine the colors you choose; the
typefaces in use; the mediums you decide to build the system(s) for.

Similarly, these abstract rules determine the patterns you choose to solve
certain user problems: how the user inputs information, navigates an interface,
reads content, or signs in or out. In this way, the very lowest level pieces of
the system—the particles—and the very highest—the topmost View compositions—are
determined by the abstract rules of branding and context, and everything in
between is arrived at by the decomposition of high-level patterns, or by
composition of particles.

## The system is maintained by its users

With the structural rules of the system in place, we may turn our attention to
the organisational aspects of design system maintenance. While the system may be
initialised by a single team, its long-term maintenance is a byproduct of its
continued use and organic growth.

With the right infrastructure in place, simple rules about preventing
re-definition or duplication of compositions ensure the system remains lean and
predictable. Any user of the system may create new compositions, adhering to the
stylistic rules set by the abstract brand and context, and enforced by the
particles available.

The system is decentralized and runs similarly to a democratic government, with
branches of government (product teams) charged with scoped responsibility of
product areas and compositions of UI. Only in this way is it possible for
product teams to maintain a high throughput, evolve the system at a matched
speed, and create shared accountability and mutual interest in system
improvement.

## Further reading

The ideas exhibited above are inspired and reinforced by notions set out by a
number of folks before me. Some pieces of particular interest for continued
research in this area include:

- Jon Gold's '[Declarative Design
  Tools](http://jon.gold/2016/06/declarative-design-tools/)'
- Brad Frost's '[Atomic
  Design](http://bradfrost.com/blog/post/atomic-web-design/)'
- Adam Morse's '[CSS and
  Scalability](http://mrmrs.github.io/writing/2016/03/24/scalable-css/)'
- All of Nicole Sullivan's [writing on Object-Oriented CSS
  (OOCSS)](http://www.stubbornella.org/content/category/general/geek/css/oocss-css-geek-general/)
- '[Structure and Interpretation of Computer Programs](http://amzn.to/2CZq9YZ)'
  from Harold Abelson, Gerald Jay Sussman, Julie Sussman, and Alan J. Perlis

Additionally, preliminary thinking about the above system theory can be found in
other posts on my blog, namely:

- [Designing Product UI Systems](/2017/03/29/designing-systems/)
- [Casting Graphite in Gold](/2017/06/02/casting-graphite-in-gold/)
- [Paving The Path of Least
  Resistance](/2017/06/27/paving-the-path-of-least-resistance/)
- [A Design System Grammar](/2017/07/12/a-design-system-grammar/)
- [Design System Structure](/2017/07/17/design-system-structure/)

Finally, the present and abrupt conclusion above is one I am aware of. Many of
these ideas are still in their infancy and have had only minimal purchase in the
real-life design systems I've worked on. I plan to concentrate efforts on
getting from the "Why" of SDS to the "How": how, in current tools and different
organisations, can a design system based on these principles be created (or,
with increasing urgency, borne out of an existing system), maintained, and
scaled.

I'm also aware of the lack of source material and further reading from more
diverse sources and underrepresented groups. It's easy for underrepresented
voices to be drowned out, especially in the midst of posts like this written by
people like me. I would be very glad to hear from you about your thoughts on
this subject, or if you want to share the work of someone else you think is
important, interesting, or unheard. For public discussion, find me on
[Twitter](https://twitter.com/_dte), or for 1-to-1 correspondence, [email
me](mailto:dan.eden@me.com).

[^1]:

  In my previous writing on the subject of design systems, I've referred to
  these compositions as 'Components,' but have found that term to be loaded or
  confusing, especially in engineering contexts. Consider them interchangeable.

[^2]:

  Again, in my previous writing, these compositions have been referred to as
  'Patterns': in the interest of avoiding conflation of terms, I've tried to
  reduce the definitions herein to simply those of particles and compositions.
