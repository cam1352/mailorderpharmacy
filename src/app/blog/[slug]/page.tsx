import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft, User, Calendar } from 'lucide-react';

function getBlog(slug: string) {
  const filePath = path.join(process.cwd(), 'src/data/blogs.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const blogs = JSON.parse(fileContents);
    return blogs.find((b: any) => b.slug === slug);
  } catch (error) {
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = getBlog(resolvedParams.slug);

  if (!blog) {
    return <div className="p-16 text-center text-red-500 font-bold text-2xl">Blog post not found</div>;
  }

  // A very basic markdown parser to handle the ### and line breaks in the template
  const formattedContent = blog.content.split('\\n\\n').map((paragraph: string, i: number) => {
    if (paragraph.startsWith('### ')) {
      return <h3 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{paragraph.replace('### ', '')}</h3>;
    }
    if (paragraph.includes('- ')) {
      const listItems = paragraph.split('\\n').filter(Boolean).map((item, j) => (
        <li key={j} className="mb-2">{item.replace('- ', '')}</li>
      ));
      return <ul key={i} className="list-disc pl-6 mb-6 text-gray-700">{listItems}</ul>;
    }
    return <p key={i} className="mb-6 text-gray-700 leading-relaxed">{paragraph}</p>;
  });

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-8 font-semibold">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6 leading-tight">
          {blog.title}
        </h1>
        
        <div className="flex items-center gap-6 text-sm text-gray-500 font-medium mb-10 pb-10 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-indigo-500" />
            {blog.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-500" />
            {blog.date}
          </div>
        </div>

        <div className="prose prose-lg prose-indigo max-w-none">
          {formattedContent}
        </div>
      </div>
    </div>
  );
}
