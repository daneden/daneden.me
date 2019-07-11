import Image from "components/Image"
import H1 from "designSystem/H1"

export const frontmatter = {
  layout: "post",
  title: "Square Peg, Round Hole: Typed Programming For Designers",
  date: "2019-07-09",
}

<H1 weight={200} width={90}>
  Square Peg, Round Hole: Typed Programming For Designers
</H1>

Think back to the last time that you cooked a meal. The recipe you followed
might have called for a particular ingredient, like yellow onions, but upon
raiding your kitchen, you found you only had white onions.

Depending on the recipe, this substitution is probably just fine—but your
dinner guests might have been disappointed if you'd chosen to use peaches in
place of an onion.

In software programming, there’s a very similar problem that’s solved by
something called “_typing_.” If you were to “type” the recipe above, you might
say that it requires yellow (or white) onions. If our recipe could talk back to
us, it would kick up a fuss if we tried to swap onions for peaches.

Similar to how following a recipe and not making strange substitutions usually
yields a more enjoyable meal, using typed programming languages can help create
more resilient design systems with a better experience for the people using them.

---

A “typed” programming language means a programming language that has certain
expectations and rules about the kinds (or _types_) of data being passed between
functions and operations.

As an example, you might have a “sum” function that adds two numbers together
and returns the result.

```js
function sum(a, b) {
  return a + b
}

sum(1, 2)
// => 3
```

It doesn’t make sense to try and add together a number and a string. In order
to prevent people from trying to make that operation happen, you would add
types to the function to limit what arguments people can pass to it.

```js
// These are “type signatures”, indicating the types
// of data the function can accept and return
//              👇         👇       👇
function sum(a: number, b: number): number {
  return a + b
}

sum("hello", 2)
// => Error because type 'string' is incompatible with 'number'

sum(1, 2)
// => 3
```

This tells our code compiler—as well as people wanting to use the our
function—that `sum` is a function that accepts two number arguments, and
returns a number as a result.

## Typing in Design Systems

How does the concept of typing help us create resilient Design Systems? Before
even writing any code, typing can help us think about the limits of the
components we’re creating.

Let’s start with a simple button component. Our Button component is essentially
just a rectangle with some text inside it.

<Image
  alt="A diagram of a button"
  responsive={false}
  src="2019/07/single-button.svg"
/>

```js
Button("Confirm")
```

But what would happen if we were to put another Button inside this one?

<Image
  alt="A diagram of a button inside another button"
  responsive={false}
  src="2019/07/nested-button.svg"
/>

```js
Button(Button("Confirm"))
```

This obviously shouldn’t be permitted: it’s unlikely that someone would
intentionally do this, but it could happen by accident. If our Button component
was strictly typed, we could prevent anything other than a string being
rendered inside of it:

```typescript
function Button(label: string) {
  ...
}
```

This probably seems like an obvious property for buttons: they shouldn’t
contain other buttons. But what about other, more complex or generic kinds of
components? For example, there are many kinds of components that are designed
to house all sorts of information: generic card containers, tooltips, or lists.
Let’s take a look at a list component as an example.

Our example list will be a list of cities, with each item in the list showing
three pieces of information:

- The city’s name
- The city’s country
- A photo representing the city

Before writing any code, or even designing what the list should look like, we
have some information at hand about the types of data we’ll be dealing with:
the city’s name and country should be strings of text, and the photo would be
an image. This image might be represented just by a string itself, with a URL
to the image on a server, or it may be another component itself.

Let’s look at those pieces of information again, but this time we’ll type it
the same way that the engineer implementing the list might do:

- The city’s name is a string
- The city’s country is a string
- The photo representing the city is either a string or an image component

In Flow, a type-checking system for JavaScript, the type signature for our
list item might look like this:

```typescript
type CityListItemData = {
  name: string
  country: string
  photo: string | Image
}
```

Designing components and products with such types in mind has many benefits.

First, without even looking at or creating a visual design for this list
component, just reading the information it requires and the data types for that
information gives us a good picture of what that component might look like.

Second, it helps make it clear to the engineers you’re working with how they
should approach building the component: they know, for instance, that we should
be prepared to guard against people trying to use a number for the city’s photo,
or an image for its name.

And third, it creates an abstract “shape” for the information associated with a
city that you might be able to use in other places: perhaps instead of a list,
you want to create a table, or show a particular city’s information in a single
card. When the data has a shape, you can more easily think about other ways of
representing the data.

Designers tend to do this naturally throughout their process of iteration:
given a set of information, we explore different ways to display that
information. Explicitly acknowledging what types of data to expect in a given
design can lead us to more robust solutions and enables us to work more closely
with engineers to avoid unpredictable or broken experiences.

---

Strict typing can help prevent errors in engineering, making software more
predictable, harder to exploit, and easier to maintain. Applying the same
concepts to product design, particularly in design systems, can provide similar
benefits at a higher product level, speeding up the overall product development
process, as well as exposing potential risk in a product or flow.
