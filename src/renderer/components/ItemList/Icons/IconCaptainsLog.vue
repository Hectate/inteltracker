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
 <path id="path5434"  :fill="iconColor" d="m12.232 2.5e-7-10.929.91812-1.03.93253.16606 8.7461.95311.99428 10.803 1.6379.76167-11.212-.83509-.0199zm-.37329.38426-.03362.60384-9.6217.58532-.46523-.33898zm-.05352.95655-.03637.64776-7.6345-.18115zm-9.2079.91263a.17568.17568 0 0 1 .17361.18253l-.24909 8.7036a.1764.1764 0 1 1-.3527-.0082l.24909-8.7064a.17568.17568 0 0 1 .16125-.17086.17568.17568 0 0 1 .017841-.0006861zm2.049.98605 1.4033.080284-.039113.7006-1.406-.078225zm2.1032.1194 1.4033.077539-.039113.7006-1.4033-.077539zm2.1059.11665 1.4033.077539-.03911.7006-1.4033-.077539zm2.1032.11665.4021.020586-.03843.70334-.40211-.023331zm-2.8882 1.7402.30124.40416-.11597 1.0869 1.7553-.20791-.14822.55444-1.7004.34241-.22095 2.6336 1.605-.5167.076853-.52288.57365.48308-.082342.6457-.39662-.1592-1.8589 1.0533-.013037.15782-.39593.20997-.46043-.28477.026075-.22438-1.7312-1.2056-.40965.12077-.021958-.64982.6162-.42749.028134.52768 1.6276.69579.30467-2.624-1.5851-.63472-.010979-.52699 1.6894.47347.10567-1.0615z"/>
</svg>

</template>

<script>
export default {
    name:'icon-captains-log',
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