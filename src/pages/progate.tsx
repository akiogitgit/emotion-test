import { NextPage } from 'next'
import { css } from '@emotion/react'
import { Layout } from '../components/Layout'
import { NewContents } from '../components/sections/NewContents'
import { WebDevelopmentCourse } from '../components/sections/WebDevelopmentCourse'
import { SectionWrapper } from '../components/SectionWrapper'

const Progate: NextPage = () => {
  return (
    <Layout>
      <NewContents />
      <SectionWrapper>
        <WebDevelopmentCourse />
      </SectionWrapper>

      <section>
        <h2>言語別コース</h2>
      </section>

      <p>各レッスンの公開状況などの詳しい情報はこちらから確認してください。</p>
    </Layout>
  )
}

export default Progate
