declare const { Moralis }: typeof import("moralis");

import { validation_isUserAuthenticated } from "../validations/validations";

Moralis.Cloud.define("GetMe", async (request) => {
    const UserData = Moralis.Object.extend("UserData");
    const UserDataQuery = new Moralis.Query(UserData);
    UserDataQuery.equalTo("user", request.user);
    const results = await UserDataQuery.find();
    const userData = {
        ...results[0].toJSON(),
    }
    return userData;
},
    //@ts-ignore 
    validation_isUserAuthenticated,
);

export default Moralis;