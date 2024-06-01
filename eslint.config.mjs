import globals from "globals";
import pluginJs from "@eslint/js";


export default [
    // Configuration for all JavaScript files
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.browser
            }
        },
        rules: {
            // Specify your rules here. Example:
            "no-console": "off",
            "indent": ["error", 2],
            "linebreak-style": ["error", "unix"],
            "quotes": ["error", "double"],
            "semi": ["error", "always"]
        }
    },
    // Browser-specific settings
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: globals.browser
        },
        rules: {
            // Additional browser-specific rules, if any
        }
    },
    // Apply recommended settings from the plugin
    pluginJs.configs.recommended
];