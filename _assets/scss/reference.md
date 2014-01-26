# CSS Reference

There’s a lot of code in these files. Let’s go over it all.

## Partials
### Forms
Form element styles. Buttons, inputs, and the like.

#### `.butt`
Global button styles. Usage:

```html
<button class="butt">This is a button</button>
<a href="#" class="butt butt--primary">This is a primary button</a>
```

##### Modifiers

- *`.butt--no-rnd`*: removes rounded corners. Useful for tabs/edge-to-edge buttons
- *`.butt--big`*: enlarges the button
- *`.butt--disabled`*: fades the button to indicate it is disabled
- *`.butt--quiet`*: a more subtle, soft gray button
- *`.butt--primary`*: blue primary action button
- *`.butt--destructive`*: red button to indicate destructive action


#### `.input`
Global input styles. Usage:

```html
<input class="input" placeholder="This is an input" />
<input class="input input--search" type="search" placeholder="Search" />
```

##### Modifiers

- *`.input--small`*: makes inputs smaller
- *`:focus`*: darkens border to indicate focus
- *`.input--search`*: search-specific input styles with custom icon and clear field button

* * *

### Helpers
Helper classes. These range from debugging classes to margin & layout helpers.

#### `.debug--outline`
Outlines all elements on a page. Useful for debugging layout isses. Usage:

```html
<html class="debug--outline">
```

#### `.debug--grid`
Overlays the page with a 24px vertical baseline grid. Uses [Basehold.it](http://basehold.it), useful to determine vertical rhythm. Usage:

```html
<html class="debug--grid">
```

#### `.cf`
Clearfix – ensures parents containing floated elements are clearing correctly.

#### `.o--p`
Margin class – gives element a bottom margin equal to the baseline variable

#### `.o--p--dm`
Double the margin-bottom of `.o--p`

#### `.o--p--hm`
Half the margin-bottom of `.o--p`

#### `.o--p--nm`
Negative margin-bottom equal to the baseline variable

#### `.o--b`
Makes the targeted element block-level

#### `.o--i`
Makes the targeted element inline-block

#### `.o--p--xxl`
Extra-extra large font size (24px)

#### `.o--p--xl`
Extra large font size (20px)

#### `.o--p--l`
Large font size (18px)

#### `.o--p--s`
Small font size (14px)

#### `.o--p--xs`
Extra small font size (12px)

#### `.f--l`
Floats elements left

#### `.f--r`
Floats elements right

#### `.standalone`
Removes margin-bottom from elements. Useful for visual harmony in contained boxes, banners, etc.

* * *

### Layout
Layout classes. Global wrappers, nestable grids, and layout/spacing helpers.

#### `.wrap`
Topmost-level wrapper and central column. No content should be without a wrap. Usage:

```html
<header class="some-header">
  <div class="wrap">
    <p>Content</p>
  </div>
</header>
```

#### `.island`
Typical padding spacer. Puts baseline-size padding all the way around an element.

##### Modifiers

- *`.island--v`*: only applies padding to top and bottom of element

#### `.isle`
Smaller padding. Puts half baseline padding around an element.

##### Modifiers

- *`.isle--v`*: only applies padding to the top and bottom of element

#### `.spit`
Smallest padding. Puts 1/4 baseline padding around an element.

##### Modifiers

- *`.spit--v`*: only applies padding to the top and bottom of an element

#### `.span-all`
Simple `width: 100%` element. Forces full width.

#### `.grid`
Nestable grid wrapper. Should not have visual styling. Usage:

```html
<div class="wrap">
  <div class="grid">
    <div class="grid__col--1-of-2">
      <p>Content</p>
    </div>
    <div class="grid__col--1-of-2">
      <p>Content</p>
    </div>
  </div>
</div>
```

##### Modifiers

- *`.grid--no-gutter`*: removes gutters from columns

#### `.grid__col`
*Note: `.grid__col` must always have a modifier*

Column class for our grid.

##### Modifiers

- *`.grid__col--1-of-2`*: 50% width column
- *`.grid__col--1-of-3`*: 33% width column
- *`.grid__col--2-of-3`*: 66% width column
- *`.grid__col--1-of-4`*: 25% width column
- *`.grid__col--2-of-4`*: Identical to `.grid__col--1-of-2`
- *`.grid__col--3-of-4`*: 75% width column
- *`.grid__col--span-all`*: 100% width column
- *`.grid__col--centered`*: forces column to be centered

* * *

### Mixins
Sass mixins to make our lives easier.

#### `bg-image`
Provides svg-based background images with png fallback. *Requires images to have the same filename* (e.g. ['samename.svg', 'samename.png'])

##### Inputs

- *`$image`*: the extensionless image filename

##### Returns
```sass
background-image: url("#{$image}.png");
background-image: inline-image("#{$image}.svg"), none;
```

* * *

### Objects
Site objects and abstractions. Navigation and UI elements.

#### `.nav`
Simple navigation abstraction. Assumes navigation items in a list. Usage:

```html
<nav class="nav">
  <ul>
    <li><a href="#">Link to somewhere</a></li>
    <li>
      <a href="#">Link to somewhere</a>
      <ul class="nav--sub">
        <li><a href="#">Link to somewhere in sub menu</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

##### Modifiers

- *`.nav--sub`*: sub menu modifier. Removes margin from bottom of list and indents it.
- *`.nav--ruled`*: underlines menu items
- *`.nav--inline`*: makes menu items display left-to-right instead of top-to-bottom
- *`.nav--breadcrumb`*: used with `.nav--inline`. Adds slashes for breadcrumb hierarchy

#### `.banner`
Banners for in-content warnings and messages. Usage:

```html
<div class="banner">
  <p class="standalone">This is a message</p>
</div>
```

##### Modifiers

- *`.banner--ad`*: identical to `.banner--go`, but links inherit color. Usage: `<a href="#" class="banner banner--ad o--b island">This whole link is a banner!</a>`
- *`.banner--go`*: Green for go. Used for CTAs, happy announcements, success messages
- *`.banner--wait`*: Amber for wait. Useful for warnings and important informations.
- *`.banner--stop`*: Red for stop. Useful for error messages and important warnings.

#### `.media`
Media object. Typically a left-aligned image or thumbnail with text/content on the right. Usage:

```html
<div class="media">
  <img class="media__img" src="image.png" />
  <div class="media__body">
    <p>This is some content</p>
  </div>
</div>
```

#### `.media__img`
Image/thumbnail for media object.

#### `.media__body`
Content for media object.

#### `.tag`
*Work in progress.* Tag objects used inline to indicate status.

##### Modifiers

- *`.tag--stop`*: Red for stop. Indicates something is wrong.
- *`.tag--go`*: Green for go. Indicates success.

#### `.img`
Sets image to block-level.

##### Modifiers

- *`.img--centered`*: centers image

* * *

### Sprites
*Legacy/work in progress.* Sprite image helper.

#### `.i--s`
Sets the background image of the element to the sprite map. Usage:

```html
<p><i class="i--s"></i> This is some text with a sprite element next to it.</p>
```

##### Modifiers

- *`.i--s--w`*: sets the height/width to 16px for web sprites

* * *

### Typography
Typography helpers

#### `.promo`
Centers text. Useful for subheads, banners.

#### `.meta`
Lighter text color for meta information.

#### `.subhead`
*@extends .meta*