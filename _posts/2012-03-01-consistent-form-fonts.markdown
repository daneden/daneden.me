---
layout: post
title: Consistent Form Fonts
hidden: true
---

It's not very often I write something code-oriented these days, but this is a gem from the archives of [Rogie King's blog](http://www.komodomedia.com/blog/2006/10/css-trickery-part-5-inheritance/) I simply had to share.

If, like me, using a full-on reset or normalizing stylesheet makes you feel dirty and wrong, you probably stick with something really simple like this:


{% highlight css %}
* {
    margin: 0;
    padding: 0;
}

html, body {
    font: 100%/1.5 Helvetica Neue, Helvetica, Arial, sans-serif;
}
{% endhighlight %}



That's about as complex as my reset gets. But then you drop a form into your HTML document, and things start to go a little bit west. Inputs and textareas will get the browser's default style for form elements, and pick a new font family, size and line-height to go with it. Yikes. Chaos!

But fear not; Rogie has the solution.


{% highlight css %}
input, textarea, select {
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
}
{% endhighlight %}


It turns out that by default, form elements don't inherit the declared font values. Heck, even [Eric Meyer's reset](http://meyerweb.com/eric/tools/css/reset/) doesn't provide consistent form fonts.

I think the strange thing about Rogie's article on this is that it's six years old - but this is the first time I've found an explanation and fix for the issue.
