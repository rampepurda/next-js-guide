import Head from 'next/head'

export default function ChMediaQueriesLib() {
  return (
    <>
      <Head>
        <title>Next JS | Guide | Ch-23 | useMediaQueries </title>
      </Head>

      <div>
        <h2>useMediaQueries Libraries</h2>
        <h3>1. The most popular MediaQueriesHooks</h3>
        <ul className="hasTypeDecimal">
          <li>
            <h4>react-responsive</h4>
            <strong>Install:</strong> $ npm install react-responsive --save
            <h4>
              <a
                href="https://www.npmjs.com/package/react-responsive"
                target="_blank"
                rel="noreferrer"
              >
                Read more about react-responsive hook here
              </a>
            </h4>
          </li>
          <li>
            <h4>ui-dot dev</h4>
            <strong>Install:</strong> npm i @uidotdev/usehooks
            <h4>
              <a href="https://usehooks.com/usemediaquery" target="_blank" rel="noreferrer">
                Read more about ui-dot dev hook here
              </a>
            </h4>
          </li>
        </ul>
        <h3>2. Top ten MediaQueriesHooks</h3>
        <a href="https://www.npmjs.com/search?q=media-query" target="_blank" rel="noreferrer">
          Read more about react-responsive hook here
        </a>
        <h3>3. See other hooks libraries</h3>
        <a href="https://usehooks.com" target="_blank" rel="noreferrer">
          Read more about react-responsive hook here
        </a>
      </div>
    </>
  )
}
