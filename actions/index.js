import dummyAccounts from 'dummyData/dummyAccounts';


export const signIn = async (signInData) => {

    const { email, password } = signInData;

    let signInResult = {
        code: null,
        message: '',
    };
    // This should be work on backend
    let findAccounts = dummyAccounts.find(account => {
        if (account.email == email && account.password == password) {
            return account;
        }
    });

    if (findAccounts) {
        signInResult = {
            code: 200,
            message: 'success'
        };
    } else {
        signInResult = {
            code: 400,
            message: 'failed'
        };
    }

    return signInResult;
};




