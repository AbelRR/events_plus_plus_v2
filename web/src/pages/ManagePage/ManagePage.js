import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ManagePage = () => {
  return (
    <>
      <MetaTags title="Manage" description="Manage page" />

      <h1>ManagePage</h1>
      <p>
        Find me in <code>./web/src/pages/ManagePage/ManagePage.js</code>
      </p>
      <p>
        My default route is named <code>manage</code>, link to me with `
        <Link to={routes.manage()}>Manage</Link>`
      </p>
    </>
  )
}

export default ManagePage
