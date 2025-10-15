type Author = {
  name?: string;
  role?: string;
  avatar?: string;
  bio?: string;
};

export default function AuthorCard({ author }: { author?: Author }) {
  if (!author) return null;

  const { name, role, avatar, bio } = author;

  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-700/60 bg-slate-900/40 p-4">
      <img
        src={avatar || "/images/authors/default.png"}
        alt={name || "Author"}
        className="h-14 w-14 rounded-full object-cover border border-slate-700"
      />
      <div className="flex-1">
        <div className="font-semibold text-white">{name || "Guest Author"}</div>
        {role && <div className="text-xs text-slate-400 mt-0.5">{role}</div>}
        {bio && <p className="text-sm text-slate-300 mt-2 leading-relaxed">{bio}</p>}
      </div>
    </div>
  );
}
