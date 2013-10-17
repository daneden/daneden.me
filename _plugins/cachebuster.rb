require 'digest/sha1'

module Jekyll
  class CacheBuster < Liquid::Tag

    def render(context)
      "#{Digest::SHA1.hexdigest(Time.now.to_s)}"
    end
  end
end

Liquid::Template.register_tag('bust_cache', Jekyll::CacheBuster)