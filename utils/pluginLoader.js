import fs from "fs";
import path from "path";

export const loadPlugins = () => {
    const pluginsDir = path.resolve("plugins");
    const pluginFiles = fs.readdirSync(pluginsDir);
    const plugins = pluginFiles.map((file) => require(path.join(pluginsDir, file)));
    return plugins;
};
