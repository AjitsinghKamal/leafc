/* eslint-disable */
module.exports = {
	preset: "ts-jest/presets/default",
	collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
	testPathIgnorePatterns: ["/node_modules/", "/.next/"],
	transform: {
		".+\\.ts[x]$": "ts-jest",
	},
	transformIgnorePatterns: [
		"/node_modules/",
		"^.+\\.module\\.(css|sass|scss)$",
	],
	moduleNameMapper: {
		"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
	},
	testEnvironment: "jsdom",
};
