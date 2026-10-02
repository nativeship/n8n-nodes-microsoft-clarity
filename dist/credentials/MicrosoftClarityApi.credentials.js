"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicrosoftClarityApi = void 0;
class MicrosoftClarityApi {
    constructor() {
        this.name = "microsoftClarityApi";
        this.displayName = "Microsoft Clarity API";
        this.documentationUrl = "https://learn.microsoft.com/en-us/clarity/";
        this.icon = {
            light: "file:../nodes/MicrosoftClarity/microsoftClarity.svg",
            dark: "file:../nodes/MicrosoftClarity/microsoftClarity.dark.svg"
        };
        this.properties = [
            {
                displayName: "Access Token",
                name: "secret",
                type: "string",
                typeOptions: {
                    password: true
                },
                default: "",
                required: true
            }
        ];
        this.authenticate = {
            type: "generic",
            properties: {
                headers: {
                    Authorization: "=Bearer {{$credentials.secret}}"
                }
            }
        };
        this.test = {
            request: {
                baseURL: "https://www.clarity.ms",
                url: "/export-data/api/v1/project-live-insights"
            }
        };
    }
}
exports.MicrosoftClarityApi = MicrosoftClarityApi;
//# sourceMappingURL=MicrosoftClarityApi.credentials.js.map