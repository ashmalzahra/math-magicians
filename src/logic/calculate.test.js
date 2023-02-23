import calculate from "./calculate";

describe('Calculate component should expect', () => {
    it('AC button to function properly', () => {
        expect(calculate({total: 5, next: 15, operation: '+'}, 'AC')).toEqual({
            total: null, 
            next: null,
            operation: null,
        })
    })
    it('Number buttons to function properly', () => {
        expect(calculate({ total: 15, next: '9', operation: '-' }, '9')).toEqual({
          total: 15,
          next: '99',
          operation: '-',
        });
      });
    
      it('"." button to function properly', () => {
        expect(calculate({ total: 5, next: '1', operation: '+' }, '.')).toEqual({
          total: 5,
          next: '1.',
          operation: '+',
        });
      });
    
      it('"=" button to function properly', () => {
        expect(calculate({ total: 15, next: '10', operation: '-' }, '=')).toEqual({
          total: '5',
          next: null,
          operation: null,
        });
      });
    
      it('"+/-" button to function properly', () => {
        expect(calculate({ total: '5', next: '5', operation: '+' }, '+/-')).toEqual({
          total: '5',
          next: '-5',
          operation: '+',
        });
      });
    
      it('Operation buttons to should function properly', () => {
        expect(calculate({ total: 10, next: '5', operation: '-' }, '-')).toEqual({
          total: '5',
          next: null,
          operation: '-',
        });
      });
})