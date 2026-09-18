import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default async function BlogIndexPage() {
  const filePath = path.join(process.cwd(), 'src/data/blogs.json');
  let blogs = [];
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    blogs = JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to load blogs:", error);
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-indigo-900 mb-4">Pharmacy Health Blog</h1>
        <p className="text-xl text-gray-600">Expert advice, health tips, and news from our licensed pharmacists.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog: any) => (
          <Link href={`/blog/${blog.slug}`} key={blog.id} className="block group">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="bg-indigo-100 h-48 w-full flex items-center justify-center">
                <span className="text-indigo-300 font-black text-6xl opacity-30">BLOG</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-bold text-indigo-600 mb-2 uppercase tracking-wide">{blog.date}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                    {blog.author.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{blog.author}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
