import { getCityFromHost } from '@/utils/host';
import blogs from '@/data/blogs.json';
import Link from 'next/link';

export default async function BlogIndex() {
  const city = await getCityFromHost() || "Canada";
  
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-6">Health Guides for {city}</h1>
        <p className="text-xl text-slate-600 mb-12">Expert medical advice and updates for our patients in {city}.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div key={blog.slug} className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
               <h2 className="text-xl font-bold mb-3">{blog.title.replace('{city}', city)}</h2>
               <p className="text-slate-600 mb-6">{blog.excerpt.replace('{city}', city)}</p>
               <Link href={`/blog/${blog.slug}`} className="text-indigo-600 font-bold hover:text-indigo-800">Read Article &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}