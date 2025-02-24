import { notFound } from "next/navigation";
import Link from "next/link";

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
    },
    {
        id: 4,
        title: "【深夜限定】限界プログラマーが選ぶ！夜間作業明けのラーメンBEST3にゃ！",
        content: `
# 限界プログラマーが選ぶ！夜間作業明けのラーメンBEST3にゃ！

こんにゃちは！徹夜作業明けの限界ねこねこだにゃ。
今日は夜通しのデバッグ作業を終えた後に食べたい、都内の深夜営業ラーメン店を紹介するにゃ！

## 第3位：風雲児（新宿）

### 営業時間
- 24時間営業にゃ！
- 朝5時が一番空いてるにゃ

### おすすめポイント
- 濃厚豚骨スープが疲れた体に染み渡るにゃ
- 替え玉無料サービスが嬉しいにゃ
- カウンター席が広くて、PCを置いても大丈夫にゃ
- WiFiあるから、デプロイの待ち時間に食べられるにゃ

### おすすめメニュー
- 特製豚骨ラーメン（950円）
- 深夜限定メガにんにくラーメン（1100円）

## 第2位：麺処 にゃんまげ（秋葉原）

### 営業時間
- 22:00〜翌8:00
- 深夜営業専門店にゃ！

### おすすめポイント
- 塩ラーメンが優しい味で胃にも優しいにゃ
- 店主がエンジニア上がりで話が合うにゃ
- デバッグに失敗した話をすると追加トッピングサービスしてくれるにゃ
- 常連のエンジニアが多くて情報交換できるにゃ

### おすすめメニュー
- 特製塩らーめん（980円）
- 限界プログラマーセット（1500円）
  - ラーメン＋餃子＋エナドリ

## 第1位：らーめん 眠眠（渋谷）

### 営業時間
- 20:00〜翌10:00
- 朝方が一番美味しいにゃ！

### おすすめポイント
- 鶏白湯スープが天国の味にゃ...
- 店主が不眠症で深夜の気持ちを理解してくれるにゃ
- 寝落ちしても起こしてくれるにゃ（経験済み）
- 深夜3時以降はプログラマー割引あるにゃ！

### おすすめメニュー
- 特製鶏白湯ラーメン（1200円）
- 限界突破セット（1800円）
  - 特製ラーメン＋チャーシュー丼＋煮玉子

## 総評

夜間作業で限界を迎えた時こそ、美味しいラーメンで癒されるにゃ！
でも、毎日は体に良くないから気をつけるにゃ...
（と言いつつ、また今週も通ってしまいそうにゃ...）

## 注意事項

- 徹夜作業は控えめにするにゃ
- 胃を壊さないように気をつけるにゃ
- 食べ過ぎて寝落ちしないようにするにゃ
- 帰りの電車を逃さないように気をつけるにゃ

追伸: この記事を書いているときもお腹が空いてきたにゃ...
今日も行っちゃうかもにゃ...
    `,
        date: "2024-03-23",
        tags: ["限界開発", "ラーメン", "グルメ", "深夜営業"]
    }
];

type Props = {
    params: Promise<{
        id: string;
    }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

export default async function BlogPost({ params }: Props) {
    const resolvedParams = await params;
    const postId = parseInt(resolvedParams.id);
    const post = posts.find(p => p.id === postId);

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