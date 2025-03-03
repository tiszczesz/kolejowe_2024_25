import  { HTMLAttributes } from 'react'

type Props =  HTMLAttributes<HTMLDivElement> &{
    title: string;
  }

const CompWithProps = ({title,...rest}: Props) => {
  return (
    <div>
        <h3 {...rest}>{title}</h3>
    </div>
  )
}

export default CompWithProps