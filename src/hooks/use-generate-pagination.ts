const useGeneratePagesNumbers = (currentPage: number, totalPage: number) => {
  const before = [];
  const after = [];

  for (let index = 2; index >= 1; index--) {
    if (currentPage - index > 0) {
      before.push(currentPage - index);
    }
  }

  for (let index = 1; index <= 2; index++) {
    if (currentPage + index <= totalPage) {
      after.push(currentPage + index);
    }
  }

  return { before, after };
};

export default useGeneratePagesNumbers;
