import { FC } from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import new_contents from '../../../public/new_contents.svg'

export const NewContents: FC = () => {
  return (
    <section css={sectionNewContents}>
      <div css={title}>新コンテンツ「HTML＆CSSプロジェクト」β版はこちら！</div>
      <Image src={new_contents} alt='' />
    </section>
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
  cursor: 'pointer',
  transition: 'all 500ms',
  '&:hover': {
    translate: '0 -2px',
    boxShadow: '3px 3px 10px gainsboro, -3px -3px 10px gainsboro',
  },
})

const title = css({
  color: 'white',
  fontWeight: 600,
})
