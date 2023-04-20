import useFetch from "../hooks/useFetch";

export default function loginValidation(email, password) {
  const userUrl = "https://fakestoreapi.com/users?limit=5";
  const { data } = useFetch(userUrl);
  const currentUser = data.filter(
    (user) => user.email === email && user.password === password
  );

  // if (currentUser === []) {
  //   return "Wrong password or email address";
  // } else {
  //   return currentUser;
  // }
}
