
// export const actions = {
//     // login: async ({ request }) => {
//     //     // TODO log the user in
//     //     const data = await request.formData();
//     //     let email = data.get("email");
//     //     let password = data.get("password")


//     //     try {
//     //         const req = { email, password };
//     //         const res = await fetch(`${baseUrl}/auth`, {
//     //             method: "POST",
//     //             headers: {
//     //                 "Content-Type": "application/json",
//     //             },
//     //             body: JSON.stringify(req),
//     //             credentials: "include",
//     //         });
//     //         const data = await res.json();

//     //         if (res.status === 200) {
//     //             AuthStore.set(data);
//     //             goto("/");
//     //             localStorage.setItem("accToken", data.accToken);
//     //             localStorage.setItem("refToken", data.refToken);

//     //         }
//     //     } catch (error) {
//     //         console.warn("onSubmitLogin[error]: ", error);
//     //     }
//     // },
//     register: async (event) => {
//         // TODO register the user
//     }
// };