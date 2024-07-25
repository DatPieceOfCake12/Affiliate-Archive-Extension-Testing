import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoCSConfig } from "plasmo"
import { ConfigProvider, Button, Modal, AutoComplete, theme} from "antd"
import type { AutoCompleteProps } from "antd"
import {useState} from "react"
import urlsJson from "data-env:~/contents/urls.json"

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
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([])

  const handleClose = () => {
    setOpen(false)
  }
  var thingy : boolean = false 
  var location :string = window.location.href
  for (const url of urlsJson["urls"]) {
    if (location.includes(url)) {
      thingy = true
      console.log("open")
      break;
    }
  }
  console.log("thingy: " + thingy)

  if (!thingy) {
    return null;
  }

  return (
    <ConfigProvider
     theme={{
      algorithm: theme.darkAlgorithm
    }}>
      <Modal 
      title="You could use a creator code" 
      centered 
      open={open} 
      onOk={handleClose} 
      onCancel={handleClose} 
      onClose={handleClose}
      destroyOnClose={true} 
      footer={(_, {}) => (
        <>
          <AutoComplete
          options={options} 
          style={{width: 200}}
          onSearch={(text)=> setOptions([{value: text}])}
          ></AutoComplete>
          <Button 
          onClick={handleClose}
          >Cancel
          </Button>
        </>
      )}>
      </Modal>
    </ConfigProvider>
  )
}

export default PlasmoOverlay