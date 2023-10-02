import { ActionFunctionArgs } from "react-router-dom";
import JsonServerUser from "../services/JsonServerUser";

export const actionUser= async ({request}) => {
    console.log(` Dans actionUser de user`);
    const formData = await request.formData();
    // const article_title = formData.get("article_title");
    console.log('form', formData);
    await JsonServerUser.LoadLogin();
    return null;
};