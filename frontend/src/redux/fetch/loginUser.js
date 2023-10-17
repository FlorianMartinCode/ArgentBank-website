// export const loginUser = (formData) => async (dispatch) => {
//   try {
//     const response = await fetch("http://localhost:3001/api/v1/user/login", {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       const token = data.body.token;
//       dispatch({ type: "LOGIN_SUCCESS", payload: token });
//       return response;
//     } else {
//       throw new Error("Error user not found !");
//     }
//   } catch (error) {
//     dispatch({ type: "LOGIN_FAILURE", payload: error.message });
//   }
// };