import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          "#99627A",
          "#0C134F",
          "#B04759",
          "#C07F00",
          "#19A7CE",
          "#DEDEA7",
          "#FF6000",
          "#000000",
          "#D8D8D8",
          "#E21818",
          "#8D7B68",
          "#30E3DF",
          "#5D3891",
          "#FFEA20",
          "#0081B4",
          "#4E6C50",
          "#1A120B",
          "#285430",

        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker