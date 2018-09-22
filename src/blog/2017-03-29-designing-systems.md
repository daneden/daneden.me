import Image from 'components/Image'

export const frontmatter = {
layout: "post",
title: "Designing Product UI Systems",
hero: "2017/03/design-systems.png",
date: "2017-03-29"
}

# Designing Product UI Systems

<Image src="2017/03/design-systems.png" className="" />

_(Short preface/definition: “UI systems”—collections of functional UI
components and their stylistic appearances—are referred to as “design systems”
in this article. Where necessary, functionality and appearance are discussed
individually, but know that “design system” here encompasses both appearance and
function.)_

At any scale, design systems are important in product development. At their
simplest, they help reduce redundancies and inconsistencies in design and
engineering implementations. At their most successful, they enable a universal
language for designers, engineers, PMs, and everyone in between to efficiently
solve problems.

One common problem design systems encounter is often resolved with an
unfortunate compromise; how do you prevent people from diverging from the
system, while still being flexible enough to allow creativity and exploration
beyond the constraints of the system? By making a design system too flexible,
you risk undoing the hard work of reducing inconsistencies. By making one too
rigid, its users are discouraged from using it and retreat to their own
solutions.

## Composition versus inheritance

The issue of an inflexible design system is usually caused by the most sensible
method of building a design system; by creating components that address specific
requirements.

We can start with a simple component found in most design systems—a button. You
might design the appearance of a button in your system with a certain font size,
text and background color, and a border. This button could also have 2–3
different visual (and functional) states, so you add some variant color shades
for the states. By styling different states, the complexity of the component
increases, and its flexibility decreases. To counter the lack of flexibility,
you might then create several other buttons for different use cases—primary,
secondary, tertiary, and ‘special’ buttons. These extra buttons have multiple
states themselves.

Then comes the question of context—what happens when we need the buttons to be
bigger on bigger screens? Or in an environment with inverted colors?

The buttons we’ve designed for our system suffer from overzealous
inheritance—assumptions of the context of the component, and potentially
dangerous overrides as workarounds.

Think of it a little like trying to build a house out of Lego, but instead of
bricks, you’re given a single block of plastic, perfectly carved into the shape
of a pre-built house. Great! Job done. But if you want a different house? You’re
going to need a whole new house-shaped block. Wouldn’t it be nicer to have
bricks that can be detached and reassembled as required?

Suppose instead that we identify the primitive properties of the buttons we have
designed. We take the background colors, borders, spacing, and font sizes, and
we make those our components. Then, for any variant of button, we simply compose
the comprising parts we want. There’s then nothing stopping us from creating a
template button that has a set of default primitive styles, but one that allows
us to easily override those styles within the constraints of the other primitive
styles we have defined. Rather than creating four or more distinct buttons, we
create just a mould and a palette; the only tools we need for numerous
possibilities.

We can go further. We take those primitive styles, and recognize that we see
them—or styles extremely close to them—in other components. We see the same
borders in our date picker component; the same background colors in our headers;
the same spacing in our cards. Without having to rebuild each of these
components, we have the pieces we need to assemble them on a need-by-need basis.
By breaking designed components into their atomic, stylistic parts, we may be
surprised how little we need to build a complex system.

## Separating Form and Function

_Note: the code henceforth is simply for demonstrative purposes. Also, you
might be thinking “Code? I thought this was a Design Systems post,” and rightly
so. It's become a natural tendency for me to anchor my ideas in engineering
principles. Bear with me—hopefully you'll make it through with some
understanding of what I'm getting at._

Some of you may at this point be thinking that this method of composing
components only works at a styling level, and not at a functional level. And
you’re right—but bear with me. Our original, problematic,
inheritance-constrained way of building components for a design system doesn’t
have this issue, since the function of the component is a part of its design. By
decomposing the style properties of the component, you’re left with a functional
component that has no appearance, or an appearance that almost always requires
style overrides.

So how exactly does this work in practice? For the sake of demonstration, we’ll
consider web components. To start, React/JS components wouldn’t have
corresponding CSS files. Their styles would be set by a dictionary/enumeration,
perhaps something like this:

```js
class ButtonComponent {
  render() {
    const style: Style = {
      ...Button.Primary
    }

    return (
      <button style={style} onClick=... />
    )
  }
}
```

You can consider this example as one of those ‘templates’ I mentioned earlier. A
mould; a starting point for any button-like component, with sensible default
styles. Our `Button.Primary` style may expand to this:

```js
const Button = {
  "Primary": {
    "default": {
      ...Controls.Base // font sizes, a11y may be set in here
      backgroundColor: Color.Blue,
      color: Color.White,
    },
    "hover": {
      backgroundColor: Color.DarkBlue
    },
    "active": {
      backgroundColor: Color.XDarkBlue
    }
  }
}
```

During compilation, inline style properties would not appear in the output.
Instead, inline styles would be translated into global unique classnames,
generating a class for each property-value pair:

```html
<!-- Actual output could be much more terse -->
<button class="bgc_Color_Blue hvr_bgc_Color_DarkBlue ..." />
```

Generating class names for every property-value pair may seem like a lot of
output, but with a reasonable and known set of constrained values (e.g. only
pixel units in multiples of 4, and only between 0 and 80), you would have
predictable and limited output.

Overriding styles—within the constraints of the system—would be easy:

```js
class MyCustomButton extends ButtonComponent {
  render() {
    const style: Style = {
      ...Button.Primary,
      width: Width.FullWidth,
      fontSize: FontSize.LargeControl
    }

    return (
       ...
    )
  }
}
```

Unlike CSS, expressing styles through objects like this means that you’re
decomposing and recomposing/replacing styles rather than overriding them with
crude CSS selectors or specificity hacks.

And of course, we can ensure deviation from standards is prohibited through

"types": "",

```js
type Style = {
  width?: oneOf(...Width.values()),
  ...
}

type ControlStyle = {
  ...Style,
  // additional constraints may be put in place for
  // components of certain types, e.g. a control/input
  // may never have .pointerEvents overridden
  pointerEvents: null|void,
}
```

---

Given my limited ability to implement and test a design system like this at
scale, there are undoubtedly flaws in its approach and hurdles that will be
glaringly obvious to many folks. But we can approach these weak points as
opportunities to learn in order to create a process and system that can become
an industry standard.

---

_This post and design system methodology takes inspiration from Apple’s Cocoa
APIs, Brent Jackson’s [CXS](https://github.com/jxnblk/cxs) and
[Rebass](https://github.com/jxnblk/rebass), Adam Morse’s
[Tachyons](https://github.com/tachyons-css/tachyons), and my own work on [design
systems](http://dropbox.github.io/scooter/) and UI frameworks for Dropbox._
