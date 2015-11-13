module Jekyll
  class ImageTag < Liquid::Tag
    @url = nil
    @caption = nil
    @class = nil

    IMAGE_URL_WITH_CLASS_AND_CAPTION = /(\w+)(\s+)([^\s]+)(\s+)"(.*?)"/i
    IMAGE_URL_WITH_CAPTION = /([^\s]+)(\s+)"(.*?)"/i
    IMAGE_URL_WITH_CLASS = /(\w+)(\s+)([^\s]+)/i
    IMAGE_URL = /([^\s]+)/i

    def initialize(tag_name, markup, tokens)
      super

      if markup =~ IMAGE_URL_WITH_CLASS_AND_CAPTION
        @class   = $1
        @url     = $3
        @caption = $5
      elsif markup =~ IMAGE_URL_WITH_CAPTION
        @url     = $1
        @caption = $3
      elsif markup =~ IMAGE_URL_WITH_CLASS
        @class = $1
        @url   = $3
      elsif markup =~ IMAGE_URL
        @url = $1
      end

      @url += "?fm=webp&q=65"

    end

    def render(context)
      source = "<figure class='#{@class}'>"

      if Jekyll.configuration({'config' => ['_config.yml', '_config_local.yml']})['production'] == true
        source += "<img data-src=\"//daneden.imgix.net/#{@url}\" class=\"imgix-fluid\" />"
        source += "<noscript><img src=\"http://daneden.me/uploads/#{@url}\" /></noscript>"
      else
        source += "<img data-src=\"http://127.0.0.1:4000/uploads/#{@url}\" class=\"imgix-fluid\" />"
        source += "<noscript><img src=\"http://127.0.0.1:4000/uploads/#{@url}\" /></noscript>"
      end

      @caption = Kramdown::Document.new(@caption).to_html if @caption
      source += "<figcaption>#{@caption}</figcaption>" if @caption

      source += "</figure>"

      source
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::ImageTag)
