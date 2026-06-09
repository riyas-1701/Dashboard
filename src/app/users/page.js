// "use client";

// import { useEffect, useState } from "react";

// export default function Home() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         // const response = await fetch("https://dummyjson.com/users");
//         const data = await response.json();

//         setUsers(data.users);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="container">
//       <h1>User Lists</h1>

//       <div className="flex flex-wrap gap-6 bg-black justify-center">
//         {users.map((user) => (
//           <div key={user.id} className="w-85 bg-white text-black rounded-lg shadow-lg p-4 border">
//             <h3>
//               {user.firstName} {user.lastName}
//             </h3>
//             <p>Email: {user.email}</p>
//             <p>Gender: {user.gender}</p>
//             <p>Phone: {user.phone}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }