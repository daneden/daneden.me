import { NowRequest, NowResponse } from "@now/node"
import jwt from "jsonwebtoken"
import ms from "ms"

const {
  APPLE_MUSIC_KEY,
  APPLE_MUSIC_KEY_ID,
  APPLE_MUSIC_TEAM_ID,
  APPLE_MUSIC_USER_TOKEN,
} = process.env

export default async (request: NowRequest, response: NowResponse) => {
  const now = Date.now() / 1000
  const exp = now + ms("3m") / 1000
  const key = (APPLE_MUSIC_KEY as string)
    .replace("\\\n", "\n")
    .replace("\n", "\n")
  console.log(key)
  try {
    const token = jwt.sign(
      {
        iss: APPLE_MUSIC_TEAM_ID,
        exp,
        iat: now,
      },
      { key, passphrase: "" },
      {
        algorithm: "ES256",
        header: {
          alg: "ES256",
          kid: APPLE_MUSIC_KEY_ID,
        },
      }
    )

    await fetch("https://api.music.apple.com/v1/me/recent/played", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Music-User-Token": APPLE_MUSIC_USER_TOKEN as string,
      },
    })
      .then((d) => d.json())
      .then((d) => response.json(d.data[0]))
  } catch (error) {
    console.error(error)
    response.send(500)
  }
}
