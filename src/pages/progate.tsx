import { NextPage } from 'next'
import { css } from '@emotion/react'

const Progate: NextPage = () => {
  return (
    <div>
      <header css={header}>
        <nav css={nav}>
          <h1
            css={{
              background: 'darkslategray',
              padding: '11px 16px',
              color: 'white',
              fontSize: '20px',
            }}
          >
            あ
          </h1>
          <div
            css={[
              navMenu,
              {
                borderBottom: '3px solid mediumseagreen',
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
          <button css={{ display: 'flex', gap: '5px' }}>
            Akio (Lv.176)
            <span
              css={{
                rotate: '90deg',
                display: 'block',
              }}
            >
              ➧
            </span>
          </button>
          <div>通知</div>
        </div>
      </header>
    </div>
  )
}

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
  padding: '16px 0',
  borderBottom: '3px solid white',
  transition: 'all 300ms',
  '&:hover': {
    borderBottom: '3px solid mediumseagreen',
  },
})

const rightMenu = css({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  fontSize: '12px',
  marginRight: '10px',
})

export default Progate
