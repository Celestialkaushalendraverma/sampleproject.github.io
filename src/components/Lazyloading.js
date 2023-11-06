import React, { Suspense, lazy } from 'react'
const Lazyhome = lazy(() => import('./Lazyhome'))
const Lazyabout = lazy(() => import('./Lazyabout'))

const Lazyloading = () => {
  return (
    <div>
      <h1>Lazy Loading</h1>
      <Suspense fallback={<div>Please Wait... Lazyhome is loading.</div>}>
        <Lazyhome />
      </Suspense>

      <Suspense fallback={<div>Please Wait... Lazyabout is loading.</div>}>
        <Lazyabout />
      </Suspense>
    </div>
  )
}

export default Lazyloading
