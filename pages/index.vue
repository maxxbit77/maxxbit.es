<script setup>
useSeoMeta({
  title: "Maxxbit's Porfolio",
  description: "Portfolio developed with Vue/Nuxt/Tailwind",
  ogTitle: 'Maxxbit.tech',
  ogDescription: "Portfolio developed with Vue/Nuxt/Tailwind",
  ogImage: '/brand/meta.png',
  ogUrl: 'https://maxxbit.tech',
  twitterTitle: 'Maxxbit.tech',
  twitterDescription: 'Portfolio developed with Vue/Nuxt/Tailwind',
  twitterImage: '/brand/meta.png',
  twitterCard: 'Portfolio developed with Vue/Nuxt/Tailwind'
})

</script>

<template>
  <div class="max-w-5xl mx-auto px-4 min-h-screen pt-12">
    <MagicCursor />
    <header>
      <Header  id="about" />
    </header>
    <section>
      <Experience id="experience" />
    </section>
    <section>
      <Projects id="projects" />
    </section>
    <section>
      <Studies id="studies" />
    </section>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
}
</style>
