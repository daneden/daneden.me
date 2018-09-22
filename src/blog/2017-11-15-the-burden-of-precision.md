import Image from 'components/Image'

export const frontmatter = {
layout: "post",
title: "The Burden of Precision",
date: "2017-11-15"
}

# The Burden of Precision

> "If the idea is there, the brush can spare itself the work"
> _—Chinese painter's proverb_

Design tools today confine us to an unrealistic and ill-advised goal: one of
perfection. Tools like Photoshop and Sketch are highly precise, and demand
precise output from Designers. We measure the pixels between elements, the exact
colors in multiple color spaces, and present these masterpieces in meetings
before they’re handed to engineers to bring them to fruition.

And therein lies the problem. Without engineers, our products are mere static
pictures of products. A pale shadow of the finished result. At best, our designs
are sandboxed emulations of the real thing; complex prototypes that demonstrate
a small fraction of the real-world states the product may encounter. We spend
all this time and energy using precise tools to produce perfect caricatures of
things we rarely understand the complexities of making real.

<Image src="2017/11/Simplicity.png" />

Why do we design in this way? An architect's time surely isn't best spent
producing perfect virtual reality environments of the buildings she plans. One
could spend months just making the models and 3D environments so uncanny, so
perfect, that one neglects to realize that they are mere simulations. Instead,
the architect drafts blueprints, tests materials, and entrusts the builders to
execute with precision at the building stage.

In Bruno Munari’s “Design as Art,” he talks about the evolution of the arrow as
a signal for direction:

> “At the beginning of the nineteenth century, arrows used as signs had scarcely
> begun to be stylized. The part representing the feathered flight was simply
> filled in with black, with straight lines at the top and bottom and curved
> lines at the front and back to suggest the softness of the feathers.
> ‘Otherwise,’ some critic of the times is sure to have said, ‘no one will
> understand what it is.’”
> _—Bruno Munari, Design as Art_

This passage struck me as a parallel to the moment in modern design tools we
currently face. We design things _precisely_ as they appear in our minds,
otherwise _no one will understand what it is._ But I think we underestimate the
connections we and our fellow product manufacturers are able to make with
limited information.

With the help of a robust and comprehensive design system, I am certain that we
could design in much broader strokes, and concentrate on making the finished
product, rather than our design outputs, highly precise and reflective of our
ideal. Rather than saying “the button has 12 points of padding on its left and
right edges, and 8 points of padding on its top and bottom edges,” we could say
the button has 3 units and 2 units of padding respectively. Doing so allows us
to forget about questions like “how big is a point?” and “how do points change
on different devices?”

We can draw our button as big or as small as we want, and it doesn’t matter—the
design becomes the _description_ of the artifact. We can express this in
pictorial form, as we do in tools like Photoshop or Sketch (though now
forgetting how precise we need to be, we can simply gesture at the intent), or
we can write it in plain text, JSON, or some other text format. The precision is
introduced by the engineer, where it rightfully belongs. After all, our designs
are completely useless until they are built—what exists in the users’ hands is
the final design, and nothing less.

This newfangled process makes us more thoughtful writers, proximally closer to
the engineers (who are now crucial to and deeply involved in the design process)
and releases us from the burden of precision to think about more pressing

"matters": "Why does this state need to exist? How does this fit with the rest of",
the product? What is the place of this product in the world? How might people
use this to cause harm? These questions are rarely answered by a designer,
principally because we are so wrapped up in making sure we craft something
appealing enough to get the resources to actually build the thing.

And what about that crucial question of buy-in? Without beautiful, precise
pictures of the product we wish to create, how do we gain resources to actually
make them a reality? This new approach would turn the process on its head: it
makes building and designing something one and the same. Rather than creating
and presenting a design prototype, only to dismantle it in order to build and
present a functional prototype (often at a lower quality), the functional
prototype itself becomes the presented artefact, greatly reducing the cost of
making it a stable, complete product.

The burden and responsibility of precise, perfect design should be shared
between designers and engineers. The fact that this is true for every other
related industry—architecture, industrial design, printed matter—and not for
digital product design is indicative of nothing but the immaturity of our tools,
processes, and philosophy.
