import { FC } from 'react'

type Props = {
  children: React.ReactNode
}

export const SectionWrapper: FC<Props> = ({ children }) => {
  return <div css={{ marginTop: '50px' }}>{children}</div>
}
