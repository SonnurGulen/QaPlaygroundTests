import VerifyAccount from "../pages/verifyAccount";

describe('Code Verification', () => {
    const verifyAccount = new VerifyAccount();

    it('should successfully verify a valid code', () => {

        verifyAccount
            .visit()
            .verifyInputs()

    });

});
