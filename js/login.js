document
  .querySelector("#login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pinNumber = getInputValueById("input-pin");
    const phoneNumber = getInputValueById("Mobile-number");
    // how to do it

    // if (typeof phoneNumber !== "number" || typeof pinNumber !== "number") {
    //   alert("Invalid Input");
    // }

    if (phoneNumber === 01888 && pinNumber === 555) {
      location.href = "/home.html";
    } else {
      alert("Wrong Input");
    }
  });
