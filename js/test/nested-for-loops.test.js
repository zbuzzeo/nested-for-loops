const expect = chai.expect;

describe('equal width and depth', function () {
  it('should return 3 x 3 string grid', function () {
    const result = nestedForLoops(3);
    expect(result).to.equal(`
{x:0, y:0}, {x:1, y:0}, {x:2, y:0}
{x:0, y:1}, {x:1, y:1}, {x:2, y:1}
{x:0, y:2}, {x:1, y:2}, {x:2, y:2}
`);
  });
});

describe('greater depth than width', function () {
  it('should return 10 x 5 string grid', function () {
    const result = nestedForLoops(10, 5);
    expect(result).to.equal(`
{x:0, y:0}, {x:1, y:0}, {x:2, y:0}, {x:3, y:0}, {x:4, y:0}
{x:0, y:1}, {x:1, y:1}, {x:2, y:1}, {x:3, y:1}, {x:4, y:1}
{x:0, y:2}, {x:1, y:2}, {x:2, y:2}, {x:3, y:2}, {x:4, y:2}
{x:0, y:3}, {x:1, y:3}, {x:2, y:3}, {x:3, y:3}, {x:4, y:3}
{x:0, y:4}, {x:1, y:4}, {x:2, y:4}, {x:3, y:4}, {x:4, y:4}
{x:0, y:5}, {x:1, y:5}, {x:2, y:5}, {x:3, y:5}, {x:4, y:5}
{x:0, y:6}, {x:1, y:6}, {x:2, y:6}, {x:3, y:6}, {x:4, y:6}
{x:0, y:7}, {x:1, y:7}, {x:2, y:7}, {x:3, y:7}, {x:4, y:7}
{x:0, y:8}, {x:1, y:8}, {x:2, y:8}, {x:3, y:8}, {x:4, y:8}
{x:0, y:9}, {x:1, y:9}, {x:2, y:9}, {x:3, y:9}, {x:4, y:9}
`);
  });
});

describe('greater width than depth', function () {
  it('should return 5 x 10 string grid', function () {
    const result = nestedForLoops(5, 10);
    expect(result).to.equal(`
{x:0, y:0}, {x:1, y:0}, {x:2, y:0}, {x:3, y:0}, {x:4, y:0}, {x:5, y:0}, {x:6, y:0}, {x:7, y:0}, {x:8, y:0}, {x:9, y:0}
{x:0, y:1}, {x:1, y:1}, {x:2, y:1}, {x:3, y:1}, {x:4, y:1}, {x:5, y:1}, {x:6, y:1}, {x:7, y:1}, {x:8, y:1}, {x:9, y:1}
{x:0, y:2}, {x:1, y:2}, {x:2, y:2}, {x:3, y:2}, {x:4, y:2}, {x:5, y:2}, {x:6, y:2}, {x:7, y:2}, {x:8, y:2}, {x:9, y:2}
{x:0, y:3}, {x:1, y:3}, {x:2, y:3}, {x:3, y:3}, {x:4, y:3}, {x:5, y:3}, {x:6, y:3}, {x:7, y:3}, {x:8, y:3}, {x:9, y:3}
{x:0, y:4}, {x:1, y:4}, {x:2, y:4}, {x:3, y:4}, {x:4, y:4}, {x:5, y:4}, {x:6, y:4}, {x:7, y:4}, {x:8, y:4}, {x:9, y:4}
`);
  });
});

describe('error handling', function () {
  it('should return "" empty string if no param is passed', function () {
    const result = nestedForLoops();
    expect(result).to.have.string('');
  });

  it('should return "" empty string if the param is not a number', function () {
    const result = nestedForLoops('A');
    expect(result).to.have.string('');
  });
});