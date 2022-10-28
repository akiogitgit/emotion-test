import { NextPage } from 'next'
import { css } from '@emotion/react'
import { Layout } from '../components/Layout'

const Progate: NextPage = () => {
  return (
    <Layout>
      <section css={sectionNewContents}>
        <div>新コンテンツ「HTML＆CSSプロジェクト」β版はこちら！</div>
        <div>画像</div>
      </section>

      <section>
        <h2>Web開発コース</h2>
      </section>

      <section>
        <h2>言語別コース</h2>
      </section>

      <p>各レッスンの公開状況などの詳しい情報はこちらから確認してください。</p>
    </Layout>
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
})

const header = css({
  width: '100vw',
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: '0px 3px 2px gainsboro',
  color: 'darkslategray',
})

const nav = css({
  display: 'flex',
  alignItems: 'center',
  gap: '23px',
})

const navMenu = css({
  fontSize: '12px',
  cursor: 'pointer',
  padding: '15px 0',
  borderBottom: '3px solid white',
  transition: 'all 300ms',
  '&:hover': {
    borderBottom: '3px solid turquoise',
  },
})

const rightMenu = css({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  fontSize: '12px',
  marginRight: '10px',
})

const dashBoardButton = css({
  display: 'flex',
  gap: '5px',
  padding: '17px 0',
  cursor: 'pointer',
  transition: 'all 300ms',
  '&:hover': {
    background: 'gainsboro',
  },
})

const sectionNewContents = css({
  background: 'turquoise',
  borderRadius: '5px',
})

const sectionWebDev = css({
  background: 'turquoise',
  borderRadius: '5px',
})

export default Progate
