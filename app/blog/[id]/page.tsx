import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
    id: number;
    title: string;
    content: string;
    date: string;
    tags: string[];
}

const posts: BlogPost[] = [
    {
        id: 1,
        title: "深夜3時のバグ修正中に幻覚を見たにゃ...",
        content: `
# 深夜3時のバグ修正中に幻覚を見たにゃ...

こんにゃちは、限界ねこねこだにゃ。今日は深夜の恐ろしい体験を共有するにゃ...

## 事の始まり

昨日の夜23時、突然本番環境でバグが発生したにゃ！
「これはまずいにゃ...」と思いながら、デバッグを開始したのだにゃ。

## 深夜2時

コードを見つめすぎて、文字が踊って見えてきたにゃ...
「console.log」が「console.nyaa」に見えるにゃ...
気のせいだと思って目をこすったにゃ。

## 深夜3時

ついに、コードが「にゃーにゃー」と話しかけてきたにゃ！

\`\`\`typescript
function nyaaComponent() {
  // このコードはにゃんにゃん言ってるにゃ...
  return <div>にゃ？</div>
}
\`\`\`

バグを直そうとすると、エラーメッセージが「にゃ〜ん」って鳴くにゃ...
これはまずいと思って、コーヒーを飲もうとしたら、
マグカップの中からも「にゃ〜ん」って聞こえてきたにゃ...！

## 教訓

1. 深夜のコーディングは危険にゃ
2. 睡眠は大切にゃ
3. バグを直す前に仮眠を取るにゃ
4. レビューは朝にするにゃ

みんにゃも気をつけるにゃ...
今日は早めに寝るにゃ...（たぶん）
    `,
        date: "2024-03-21",
        tags: ["限界開発", "深夜コーディング", "幻覚"]
    },
    {
        id: 2,
        title: "モンスターエナジーを10本飲んだ結果",
        content: `
# モンスターエナジーを10本飲んだ結果

こんにゃちは！締め切りに追われる限界ねこねこだにゃ。
今日は恐ろしい実験をしてしまったにゃ...

## きっかけ

納期が迫っていて、睡魔と戦うためについエナジードリンクに手を出してしまったにゃ...

## 経過

1本目: ちょっと元気が出てきたにゃ！
2本目: 調子いいにゃ！
3本目: コードが書ける書ける！
4本目: タイピング速度が2倍になった気がするにゃ！
5本目: 心臓がドキドキしてきたにゃ...

## 結果

- コード: 書けた
- 納期: 間に合った
- 胃: 痛い
- 心臓: バクバク
- 手: プルプル
- 意識: モウロウ

## 反省点

1. エナジードリンクの飲みすぎは危険にゃ
2. 計画的な開発が大切にゃ
3. 締め切り直前の無理は良くないにゃ
4. 胃が痛いにゃ...

明日から真面目に生活するにゃ...
（でも納期がヤバいときはまたやっちゃうかもにゃ...）
    `,
        date: "2024-03-20",
        tags: ["限界開発", "エナドリ", "健康"]
    },
    {
        id: 3,
        title: "【ガチレビュー】エナジードリンク全種類飲み比べ2025年版にゃ！",
        content: `
# エナジードリンク全種類飲み比べ2025年版にゃ！

こんにゃちは！限界プログラマーの相棒、エナジードリンクの新作が出たので、
全種類飲み比べしてみたにゃ！（肝臓に優しくないので真似しないでにゃ...）

## 今回飲み比べた種類

### 1. モンスターエナジー（定番の緑）
- 相変わらず安定の美味しさにゃ
- デバッグ作業のお供に最適にゃ！
- バグが見えるようになるにゃ
- ★★★★☆

### 2. レッドブル（羽が生える）
- クラシックな味わいにゃ
- コードが書けるようになるにゃ
- タイピング速度が上がるにゃ
- ★★★★☆

### 3. ZONe（NEW！）
- 新作の限定フレーバーにゃ！
- 時間が止まって見えるにゃ...
- コンパイルエラーが消えるにゃ（錯覚）
- ★★★★★

### 4. RAIZIN（雷神）
- 雷に打たれたような衝撃にゃ！
- 電気が走るような感覚にゃ
- キーボードがピカピカ光って見えるにゃ
- ★★★☆☆

## 飲み比べた結果

1日目: 全種類制覇したにゃ！
2日目: 病院に行ったにゃ...
3日目: まだ心臓がバクバクするにゃ...
4日目: コードが踊って見えるにゃ...
5日目: この記事を書いているにゃ...

## 総評

新作のZONeが予想以上に強力だったにゃ！
でも、やっぱり緑モンスターが安定して美味しいにゃ。
レッドブルはクラシックな味わいで安心感があるにゃ。
RAIZINは強すぎて限界ねこねこには刺激が強いかもにゃ...

## 注意事項

- カフェイン摂り過ぎ注意にゃ！
- 一日に全部飲むのは絶対にやめるにゃ！
- 水分補給も忘れずにゃ！
- 心臓が痛くなったら即中止にゃ！
- にゃんこは真似しないでにゃ！

## 今後の展望

来年はもっと新作が出るらしいにゃ...
でも、しばらくはお茶で頑張ってみるにゃ...
（本当にゃ...？）

追伸: この記事を書いている時もまだ手が震えているにゃ...
もう寝るにゃ...（目が冴えて寝れないにゃ...）
    `,
        date: "2024-03-22",
        tags: ["限界開発", "エナドリ", "健康", "レビュー"]
    }
];

export default async function BlogPost({ params }: { params: { id: string } }) {
    const post = posts.find(p => p.id === parseInt(params.id));

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                    ← ホームに戻るにゃ
                </Link>
            </div>

            <article className="prose dark:prose-invert max-w-none">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex gap-4 items-center text-gray-600">
                        <time>{post.date}</time>
                        <div className="flex gap-2">
                            {post.tags.map(tag => (
                                <Link
                                    key={tag}
                                    href={`/tags/${tag}`}
                                    className="text-sm px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 no-underline"
                                >
                                    #{tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="markdown-content whitespace-pre-line">
                    {post.content}
                </div>

                <div className="mt-12 pt-8 border-t">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100">
                                👍 いいにゃ！
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100">
                                🐟 おさかなをあげる
                            </button>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
                                他の記事を読むにゃ →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
} 