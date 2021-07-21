/*
    Creación de las acciones que podrá realizar el estado global User
    Las acciones estan declaradas como string en 'types.js' 
*/
export default (state, action) => {
  const { payload, type } = action;
  // console.log("payload", payload);
  switch (type) {
    case "SET_USER":
      return {
        user: payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
