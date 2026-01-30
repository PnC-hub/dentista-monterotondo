<template>
  <div class="blog-listing">
    <div class="container">
      <div class="blog-header">
        <h1>Blog del Dentista a Monterotondo</h1>
        <p class="blog-intro">Articoli, guide e consigli per la salute dei tuoi denti e del tuo sorriso</p>
      </div>

      <div class="articles-grid">
        <NuxtLink
          v-for="article in articles"
          :key="article.slug"
          :to="`/blog/${article.slug}`"
          class="article-card"
        >
          <h2>{{ article.title }}</h2>
          <p class="excerpt">{{ article.excerpt }}</p>
          <span class="read-more">Leggi l'articolo →</span>
        </NuxtLink>
      </div>

      <div class="blog-cta">
        <LeadForm
          title="Hai Domande sulla Salute dei Tuoi Denti?"
          subtitle="Contattaci per una consulenza personalizzata"
          button-text="Contattaci Ora"
          :show-message="true"
          source="/blog"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog | Dentista Monterotondo - Guide e Consigli Odontoiatrici',
  meta: [
    {
      name: 'description',
      content: 'Articoli e guide sulla salute dentale dal tuo dentista a Monterotondo. Consigli su implantologia, ortodonzia, igiene orale e molto altro.'
    }
  ]
})

const articles = [
  {
    slug: 'quanto-costa-dentista-monterotondo',
    title: 'Quanto Costa il Dentista a Monterotondo? Guida ai Prezzi',
    excerpt: 'Una guida completa ai costi delle principali prestazioni odontoiatriche a Monterotondo. Scopri i prezzi di igiene, otturazioni, impianti e molto altro.'
  },
  {
    slug: 'come-scegliere-dentista-monterotondo',
    title: 'Come Scegliere il Dentista Giusto a Monterotondo',
    excerpt: 'I criteri fondamentali per scegliere il dentista più adatto alle tue esigenze: qualifiche, tecnologie, recensioni e molto altro.'
  },
  {
    slug: 'implantologia-dentale-guida-completa',
    title: 'Implantologia Dentale: Guida Completa',
    excerpt: 'Tutto quello che devi sapere sugli impianti dentali: cosa sono, come funzionano, durata, materiali e processo di guarigione.'
  },
  {
    slug: 'ortodonzia-invisibile-adulti',
    title: 'Ortodonzia Invisibile per Adulti: Tutto Quello che Devi Sapere',
    excerpt: 'Gli allineatori trasparenti rappresentano una soluzione discreta ed efficace per gli adulti. Scopri vantaggi, durata e costi del trattamento.'
  },
  {
    slug: 'paura-del-dentista-come-superarla',
    title: 'Paura del Dentista? Ecco Come Superarla',
    excerpt: 'L\'odontofobia è più comune di quanto pensi. Scopri le tecniche e gli approcci moderni per affrontare serenamente le cure dentali.'
  },
  {
    slug: 'igiene-orale-bambini-consigli',
    title: 'Igiene Orale dei Bambini: Consigli Pratici',
    excerpt: 'Come prendersi cura dei denti dei più piccoli fin dalla nascita. Tecniche di spazzolamento, alimentazione e visite preventive.'
  },
  {
    slug: 'sbiancamento-denti-professionale',
    title: 'Sbiancamento Denti Professionale: Cosa Sapere',
    excerpt: 'Differenze tra sbiancamento professionale e metodi fai-da-te, tecniche utilizzate, risultati attesi e durata nel tempo.'
  },
  {
    slug: 'dente-del-giudizio-quando-toglierlo',
    title: 'Dente del Giudizio: Quando Toglierlo',
    excerpt: 'I terzi molari possono causare problemi. Scopri quando è necessaria l\'estrazione, come avviene l\'intervento e il decorso post-operatorio.'
  }
]
</script>

<style scoped>
.blog-listing {
  padding-top: 100px;
  padding-bottom: 80px;
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.blog-header {
  text-align: center;
  margin-bottom: 60px;
}

.blog-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.blog-intro {
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.article-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 102, 204, 0.1);
  border-color: #0066cc;
}

.article-card h2 {
  font-size: 1.375rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 12px;
  line-height: 1.4;
}

.excerpt {
  font-size: 0.9375rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.read-more {
  font-weight: 600;
  color: #0066cc;
  font-size: 0.9375rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.blog-cta {
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .blog-listing {
    padding-top: 80px;
  }

  .blog-header h1 {
    font-size: 2rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .article-card {
    padding: 24px;
  }
}
</style>
