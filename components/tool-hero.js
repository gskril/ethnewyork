import Link from 'next/link'

export default function Hero({name, description}) {

  const descriptionOutput = description
		? description
		: `See live statistics about ${name} and use its core functions.`

  return (
    <header className="hero">
      <div className="hero-content container">
        <Link href="/">
          <a>
            ←
          </a>
        </Link>
        <h1>{name}</h1>
        <p>{descriptionOutput}</p>
      </div>

      <style jsx>{`
        .hero {
          background-color: var(--blue-100);
        }

        a {
          color: var(--neutral-500);
          font-weight: bold;
          font-size: 1.5rem;
        }

        h1 {
          margin: 0.5rem 0 1rem;
        }
      `}</style>
    </header>
  )
}