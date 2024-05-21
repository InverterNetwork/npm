import fs from 'fs'
import path from 'path'

const logsPath = path.join(__dirname, '../../logs')

export function writeLog(data: any, label?: string) {
  if (!fs.existsSync(logsPath)) fs.mkdirSync(logsPath, { recursive: true })

  const now = new Date(),
    date = now.getDate(),
    month = now.getMonth() + 1,
    year = now.getFullYear().toString().slice(2),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds()

  const timestamp = `${date}-${month}-${year}_${hours}:${minutes}:${seconds}`

  const formattedLabel = label ? `${timestamp}-${label}` : timestamp

  const newFilePath = path.join(logsPath, `${formattedLabel}.json`)

  fs.writeFileSync(newFilePath, JSON.stringify(data, null, 2))
}
