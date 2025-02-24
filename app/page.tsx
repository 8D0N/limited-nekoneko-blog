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
    id: 4,
    title: "【深夜限定】限界プログラマーが選ぶ！夜間作業明けのラーメンBEST3にゃ！",
    excerpt: "徹夜作業明けに食べたい、都内の深夜営業ラーメン店を紹介するにゃ！疲れた体に染み渡る一杯を見つけたにゃ...",
    date: "2024-03-23",
    tags: ["限界開発", "ラーメン", "グルメ", "深夜営業"]
  },
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
  },
  {
    id: 5,
    title: "猫の日の過ごし方 - 限界ねこねこエンジニアの場合",
    excerpt: "にゃんにゃんにゃ～ん！今日は2月22日猫の日！徹夜コーディングで作った猫型キーボードとNyanScriptで限界プログラミングしたにゃ...（記事書いてる途中で10回寝落ちした）",
    date: "2024-02-22",
    tags: ["猫の日", "限界開発", "NyanScript", "寝落ち"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen px-4 sm:px-8 py-8 sm:py-16">
      <main className="max-w-4xl mx-auto">
        <section className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            限界ねこねこの<br className="sm:hidden" />
            エンジニア日記にゃ！
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            深夜のバグ修正、締切に追われる日々、<br className="sm:hidden" />
            そんな限界プログラマーの日常をお届けするにゃ！<br />
            （たまに意識飛んでるけど気にしないでにゃ...）
          </p>
        </section>

        <div className="space-y-6 sm:space-y-8">
          {posts.map(post => (
            <article
              key={post.id}
              className="border dark:border-gray-700 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow dark:bg-gray-800"
            >
              <div className="mb-4">
                <time className="text-gray-500 dark:text-gray-400 text-sm">
                  {post.date}
                </time>
                <h2 className="text-xl sm:text-2xl font-bold mt-2 mb-3">
                  <Link
                    href={`/blog/${post.id}`}
                    className="hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
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