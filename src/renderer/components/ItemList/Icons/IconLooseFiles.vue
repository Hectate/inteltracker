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
 <path id="path5196" :fill="iconColor" d="m9.2536.099895-.080713.018933-3.2863.76478-.57396 1.4743-4.4313 1.0886.78521 2.4065-1.6666.91674 3.9001 6.3594 9.3289-5.5418-.34627-.65517-.74236-6.5253-1.9092.47681zm-.084699.37666.97952.78521 1.6925-.4235.7045 6.199s-1.9715-3.7252-2.9301-5.5383l-.15445.085197-3.1224 1.7209-1.0428-.46335-2.9829 1.5615-.33497 1.2819-.65003-1.9919 4.2424-1.0413.57247-1.4708z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
</svg>

</template>

<script>
export default {
    name:'icon-loose-files',
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

// saved old SVG for posterity
//  <path id="path5196" :fill="iconColor" d="m9.3019.077801-3.3156.77164-.59464 1.5282-4.4991 1.1037.8023 2.4543-1.6948.93187.098335.16196 3.7558 6.1217 9.3748-5.5704-.29443-.55704-.75082-6.5989-1.8678.4668zm.34591 1.5016 3.1022 5.8677-8.7733 5.2141-3.4741-5.6601 1.6596-.91163.15502-1.6289 2.9298-1.5346 1.0846.48069z"/>

</script>