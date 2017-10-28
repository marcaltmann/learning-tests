const runBenchmark = (name, test) => {
  const start = new Date().getTime();
  test();
  const total = new Date().getTime() - start;

  console.log(name + ': ' + total + 'ms');
};

export default runBenchmark;
