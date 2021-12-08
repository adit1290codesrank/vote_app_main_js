serverUrl = "https://df70hwbhv5pd.usemoralis.com:2053/server"
appId =  "DuikVdKnT2MbJb1q6wV8E8zm37EQH1WninuG1AJz" 
Moralis.start({ serverUrl, appId});

async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  
  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
  }
  
  document.getElementById("login_button").onclick = login;