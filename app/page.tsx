import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    id: 3,
    title: "【ガチレビュー】エナジードリンク全種類飲み比べ2025年版にゃ！",
    excerpt: "限界プログラマーの相棒、エナジードリンクの新作が出たので、全種類飲み比べてみたにゃ！（肝臓に優しくないので真似しないでにゃ...）",
    date: "2024-03-22",
    tags: ["限界開発", "エナドリ", "健康", "レビュー"]
  },
  {
    id: 1,
    title: "深夜3時のバグ修正中に幻覚を見たにゃ...",
    excerpt: "コードがにゃんにゃん言ってる気がするにゃ...これは寝不足かもしれないにゃ...",
    date: "2024-03-21",
    tags: ["限界開発", "深夜コーディング", "幻覚"]
  },
  {
    id: 2,
    title: "モンスターエナジーを10本飲んだ結果",
    excerpt: "締め切り間際でモンスターを大量摂取したら時が止まって見えたにゃ...",
    date: "2024-03-20",
    tags: ["限界開発", "エナドリ", "健康"]
  }
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            限界ねこねこの<br />
            エンジニア日記
          </h1>
          <p className="text-gray-600">
            深夜のバグ修正、締切に追われる日々、<br />
            そんな限界プログラマーの日常をお届けするにゃ...
          </p>
        </section>

        <div className="grid gap-8 max-w-4xl">
          {posts.map(post => (
            <article
              key={post.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <time className="text-gray-500 text-sm">{post.date}</time>
                <h2 className="text-2xl font-bold mt-2 mb-3">
                  <Link href={`/blog/${post.id}`} className="hover:text-gray-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="text-sm px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
} 