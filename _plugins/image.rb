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
      if @class && (@class.match('alignleft') or @class.match('alignright'))
        # If class includes alignleft or alignright, we want to handle markup differently
        source = "<figure class='#{@class} grid__col--1-of-2'>"

        if @url =~ /(https?:\/\/)/
          @local = false
          unless defined?(@local)
            @local = true
          end
        else
          unless defined?(@local)
            @local = true
          end

          @name, @ext = @url.split(/./).last
        end

        if @local == true
          source += "<picture>"
          source += "<source srcset=\"#{@name}-small.#{@ext}\" media=\"(min-width: 320px)\" />"
          source += "<source srcset=\"#{@name}-small@2x.#{@ext}\" media=\"(min-width: 320px), (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144)\" />"
          source += "<source srcset=\"#{@name}-medium.#{@ext}\" media=\"(min-width: 640px)\" />"
          source += "<source srcset=\"#{@name}-medium@2x.#{@ext}\" media=\"(min-width: 640px), (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144)\" />"
          source += "<source srcset=\"#{@name}-large.#{@ext}\" media=\"(min-width: 1024px)\" />"
          source += "<source srcset=\"#{@name}-large@2x.#{@ext}\" media=\"(min-width: 1024px), (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144)\" />"
          source += "<img srcset=\"#{@name}-medium@2x.#{@ext}\" />"
          source += "</picture>"
        else
          source += "<img src=\"#{@url}\" />"
        end

        source += "<figcaption>#{@caption}</figcaption>" if @caption
      else
        # Else if alignleft/right is not present, we want to break up the article for the image
        source = "</div><figure class='grid'>"

        if @caption
          source += "<picture class=\"grid__col--5-of-6 #{@class}\">" if @local == false
          source += "<img src=\"#{@url}\" class=\"grid__col--5-of-6 #{@class}\" />" if @local == true
        else
          source += "<picture class=\"grid__col--5-of-6 grid__col--push-1-of-6 #{@class}\">" if @local == false
          source += "<img src=\"#{@url}\" class=\"grid__col--5-of-6 grid__col--push-1-of-6 #{@class}\" />" if @local == true
        end

        if @local == true
          source += "<source srcset=\"#{@name}-small.#{@ext}\" media=\"(min-width: 320px)\" />"
          source += "<source srcset=\"#{@name}-small@2x.#{@ext}\" media=\"(min-width: 320px), (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144)\" />"
          source += "<source srcset=\"#{@name}-medium.#{@ext}\" media=\"(min-width: 640px)\" />"
          source += "<source srcset=\"#{@name}-medium@2x.#{@ext}\" media=\"(min-width: 640px), (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144)\" />"
          source += "<source srcset=\"#{@name}-large.#{@ext}\" media=\"(min-width: 1024px)\" />"
          source += "<source srcset=\"#{@name}-large@2x.#{@ext}\" media=\"(min-width: 1024px), (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 144)\" />"
          source += "<img srcset=\"#{@name}-medium@2x.#{@ext}\" />"
          source += "</picture>"
        end

        source += "<figcaption class=\"grid__col--1-of-6 grid__col--d-first\">#{@caption}</figcaption>" if @caption
      end

      source += "</figure>"

      unless @class && (@class.match('alignleft') or @class.match('alignright'))
        source += "<div class='grid__col--4-of-6 grid__col--centered'>"
      end

      source
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::ImageTag)
