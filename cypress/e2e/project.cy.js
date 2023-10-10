// describe("login suit", () => {
//   it("passes", () => {
//     cy.visit("https://sandbox.imoneypay.in/");
//     cy.get(".item-text").type("7677770783");
//        cy.contains("Send Otp").click();
//     cy.get("input[name='otp-1']").type("1");
//     cy.get("input[name='otp-2']").type("0");
//     cy.get("input[name='otp-3']").type("0");
//     cy.get("input[name='otp-4']").type("5");
//     cy.contains("Submit").click();
    // cy.get("input.submit-b").click();tn.primary-btn
    
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
  // });

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
// });

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


describe('Login Test Suite', () => {
  beforeEach(() => {
    // Assuming your application URL is http://localhost:3000
    cy.visit('https://sandbox.imoneypay.in/');
  });

  it('Should log in with valid credentials', () => {
    cy.get('input[name="mobileNumber"]').type('7677770783');
          cy.contains("Send Otp").click();
    cy.get("input[name='otp-1']").type("1");
    cy.get("input[name='otp-2']").type("0");
    cy.get("input[name='otp-3']").type("0");
    cy.get("input[name='otp-4']").type("5");
    cy.contains("Submit").click();

    // Assuming successful login redirects to a dashboard or home page
    cy.url().should('include', 'https://sandbox.imoneypay.in/dashboard');
    // cy.get('h1').should('contain', 'Welcome to Dashboard');
  });

  // it('Should display an error with invalid credentials', () => {
  //   cy.get('input[name="username"]').type('invalid_username');
  //   cy.get('input[name="password"]').type('invalid_password');
  //   cy.get('button[type="submit"]').click();

  //   // Assuming an error message is displayed
  //   cy.get('.error-message').should('exist');
  //   cy.get('.error-message').should('contain', 'Invalid username or password');
  // });

  // it('Should redirect to the forgot password page', () => {
  //   cy.get('a[href="/forgot-password"]').click();

  //   // Assuming the URL changes to the forgot password page
  //   cy.url().should('include', '/forgot-password');
  //   cy.get('h1').should('contain', 'Forgot Password');
  // });

  // Add more test cases as needed, such as testing password strength, CSRF protection, etc.
});
