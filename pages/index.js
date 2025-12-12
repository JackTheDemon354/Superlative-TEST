// pages/index.js
import { getSession } from 'next-auth/react'

export default function Home({ session }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Superlative Games</h1>
      {!session ? (
        <div className="flex flex-col gap-4">
          <a href="/api/auth/signin/google" className="px-4 py-2 rounded bg-blue-500 text-white text-center">Login with Google</a>
          <a href="/api/auth/signin/github" className="px-4 py-2 rounded bg-black text-white text-center">Login with GitHub</a>
          <a href="/api/auth/signin/discord" className="px-4 py-2 rounded bg-indigo-600 text-white text-center">Login with Discord</a>
        </div>
      ) : (
        <div className="flex flex-col gap-2 items-center">
          <p className="text-lg">Signed in as {session.user.email}</p>
          <a href="/api/auth/signout" className="px-4 py-2 rounded border text-center">Sign out</a>
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return { props: { session } }
}
