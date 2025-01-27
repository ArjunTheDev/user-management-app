// userManagementApp.use((req, res, next) => {
//     const userToken = req.headers.authorization;

//     if(userToken === "secretToken07") {
//         next();
//     } else {
//         res.status(401).send({
//             error: "Unauthorized Access.."
//         })
//     }

// });

// const adminMiddleware = (req, res, next) => {
//     const userRole = req.headers.role;

//     if(userRole === "admin")  {
//         next();
//     } else {
//         res.status(403).send({
//             error: "Forbidden Access.."
//         })
//     }
// };

// const userList = [{
//     name: "Arjun",
//     age: 30
// }, {
//     name: "Arun",
//     age: 25
// }]; //Simuilated



// userManagementApp.post("/users", (req, res) => {
//     const userData = req.body;
//     userList.push(userData);

//     res.status(201).json({message: "User Created Successfully.."});
// });

// userManagementApp.get("/users", adminMiddleware, (req, res) => {
//     res.status(200).json({userList: userList});
// });

// userManagementApp.get("/userList", (req, res) => {
//     resq.status(200).json({userList: userList});
// });

// userManagementApp.put("/users/:name", (req, res) => {
//     const userObj = userList.find((user) => user.name === req.params.name);

//     if(userObj) { //Arjun
//         userObj.age = Number(req.query.age); // New age
//         res.status(200).json({message: "User Updated.."});
//     } else { //dummy
//         res.status(404).send("User not found.. :(");
//     }
// });

// userManagementApp.use((err, req, res, next) => {
//     console.error(err.stack);

//     res.status(500).send("Something went wrong.."+ err.stack) ;
// });