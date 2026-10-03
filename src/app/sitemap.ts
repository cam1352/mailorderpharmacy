import { MetadataRoute } from 'next'
import blogs from '../data/blogs.json'
import meds from '../data/medications.json'


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mailorderpharmacy.io'
  
  const staticRoutes = [
    '',
    '/medications',
    '/blog',
    '/faq',
    '/contact',
    '/prescriptions'
  ].map((route) => ({
    url: baseUrl + route,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogRoutes = blogs.map((blog: any) => ({
    url: baseUrl + '/blog/' + blog.slug,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const medRoutes = meds.map((med: any) => ({
    url: baseUrl + '/medications/' + med.slug,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...medRoutes, ...blogRoutes]
}
