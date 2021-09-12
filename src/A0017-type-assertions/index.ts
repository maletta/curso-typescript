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

// dbUser é do tipo dbUser, não do tipo User
// receivedData é do tipo receivedData, não do tipo User
// porém dbUser e receivedData são aceitos como parâmetros do tipo User poque possuem a mesma estrutura
// isso é Structural Typing
// precisa ter ao menos os mesmos atributos de User (username: string, password: string);
// lingaugens fortemente tipadas não aceitam esse tipo de inferência de identidade dos tipos
const dbUser = { username: 'mauricio', password: '123456' };
const receivedData = { username: 'mauricio', password: '123456' };

const loggedIn = verifyUser(dbUser, receivedData);

console.log(loggedIn);

export default {
  verifyUser,
  dbUser,
  receivedData,
  loggedIn,
};
