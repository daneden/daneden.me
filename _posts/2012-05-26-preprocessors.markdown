---
layout: post
title: Preprocessors
hidden: true
---

**TL;DR** — preprocessors can be fantastic tools in the right hands. Tread carefully. In my experience, the longer you use them, the less useful they become. More than anything, **it depends.**

It seems like everyone is pretty obsessed with CSS preprocessors at the moment. They're becoming insanely popular. In case you've been living under a rock for the last 12 months or so, a CSS preprocessor is a program or script that runs either on the client side via JavaScript or on the author's computer, and allows us to do some pretty excellent stuff that CSS isn't capable of on its own. Things like variables, “mixins”, code nesting, etc.

In case you still don't “get it”, here's an example of the syntax for one of the popular CSS processors, [LESS](http://lesscss.org/). Here's the code you punch in:

{% highlight css %}
@color: #b4bcbf;

.rounded-corners (@radius: 5px) {
    -webkit-border-radius: @radius;
    -moz-border-radius: @radius;
    border-radius: @radius;
}

.banner {
    .rounded-corners;
}
.footer {
    .rounded-corners(10px);

    a {
        color: lighten(@color, 10%);
    }
}
{% endhighlight %}

And here's what would get spat back out the other side:

{% highlight css %}
.banner {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

.footer {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
}

.footer a {
    color: #ccd5d9;
}
{% endhighlight %}

Pretty fantastic, right? You can see why people are getting so excited about preprocessors. They make a lot of hellish stuff a breeze, particularly when managing a large website.

I don't like preprocessors. I'm a CSS masochist.
<!-- more -->


## You're insane, Dan.


So I've been told. People don't seem to get it when I tell them that it feels to me like if you're relying on tools like [LESS](http://lesscss.org/) or [SASS](http://sass-lang.com/), you're going to cause yourself problems and enforce potentially bad habits. _You don't need tools - you just need to write better CSS._ Well documented CSS with structure.

So what problems are you likely to encounter? Well, first there are the tools themselves. I'm going to be talking about LESS and SASS here, because they're the most talked-about tools and they're also the ones I've used myself.

In my experience with LESS, once you start nesting rules, it can cause a real specificity headache. Since it chains selectors depending on where you nest them, you're likely to end up with over-specific selectors, decreasing the performance of your CSS, as well as the portability of your styles.

Another thing that boggles me is mixins. They're a pretty smart idea, actually. You can declare a set of rules in a sort of component that can be reused in your CSS. Wow, that's brilliant!

{% highlight css %}
.box-content {
    padding: 20px;
    border: 1px solid #eee;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

/* <div class=sidebar> */
.sidebar {
    .box-content;
    float: right;
    margin-left: 20px;
}

/* <footer class=footer> */
.footer {
    .box-content;
    clear: both;
}

/* Output: */
.sidebar {
    padding: 20px;
    border: 1px solid #eee;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    float: right;
    margin-left: 20px;
}

.footer {
    padding: 20px;
    border: 1px solid #eee;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    clear: both;
}
{% endhighlight %}

Wait. Don't classes do that?

{% highlight css %}
.island {
    padding: 20px;
    border: 1px solid #eee;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

/* <div class="sidebar island"> */
/* <footer class="footer island"> */
{% endhighlight %}

I know that's a silly example - most people would use a class anyway, and mixins are better suited for allowing variables in declarations such as border-radius - but preprocessors could enforce the idea that this sort of authoring is acceptable.


## Variables _rock._


That's true. Variables were one of the more attractive features of preprocessors for me. But once again, logic and good documentation can triumph over preprocessors.

{% highlight css %}
@blue: #b4bcbf;
@red: #f66;

/* Sweet! But... why don't we just acknowledge these colors somewhere and do a simple find and replace? */

/*-----------------------*\
    $COLORS
    Blue: #b4bcbf;
    Orange: #f66;
\*-----------------------*/
{% endhighlight %}

If you struggle to do a find and replace in your favorite code editor, you probably need [a new code editor.](http://www.sublimetext.com/) One thing I'll say in favor of preprocessors are the math functions. They're pretty neat. Particularly when it comes to dealing with colors.


## Your arguments are weak.


I know they are. I also know that I've probably been using these tools completely the wrong way. On top of that, I know I've not been working on a large-scale site, where these tools most likely come into their own a lot more.

But that's beside the point. I raise these concerns because they've stuck out to me during my time with these tools. I fear that people starting to use CSS for the first time might be lead into terrible habits enforced by preprocessors. I know I would have been. It happened with jQuery.

I'm just not comfortable leaning on a tool like SASS or LESS for writing CSS. I spend a lot of my time with Windows, which means Ruby (required for SASS) is pretty much a no-go for me. I hate the idea of using client-side JavaScript to handle stylesheets. Only an insane person would deploy that way. So compile it on your end, right? There are tools and apps that can do that. While true, it doesn't change the fact that I also tend to do a lot of my work from a variety of different computers. Those apps won't be on all of them. So I work directly on remote servers, and it's a bitch downloading files, compiling them locally, uploading the compiled CSS, testing, debugging, and repeating. By using vanilla CSS, I can hop on to my server and type away with no worries.

So what about server-side preprocessing? Maybe, but this just feels like we're clutching at straws. Why leave the server with work to do that can be easily done by the browser? I'm going off on a slight tangent here, so let's bring this back home.

The bottom line is - as it is with most things - _it depends._ It depends on the size of the project, the number of people on the team, and a huge variety of other variables. All I know is that I don't like them. But maybe I'm doing it wrong. I just feel like the [long, hard, stupid way](http://dolectures.com/lectures/do-things-the-long-hard-stupid-way/) makes more sense to me.
