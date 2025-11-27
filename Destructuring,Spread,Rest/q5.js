// Given a nested object, safely access user.profile.avatar.url using optional chaining,
// and fall back to "No Avatar" using nullish coalescing

const user = {
    id: 1,
    profile : {
        avatar :{
            url : null
        }
    }
}
console.log(user?.profile?.avatar?.url ?? "No Avatar")