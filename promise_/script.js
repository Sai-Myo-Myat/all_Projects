/*
login();
getUserFriends();
getUserPhotos();
fatchData();
makingHomeFeed();
*/

const login = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("loging In..");
        },1000);
    })
}

const getUserFriends = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(" user Friends")
        },2000)
    })
}

const getUserPhotos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("user's photos");
        },3000);
    })
}

const fatchData  = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve("All data are fatched;");
        },2000)
    })
}

const makingHomeFeed = (data) => {
    setTimeout(() => {
        console.log("making home feed with all:", data)
    },1000);
}

//promise chining
login().then((loginData) => {
    console.log(loginData);
    return getUserFriends()
})
.then((userFriends) => {
    console.log("these are user's friends:",userFriends);
    return getUserPhotos();
})
.then((userPhotos) => {
    console.log("these are user's phptos:",userPhotos)
    return fatchData();
})
.then((fatchedData) => {
    console.log("these are fatched data:",fatchedData);
    makingHomeFeed(fatchedData)
})
.catch((error) => {
    console.log("happen error:",error);
});


/*
login().then((loginData) => {
    console.log(loginData);
    getUserFriends().then((userFriends) => {
        console.log("these are user's friends:",userFriends);
        getUserPhotos().then((userPhotos) => {
            console.log("these are user's photos:" , userPhotos);
            fatchData().then((allData)=> {
                console.log("these are all Data:", allData);
                makingHomeFeed(allData);
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
        })
    }).catch((errror) => {
        console.log("happen error when getting user's friends");
    })
}).catch((error) => {
    console.log("inside error is:", error);
}) */
