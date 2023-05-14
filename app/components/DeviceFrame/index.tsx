import Image from "next/image"
import { ReactNode } from "react"
import iPhone14ProBezel from "./bezels/iPhone14Pro.png"
import styles from "./styles.module.css"

export enum DeviceModel {
  iPhone14Pro,
}

function getBezel(device: DeviceModel = DeviceModel.iPhone14Pro) {
  switch (device) {
    case DeviceModel.iPhone14Pro:
      return iPhone14ProBezel
  }
}

function getScreenSize(device = DeviceModel.iPhone14Pro) {
  switch (device) {
    case DeviceModel.iPhone14Pro:
      return { width: 443, height: 960 }
  }
}

function getBezelMargin(device: DeviceModel = DeviceModel.iPhone14Pro) {
  switch (device) {
    case DeviceModel.iPhone14Pro:
      return 5.974
  }
}

interface Props {
  device: DeviceModel
  children: ReactNode
}

export default function DeviceFrame({ children, device }: Props) {
  const frame = getBezel(device)
  const aspectRatio = frame.width / frame.height
  const screenSize = getScreenSize(device)

  return (
    <div className={styles.root} style={{ aspectRatio }}>
      <Image src={frame} alt="" className={styles.bezel} />
      <div
        className={styles.children}
        style={{
          padding: `${getBezelMargin(device)}%`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
