import { FC } from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'

type Props = {
  title: string
  image: any
  content: string
  lesson: string
}

export const LanguageCard: FC<Props> = ({ title, image, content, lesson }) => {
  return (
    <div css={card}>
      <p css={LanguageTitle}>{title}</p>
      <Image src={image} alt='' css={{ margin: '20px 0' }} />
      <p css={LanguageContent}> {content}</p>
      <p css={LanguageLesson}>{lesson}</p>
    </div>
  )
}

const card = css({
  padding: '40px 0',
  boxShadow: '3px 3px 10px whitesmoke, -3px -3px 10px whitesmoke',
  cursor: 'pointer',
  transition: 'all 1s',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  textAlign: 'center',
  '&:hover': {
    translate: '0 -5px',
    boxShadow: '3px 3px 10px gainsboro, -3px -3px 10px gainsboro',
  },
})

const LanguageTitle = css({
  fontSize: '20px',
})

const LanguageContent = css({
  fontSize: '14px',
})

const LanguageLesson = css({
  marginTop: '80px',
  fontSize: '14px',
})
