// app/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;   // ✅ unified description
  amount: string;
  supporters: string;
  daysLeft: string;
  achievementRate: number;
  image: string;
}

export interface BannerProject {
  id: number;
  title: string;
  description: string;
  image: string;
  amount: string;
  achievementRate: string;
  supporters: string;
  daysLeft: string;
}

export interface Video {
  id: number;
  title: string;
  image: string;
  categoryLabel: string;
  userLabel: string;
  viewCount: string;
  viewDate: number;
}
// Common description
const commonDescription =
  "『太秦ライムライト』のプロデューサーと監督より、感謝の気持ちを込めて、お礼のメッセージをお送りします。・支援者様との連絡方法：詳細はメールで連絡します。『太秦ライムライト』のプロデューサー";

export const projects: Project[] = [
  {
    id: 1,
    title: "伝説のバンド・ピンクサワファイヤーが復活 1日だけの復活ライブ",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 50,
    image: "/assets/crowdfunding/cf-1.png",
  },
  {
    id: 2,
    title: "「ラストメッセージ」あの有名芸能人が人生最後の暴露トーク",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 100,
    image: "/assets/crowdfunding/cf-2.png",
  },
  {
    id: 3,
    title: "「本当にあった怖い話」選りすぐりの怖い実話を完全ドラマ化！",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 30,
    image: "/assets/crowdfunding/cf-3.png",
  },
  {
    id: 4,
    title: "「スピリチュアルアイドル」占い師芸人が徹底プロデュースするドキュメント番組",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 70,
    image: "/assets/crowdfunding/cf-4.png",
  },
  {
    id: 5,
    title: "「鬼そば藤谷」道りすがりの怖い実話を完全ドラマ化！",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 90,
    image: "/assets/crowdfunding/cf-5.png",
  },
  {
    id: 6,
    title: "「ラストメッセージ」あの有名芸能人が人生最後の暴露トーク",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 100,
    image: "/assets/crowdfunding/cf-2.png",
  },
  {
    id: 7,
    title: "「本当にあった怖い話」選りすぐりの怖い実話を完全ドラマ化！",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 30,
    image: "/assets/crowdfunding/cf-3.png",
  },
  {
    id: 8,
    title: "「鬼そば藤谷」道りすがりの怖い実話を完全ドラマ化！",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 90,
    image: "/assets/crowdfunding/cf-5.png",
  },
  {
    id: 9,
    title: "伝説のバンド・ピンクサワファイヤーが復活 1日だけの復活ライブ",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 50,
    image: "/assets/crowdfunding/cf-1.png",
  },
  {
    id: 10,
    title: "「鬼そば藤谷」道りすがりの怖い実話を完全ドラマ化！",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 90,
    image: "/assets/crowdfunding/cf-5.png",
  },
  {
    id: 11,
    title: "伝説のバンド・ピンクサワファイヤーが復活 1日だけの復活ライブ",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 50,
    image: "/assets/crowdfunding/cf-1.png",
  },
  {
    id: 12,
    title: "「ラストメッセージ」あの有名芸能人が人生最後の暴露トーク",
    description: commonDescription,
    amount: "¥2,000,000",
    supporters: "22人",
    daysLeft: "11日",
    achievementRate: 100,
    image: "/assets/crowdfunding/cf-2.png",
  },
];
export const videos: Video[] = [
  {
    id: 1,
    title: "伝説のバンド・ピンクサワファイヤーが復活 1日だけの復活ライブ",
    image: "/assets/crowdfunding/cf-1.png",
    categoryLabel: "バラエティー",
    userLabel: "Michael patternUSER",
    viewCount: '15万',
    viewDate: 4,
  },
  {
    id: 2,
    title: "「ラストメッセージ」あの有名芸能人が人生最後の暴露トーク",
    image: "/assets/crowdfunding/cf-2.png",
    categoryLabel: "スピリチュアル",
    userLabel: "Michael patternUSER",
    viewCount: '15万',
    viewDate: 4,
  },
  {
    id: 3,
    title: "「本当にあった怖い話」選りすぐりの怖い実話を完全ドラマ化！",
    image: "/assets/crowdfunding/cf-3.png",
    categoryLabel: "ドキュメンタリー",
    userLabel: "Michael patternUSER",
    viewCount: '15万',
    viewDate: 4,
  },
  {
    id: 4,
    title: "「スピリチュアルアイドル」占い師芸人が徹底プロデュースするドキュメント番組",
    image: "/assets/crowdfunding/cf-4.png",
    categoryLabel: "ミュージック",
    userLabel: "Michael patternUSER",
    viewCount: '15万',
    viewDate: 4,
  },
  {
    id: 5,
    title: "「鬼そば藤谷」道りすがりの怖い実話を完全ドラマ化！",
    image: "/assets/crowdfunding/cf-1.png",
    categoryLabel: "バラエティー",
    userLabel: "Michael patternUSER",
    viewCount: '15万',
    viewDate: 4,
  },
  {
    id: 6,
    title: "「ラストメッセージ」あの有名芸能人が人生最後の暴露トーク",
    image: "/assets/crowdfunding/cf-2.png",
    categoryLabel: "スピリチュアル",
    userLabel: "Michael patternUSER",
    viewCount: '15万',
    viewDate: 4,
  },
  {
    id: 7,
    title: "「本当にあった怖い話」選りすぐりの怖い実話を完全ドラマ化！",
    image: "/assets/crowdfunding/cf-3.png",
    categoryLabel: "ドキュメンタリー",
    userLabel: "Michael patternUSER",
    viewCount: '15万',
    viewDate: 4,
  },
  {
    id: 8,
    title: "「鬼そば藤谷」道りすがりの怖い実話を完全ドラマ化！",
    image: "/assets/crowdfunding/cf-4.png",
    categoryLabel: "ミュージック",
    userLabel: "Michael patternUSER",
    viewCount: '15万',
    viewDate: 4,
  },
  {
    id: 9,
    title: "伝説のバンド・ピンクサワファイヤーが復活 1日だけの復活ライブ",
    image: "/assets/crowdfunding/cf-1.png",
    categoryLabel: "バラエティー",
    userLabel: "Michael patternUSER",
    viewCount: '15万',
    viewDate: 4,
  },
];
export const bannerProjects: BannerProject[] = [
  {
    id: 1,
    title: '鬼そば藤谷1日復活！',
    description: '「鬼そば藤谷１日復活！」秋田に住むHEY!たくちゃんのSPラーメンが１日限定で復活！',
    image: '/assets/crowdfunding/cf-4.png',
    amount: '¥2,000,000',
    achievementRate: '404%',
    supporters: '22人',
    daysLeft: '11日'
  },
  {
    id: 2,
    title: '「鬼そば藤谷１日復活！」秋田に住むHEY!たくちゃんのSPラーメンが１日限定で復活！',
    description: '事故物件サイト管理人・大島てるが語る本当にあった怖い話。',
    image: '/assets/crowdfunding/cf-5.png',
    amount: '¥1,500,000',
    achievementRate: '250%',
    supporters: '45人',
    daysLeft: '5日'
  },
  {
    id: 3,
    title: '「鬼そば藤谷１日復活！」秋田に住むHEY!たくちゃんのSPラーメンが１日限定で復活！',
    description: '名俳優が新境地に挑む！感動のヒューマンドラマ。',
    image: '/assets/crowdfunding/cf-3.png',
    amount: '¥3,200,000',
    achievementRate: '120%',
    supporters: '32人',
    daysLeft: '18日'
  },
  {
    id: 4,
    title: '「鬼そば藤谷１日復活！」秋田に住むHEY!たくちゃんのSPラーメンが１日限定で復活！',
    description: '名俳優が新境地に挑む！感動のヒューマンドラマ。',
    image: '/assets/crowdfunding/cf-2.png',
    amount: '¥3,200,000',
    achievementRate: '1220%',
    supporters: '32人',
    daysLeft: '18日'
  },
  {
    id: 5,
    title: '「鬼そば藤谷１日復活！」秋田に住むHEY!たくちゃんのSPラーメンが１日限定で復活！',
    description: '名俳優が新境地に挑む！感動のヒューマンドラマ。',
    image: '/assets/crowdfunding/cf-1.png',
    amount: '¥3,200,000',
    achievementRate: '1203%',
    supporters: '32人',
    daysLeft: '18日'
  }
];