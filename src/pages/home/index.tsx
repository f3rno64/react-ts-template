import type React from 'react'
import classNames from 'classnames'

import { CLASS_NAME } from './const'
import { type HomeProps } from './types'
import { propTypes, defaultProps } from './props'

import './style.scss'

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { className } = props
  const finalClassName = classNames(CLASS_NAME, className)

  return (
    <div className={finalClassName}>
      <div className={`${CLASS_NAME}-content-wrapper`}>
        <h2>React TypeScript Web App Template</h2>
      </div>
    </div>
  )
}

Home.propTypes = propTypes
Home.defaultProps = defaultProps

export default Home
export { CLASS_NAME, type HomeProps }
