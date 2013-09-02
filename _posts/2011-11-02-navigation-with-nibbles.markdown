---
layout: post
title: Navigation with "nibbles"
hidden: true
---

Something I've come across a few times on the web recently is a feature I like to call "Navigation with nibbles". Let me show you what I mean:

{% image /uploads/2011/11/banner.png "Navigation nibbles, here seen on Themble and Simplebits." %}

When I talk about nibbles, I'm in fact referring to those little snippets of information between each page title. I _love_ this technique - it provides the user with a little piece of additional information about what to expect on the following page. It's simple and effective.

However, something I noticed about this little feature is that web designers are all doing it the same way - they're writing their nibbles in spans or other ambiguous markup in order to style it differently. And at the end of the day, it's not really a part of the link, and not really a part of the important content. So what can we do? Use pseudo elements, of course!

The theory is very simple. Keep your markup lean, with only the _actual_ content between the anchor tags. Then use an attribute to insert the nibble of information about the page. While you could use the title attribute, for this example I'm going to use a data attribute.

{% highlight html %}
<a href="/about" title="About" data-description="Learn a little more about me">About</a>
{% endhighlight %}


Awesome. Lean, clean, and semantic. But how do we get that nibble to appear along with our link? Enter the pseudo element.

{% highlight css %}
a[href="/about"]:after {
    content: attr(data-description);
    display: block;
    font-size: .75em;
    line-height: 1.1;
    color: #999;
}
{% endhighlight %}

How easy was that? After this CSS (plus a little extra), you could end up with something like this:

[![](/uploads/2011/11/mockup.png)](/uploads/2011/11/mockup.png)

You might prefer to have your nibbles right in the markup, but if you ask me, this is a better solution.
