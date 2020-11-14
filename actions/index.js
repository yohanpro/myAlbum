import dummyAccounts from 'dummyData/dummyAccounts';
import jwt from 'jsonwebtoken';

const jwtSecret = "jwtsecret"; // Use env for secrets


export const signIn = async (signInData) => {

    const { email, password } = signInData;

    let signInResult = {
        code: null,
        message: '',
    };


    /* 
     실제 서비스에서 아래 작업은 Backend에서 암호화된 password를 확인해야 한다.
     지금 과제는 Front 과제이기 때문에 구현하지는 않음.
    */
    let findAccounts = dummyAccounts.find(account => {
        if (account.email == email && account.password == password) {
            return account;
        }
    });


    if (findAccounts) {
        const token = jwt.sign({ email: findAccounts.email }, jwtSecret);

        signInResult = {
            code: 200,
            message: 'success',
            token
        };

        return signInResult;


    } else {
        signInResult = {
            code: 400,
            message: 'failed'
        };
    }

};

export const autologin = async (token) => {
    let result;
    jwt.verify(token, jwtSecret, function (err, decoded) {
        if (err) {
            result = {
                code: 400,
                message: 'failed'
            };
        } else {
            result = {
                code: 200,
                message: 'success'
            };
        }
    });

    return result;
};

export const signOut = async () => {
    return {
        code: 200,
        message: 'success'
    };
};


