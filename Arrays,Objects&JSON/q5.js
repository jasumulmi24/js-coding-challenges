const user ={
         id : 1,
         name : "Jasu",
        address : {
            city: "kathmandu"
        }
    }

   // shallow copy
   const shallowCopyUser = { ...user};
   shallowCopyUser.id = 2;
   shallowCopyUser.name = "Rita";
   shallowCopyUser.address.city = "lalitpur";
   console.log(user.id);
   console.log(user.name);
   console.log(user.address.city);

   //deep copy
   const user1 ={
         id : 1,
         name : "Jasu",
        address : {
            city: "kathmandu"
        }
    }
   const deepCopyUser = JSON.parse(JSON.stringify(user1));
   const structuredCopyUser = structuredClone(user1);

   deepCopyUser.id = 2;
   deepCopyUser.name = "Rita";
   deepCopyUser.address.city = "lalitpur";
   console.log(user1.id);
   console.log(user1.name);
   console.log(user1.address.city);

   structuredCopyUser.id = 3;
   structuredCopyUser.name = "Sita";
   structuredCopyUser.address.city = "janakpur";
   console.log(user1.id);
   console.log(user1.name);
   console.log(user1.address.city);