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

module Jekyll

  module WidontFilter

    # Return the element's text after applying the filter
    def widont(text)
      text.strip!

      # Split the sentence into an array of words
      words = text.split(' ')

      # Count the characters of the last two words
      character_count = words.last(2).reduce(0) { |sum, word| sum + word.length }

      # Check whether to insert a space
      if character_count < 15
        text[text.rindex(' '), 1] = '&nbsp;' if text.rindex(' ')
      end

      text
    end

  end

end

Liquid::Template.register_filter(Jekyll::WidontFilter)