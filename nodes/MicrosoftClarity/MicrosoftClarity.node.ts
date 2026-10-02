import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from "n8n-workflow";

// Generated with ts-morph
export class MicrosoftClarity implements INodeType {
  description: INodeTypeDescription = {
        displayName: "Microsoft Clarity",
        name: "microsoftClarity",
        icon: {
            light: "file:microsoftClarity.svg",
            dark: "file:microsoftClarity.dark.svg"
        },
        group: [],
        version: [
            1
        ],
        subtitle: "={{((JSON.parse(\"\\u007b\\\"exportData\\\":\\u007b\\\"getProjectLiveInsights\\\":\\\"getProjectDashboardInsights: exportData\\\"\\u007d\\u007d\"))[$parameter[\"resource\"]] || {})[$parameter[\"operation\"]] || ($parameter[\"operation\"] + \": \" + $parameter[\"resource\"])}}",
        description: "Microsoft Clarity analyzes how people use websites and apps with session recordings, heatmaps, and behavior insights.",
        documentationUrl: "https://learn.microsoft.com/en-us/clarity/",
        defaults: {
            name: "Microsoft Clarity"
        },
        usableAsTool: true,
        inputs: [
            NodeConnectionTypes.Main
        ],
        outputs: [
            NodeConnectionTypes.Main
        ],
        credentials: [
            {
                name: "microsoftClarityApi",
                required: true
            }
        ],
        requestDefaults: {
            baseURL: "https://www.clarity.ms",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        },
        properties: [
            {
                displayName: "Resource",
                name: "resource",
                type: "options",
                noDataExpression: true,
                default: "exportData",
                options: [
                    {
                        name: "Export Data",
                        value: "exportData"
                    }
                ]
            },
            {
                displayName: "Operation",
                name: "operation",
                type: "options",
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: [
                            "exportData"
                        ]
                    }
                },
                default: "getProjectLiveInsights",
                options: [
                    {
                        name: "Get Project Dashboard Insights",
                        value: "getProjectLiveInsights",
                        action: "Get project dashboard insights export data",
                        description: "Returns clarity dashboard metrics for the past 1\u20133 days, optionally grouped by up to three dimensions. includes traffic, engagement, scroll, click, and script-error metrics. export data.",
                        routing: {
                            request: {
                                method: "GET",
                                url: "=/export-data/api/v1/project-live-insights"
                            }
                        }
                    }
                ]
            },
            {
                displayName: "Num Of Days",
                name: "numOfDays",
                type: "options",
                default: 1,
                required: true,
                description: "Trailing days to export: 1 (24 hours), 2 (48 hours), or 3 (72 hours)",
                options: [
                    {
                        name: "1",
                        value: 1
                    },
                    {
                        name: "2",
                        value: 2
                    },
                    {
                        name: "3",
                        value: 3
                    }
                ],
                displayOptions: {
                    show: {
                        resource: [
                            "exportData"
                        ],
                        operation: [
                            "getProjectLiveInsights"
                        ]
                    }
                },
                routing: {
                    send: {
                        type: "query",
                        property: "numOfDays"
                    }
                }
            },
            {
                displayName: "Additional Fields",
                name: "additionalFields",
                type: "collection",
                placeholder: "Add Field",
                default: {},
                displayOptions: {
                    show: {
                        resource: [
                            "exportData"
                        ],
                        operation: [
                            "getProjectLiveInsights"
                        ]
                    }
                },
                options: [
                    {
                        displayName: "Dimension1",
                        name: "dimension1",
                        type: "string",
                        default: "",
                        description: "Primary grouping dimension: browser, device, country/region, os, source, medium, campaign, channel, or URL",
                        routing: {
                            send: {
                                type: "query",
                                property: "dimension1"
                            }
                        }
                    },
                    {
                        displayName: "Dimension2",
                        name: "dimension2",
                        type: "string",
                        default: "",
                        description: "Optional second grouping dimension; uses the same values as dimension1",
                        routing: {
                            send: {
                                type: "query",
                                property: "dimension2"
                            }
                        }
                    },
                    {
                        displayName: "Dimension3",
                        name: "dimension3",
                        type: "string",
                        default: "",
                        description: "Optional third grouping dimension; uses the same values as dimension1. up to three dimensions are supported.",
                        routing: {
                            send: {
                                type: "query",
                                property: "dimension3"
                            }
                        }
                    }
                ]
            }
        ]
    };
}
