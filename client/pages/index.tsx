import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-indigo-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Gaming Device Share</h1>
          <div className="flex space-x-2">
            <Link
              href="/login"
              className="bg-white text-indigo-900 px-4 py-2 rounded font-bold hover:bg-gray-200 transition duration-300"
            >
              ログイン
            </Link>
            <Link
              href="/register"
              className="bg-white text-indigo-900 px-4 py-2 rounded font-bold hover:bg-gray-200 transition duration-300"
            >
              新規登録
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-12 text-center bg-white shadow-md rounded-md mt-4 max-w-8xl">
        <h2 className="text-7xl font-bold text-indigo-600 mb-16 leading-tight">
          Geming Device Share <span className="text-black">とは</span>
        </h2>
        <p className="text-gray-800 text-5xl leading-relaxed text-center">
          自分のおすすめのゲーミングデバイスを投稿したり、
          <br />
          他の人のおすすめしているゲーミングデバイスを閲覧する事ができます。
          <br />
          またプロフィールには、現在使用しているゲーミングデバイスを登録できます。
          <br />
          プロフィールは他の人も閲覧可能です。
        </p>
      </main>
    </div>
  );
}
