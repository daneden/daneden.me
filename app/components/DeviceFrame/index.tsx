import Image from "next/image"
import { ReactNode } from "react"
import iPadPro11M4Bezel from "./bezels/iPadPro11M4.png"
import iPhone14ProBezel from "./bezels/iPhone14Pro.png"
import styles from "./styles.module.css"

export enum DeviceModel {
  iPhone14Pro,
  iPadPro11M4,
}

function getBezel(device: DeviceModel) {
  switch (device) {
    case DeviceModel.iPhone14Pro:
      return iPhone14ProBezel
    case DeviceModel.iPadPro11M4:
      return iPadPro11M4Bezel
  }
}

function getBezelMargin(device: DeviceModel) {
  switch (device) {
    case DeviceModel.iPhone14Pro:
      return 5.925
    case DeviceModel.iPadPro11M4:
      return 4.166
  }
}

interface Props {
  model: DeviceModel
  children: ReactNode
}

export default function DeviceFrame({ children, model }: Props) {
  const frame = getBezel(model)
  const aspectRatio = frame.width / frame.height

  return (
    <div className={styles.container}>
      <div className={styles.root} style={{ aspectRatio }}>
        <Image src={frame} alt="" className={styles.bezel} />
        <div
          className={styles.children}
          style={{
            padding: `${getBezelMargin(model)}%`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
