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
 <path id="path820"  :fill="iconColor" transform="scale(.26458)" d="m27.312 1.1289c-8.7713-.022075-14.051 2.5699-16.881 5.707-2.8297 3.1371-2.998 6.873-2.998 6.873-.18073 4.7678 7.0278 4.8805 6.998.10938 0 0-.096163-.8545 1.2031-2.2949 1.2993-1.4404 4.2047-3.4152 11.656-3.3965 3.6913.0092978 6.0304.55315 7.3594 1.1445 1.329.59138 1.6804 1.1075 1.9121 1.5801.23171.47259.3041 1.0692.26562 1.7207-.084147 2.2964-.77482 4.014-2.3027 4.9082-1.5397.88986-3.8608 1.5605-5.6992 1.9941-5.2827 1.2462-8.051 5.3974-8.8438 8.6875-.79274 3.2901-.20703 6.1484-.20703 6.1484.72514 4.7919 7.957 3.417 6.873-1.3066 0 0-.25002-1.5818.14062-3.2031.39065-1.6213.82234-2.8475 3.6465-3.5137 2.0014-.47213 4.8851-1.183 7.5898-2.7461 4.3477-3.5377 5.4195-5.9222 5.7949-10.557.081836-1.3855-.020208-3.2764-.96875-5.2109-.94854-1.9346-2.7817-3.751-5.3516-4.8945-2.5698-1.1435-5.8434-1.7391-10.188-1.75zm-4.1309 37.994a4.63 4.3798 6.7617 0 0-4.3242 3.834 4.63 4.3798 6.7617 0 0 4.082 4.8945 4.63 4.3798 6.7617 0 0 5.1133-3.8047 4.63 4.3798 6.7617 0 0-4.082-4.8945 4.63 4.3798 6.7617 0 0-.78906-.029297z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" shape-rendering="auto" solid-color="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/>
</svg>
</template>

<script>
export default {
    name:'icon-question',
    props: {
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
    }
}
</script>