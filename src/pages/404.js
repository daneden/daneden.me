import React from 'react'

import mdToHTML from '../utils/mdToHTML'

const NotFoundPage = () => (
  <div className="mxl">
    <h1>404 Page Not Found</h1>
    {mdToHTML(`
The page you were looking for was not found.

Maybe it was deleted. Maybe the URL is incorrect. Maybe you wanted to come to
the 404 page.

Maybe the page you were looking for is living happily on another website now.
But maybe it misses you.

Maybe you'll tell your friends or coworkers about the page being missing. Maybe
you won't.

Maybe you'll be OK. Maybe.
    `)}
  </div>
)

export default NotFoundPage
