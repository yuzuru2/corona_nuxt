// https://qiita.com/gurujowa2/items/38fba8460531252e0972
const exemptIncome = {
  0: 1000000,
  1: 1560000,
  2: 2057000,
  3: 2557000,
};

const getExempt = (member: string) => {
  return exemptIncome[member];
};

const checkExemptIncome = (monthlyIncome: number, member: string) => {
  const annualIncome = monthlyIncome * 12;
  const exemptIncome = getExempt(member);

  return annualIncome <= exemptIncome ? true : false;
};

const checkIncomeDownHalf = (
  monthlyIncomeBefore: number,
  monthlyIncomeAfter: number,
  member: string
) => {
  const annualIncomeBefore = monthlyIncomeBefore * 12;
  const annualIncomeAfter = monthlyIncomeAfter * 12;
  const exemptIncomeDouble = getExempt(member) * 2;

  if (annualIncomeBefore < annualIncomeAfter * 2) {
    return false;
  } else if (exemptIncomeDouble < annualIncomeAfter) {
    return false;
  } else {
    return true;
  }
};

export const submitCoronaForm = (
  beforeIncome: number,
  afterIncome: number,
  member: string
) => {
  if (!beforeIncome || !afterIncome || !member) {
    alert('値を入力してください');
    return;
  }

  const checkGetMoney =
    checkIncomeDownHalf(beforeIncome, afterIncome, member) ||
    checkExemptIncome(afterIncome, member);

  if (checkGetMoney) {
    alert('あなたは給付金をもらうことができます！');
  } else {
    alert('給付金をもらうことができません。残念！');
  }

  return false;
};
