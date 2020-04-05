import Network from "../../utils/networks/Network";
import EnviromentConst from "../../shared/EnviromentConst";

export default class ProfileNetwork {
    public static async  GetUserByProfileIdAsync(id: number) {
        let relations = 'identifications,organizations';
        let response = await Network.GetJsonAuthenticationAsync(`${EnviromentConst.Domain.DOMAIN_PROFILE}/profiles`, {
            f_userProfileId: id,
            relations
        });
        return response;
    }

    public static async  GetProfileByIdAsync(id: number) {
        let relations = 'identifications,organizations,parentUserManage,parentUserReferral';
        let response = await Network.GetJsonAuthenticationAsync(`${EnviromentConst.Domain.DOMAIN_PROFILE}/profiles/${id}`, {
            relations
        });
        return response;
    }
} 