describe('array splice', () => {
  it('should not modify array', () => {
    var arr = [1, 2, 3, 4, 5];
    var result = arr.splice(2, 3);

    expect(arr).toEqual([1, 2]);
  });

  it('should return modified array', () => {
    var arr = [1, 2, 3, 4, 5];
    var result = arr.splice(2, 3);

    expect(result).toEqual([3, 4, 5]);
  });
});
