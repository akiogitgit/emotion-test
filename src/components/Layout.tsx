import { css } from '@emotion/react'
import { FC } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div css={layout}>
      <Header />
      <main css={main}>{children}</main>
      <Footer />
    </div>
  )
}

const layout = css({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100vh',
})

const main = css({
  margin: '0 auto',
  padding: '30px',
  width: '100%',
  color: 'darkslategray',
})
