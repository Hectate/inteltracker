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
 <path id="path5390" :fill="iconColor" d="m7.3336-5e-8-3.4513 1.2803.033692.12945.15132.63128-2.398.69097 1.6072 10.497 8.2834-1.9281-1.4641-10.997-2.4329.70102zm-.18974.39307.22757.6957.044922.13772.61118.34933.27604.15782-4.3385 1.5191.17614-.36174.29495-.60527-.079205-.32805-.11703-.48764zm2.4234.66142.32805 2.7054-6.9086 2.5091-.42381-2.8437 1.1763-.39839-.36647.7554 5.659-1.9819-.62123-.35406zm.36884 3.0417.1986 1.6349-1.5664.51365-.27544-1.5516zm-1.9594.71166.27367 1.541-2.8798.94514-.26953-1.4411zm-3.1913 1.1597.26717 1.4304-1.8087.59345-.20688-1.3885zm5.3901.098711.17732 1.4641-1.4677.49946-.2583-1.4552zm-1.8666.61236.25948 1.4594-2.8579.97292-.2784-1.4883zm-3.1948 1.048.27899 1.4925-1.8714.63659-.22816-1.5315zm5.2795.1389.17496 1.4411-1.3814.42203-.24353-1.3689zm-1.7667.60231.24116 1.3583-2.8602.87421-.23584-1.2602zm-3.1723 1.0805.23407 1.2501-1.9376.59226-.1791-1.2011zm5.1542.0928.14718 1.2105-1.311.32746-.19979-1.1213zm-1.6822.51365.19624 1.1047-2.8762.71816-.17732-.94928zm-3.1771.97115.17437.93214-1.999.49946-.12472-.83579z"/>
</svg>

</template>

<script>
export default {
    name:'icon-roster',
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