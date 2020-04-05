
export default class Network {
    public static async GetJsonAsync(url: string, parameter: any, header: Headers = new Headers()): Promise<{ ok: boolean, status: number, data: any }> {
        header.append("Content-Type", "application/json")

        let params = new URLSearchParams(parameter);
        let response = await fetch(`${url}?${params.toString()}`, {
            method: "GET",
            headers: header,

        });
        if (response.ok) {
            if (response.status === 204) {
                return { data: undefined, status: response.status, ok: response.ok };
            }
            else {
                let data = await response.json();
                return { data, status: response.status, ok: response.ok };
            }
        }
        else {
            let data;
            try {
                data = await response.json();
            } catch (error) {
                data = await response.text()
            }
            return { data, status: response.status, ok: response.ok };
        }
    }
    public static async PostJsonAsync(url: string, body: any, header: Headers = new Headers()): Promise<{ ok: boolean, status: number, data: any }> {
        header.append("Content-Type", "application/json")
        let response = await fetch(url, {
            method: "POST",
            headers: header,
            body: JSON.stringify(body)
        });
        if (response.ok) {
            if (response.status === 204) {
                return { data: undefined, status: response.status, ok: response.ok };
            }
            else {
                let data = await response.json();
                return { data, status: response.status, ok: response.ok };
            }
        }
        else {
            let data;
            try {
                data = await response.json();
            } catch (error) {
                data = await response.text()
            }
            return { data, status: response.status, ok: response.ok };
        }
    }
    public static async PutJsonAsync(url: string, body: any, header: Headers = new Headers()): Promise<{ ok: boolean, status: number, data: any }> {
        header.append("Content-Type", "application/json")
        let response = await fetch(url, {
            method: "PUT",
            headers: header,
            body: JSON.stringify(body)
        });
        if (response.ok) {
            if (response.status === 204) {
                return { data: undefined, status: response.status, ok: response.ok };
            }
            else {
                let data = await response.json();
                return { data, status: response.status, ok: response.ok };
            }
        }
        else {
            let data;
            try {
                data = await response.json();
            } catch (error) {
                data = await response.text()
            }
            return { data, status: response.status, ok: response.ok };
        }
    }

    public static async GetJsonAuthenticationAsync(url: string, parameter: {} = {}, header: Headers = new Headers()): Promise<{ ok: boolean, status: number, data: any }> {
        let token = localStorage.getItem("access_token");
        header.append("Authorization", "Bearer " + token)
        let response = await this.GetJsonAsync(url, parameter, header);
        return response;
    }
    public static async PostJsonAuthenticationAsync(url: string, body: any, header: Headers = new Headers()): Promise<{ ok: boolean, status: number, data: any }> {
        let token = localStorage.getItem("access_token");
        header.append("Authorization", "Bearer " + token)
        let response = await this.PostJsonAsync(url, body, header);
        return response;
    }
    public static async PutJsonAuthenticationAsync(url: string, body: any, header: Headers = new Headers()): Promise<{ ok: boolean, status: number, data: any }> {
        let token = localStorage.getItem("access_token");
        header.append("Authorization", "Bearer " + token)
        let response = await this.PutJsonAsync(url, body, header);
        return response;
    }

}