import { FC } from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'

export const Header: FC = () => {
  return (
    <header css={header}>
      <nav css={nav}>
        <h1
          css={{
            background: 'darkslategray',
            padding: '11px 20px',
            color: 'white',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          β
        </h1>
        <div
          css={[
            navMenu,
            {
              borderBottom: '3px solid turquoise',
            },
          ]}
        >
          コース一覧
        </div>
        <div css={navMenu}>スライド検索</div>
        <div css={navMenu}>ランキング</div>
        <div css={navMenu}>ヘルプ</div>
      </nav>

      <div css={rightMenu}>
        <Image src='/headerIcon.jpg' width={30} height={30} alt='' />
        <button css={dashBoardButton}>
          AkioProgate (Lv.176)
          <span
            css={{
              rotate: '90deg',
              display: 'block',
            }}
          >
            ➧
          </span>
        </button>
        <div css={{ cursor: 'pointer', fontSize: '20px' }}>🔔</div>
      </div>
    </header>
  )
}

const header = css({
  width: '100vw',
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: '0px 3px 2px gainsboro',
  color: 'darkslategray',
  position: 'fixed',
  background: 'white',
  zIndex: 100,
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
  gap: '10px',
  fontSize: '12px',
  marginRight: '40px',
})

const dashBoardButton = css({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  padding: '17px 0',
  cursor: 'pointer',
  transition: 'all 300ms',
  '&:hover': {
    background: 'gainsboro',
  },
})
