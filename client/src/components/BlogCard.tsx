import { Link } from 'react-router-dom';
import type { PostMeta } from '@/lib/posts';

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link to={post.url} className="block rounded-2xl border hover:shadow-md transition">
      {post.cover && (
        <img src={post.cover} alt={post.title} className="w-full h-44 object-cover rounded-t-2xl" />
      )}
      <div className="p-5">
        <h3 className="font-semibold text-lg">{post.title}</h3>
        {post.date && <p className="text-xs text-gray-500 mt-1">{new Date(post.date).toDateString()}</p>}
        {post.excerpt && <p className="text-sm text-gray-600 mt-3 line-clamp-3">{post.excerpt}</p>}
      </div>
    </Link>
  );
}
