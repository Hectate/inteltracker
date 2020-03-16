<template>
<svg id="svg827" :width="width" :height="height" version="1.1" viewBox="0 0 13.229 13.229" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 <metadata id="metadata821">
  <rdf:RDF>
   <cc:Work rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:title/>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <path id="path5189" :fill="iconColor" d="m11.556 1.4144-11.223 3.3163 7.8063.80447zm.32226.081443-3.6111 4.354-8.2668-.85369 1.9031 6.8184 11.326-7.0077z"/>
</svg>
</template>

<script>
export default {
    name:'icon-letter',
    props: {
        inGroup: {
            default: false
        },
        iconColor: {
            default: 'red'
        },
        width: {
            type: [Number, String],
            default: '50'
        },
        height: {
            type: [Number, String],
            default: '50'
        }
    },
    watch: {
        iconColor() {
            if(this.$store.state.Settings.settings.scrollToScene) {
                if(this.inGroup) {
                    this.$el.parentElement.parentElement.parentElement.scrollIntoView({behavior:"smooth"});
                }
                else {
                    this.$el.parentElement.parentElement.scrollIntoView({behavior:"smooth"});
                }
            }
        }
    }
}
</script>