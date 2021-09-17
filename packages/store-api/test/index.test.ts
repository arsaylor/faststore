import { getSchema } from '../src'

describe('Schema', () => {
  it('returns a valid graphql schema for vtex platform', async () => {
    const schema = await getSchema({
      platform: 'vtex',
      account: 'storecomponents',
      environment: 'vtexcommercestable',
    })

    expect(schema).not.toBeNull()
  })
})