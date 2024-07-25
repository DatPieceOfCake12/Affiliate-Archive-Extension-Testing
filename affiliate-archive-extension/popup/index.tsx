import { ConfigProvider, Button, theme, Flex, Divider} from "antd"
import { YoutubeFilled } from "@ant-design/icons"
import {useState} from "react"

const spacingDiv: React.CSSProperties = {
width: "15em",
height: "18em",
}

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <ConfigProvider
     theme={{
      algorithm: theme.darkAlgorithm,
     }}>
    <div style={spacingDiv}>
      <Flex vertical gap={"middle"} align="center" justify="center">
        <Button type="primary" danger>Ignore Website</Button>
        <Button type="default" icon={<YoutubeFilled />} iconPosition="start">Connect to Youtube</Button>
        <Button type="link">Click me</Button>
      </Flex>
    </div>
    </ConfigProvider>
  )
}

export default IndexPopup