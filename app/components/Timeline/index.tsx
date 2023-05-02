import timeline from "@/app/timeline.json"
import Link from "next/link"
import styles from "./styles.module.css"

interface TimelineEntries {
  [key: string]: [
    {
      date: Date
      url: string
      title: string
      description: string
    }
  ]
}

export default function Timeline() {
  const orderedData = timeline
    .map((entry) => ({ ...entry, date: new Date(entry.date) }))
    .sort((a, b) => a.date.valueOf() - b.date.valueOf())
    .reduce<TimelineEntries>((sections, currentValue) => {
      const year = currentValue.date.getFullYear().toString()
      if (sections[year] != undefined) {
        sections[year].push(currentValue)
      } else {
        sections[year] = [currentValue]
      }

      return sections
    }, {})

  return (
    <>
      <table className={styles.root}>
        <tbody>
          {Object.keys(orderedData)
            .sort()
            .reverse()
            .map((year) => {
              return orderedData[year].map((entry, index) => (
                <tr key={`${year}-${index}`}>
                  {index === 0 ? <th>{year}</th> : <td />}
                  <td>
                    <Link href={entry.url}>{entry.title}</Link>

                    <p className="small sans meta">{entry.description}</p>
                  </td>
                </tr>
              ))
            })}
        </tbody>
      </table>
    </>
  )
}
