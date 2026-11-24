const { spawnSync } = require("child_process");

const env = { ...process.env };
const opensslMajor = Number(process.versions.openssl.split(".")[0]);

if (opensslMajor >= 3) {
    // CRA 3 uses Webpack 4, which needs this provider on OpenSSL 3.
    env.NODE_OPTIONS = [env.NODE_OPTIONS, "--openssl-legacy-provider"]
        .filter(Boolean)
        .join(" ");
}

const result = spawnSync(
    process.execPath,
    [require.resolve("react-scripts/bin/react-scripts.js"), ...process.argv.slice(2)],
    { env, stdio: "inherit" }
);

if (result.error) console.error(result.error.message);
process.exitCode = result.status === null ? 1 : result.status;
