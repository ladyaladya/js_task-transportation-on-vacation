/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  let totalCost = costPerDay * days;

  if (days >= 3) {
    totalCost -= 20;
  }

  if (days >= 7) {
    totalCost -= 30;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
