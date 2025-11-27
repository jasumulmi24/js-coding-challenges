function getCity(user){
 console.log(user?.address?.current?.city || "unknown");
}

const user = {
    address : {
        current : {
            city : "kathmandu"
        }
    }
}

getCity(user);