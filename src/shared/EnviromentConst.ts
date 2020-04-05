require("dotenv").config();
export default class EnviromentConst {
    public static get Domain() {
        return {
            API_SSO: process.env.REACT_APP_API_SSO,
            API_VISIT: process.env.REACT_APP_API_VISIT,
            DOMAIN_PROFILE: process.env.REACT_APP_DOMAIN_PROFILE,
            CLIENT_DOMAIN: process.env.REACT_APP_CLIENT_DOMAIN,
            CLIENT_ADDRESS: process.env.REACT_APP_CLIENT_ADDRESS,
            CLIENT_SALESFORCE: process.env.REACT_APP_CLIENT_SALESFORCE,
            CLIENT_PROFILE: process.env.REACT_APP_CLIENT_PROFILE,
            DOMAIN_ORGANIZATION: process.env.REACT_APP_DOMAIN_ORGANIZATION,
            DOMAIN_SOCKET: process.env.REACT_APP_CLIENT_SOCKET,
            DOMAIN_WEB: process.env.REACT_APP_DOMAIN_WEB
        }
    }
}