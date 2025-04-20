import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '../lib/hooks'

export default function Home() {
  // Sample articles data - would come from an API/database in a real app
  const [articles, setArticles] = useState([
    { id: 1, title: 'Welcome to the News Site', excerpt: 'This is your first news article.', date: '2023-06-01' },
    { id: 2, title: 'Getting Started with Next.js', excerpt: 'Learn how to build websites with Next.js.', date: '2023-06-02' },
  ])
  
  const { user, logout } = useAuth();

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
          {user ? (
            <>
              <Link href="/create-article">Create Article</Link>
              {user.isAdmin && (
                <Link href="/admin/dashboard">Admin Dashboard</Link>
              )}
              <button className="logout-btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
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
      
      <style jsx>{`
        .logout-btn {
          background: none;
          border: none;
          color: #0070f3;
          cursor: pointer;
          font-size: 1rem;
          padding: 0;
        }
        
        .logout-btn:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
} 