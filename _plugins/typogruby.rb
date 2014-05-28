# Plugin/Gem Loader
require 'typogruby'
require 'kramdown'
# Typogruby - better typography
module Jekyll
  module Converters
    class Markdown < Converter
      def convert(content)
        return Typogruby.improve(Kramdown::Document.new(content).to_html)
      end
    end
  end
end
