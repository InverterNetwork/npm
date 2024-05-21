import { expect, describe, it } from 'bun:test'
import { writeLog } from '../tools/utils'

describe('#EXEMPLE_TEST', () => {
  it('Write a Hello log', async () => {
    const promise = new Promise<boolean>((resolve) => resolve(true))

    const res = await promise

    writeLog(res, 'Hello')

    expect(res).toBeTruthy()
  })
})
