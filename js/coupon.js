document
  .getElementById("coupon-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const couponNumber = getInputValueById("coupon-pin");
    const currentBalance = getTextValueById("current-bln");
    // console.log(couponNumber, currentBalance);
    if (couponNumber === 22200) {
      // bonus 2%
      const bonusInCurrentBalance = (currentBalance * 2) / 100;
      //   console.log(bonusInCurrentBalance);
      const updateBalance = currentBalance + bonusInCurrentBalance;
      //   console.log(updateBalance);
      document.getElementById("current-bln").innerText = updateBalance;
    } else {
      alert("Bad luck. Try next time...!");
    }
    document.getElementById("coupon-pin").value = "";
  });
