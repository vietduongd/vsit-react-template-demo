import Network from "../../utils/networks/Network";
import EnviromentConst from "../../shared/EnviromentConst";

export default class AuthorizeNetwork {
    public static async CreateUrlRedirectAsync(appName: string) {
        let response = await Network.PostJsonAsync(`${EnviromentConst.Domain.DOMAIN_PROFILE}/sso/url-redirect`, { appName })
        return response;
    }
    public static async ConnectCodeGetTokenAsync(code: string) {
        let response = await Network.PostJsonAsync(`${EnviromentConst.Domain.DOMAIN_PROFILE}/sso/auth/connect-token`, {
            appName: "salesforce",
            code: code
          });
        return response;
    }

    public static async CheckPermission(params: any){
        let query = {
            relations : "accessPermissionsOfMobile,accessPermissionsOfWeb",
            ...params
        }
        let response = await Network.GetJsonAuthenticationAsync(`${EnviromentConst.Domain.CLIENT_SALESFORCE}permissions`, query);
        return response;
    }
    
    public static async ConnetTokenGetUserInfor(){
        let response = await Network.GetJsonAuthenticationAsync(`${EnviromentConst.Domain.API_SSO}connect/userinfo`);
        return response;
    }
}