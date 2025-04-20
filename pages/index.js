import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  // Sample articles data - would come from an API/database in a real app
  const [articles, setArticles] = useState([
    { id: 1, title: 'Welcome to the News Site', excerpt: 'This is your first news article.', date: '2023-06-01' },
    { id: 2, title: 'Getting Started with Next.js', excerpt: 'Learn how to build websites with Next.js.', date: '2023-06-02' },
  ])

  return (
    <div className="container">
      <Head>
        <title>News Website</title>
        <meta name="description" content="A news website for publishing articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>News Website</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/create-article">Create Article</Link>
        </nav>
      </header>

      <main className="main">
        <h2>Latest News</h2>
        <div className="article-grid">
          {articles.map(article => (
            <div key={article.id} className="article-card">
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="article-meta">
                <span>{article.date}</span>
                <Link href={`/article/${article.id}`}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} News Website</p>
      </footer>
    </div>
  )
} 