# daneden.me

Welcome to the innards of [my website](http://daneden.me). It's built using
[Next.js](http://nextjs.org/) and deployed on [Vercel](https://vercel.com/home).

## Installation

If you want to run this site locally:

-   Make sure you have [Yarn](https://yarnpkg.com/en/) installed
-   `git clone https://github.com/daneden/daneden.me`
-   Run `yarn` to install dependencies
-   Run `yarn dev`
-   Party.

To build for production, run `yarn build`.

## Publishing Blog Posts

Blog post metadata is centralized for easier management:

1. **Create the MDX file** at `app/(branches)/blog/YYYY/post-slug/page.mdx`
   - Write your content in MDX format
   - No need to export metadata from the file

2. **Add metadata to `app/posts.json`:**
   ```json
   {
     "id": "post-slug",
     "title": "Your Post Title",
     "description": "A brief description of your post",
     "date": "YYYY-MM-DD"
   }
   ```

3. **That's it!** The site will automatically:
   - Generate the page metadata
   - Create Open Graph images at `/og/[id]`
   - Add the post to the blog listing and RSS feed

For more details, see [CLAUDE.md](./CLAUDE.md).
