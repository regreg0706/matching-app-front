import Link from "next/link"
export default function Home() {　
  return (
  <>
    <div>ホーム</div>
    <div><Link href="home/profile">マイページ</Link></div>
  </>
    )
}