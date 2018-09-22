import Image from 'components/Image'

export const frontmatter = {
layout: "post",
title: "Casting Graphite in Gold",
hero: "2017/06/graphite.png",
date: "2017-06-02"
}

# Casting Graphite in Gold

<Image src="2017/06/graphite.png" className="" />

I’ve spent a number of years oscillating between both sides of the
Designer-Engineer spectrum, improvising, learning, and faltering along the way.
My experiences on either side have fostered greater empathy for my colleagues in
both roles; both are irreplaceable in their duties within a product team.

A view into both sides of the spectrum has also helped me develop some ideas
about effective collaborative relationships between the two. Call them opinions,
call them tips and tricks—either way, there are some broad themes that are often
overlooked, and that I have found can lead to happier, more productive
relationships.

## 1. Design is visual

An engineer’s vocabulary is self-serving for efficiency. Engineers excel at
avoiding ambiguity, because their output is so tangible—at least, amongst
engineers. In order for designers to feel a part of the whole product
development cycle, and to enable them to be more helpful and empathetic, they
should be looped into diffs and technical conversations. Supplementing front-end
changing diffs[^1] with a screenshot or quick video of the impending change can
help designers see their work come to fruition, and allows them to contribute
suggestions without causing backtracking or reverting diffs.

The onus here is on designers to _ask_ for inclusion in technical processes, and
for engineers to invite designers into their workflow. Designers don't have to
learn how to code, but learning the vocabulary of an engineer can foster a great
deal of mutual respect and more well-reasoned design choices.

## 2. Design is conversational

A designer’s job isn’t done until after the diffs have landed and the product
has shipped, and even then, the cycle simply starts again. This means that
design and engineering should be working in parallel—not in sequence—to one
another, challenging and supporting each other until and after the product is
complete and _aligned with everyone’s vision of completion_[^2]. I often hear about
“design lock,” which is a futile endeavor. Engineering and implementation are a
vital part of the design process, and should never be considered a separate
step. The relationship between design and engineering should be cyclical and
additive.

## 3. Design is flexible

The useful and actual deliverable of “design lock” is ‘completed’ mocks and
prototypes, showing the team’s vision given all the objectives, constraints, and
stakeholders’ personal influences. However, these deliverables do not make a
design sacred. Similarly, asking for specs, redlines, or final mocks can be
misleading for all parties. The minutiae of design—margins, colors, font
sizes—are often the troubling pieces of specs, and are also the pieces that
should be standardized across a product. Designers and engineers alike should
learn to lean on the system at large, rather than the colors in Sketch or the
measurements in Figma, to dictate the discerning details of the completed
product. A failure to ship a product “to spec” is usually indicative of a larger
issue—a lack of common vocabulary required to ensure engineers, designers,
product managers, and entire product teams can communicate clearly and
unambiguously their vision for a product.

## 4. Engineering is a pillar of Design

The points made above speak chiefly to how engineers (and to a certain extent,
PMs) can adjust their working style and expectations to appease designers, but a
great deal of responsibility lies on the designer to do the same for their
partners. Designers, including myself, have a tendency to prohibit
opportunities for criticism and collaboration outside of designer-centric
channels and timetables, at the behest of ego and a desire to present a
satisfactory output. Foregoing this tendency and inviting engineers to
collaborate in the design process early and often both helps ground a designer’s
choices in logic and the constraints of the available resources, and builds
trust between the two parties, ensuring a similarly collaborative workflow when
it comes to implementation (recall the first point, “Design is visual”).

---

A Designer's output is malleable and temporal; Design is a verb. When
successful, an Engineer's output is the tangible representation; a noun that
commits the verb to an output. When the intentions of both sides are
expressed, understood, and acted upon, the output can be truly magical.

The themes outlined here are inevitably one-sided—I assume the role of a
designer much more often than that of an engineer—but hopefully still prove
useful or interesting to product teams of all shapes. Similarly, there are
immensely important dimensions missing from the relationship described here; the
roles of research, content strategy, data science, and product management are
certainly needed to solidify the success of a product. My experiences with these
partners are varied, and I invite anyone to critique my narrow views and share
with me a different perspective.

[^1]:

  For the unititiated, "diffs" are code reviews where changes
  ("differences" between the old and new code, hence the name) are approved,
  denied, or commented on by peers.

[^2]:

  This is an important distinction, and one enabled by a _cycle_ of work
  between design and engineering, instead of a handoff. Too often, designs are
  passed to an engineer, comprimises made that lead to an implementation that
  differs from the designer's vision, leaving engineers making potentially
  uninformed decisions, and designers feeling short-sold on their efforts.
