import fs from 'fs'
import path from 'path'

const walkDir = (dir) => {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath))
    } else if (filePath.endsWith('.vue')) {
      results.push(filePath)
    }
  })
  return results
}

const vueFiles = walkDir(path.join(process.cwd(), 'app'))

vueFiles.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8')
  
  // Safely extract template block if present
  let templateMatch = content.match(/<template>([\s\S]*?)<\/template>/)
  if (templateMatch) {
    let template = templateMatch[1]
    
    // Clean up class="..." specifically
    template = template.replace(/class="([^"]*)"/g, (match, p1) => {
      let r = p1.replace(/\b(group-)?hover:[^\s"']+(?:\/[0-9]+)?/g, '')
      r = r.replace(/\bshadow-[^\s"']+/g, '')
      r = r.replace(/\bshadow\b/g, '')
      r = r.replace(/\stransition-(all|transform|colors)\b/g, '') // Also remove transitions so hovering doesn't trigger delays
      r = r.replace(/\bduration-\d+\b/g, '')
      r = r.replace(/\sease-[^\s"']+/g, '')
      r = r.replace(/\s{2,}/g, ' ') // Clean up extra spaces
      return `class="${r.trim()}"`
    })
    
    // Clean up :class="[...]" or :class="'...'" strings (basic inner string match)
    template = template.replace(/:class="([^"]*)"/g, (match, p1) => {
      let r = p1.replace(/\b(group-)?hover:[^\s"']+(?:\/[0-9]+)?/g, '')
      r = r.replace(/\bshadow-[^\s"']+/g, '')
      r = r.replace(/\bshadow\b/g, '')
      return `:class="${r}"`
    })

    content = content.replace(templateMatch[0], `<template>${template}</template>`)
    fs.writeFileSync(file, content)
    console.log('Cleaned effects in', file)
  }
})
