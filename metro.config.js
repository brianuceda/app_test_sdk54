const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

console.log("Loading metro config...");

const config = getDefaultConfig(__dirname);

console.log("Base config loaded");
console.log("Config:", JSON.stringify(config, null, 2));

const finalConfig = withNativeWind(config, { 
  input: path.resolve(__dirname, "./global.css") 
});

console.log("NativeWind config applied");

module.exports = finalConfig;