import { getProportions } from '../calculations'

describe('calculations', () => {
  it('should return ratio and limit the length of decimals', () => {
    expect(getProportions(0, 100)).toEqual(0)
    expect(getProportions(50, 100)).toEqual(50)
    expect(getProportions(11.22, 100)).toEqual(11.22)
    expect(getProportions(10, 11, 4)).toEqual(90.9091)
    expect(getProportions(10, 11, 3)).toEqual(90.909)
  })
})
