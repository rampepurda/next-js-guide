const data = { name: 50 }
const users: { name: string | number }[] = [
  { name: 'KAMIL' },
  { name: 'JeronymPrazsky' },
  { name: '33' },
]
function integration<T>(arg: T): T {
  return arg
}
const arrayStr: string[] = ['KAMIL', 'Jeronym', '33']
const arrayNum: number[] = [3, 2, 1]
const genericsObj = <T,>(data: { name: T }) => {
  return data.name
}
const genericsArrayObj = <T,>(data: { name: T }[], arg: T, item: number) => {
  return [data[item].name, item, arg]
}
const genericsArray = <T,>(data: T[]) => {
  return data
}

export function GenericsModelSituationPage() {
  return (
    <>
      <section>
        <h2>Function</h2>
        <mark>
          Is convection to use <strong>&lt;T or Type&gt;</strong> as &apos;type&apos;
        </mark>
        <p>
          <code>
            function identity<strong>&lt;T&gt;(arg: T): T</strong> &#123; return arg &#125;
          </code>
        </p>

        <h2>arrFunction</h2>
        <mark>
          Is convection to use <strong>&lt;T, or Type,&gt;</strong> as &apos;type&apos;
        </mark>
        <h2>Object:</h2>
        <ul className="hasVerticalPadding-4">
          <li>
            <code>const data = &#123; name: 50 &#125;</code>
          </li>
          <li>
            <code>
              const <strong>genericsObj = &lt;T,&gt;(data: &#123; name: T &#125;)</strong> =&gt;
              &#123;
              <br />
              &nbsp;return data.name &#125;
            </code>
          </li>
          <li>
            <code>
              &#123;<strong>genericsObj(data)</strong>&#125;
            </code>
          </li>
        </ul>
        <h4>Result:</h4>
        <p>
          <strong> {genericsObj(data)}</strong>
        </p>
      </section>

      <section>
        <h2>Object Array:</h2>
        <ul className="hasVerticalPadding-4">
          <li>
            <code>
              const users: &#123; name: <strong>string | number</strong> &#125;[] = [ &#123; name:
              &apos;KAMIL&apos; &#125;,...n &#125; ]{' '}
            </code>
          </li>
          <li>
            <code>
              const{' '}
              <strong>
                genericsObjArr = &lt;T,&gt;(data: &#123; name: T &#125;[], arg: T, item: number)
              </strong>
              =&gt; &#123;
              <br />
              &nbsp;return [data[item].name, arg] &#125;
            </code>
          </li>

          <li>
            <code>
              &#123;<strong>genericsObjArr(users, &apos;myArgument&apos;, 1)</strong>&#125;
            </code>
          </li>
        </ul>
        <h4>Result: </h4>
        <p>
          <strong> {genericsArrayObj(users, 'myArgument', 1)}</strong>
        </p>
      </section>
      <section>
        <h2>Array:</h2>
        <ul className="hasVerticalPadding-4">
          <li>
            <code>const arrayStr: string[] = [ &apos;KAMIL&apos; ,... &apos;n &apos; ]</code>
          </li>
          <li>
            <code>const arrayNum: number[] = [ 3 , 2, ...n ]</code>
          </li>
          <li>
            <code>const genericsArray = &lt;T,&gt;(data: T[]) =&gt; return data &#125;</code>
          </li>

          <li>
            <code>&#123;dummyGenericsArrayObj(users, 23444, 1)&#125;</code>
          </li>
        </ul>
        <h4>Result:</h4>
        <p>
          <strong> {genericsArray(arrayStr)}</strong>
        </p>
        <p>
          <strong> {genericsArray(arrayNum)}</strong>
        </p>
      </section>
    </>
  )
}
