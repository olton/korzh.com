export default [
    {
        label: "Start Here",
        items: [
            {label: "Introduction", link: "intro"},
            {label: "Web Service API", link: "web-service-api"},
            {label: "Changelog", link: "changelog"},
        ]
    },
    {
        label: "Tutorial",
        link: "tutorial/index",
        items: [
            {label: "Replacing default Calendar widget with KendoDatePicker", link: "tutorial/replacing-datepicker-widget"},
            {label: "How to add a token to EasyQuery HTTP requests", link: "tutorial/how-to-add-token-to-easyquery-http-requests"},
        ]
    },
    {
        label: "API Reference",
        link: "api-reference",
        items: [
            {
                label: "@easydata/core",
                items: [
                    {label: "i18n", items: []},
                    {label: "utils", items: []},
                    {label: "Enumerations", items: []},
                    {label: "Interfaces", items: []},
                    {label: "Classes", items: []},
                    {label: "Functions", link: "api-reference/easydata-core/functions"},
                ]
            },
            {label: "@easydata/ui", items: []},
            {label: "@easyquery/core", items: []},
            {label: "@easyquery/enterprise", items: []},
            {label: "@easyquery/locales", items: []},
            {label: "@easyquery/ui", items: []},
            {label: "@easyquery/odata", items: []},
        ]
    },
]