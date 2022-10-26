import timeline from "@/data/timeline.json"
import Link from "next/link"

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

  return <>
    <table>
      <tbody>
        {Object.keys(orderedData)
          .sort()
          .reverse()
          .map((year) => {
            return orderedData[year].map((entry, index) => (
              <tr key={`${year}-${index}`}>
                {index === 0 ? <th>{year}</th> : <td />}
                <td>
                  <Link href={entry.url} legacyBehavior>{entry.title}</Link>

                  <p className="small sans meta">{entry.description}</p>
                </td>
              </tr>
            ));
          })}
      </tbody>
    </table>
    <style jsx>{`
      table {
        font: inherit;
        width: 100%;
        border-collapse: collapse;
        -webkit-border-horizontal-spacing: 0;
      }

      th {
        font-weight: normal;
        border: none;
        font-size: inherit;
        text-align: right;
        width: calc(
          ((100vw - (var(--sp-m) * 2)) - var(--container-width)) / 2
        ) !important;
      }

      th,
      td {
        font-family: var(--font-sans);
        border: none;
        line-height: 1.2;
      }

      th,
      th + td {
        border-top: 2px solid var(--meta-color) !important;
        border-collapse: no-collapse;
      }

      table :global(a) {
        text-decoration: none;
      }
    `}</style>
  </>;
}
