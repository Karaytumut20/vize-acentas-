<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type: 'Service' | 'BlogPosting' | 'FAQPage'
  data: any
}>()

if (props.type === 'Service') {
  useSchemaOrg([
    defineService({
      name: props.data.name,
      description: props.data.description,
      provider: {
        '@type': 'Organization',
        name: 'Vize Acentası'
      },
      areaServed: 'TR',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Vize Hizmetleri'
      }
    })
  ])
} else if (props.type === 'BlogPosting') {
  useSchemaOrg([
    defineArticle({
      headline: props.data.title,
      description: props.data.description,
      image: props.data.image,
      datePublished: props.data.publishedAt,
      dateModified: props.data.modifiedAt,
      author: {
        name: 'Vize Acentası',
        url: 'https://vize-acentasi.vercel.app'
      }
    })
  ])
} else if (props.type === 'FAQPage') {
  useSchemaOrg([
    defineQuestion(
      props.data.questions.map((q: any) => ({
        name: q.question,
        acceptedAnswer: q.answer
      }))
    )
  ])
}
</script>

<template>
  <div style="display: none" aria-hidden="true"></div>
</template>
