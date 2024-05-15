export function GenericsModelSituationPage() {
  const data = { name: 50 }
  const users: { name: string | number }[] = [
    { name: 'KAMIL' },
    { name: 'Jeronym' },
    { name: '33' },
  ]

  const dummyGenericsObj = <T,>(data: { name: T }) => {
    return data.name
  }
  const dummyGenericsArrayObj = <T,>(data: { name: T }[], arg: T, item: number) => {
    return [data[item].name, arg]
  }

  return (
    <>
      <section>
        <h2>Object:</h2>
        <ul className="hasVerticalPadding-4">
          <li>
            <code>const data = &#123; name: 50 &#125;</code>
          </li>
          <li>
            <code>
              const dummyGenerics = &lt;T,&gt;(data: &#123; name: T &#125;) =&gt; &#123;
              <br />
              &nbsp;return [data[item].name, arg] &#125;
            </code>
          </li>
          <li></li>
          <li>
            <code>&#123;dummyGenericsObj(data)&#125;</code>
          </li>
        </ul>
        <p>
          Result:
          <strong> {dummyGenericsObj(data)}</strong>
        </p>
      </section>
      <section>
        <h2>Array:</h2>
        <ul className="hasVerticalPadding-4">
          <li>
            <code>
              const users: &#123; name: <strong>string | number</strong> &#125;[] = [ &#123; name:
              &apos;KAMIL&apos; &#125;,...n &#125; ]{' '}
            </code>
          </li>
          <li>
            <code>
              const dummyGenerics = &lt;T,&gt;(data: &#123; name: T &#125;[], arg: T, item: number)
              =&gt; &#123;
              <br />
              &nbsp;return [data[item].name, arg] &#125;
            </code>
          </li>
          <li></li>
          <li>
            <code>&#123;dummyGenericsArrayObj(users, 23444, 1)&#125;</code>
          </li>
        </ul>

        <p>
          Result:
          <strong> {dummyGenericsArrayObj(users, 23444, 1)}</strong>
        </p>
      </section>
    </>
  )
}
