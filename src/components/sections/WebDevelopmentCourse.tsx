import { FC } from 'react'
import { css } from '@emotion/react'
import graph from '../../../public/webDevGraph.svg'
import nodeJs from '../../../public/webDevNodeJs.svg'
import ruby from '../../../public/webDevRuby.svg'
import Image from 'next/image'

export const WebDevelopmentCourse: FC = () => {
  return (
    <section>
      <h2 css={title}>
        <Image src={graph} alt='' />
        Web開発コース
        <span
          css={{
            background: 'lightgray',
            borderRadius: '100px',
            padding: '0 6px',
            fontSize: '8px',
            color: 'white',
          }}
        >
          i
        </span>
      </h2>

      <div css={[nodeJsCourse, card, { marginTop: '25px', padding: '50px' }]}>
        <div css={nodeJsWrapper}>
          <p css={nodeJsTitle}>Web開発コース(Node.js)</p>
          <p css={nodeJsContent}>
            このコースではWeb開発に必要な知識を学ぶことが出来ます。
            <br />
            Node.jsを使ってWebアプリの仕組みを理解し、実際に作れるようになりましょう！
          </p>
          <div css={nodeJsLanguage}>
            <p>全4言語</p>
            <p css={{ marginLeft: '10px' }}>HTML＆CSS</p>
            <p>JavaScript</p>
            <p>Node.js</p>
            <p>SQL</p>
          </div>
        </div>
        <Image src={nodeJs} width={350} alt='' css={{ padding: '0 20px' }} />
      </div>

      <div css={[rubyCourse, card, { marginTop: '37px', padding: '20px' }]}>
        <Image src={ruby} width={250} alt='' css={{ margin: '0 auto' }} />
        <h2 css={{ textAlign: 'center', fontSize: '19px' }}>
          Web開発コース(Ruby on Rails)
        </h2>
        <p css={{ textAlign: 'center' }}>全3言語</p>
      </div>
    </section>
  )
}

const title = css({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '18px',
})

const card = css({
  boxShadow: '3px 3px 10px whitesmoke, -3px -3px 10px whitesmoke',
  cursor: 'pointer',
  transition: 'all 1s',
  '&:hover': {
    translate: '0 -1px',
    boxShadow: '3px 3px 10px gainsboro, -3px -3px 10px gainsboro',
  },
})

const nodeJsCourse = css({
  display: 'flex',
  alignItems: 'center',
  gap: '70px',
})

const nodeJsWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})

const nodeJsTitle = css({
  fontSize: '23px',
  fontWeight: 600,
})
const nodeJsContent = css({
  fontSize: '12px',
  lineHeight: '23px',
})
const nodeJsLanguage = css({
  background: 'whitesmoke',
  padding: '15px',
  display: 'flex',
  gap: '20px',
  fontSize: '13px',
})

const rubyCourse = css({
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
})
