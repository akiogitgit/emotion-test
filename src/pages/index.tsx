import { NextPage } from 'next'
import { css } from '@emotion/react'

const Index: NextPage = () => {
  return (
    <>
      <h1 css={title}>Emotion</h1>
      <div css={[{ fontSize: '200px' }, title]}>aaa</div>
      <button css={button('blue')}>
        Button<div>anpan</div>
      </button>
    </>
  )
}

export default Index

const title = css({
  color: 'red',
  marginLeft: '130px',
  '&:hover': {
    color: 'white',
  },
})

const button = (color: 'red' | 'blue' | 'green' = 'red') =>
  css({
    outline: 'none',
    padding: '5px 10px',
    background: color,
    border: `${color} 1px solid`,
    borderRadius: '100px',
    color: 'white',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 300ms',
    '&:hover': {
      background: 'white',
      color: color,
    },
    '& div': {
      margin: '20px 0',
    },
  })
