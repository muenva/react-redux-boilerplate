import incrementService from 'services/increment'

describe('increment service', () => {
  it('should increment', () => {
    const result = incrementService.increment(1)
    expect(result).toEqual(2)
  })
  it('should decrement', () => {
    const result = incrementService.decrement(2)
    expect(result).toEqual(1)
  })
})
