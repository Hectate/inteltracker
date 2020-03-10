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
 <path id="path5155" :fill="iconColor" transform="scale(.26458)" d="m28.619 0c-2.5947 0-5.7362 1.0359-7.375 1.6836-1.6388.64768-2.0469 4.1445-2.0469 4.1445v3.9961l-15.957 5.0625 7.9434 4.5176 36.373-13.244-8.0137-2.793-6.6914 2.123v-2.7715s-1.6377-2.7188-4.2324-2.7188zm1.0918 3.7578v2.7285l-7.3418 2.332.24023-3.377 7.1016-1.6836zm19.08 4.082-36.707 13.361-.10547 28.508 35.896-14.477.91602-27.393zm-46.795 8.6367.23438 27.283 7.748 5.6367.10742-28.316-8.0898-4.6035z"/>
</svg>
</template>

<script>
export default {
    name:'icon-briefcase',
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

// For posterity, old paths for briefcase are below:
//  <path id="path5155" :fill="iconColor" d="m7.5722 1.95e-7c-.68652 0-1.5176.27403-1.9512.44539-.43359.17136-.54194 1.0967-.54194 1.0967v1.057l-4.5532 1.4451-.21654 7.4712 1.843 1.7135 10.515-3.907.25302-7.5745-2.4573-.85674-1.7706.5617v-.73305s-.43325-.71944-1.1198-.71944zm.28891.99405v.72227l-1.9428.61674.064004-.89362zm4.3822 1.1705-.1944 6.6973-9.5132 3.4934.069986-6.6905.0023929-.20199zm-.63525.83405-8.3917 2.8738-.059219 5.6312 8.2906-3.0451z"/>

</script>