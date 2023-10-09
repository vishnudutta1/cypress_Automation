describe("end to end", () => {
  it("passes", () => {
    cy.visit("https://payout.royalshop.me/");
    cy.get("#user-name").type("bingo@alycepay.com");
    cy.get("#password").type("Imoney@12345");
    cy.get("input.submit-btn.primary-btn").click();
    
    // cy.contains("Pay Now").click();
    // cy.get('input[placeholder="Enter Beneficiary Name"]').type(
    //   "VIJENDRA SINGH"
    // );
    // cy.get('input[placeholder="Enter Bank Name"]').type("PAYTM");
    // cy.get('input[placeholder="Enter IFSC Code"]').type("PYTM0123456");
    // cy.get('input[placeholder="Enter Account Number"]').type("918938920133");
    // cy.get('input[placeholder="Enter Amount"]').type("0");
    // cy.get(".select").select("IMPS");
    // cy.get("button.primary-btn.mt10.mb10").click();
    // cy.get('input[placeholder="Enter Your MPIN"]').type("123456");
    // cy.get("button.primary-btn.mt10.mb10").click();
  });

  // it("passes", () => {
  //   cy.visit("https://payout.royalshop.me/");
  //   cy.get("#user-name").type("bingo@alycepay.com");
  //   cy.get("#password").type("Imoney@12345");
  //   cy.get("input.submit-btn.primary-btn").click();
  //   cy.contains("Pay Now").click();
  //   cy.get('input[placeholder="Enter Beneficiary Name"]').type(
  //     "VIJENDRA SINGH"
  //   );
  //   cy.get('input[placeholder="Enter Bank Name"]').type("PAYTM");
  //   cy.get('input[placeholder="Enter IFSC Code"]').type("PYTM0123456");
  //   cy.get('input[placeholder="Enter Account Number"]').type("918938920133");
  //   cy.get('input[placeholder="Enter Amount"]').type("10000");
  //   cy.get(".select").select("IMPS");
  //   cy.get("button.primary-btn.mt10.mb10").click();
  //   cy.get('input[placeholder="Enter Your MPIN"]').type("123456");
  //   cy.get("button.primary-btn.mt10.mb10").click();
  // });
});

// describe("upi pay", () => {
//   it("passes", () => {
//     cy.visit("https://payout.royalshop.me/");
//     cy.get("#user-name").type("bingo@alycepay.com");
//     cy.get("#password").type("Imoney@12345");
//     cy.get("input.submit-btn.primary-btn").click();
//     cy.contains("UPI Pay").click();
//     cy.get('input[placeholder="Enter Beneficiary Name"]').type(
//       "VIJENDRA SINGH"
//     );
//     cy.get('input[placeholder="Enter UPI ID / VPA"]').type("8938920133@paytm");
//     cy.get('input[placeholder="Enter Amount"]').type("2");
//     cy.get("button.primary-btn.mt10.mb10").click();
//     cy.get('input[placeholder="Enter Your MPIN"]').type("123456");
//     cy.get("button.primary-btn.mt10.mb10").click();
//   });

//   it("passes", () => {
//     cy.visit("https://payout.royalshop.me/");
//     cy.get("#user-name").type("bingo@alycepay.com");
//     cy.get("#password").type("Imoney@12345");
//     cy.get("input.submit-btn.primary-btn").click();
//     cy.contains("UPI Pay").click();
//     cy.get('input[placeholder="Enter Beneficiary Name"]').type(
//       "VIJENDRA SINGH"
//     );
//     cy.get('input[placeholder="Enter UPI ID / VPA"]').type("8938920133@paytm");
//     cy.get('input[placeholder="Enter Amount"]').type("2000");
//     cy.get("button.primary-btn.mt10.mb10").click();
//     cy.get('input[placeholder="Enter Your MPIN"]').type("123456");
//     cy.get("button.primary-btn.mt10.mb10").click();
//   });
// });
