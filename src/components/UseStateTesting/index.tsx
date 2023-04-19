import { useState } from 'react'

export const UseStateTesting = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
	const [isTesting, setIsTesting] = useState<'testing' | 'tested'>('testing')
  return (
    <>
      {isLoading && <p>The page is loading!</p>}
      {!isLoading && <p>The page has already been loaded!</p>}
      {isTesting === 'testing' && <p>We are testing!</p>}
      {isTesting === 'tested' && <p>It was tested!</p>}
    </>
  )
}