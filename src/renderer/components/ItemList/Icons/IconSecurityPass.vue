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
  <path id="rect5361" :fill="iconColor" d="m3.8123.9692c-.42211-.30924-1.0168-.21589-1.326.20622l-2.3029 3.1435c-.30924.42211-.21798 1.0159.20413 1.3252l9.0296 6.6151c.42211.30924 1.0163.21754 1.3255-.20457l2.3029-3.1435c.30924-.42211.21851-1.0176-.2036-1.3268zm-.55749.54361 3.1695 2.322-2.5368 3.4627-.16183-.11855c.10767-.16063.19809-.29906.24961-.36938.30115-.41106.16377-1.0445-.28412-1.5749a1.0566 1.1722 36.227 0 0 .9082-.50622 1.0566 1.1722 36.227 0 0-.15976-1.5698 1.0566 1.1722 36.227 0 0-1.5449.32096 1.0566 1.1722 36.227 0 0-.20474 1.0351c-.62415-.24342-1.2447-.17398-1.538.22642-.051053.069687-.15359.19887-.27209.35291l-.16183-.11855zm4.0128 3.4832.67817.49683-.49683.67817-.67817-.49683zm1.355.99269 1.355.99269-.49683.67817-1.355-.99269zm2.0314 1.4882.79679.58373-.49683.67817-.79678-.58373zm-3.8306-.92389 3.2233 2.3614-.49683.67817-3.2233-2.3614zm-1.7426.87201.22488.16475-.16604.22665-.22488-.16475zm.45153.33079.22532.16507-.16604.22665-.22532-.16507zm.4502.32982.22665.16604-.16604.22665-.22665-.16604zm.45153.33079.22665.16604-.16604.22665-.22665-.16604zm.45153.33079.22665.16604-.16604.22665-.22665-.16604zm.45197.33111.22665.16604-.16604.22665-.22665-.16604zm.45153.33079.22665.16604-.16604.22664-.22665-.16604zm.45153.33079.22665.16604-.16604.22665-.22665-.16604zm.45153.33079.22665.16604-.16604.22664-.22665-.16604zm.45197.33111.22488.16475-.16604.22665-.22488-.16475zm.45153.33079.066582.04878-.16604.22664-.066583-.04878z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" opacity=".99" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
</svg>

</template>

<script>
export default {
    name:'icon-security-pass',
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

// saved old path for posterity
// <path id="rect5361" :fill="iconColor" d="m4.4033.46153c-.39791-.36922-1.0219-.34428-1.3911.053624l-2.7496 2.9633c-.36922.39791-.34633 1.0208.051576 1.39l8.512 7.8983c.39791.36922 1.0211.34592 1.3904-.05199l2.7496-2.9633c.36922-.39791.34707-1.0224-.050833-1.3916zm-.19825.21365 8.512 7.8983c.28369.26323.30033.69757.0371.98125l-2.7496 2.9633c-.26323.28368-.69644.29828-.98012.035043l-8.512-7.8983c-.28369-.26323-.30107-.69593-.037836-.97962l2.7496-2.9633c.26323-.28369.69718-.29991.98087-.036678zm-.44134.27972-3.0289 3.2642.15255.14155c.14056-.14453.2617-.26536.32266-.33105.35023-.37744.99797-.37465 1.612-.049043a1.0961 1.216 42.858 0 1 .33499-1.0421 1.0961 1.216 42.858 0 1 1.6304-.14563 1.0961 1.216 42.858 0 1-.023458 1.6367 1.0961 1.216 42.858 0 1-.99649.41282c.39798.60021.46365 1.2693.10409 1.6568-.061512.066291-.17127.19811-.30146.35072l.15255.14155 3.0289-3.2642zm3.7176 4.07-.5932.63929.63929.5932.5932-.63929zm1.2773 1.1852-.5932.63929 1.2773 1.1852.5932-.63929zm1.915 1.7769-.5932.63929.7511.69696.5932-.63929zm-3.8365-1.4109-.5932.63929 3.0385 2.8194.5932-.63929zm-1.9002.68977-.19825.21365.21199.19671.19825-.21365zm.42564.39495-.19825.21365.2124.19709.19825-.21365zm.42439.3938-.19825.21365.21365.19825.19825-.21365zm.42564.39495-.19825.21365.21365.19825.19825-.21365zm.42564.39495-.19825.21365.21365.19825.19825-.21365zm.42606.39534-.19825.21365.21365.19825.19825-.21365zm.42564.39495-.19825.21365.21365.19825.19825-.21365zm.42564.39495-.19825.21365.21365.19825.19825-.21365zm.42564.39495-.19825.21365.21365.19825.19825-.21365zm.42606.39534-.19825.21365.21199.19671.19825-.21365zm.42564.39495-.19825.21365.062768.05824.19825-.21365z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" opacity=".99" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>

</script>