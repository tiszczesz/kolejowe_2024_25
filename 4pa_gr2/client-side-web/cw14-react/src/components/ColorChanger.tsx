import {type Color,colors} from '../data/colors'



const ColorChanger = () => {
  return (
    <div>
        <select className='form-select'>
            {colors.map((color:Color)=>(
                <option key={color.name} value={color.hex}>{color.name}</option>
            ))}
        </select>
        <div className='scene'>

        </div>
    </div>
  )
}

export default ColorChanger