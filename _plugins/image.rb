module Jekyll
  class ImageTag < Liquid::Tag
    @url = nil
    @caption = nil
    @class = nil
    @resrc = nil

    IMAGE_URL_WITH_CLASS_AND_CAPTION = /(\w+)(\s+)((https?:\/\/|\/)(\S+))(\s+)"(.*?)"/i
    IMAGE_URL_WITH_CAPTION = /((https?:\/\/|\/)(\S+))(\s+)"(.*?)"/i
    IMAGE_URL_WITH_CLASS = /(\w+)(\s+)((https?:\/\/|\/)(\S+))/i
    IMAGE_URL = /((https?:\/\/|\/)(\S+))/i

    def initialize(tag_name, markup, tokens)
      super

      if markup =~ IMAGE_URL_WITH_CLASS_AND_CAPTION
        @class   = $1
        @url     = $3
        @caption = $7
      elsif markup =~ IMAGE_URL_WITH_CAPTION
        @url     = $1
        @caption = $5
      elsif markup =~ IMAGE_URL_WITH_CLASS
        @class = $1
        @url   = $3
      elsif markup =~ IMAGE_URL
        @url = $1
      end

    end

    def render(context)
      source = "<figure class=\"#{@class}\">"

      if @url =~ /(https?:\/\/)/
        @local = false
        unless defined?(@local)
          @local = true
        end
      else
        unless defined?(@local)
          @local = true
        end

        @name, @ext = @url.split(".")
      end

      if @local
        source += "<picture>"

        if @ext != "svg"
          if @class and @class.include? "imgbleed"
            source += "<source srcset=\"#{@name}-large.#{@ext}, #{@name}-large@2x.#{@ext} 2x\" media=\"(min-width: 1024px)\" />"
          end

          source += "<source srcset=\"#{@name}-medium.#{@ext}, #{@name}-medium@2x.#{@ext} 2x\" media=\"(min-width: 640px)\" />"
          source += "<source srcset=\"#{@name}-small.#{@ext}, #{@name}-small@2x.#{@ext} 2x\" media=\"(min-width: 320px)\" />"
          source += "<img srcset=\"#{@name}-small.#{@ext}\" />"
          source += "</picture>"
        else
          source += "<img src=\"#{@url}\" />"
          source += "</picture>"
        end
      else
        source += "<img src=\"#{@url}\" />"
      end

      @caption = Kramdown::Document.new(@caption).to_html if @caption
      source += "<figcaption>#{@caption}</figcaption>" if @caption

      source += "</figure>"

      return source
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::ImageTag)
