import { useState } from "react";
import { useRouter } from "next/router";
import bcrypt from "bcrypt";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hashedPassword = await bcrypt.hash(password, 10);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: hashedPassword }),
    });

    if (res.ok) {
      router.push("/auth/signin");
    } else {
      alert("登録に失敗しました");
    }
  };

  return (
    <div>
      <h1>新規登録</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">新規登録</button>
      </form>
    </div>
  );
}
