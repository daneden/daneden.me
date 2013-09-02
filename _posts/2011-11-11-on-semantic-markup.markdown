---
layout: post
title: On semantic markup
hidden: true
---

It seems like everyone and their mother is worried about the semantics of their markup these days. It's turning into quite a trend, and everyone is weighing in all over the place. Divya Manian made some good points in [her article](http://coding.smashingmagazine.com/2011/11/11/our-pointless-pursuit-of-semantic-value/) over on Smashing Magazine, and I mostly agree with what she's saying.

Part of the problem, I think, is that we as web designers are still very much unaware of the meaning behind the new semantic elements introduced in HTML5. Sometimes I wonder if the W3C even fully understand them. But whose job is it to understand this stuff?
<!-- more -->
It shouldn't be down to the designer. The question of "What's the most semantic way to markup X?" is a huge one - one that can certainly take up a lot of time. I'd say that semantic markup justifies an entirely new profession. _That's called SEO, Dan!_ I hear you cry. But no, not really. As Divya mentions in her article, Search Engines generally don't care how semantic your markup is outside of headings and links.

Another major problem in semantic markup is the ambiguity of the new elements. Sure you could use an `aside` for the sidebar, but is it always content that's relevant to the article? Is it actually 'aside' information? Perhaps a `div` would be better suited. I certainly went through (and I'm still going through) a stage of semantic-itis, ruthlessly casting out divs and replacing them with sections, articles, headers and footers. It seems like everyone is getting so excited about the new elements, they're completely forgetting that the `div` is for dividing content - perfectly suitable and semantic enough of a reason to use it for your header, footer and sidebar.

Blogs are easy for semantic markup - you've got your header and `nav`, a `section` for your content which might consist of several `article`s. each with their own header and footer - maybe some aside information. A sidebar might justify it's own `section`, but that's arguable. Then, finish up with a `footer`. But what about web apps? The new elements introduced in HTML5 have been justified a few times, but in almost all the books I've read, HTML5 has been "brought up to date with the rest of the web," adding new elements and rules for the webapp age. But web applications aren't exactly the easiest things to make semantic. The semantic rules will vary from app to app depending on how the user interacts with it. Perhaps you have a calendar application - should the event names be headers? Probably. But then there's additional information - dates, times, attendees - should that go in an aside? Or join the event name in a header? Is the event description really an article? Hold on, is the event itself an article? Or should it remain a list of some sort?

It's really not worth pulling your hair out over. The way I see it, the only people who are really going to kick up a fuss are the sniveling semantic preachers arguing that your `em` tags are being incorrectly used. Write the markup how you want. Sure, `div`-itis is bad, but I'm pretty sure that Obsessive Compulsive Disorder is worse.

In the mean time, I return to my main point - semantic markup justifies it's own job role in the web design profession. We have the designers, the content strategists, the SEO expertsl but none of those are particularly suited (or have the time) for the mammoth job of semantic markup authoring. Correct me if I'm wrong, but I think the web designer has enough on her plate with the arrival of a myriad of internet-accessible devices to cater for.
