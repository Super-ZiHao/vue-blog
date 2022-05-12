import { useEffect, useRef } from 'react'
import logo from './logo.svg'
import './four.scss'

// 正三角
const Four = () => {

  const boxInner = useRef<any>();
  const input = useRef<any>();
  const tlayer = useRef<any>();
  const angleText = useRef<any>();
  const lengthText = useRef<any>();

  useEffect(() => {

    const radToDeg = (radians: any) => {
      return radians * (180 / Math.PI)
    }

    const setAngles = () => {
      const o = tlayer.current.clientWidth / 2
      const h = input.current.value
      const radians = Math.asin(o / h)
      const angle = radToDeg(radians).toFixed(2)
      console.log(radians);
      console.log(angle);
      tlayer.current.style.setProperty('--h', `${h}px`)
      tlayer.current.style.setProperty('--angle', `${radians}rad`)
      angleText.current.innerText = `${angle}deg, ${radians.toFixed(2)}rad`
      lengthText.current.innerText = `${h}px`
    }

    setAngles()

    input.current.addEventListener('input', setAngles)

  })

  return (
    <div>
      <div className="controls">
        <div className="controls__group">
          <label >Adjust height
            <input ref={input} id="height" type="range" min="100" max="300" step="5" data-slider />
          </label>
        </div>
        <dl>
          <div className="controls__group">
            <dt>Angle:</dt>
            <dd ref={angleText} ></dd>
          </div>
          <div className="controls__group">
            <dt>Side length:</dt>
            <dd ref={lengthText} ></dd>
          </div>
        </dl>
      </div>

      <div className="twrap">
        <div className="tlayer" ref={tlayer}>
          <div className="tlayer__side"></div>
          <div className="tlayer__side"></div>
          <div className="tlayer__side"></div>
          <div className="tlayer__side"></div>
          <div className="tlayer__base"></div>
        </div>
      </div>
    </div>
  )
}

export default Four;
