import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import mdToHTML from '../utils/mdToHTML'

class PortfolioPage extends React.Component {
  render() {
    const { data, location } = this.props
    return <Layout data={data} location={location}>
      <Helmet title="Portfolio" />
      <div className="mxl">
        <h1>Portfolio</h1>
        {mdToHTML(`
## Facebook

I’m currently employed by Facebook as a Product Designer. I work on the Facebook
Design System, primarily for Facebook's Ads and Business products, as part of
the Business Interfaces team.

I previously worked on Facebook's Brand Measurement team, devoting my time to
creating new ways to measure and report ad effectiveness as it pertains to brand
advertising.

My first project at Facebook was [Split
Testing](https://www.facebook.com/business/news/optimize-your-ads-with-split-testing?pnref=story),
a tool allowing advertisers to test different ad strategies against one another
to find the most effective way to spend their ad budgets on Facebook.

## Dropbox

During my two and a half years at Dropbox, I worked on numerous projects across
several different teams. Most notably, I worked with the Revenue & Growth team
on redesigning and [relaunching Dropbox
Pro](https://blogs.dropbox.com/dropbox/2014/08/introducing-more-powerful-dropbox-pro/)
(now known as Dropbox Plus), an effort which involved both product work (in the
form of building new features, such as password-protected shared links) and
marketing efforts. Additionally, I
helped lead the engineering efforts to build the marketing pages for Dropbox
Pro.

After the initial launch of the new offering, our team was poised to grow
adoption. We spent months experimenting with marketing efforts, as well as
refining the checkout experience. We saw a direct and substantial positive
impact on subscriptions through our improvements.

After working on Dropbox Pro, we spun off a small “blue sky” growth team to
explore how we could foster increased adoption of our sharing tools. The most
successful project to emerge from that team was the addition of [user
avatars](https://dribbble.com/shots/1972358-Faceholder) in the Dropbox Product.
Adding user photos to the product led to increased sharing activity, just as we
had hoped, but it also unlocked possibilities for other product teams to build
richer, more user-centric experiences.

In my final year at the company, I joined the Web Infrastructure team as a
Design Engineer to work on Design Systems. I had spent all my tenure at Dropbox
maintaining a suite of design tools, so was able to provide historical knowledge
and engineering principles to address inconsistencies in both the design and
implementation of many product surfaces. The result of my work was
[Scooter](http://dropbox.github.io/scooter/), an open-source (S)CSS framework
and design system adopted by several product teams to speed up their work.

## Side Projects

If the work I do for money is my bread and butter, my side projects are the jam
on top. I routinely embark on new side projects to explore coding opportunities
and design styles outside of my employment.

### Lucid
[Lucid](https://chrome.google.com/webstore/detail/lucid/achogfadpkcepkepcpegehpiiioihmik)
is a Google Chrome extension that replaces the New Tab page with a simple
notepad. It's useful for avoiding bad browsing habits and jotting down ideas or
errands.

### Golden Hour
[Golden Hour](https://goldenhour.photos) is a place for me to
post some of my favorite and best photographs. They're all shot at sunrise or
sunset, and they're all available to download for personal, non-commercial use
(such as your desktop or mobile wallpaper). [Visit the
site](https://goldenhour.photos).

### Gifme
[Gifme](https://gif.daneden.me) is a personal clone/rip-off/emulation
of Giphy, the popular gif search engine. Tired of Giphy's suboptimal Slack
integration, I built Gifme as a web app and a [Slack
app](https://gif.daneden.me/slack) to search my own massive gif collection. View
the [source on GitHub](https://github.com/daneden/gifme) or [visit the
site](https://gif.daneden.me).

### Toast
[Toast](http://daneden.github.io/Toast) is a Sass/CSS grid system,
designed to be highly customisable, extremely verbose, and simple-to-use out of
the box. It uses no floats, no \`first\` or \`last\` classes, and allows nesting.
[Visit the site](http://daneden.github.io/Toast)

### Digital Ruin
[Digital Ruin](http://digitalruin.tumblr.com/) is—for lack of a more
fitting description—an art project dedicated to giving form to both real and
fictional digital exchanges, with an emphasis on difficult interactions. It’s
bleak, and hard to describe. [Visit the site](http://digitalruin.tumblr.com/).

### Just My Type
[Just My Type](http://justmytype.co) is a library of font
pairings from Adobe Typekit and [H&FJ](class:caps)’s Cloud.Typography. Created
out of a desire for a place to keep track of my personal favorite web font
pairings, Just My Type has grown to become a popular typography resource for
many web designers. [Visit the site](http://justmytype.co).

### Onword
[Onword](http://onword.co) is a simple web application for writing documents. It
was designed and developed in just 10 days, and introduced me to the world of
Ruby. [Visit the site](http://onword.co).

### Brills
[Brills](http://brills.me) is a simple money management web application built
for budgeting quickly. [Visit the site](http://brills.me).

### Animate.css
[Animate.css](http://daneden.github.io/animate.css/) is a cross-browser
plug-and-play CSS animation library for delightful animation in websites and web
applications. [Visit the site](http://daneden.github.io/animate.css/).
        `)}
      </div>
    </Layout>
  }
}

export default PortfolioPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        authorName
      }
    }
  }`
