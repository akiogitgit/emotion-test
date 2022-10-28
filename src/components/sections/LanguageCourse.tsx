import { FC } from 'react'
import { css } from '@emotion/react'
import { LanguageCard } from '../LanguageCard'
import HTMLCSS from '../../../public/HTMLCSS.svg'
import language from '../../../public/language.svg'
import Image from 'next/image'

export const LanguageCourse: FC = () => {
  return (
    <section>
      <h2 css={title}>
        <Image src={language} alt='' />
        言語別コース
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
      <div css={cardList}>
        {[...Array(10)].map((_, i) => (
          <LanguageCard
            key={i}
            title='HTML&CSS'
            image={HTMLCSS}
            content='Webページの見た目をつくる言語'
            lesson='全7レッスン＋3記事'
          />
        ))}
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

const cardList = css({
  marginTop: '25px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '20px',
})
