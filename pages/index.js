// pages/index.js
import { getSession } from 'next-auth/react'

export default function Home({ session }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">SG</div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">Superlative Games</h1>
            <p className="text-sm text-slate-500">Bold games. Brilliant fun.</p>
          </div>
        </div>
        <nav className="flex gap-3 items-center">
          {!session ? (
            <>
              <a href="/api/auth/signin/google" className="px-4 py-2 rounded-xl bg-white shadow border">Login with Google</a>
              <a href="/api/auth/signin/discord" className="px-4 py-2 rounded-xl bg-[#5865F2] text-white">Login with Discord</a>
              <a href="/api/auth/signin/github" className="px-4 py-2 rounded-xl bg-black text-white">Login with GitHub</a>
            </>
          ) : (
            <>
              <span className="text-sm">Signed in as {session.user.email}</span>
              <a href="/api/auth/signout" className="px-3 py-2 rounded border">Sign out</a>
            </>
          )}
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Welcome</h2>
          <p className="mt-2 text-sm text-slate-600">This demo shows OAuth sign-in with Google, Discord, and GitHub via NextAuth v4.</p>
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return { props: { session } }
}
