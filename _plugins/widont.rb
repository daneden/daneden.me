# A widont plugin for Jekyll
#
# INSTALLATION
# 1. Create a _plugins directory in your Jekyll site
# 2. Put this file in that folder
#
# USAGE
# <h1>{{ page.title | widont }}</h1>
#
# FEEDBACK AND BUGS
# Please report bugs or other feedback at http://scottboms.com/

require 'liquid'

module WidontFilter

  # Return the element's text after applying the filter
  def widont(text)
    text.strip!
    text[text.rindex(' '), 1] = '&nbsp;' if text.rindex(' ')
    return text
  end

end

Liquid::Template.register_filter(WidontFilter)