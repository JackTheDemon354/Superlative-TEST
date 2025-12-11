import React from 'react'
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
{/* ...rest of your landing content (projects, demos) can be here... */}


<section className="mt-12">
<h2 className="text-2xl font-bold">Welcome</h2>
<p className="mt-2 text-sm text-slate-600">This demo shows OAuth sign-in with Google, Discord, and GitHub via Auth.js.</p>
</section>
</main>
</div>
)
}


export async function getServerSideProps(context) {
const session = await getServerSession(context.req, context.res, authOptions)
return { props: { session } }
}
