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
 <path id="path5173" :fill="iconColor" d="m11.231.24324-9.9902 1.4469-.022242.041633.88855 2.8567.33021 3.0865 3.6243-.85319-.10152-.99805.93018-.27546.064445 1.0631 2.6651-.62734-.042203-.95242.68894-.27546.10094 1.0517 2.5385-.59769-.15912-2.3491zm-10.206 1.8524-.95585 1.7993-.069008 7.4409 1.513 1.5444.30398-8.2422zm11.901 3.4093-2.5305.59655.11235 1.1691-.82696.1038-.047906-1.0933-2.6599.62677.05532.91421-.82696.37869-.11007-1.0853-3.9106.92163-.14657-1.379-.23326 6.3276 11.429-2.9936z"/>
</svg>

</template>

<script>
export default {
    name:'icon-dossier',
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