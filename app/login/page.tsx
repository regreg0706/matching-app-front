import Link from "next/link"
export default function Home() {


  function greeting(){
    alert("hello");
  }

  return (
  <>
    <div>ログイン画面</div>
    <div><Link href="/home">ログインする</Link></div>

    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
    <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
        <form action="#">

          <button onclick={greeting} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
        </form>
      </div>
    </div>

  </>
    )
}