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

          @name, @ext = @url.split(".")
        end

        if @local
          source += "<picture>"
          source += "<source srcset=\"#{@name}-large.#{@ext}, #{@name}-large@2x.#{@ext} 2x\" media=\"(min-width: 1024px)\" />"
          source += "<source srcset=\"#{@name}-medium.#{@ext}, #{@name}-medium@2x.#{@ext} 2x\" media=\"(min-width: 640px)\" />"
          source += "<source srcset=\"#{@name}-small.#{@ext}, #{@name}-small@2x.#{@ext} 2x\" media=\"(min-width: 320px)\" />"
          source += "<img srcset=\"#{@name}-small.#{@ext}\" />"
          source += "</picture>"
        else
          source += "<img src=\"#{@url}\" />"
        end

        source += "<figcaption>#{@caption}</figcaption>" if @caption
      else
        # Else if alignleft/right is not present, we want to break up the article for the image
        source = "</div><figure class='grid'>"

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

        if @caption
          imgclass = @class.to_s + " grid__col--5-of-6"
        else
          imgclass = @class.to_s + " grid__col--5-of-6 grid__col--push-1-of-6"
        end

        if @local
          source += "<picture class=\"#{imgclass}\">"
          source += "<source srcset=\"#{@name}-large.#{@ext}, #{@name}-large@2x.#{@ext} 2x\" media=\"(min-width: 1024px)\" />"
          source += "<source srcset=\"#{@name}-medium.#{@ext}, #{@name}-medium@2x.#{@ext} 2x\" media=\"(min-width: 640px)\" />"
          source += "<source srcset=\"#{@name}-small.#{@ext}, #{@name}-small@2x.#{@ext} 2x\" media=\"(min-width: 320px)\" />"
          source += "<img srcset=\"#{@name}-small.#{@ext}\" />"
          source += "</picture>"
        else
          source += "<img class=\"#{imgclass}\" src=\"#{@url}\" />"
        end

        source += "<figcaption class=\"grid__col--1-of-6 grid__col--d-first\">#{@caption}</figcaption>" if @caption
      end

      source += "</figure>"

      unless @class && (@class.match('alignleft') or @class.match('alignright'))
        source += "<div class='grid__col--4-of-6 grid__col--centered'>"
      end

      return source
    end
  end
end

Liquid::Template.register_tag('image', Jekyll::ImageTag)
