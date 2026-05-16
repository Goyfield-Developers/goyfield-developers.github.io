import("./encrypted/init.js")
    .then(({ initializeApp }) => {
        return initializeApp();
    })
    .catch((error) => {
        console.error("error: failed to load fragments", error);
    });

    //test