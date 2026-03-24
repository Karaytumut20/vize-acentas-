<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type: 'Service' | 'BlogPosting' | 'FAQPage'
  data: any
}>()

if (props.type === 'Service') {
  useSchemaOrg([
    {
      '@type': 'Service',
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
    }
  ])
} else if (props.type === 'BlogPosting') {
  useSchemaOrg([
    {
      '@type': 'Article',
      headline: props.data.title,
      description: props.data.description,
      image: props.data.image,
      datePublished: props.data.publishedAt,
      dateModified: props.data.modifiedAt,
      author: {
        '@type': 'Organization',
        name: 'Vize Acentası',
        url: 'https://vize-acentasi.vercel.app'
      }
    }
  ])
} else if (props.type === 'FAQPage') {
  useSchemaOrg([
    {
      '@type': 'FAQPage',
      mainEntity: props.data.questions.map((q: any) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer
        }
      }))
    }
  ])
}
</script>

<template>
  <div style="display: none" aria-hidden="true"></div>
</template>
