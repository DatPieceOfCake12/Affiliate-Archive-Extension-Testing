import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoCSConfig } from "plasmo"
import { ConfigProvider, Button, Modal, AutoComplete, theme} from "antd"
import {useState} from "react"

export const config: PlasmoCSConfig = {
  matches: ["*://*/*"],
  css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <ConfigProvider
     theme={{
      algorithm: theme.darkAlgorithm
    }}>
      <Modal 
      title="You could use a creator code" 
      centered 
      open={open} onOk={handleClose} onCancel={handleClose} onClose={handleClose}>
        <AutoComplete></AutoComplete>
      </Modal>
    </ConfigProvider>
  )
}

export default PlasmoOverlay
