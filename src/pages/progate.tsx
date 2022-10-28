import { NextPage } from 'next'
import { css } from '@emotion/react'
import { Layout } from '../components/Layout'
import Image from 'next/image'
import new_contents from '../../public/new_contents.svg'

const Progate: NextPage = () => {
  return (
    <Layout>
      <section css={sectionNewContents}>
        <div css={title}>
          新コンテンツ「HTML＆CSSプロジェクト」β版はこちら！
        </div>
        <Image src={new_contents} alt='' />
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

const sectionNewContents = css({
  background: 'turquoise',
  borderRadius: '5px',
  padding: '10px 40px 0 50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '60px',
})

const title = css({
  color: 'white',
  fontWeight: 600,
})

const sectionWebDev = css({
  background: 'turquoise',
  borderRadius: '5px',
})

export default Progate
