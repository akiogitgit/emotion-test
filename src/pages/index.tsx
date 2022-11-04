import { NextPage } from 'next'
import { css } from '@emotion/react'
import { Layout } from '../components/Layout'
import { NewContents } from '../components/sections/NewContents'
import { WebDevelopmentCourse } from '../components/sections/WebDevelopmentCourse'
import { SectionWrapper } from '../components/SectionWrapper'
import { LanguageCourse } from '../components/sections/LanguageCourse'

const Progate: NextPage = () => {
  return (
    <Layout>
      <NewContents />
      <SectionWrapper>
        <WebDevelopmentCourse />
      </SectionWrapper>

      <SectionWrapper>
        <LanguageCourse />
      </SectionWrapper>
    </Layout>
  )
}

export default Progate
