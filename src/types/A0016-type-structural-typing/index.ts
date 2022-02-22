type User = {
  username: string;
  password: string;
};

type VerifyUserFn = (user: User, receivedValue: User) => boolean;

const verifyUser: VerifyUserFn = (user, receivedValue) => {
  return (
    user.username === receivedValue.username &&
    user.password === receivedValue.password
  );
};

// dbUser é do tipo dbUser, não do tipo User = type literals
// receivedData é do tipo receivedData, não do tipo User  = type literals
// porém dbUser e receivedData são aceitos como parâmetros do tipo User porque
// possuem a mesma estrutura
// isso é Structural Typing
// precisa ter ao menos os mesmos atributos de User (username: string, password: string);
// linguagens fortemente tipadas não aceitam esse tipo de inferência de identidade dos tipos
const dbUser = { username: 'mauricio', password: '123456', token: 1234 };
const receivedData = { username: 'mauricio', password: '123456' };

const loggedIn = verifyUser(dbUser, receivedData);

console.log(loggedIn);

export default {
  verifyUser,
  dbUser,
  receivedData,
  loggedIn,
};
