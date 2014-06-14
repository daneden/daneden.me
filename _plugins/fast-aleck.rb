# Plugin/Gem Loader
require 'fast-aleck'
require 'kramdown'
# Fast-Aleck - better typography
module Jekyll
  module Converters
    class Markdown < Converter
      def convert(content)
        return FastAleck.process(
          Kramdown::Document.new(content).to_html,
          :wrap_amps => true,
          :wrap_caps => true,
          :wrap_quotes => true,
          :widont => true
        )
      end
    end
  end
end
