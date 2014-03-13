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

      if @url =~ /(https?:\/\/)/
        @resrc = "https://app.resrc.it/O=70,P/"
      else
        @resrc = "https://app.resrc.it/O=70,P/https://daneden.me"
      end
    end

    def render(context)
      if @class && (@class.match('alignleft') or @class.match('alignright'))
        # If class includes alignleft or alignright, we want to handle markup differently
        source = "<figure class='#{@class} grid__col--1-of-2'>"

        if ENV['JEKYLL_ENV'] != 'development' && (@url.include? '.jpg' or @url.include? '.jpeg' or @url.include? '.png')
          source += "<img src=\"#{@resrc}#{@url}\" class=\"resrc\" />"
        else
          source += "<img src=\"#{@url}\" />"
        end

        source += "<figcaption>#{@caption}</figcaption>" if @caption
      else
        # Else if alignleft/right is not present, we want to break up the article for the image
        source = "</div><figure class='grid'>"

        if ENV['JEKYLL_ENV'] != 'development' && (@url.include? '.jpg' or @url.include? '.jpeg' or @url.include? '.png')
          if @caption
            source += "<img src=\"#{@resrc}#{@url}\" class=\"resrc grid__col--5-of-6 #{@class}\"/>"
          else
            source += "<img src=\"#{@resrc}#{@url}\" class=\"resrc grid__col--5-of-6 grid__col--push-1-of-6 #{@class}\"/>"
          end
        else
          if @caption
            source += "<img src=\"#{@url}\" class=\"grid__col--5-of-6 #{@class}\" />"
          else
            source += "<img src=\"#{@url}\" class=\"grid__col--5-of-6 grid__col--push-1-of-6 #{@class}\" />"
          end
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
